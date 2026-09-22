(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // ---------- Tema ----------
  const savedTheme = localStorage.getItem("cv2-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  $("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("cv2-theme", document.body.classList.contains("dark") ? "dark" : "light");
    drawAll();
  });

  // ---------- Menu mobile ----------
  $("#menu-toggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $$(".nav-link").forEach(link => link.addEventListener("click", () => $("#sidebar").classList.remove("open")));

  // ---------- Busca ----------
  $("#module-search").addEventListener("input", e => {
    const q = e.target.value.toLowerCase().trim();
    let visible = 0;
    $$(".module-card").forEach(card => {
      const show = !q || card.dataset.title.includes(q);
      card.style.display = show ? "" : "flex";
      if (show) visible++;
    });
    $("#empty-search").hidden = visible !== 0;
  });

  // ---------- Progresso ----------
  const state = JSON.parse(localStorage.getItem("cv2-progress") || "{}");
  const updateProgress = () => {
    const total = 5;
    const done = Object.values(state).filter(Boolean).length;
    const pct = Math.round(done / total * 100);
    $("#progress-percent").textContent = `${pct}%`;
    $("#progress-bar").style.width = `${pct}%`;
    $("#progress-label").textContent = done === 0 ? "Comece pelo primeiro módulo." : `${done} de ${total} módulos explorados.`;
    $$(".module-start").forEach(btn => {
      if (state[btn.dataset.complete]) {
        btn.textContent = "Concluído ✓";
        btn.style.color = "var(--accent)";
      }
    });
  };
  $$(".module-start").forEach(btn => btn.addEventListener("click", () => {
    state[btn.dataset.complete] = true;
    localStorage.setItem("cv2-progress", JSON.stringify(state));
    updateProgress();
    document.querySelector("#laboratorio").scrollIntoView({behavior:"smooth"});
  }));
  updateProgress();

  // ---------- Tabs do laboratório ----------
  $$(".lab-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".lab-tab").forEach(t => t.classList.remove("active"));
      $$(".lab-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      $(`#lab-${tab.dataset.lab}`).classList.add("active");
      drawAll();
    });
  });

  // ---------- Canvas helpers ----------
  const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  function setupCanvas(canvas) {
    const cssWidth = canvas.clientWidth || canvas.width;
    const cssHeight = cssWidth * (canvas.height / canvas.width);
    canvas.width = Math.round(cssWidth * DPR);
    canvas.height = Math.round(cssHeight * DPR);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(DPR,0,0,DPR,0,0);
    return {ctx, w:cssWidth, h:cssHeight};
  }
  function clear(ctx,w,h) {
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = document.body.classList.contains("dark") ? "#101925" : "#fbfcfe";
    ctx.fillRect(0,0,w,h);
  }
  function graphTransform(w,h,xmin,xmax,ymin,ymax) {
    const pad = {l:45,r:22,t:22,b:38};
    return {
      X: x => pad.l + (x-xmin)/(xmax-xmin)*(w-pad.l-pad.r),
      Y: y => h-pad.b - (y-ymin)/(ymax-ymin)*(h-pad.t-pad.b),
      pad
    };
  }
  function axes(ctx,w,h,tr,xmin,xmax,ymin,ymax) {
    const dark = document.body.classList.contains("dark");
    ctx.strokeStyle = dark ? "#334155" : "#d7dee8";
    ctx.lineWidth = 1;
    for(let x=Math.ceil(xmin); x<=xmax; x++){
      ctx.beginPath(); ctx.moveTo(tr.X(x),tr.Y(ymin)); ctx.lineTo(tr.X(x),tr.Y(ymax)); ctx.stroke();
    }
    for(let y=Math.ceil(ymin); y<=ymax; y++){
      ctx.beginPath(); ctx.moveTo(tr.X(xmin),tr.Y(y)); ctx.lineTo(tr.X(xmax),tr.Y(y)); ctx.stroke();
    }
    ctx.strokeStyle = dark ? "#9aa8ba" : "#8491a3";
    ctx.lineWidth = 1.4;
    if (xmin <= 0 && xmax >= 0) {ctx.beginPath();ctx.moveTo(tr.X(0),tr.Y(ymin));ctx.lineTo(tr.X(0),tr.Y(ymax));ctx.stroke();}
    if (ymin <= 0 && ymax >= 0) {ctx.beginPath();ctx.moveTo(tr.X(xmin),tr.Y(0));ctx.lineTo(tr.X(xmax),tr.Y(0));ctx.stroke();}
  }
  function curve(ctx,tr,fn,xmin,xmax,step=0.02,style="#5b5ce2",width=3){
    ctx.strokeStyle=style;ctx.lineWidth=width;ctx.beginPath();
    let first=true;
    for(let x=xmin;x<=xmax;x+=step){
      const y=fn(x);
      if(!Number.isFinite(y)) {first=true;continue;}
      const px=tr.X(x),py=tr.Y(y);
      if(first){ctx.moveTo(px,py);first=false}else ctx.lineTo(px,py);
    }
    ctx.stroke();
  }
  function text(ctx, s, x, y, size=11, color="#657084", weight=600){
    ctx.fillStyle=color;ctx.font=`${weight} ${size}px "DM Sans", sans-serif`;ctx.fillText(s,x,y);
  }

  // ---------- Simulação de Riemann ----------
  const riemannCanvas = $("#riemann-canvas");
  const nSlider = $("#n-slider");
  function drawRiemann(){
    if (!riemannCanvas) return;
    const {ctx,w,h}=setupCanvas(riemannCanvas); clear(ctx,w,h);
    const tr=graphTransform(w,h,0,2.2,-0.4,4.6); axes(ctx,w,h,tr,0,2.2,-0.4,4.6);
    const n=+nSlider.value, dx=2/n;
    let sum=0;
    for(let i=0;i<n;i++){
      const x=i*dx;
      const y=x*x;
      sum+=y*dx;
      const x1=tr.X(x), x2=tr.X(x+dx), y0=tr.Y(0), yy=tr.Y(y);
      ctx.fillStyle="rgba(91,92,226,.18)";
      ctx.strokeStyle="rgba(91,92,226,.38)";
      ctx.lineWidth=1;
      ctx.fillRect(x1,yy,x2-x1,y0-yy);
      ctx.strokeRect(x1,yy,x2-x1,y0-yy);
    }
    curve(ctx,tr,x=>x*x,0,2.08,0.01,"#16b7a4",3);
    text(ctx,"f(x)=x²",tr.X(1.55),tr.Y(3.2),12,"#16b7a4",800);
    text(ctx,"0",tr.X(0)-4,tr.Y(0)+17);
    text(ctx,"2",tr.X(2)-4,tr.Y(0)+17);
    $("#n-value").textContent=n;
    $("#riemann-value").textContent=sum.toFixed(4);
    $("#riemann-error").textContent=Math.abs(8/3-sum).toFixed(4);
  }
  nSlider.addEventListener("input",drawRiemann);

  // ---------- Simulação de derivada ----------
  const derivativeCanvas=$("#derivative-canvas");
  const x0Slider=$("#x0-slider");
  function drawDerivative(){
    if(!derivativeCanvas)return;
    const {ctx,w,h}=setupCanvas(derivativeCanvas);clear(ctx,w,h);
    const tr=graphTransform(w,h,-2.5,2.5,-1,7);axes(ctx,w,h,tr,-2.5,2.5,-1,7);
    const x0=+x0Slider.value,y0=x0*x0,slope=2*x0;
    curve(ctx,tr,x=>x*x,-2.5,2.5,0.01,"#5b5ce2",3);
    const tx1=-2.5,tx2=2.5,ty1=y0+slope*(tx1-x0),ty2=y0+slope*(tx2-x0);
    ctx.strokeStyle="#e69b38";ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(tr.X(tx1),tr.Y(ty1));ctx.lineTo(tr.X(tx2),tr.Y(ty2));ctx.stroke();
    ctx.fillStyle="#dc5a67";ctx.beginPath();ctx.arc(tr.X(x0),tr.Y(y0),6,0,Math.PI*2);ctx.fill();
    text(ctx,`P(${x0.toFixed(2)}, ${y0.toFixed(2)})`,tr.X(x0)+10,tr.Y(y0)-10,11,"#dc5a67",800);
    text(ctx,`inclinação = ${slope.toFixed(2)}`,18,28,12,"#e69b38",800);
    $("#x0-value").textContent=x0.toFixed(2);
    $("#fx0-value").textContent=y0.toFixed(2);
    $("#slope-value").textContent=slope.toFixed(2);
  }
  x0Slider.addEventListener("input",drawDerivative);

  // ---------- Taylor ----------
  const taylorCanvas=$("#taylor-canvas");
  const termsSlider=$("#terms-slider");
  function factorial(n){let r=1;for(let i=2;i<=n;i++)r*=i;return r}
  function taylorPoly(x,n){let s=0;for(let k=0;k<n;k++)s+=Math.pow(x,k)/factorial(k);return s}
  function polynomialLabel(n){
    const parts=[];
    for(let k=0;k<n;k++){
      if(k===0)parts.push("1");
      else if(k===1)parts.push("x");
      else if(k===2)parts.push("x²/2");
      else if(k===3)parts.push("x³/6");
      else parts.push(`x^${k}/${factorial(k)}`);
    }
    return parts.join(" + ");
  }
  function drawTaylor(){
    if(!taylorCanvas)return;
    const {ctx,w,h}=setupCanvas(taylorCanvas);clear(ctx,w,h);
    const tr=graphTransform(w,h,-2.2,2.2,-1.2,9);axes(ctx,w,h,tr,-2.2,2.2,-1.2,9);
    const n=+termsSlider.value;
    curve(ctx,tr,x=>Math.exp(x),-2.2,2.2,0.01,"#16b7a4",3);
    curve(ctx,tr,x=>taylorPoly(x,n),-2.2,2.2,0.01,"#5b5ce2",2.5);
    text(ctx,"eˣ",tr.X(1.65),tr.Y(Math.exp(1.65))-7,12,"#16b7a4",800);
    text(ctx,`P${n-1}(x)`,tr.X(1.0),tr.Y(taylorPoly(1,n))+18,11,"#5b5ce2",800);
    $("#terms-value").textContent=n;
    $("#taylor-formula").textContent=polynomialLabel(n);
  }
  termsSlider.addEventListener("input",drawTaylor);

  // ---------- Hero ----------
  const heroCanvas=$("#hero-canvas");
  function drawHero(){
    if(!heroCanvas)return;
    const {ctx,w,h}=setupCanvas(heroCanvas);clear(ctx,w,h);
    const tr=graphTransform(w,h,-2.4,2.4,-1,6);axes(ctx,w,h,tr,-2.4,2.4,-1,6);
    curve(ctx,tr,x=>x*x,-2.4,2.4,0.01,"#7778f1",4);
    const time=Date.now()/1300;
    const x=1.25*Math.sin(time), y=x*x;
    ctx.fillStyle="#16b7a4";ctx.beginPath();ctx.arc(tr.X(x),tr.Y(y),6,0,Math.PI*2);ctx.fill();
  }

  function drawAll(){drawHero();drawRiemann();drawDerivative();drawTaylor();}
  function animation(){drawHero();requestAnimationFrame(animation)}
  animation();
  drawAll();
  window.addEventListener("resize", drawAll);

  // ---------- Exercícios ----------
  let score=0;
  const answered = new Set();
  $$(".exercise-card").forEach(card=>{
    $$(".answers button",card).forEach(btn=>{
      btn.addEventListener("click",()=>{
        if(answered.has(card)) return;
        answered.add(card);
        const correct=btn.dataset.choice===card.dataset.answer;
        btn.classList.add(correct?"correct":"wrong");
        if(correct){
          score++;
          $(".feedback",card).textContent="✓ Correto. Você identificou a ideia central.";
          $(".feedback",card).style.color="var(--accent)";
        }else{
          $(".feedback",card).textContent="Quase. Tente reconstruir o raciocínio antes de olhar a resposta.";
          $(".feedback",card).style.color="var(--danger)";
          const right=$(`button[data-choice="${card.dataset.answer}"]`,card);
          if(right) right.classList.add("correct");
        }
        $("#score").textContent=score;
      });
    });
  });

  // ---------- GeoGebra ----------
  let ggbApi = null;
  const ggbElement=$("#ggb-element");
  function loadGGB(concept="derivative"){
    ggbElement.innerHTML='<div class="ggb-loading"><div class="spinner"></div><span>Carregando GeoGebra…</span></div><div id="ggbApplet"></div>';
    const params={
      id:"ggbApplet",
      appName:"graphing",
      width:820,
      height:570,
      showToolBar:true,
      showAlgebraInput:true,
      showMenuBar:false,
      showZoomButtons:true,
      showResetIcon:true,
      enableLabelDrags:false,
      enableShiftDragZoom:true,
      language:"pt",
      appletOnLoad:function(api){
        ggbApi=api;
        $("#ggb-element .ggb-loading")?.remove();
        setGGBConcept(concept);
      }
    };
    const applet=new GGBApplet(params,true);
    applet.inject("ggbApplet");
  }
  function setGGBConcept(concept){
    if(!ggbApi)return;
    ggbApi.newConstruction();
    let commands="";
    if(concept==="derivative"){
      commands=[
        "f(x)=x^2",
        "x_0=1",
        "P=(x_0,f(x_0))",
        "t=Tangent(P,f)",
        "A=(x_0,0)",
        "Segment(A,P)"
      ].join("\n");
    }else if(concept==="integral"){
      commands=[
        "f(x)=x^2",
        "a=0",
        "b=2",
        "Integral(f,a,b)"
      ].join("\n");
    }else{
      commands=[
        "f(x)=exp(x)",
        "p(x)=1+x+x^2/2+x^3/6",
        "f_approx=p(x)"
      ].join("\n");
    }
    ggbApi.evalCommand(commands);
    try{ggbApi.setCoordSystem(-3,3,-1,8)}catch(e){}
  }
  $$(".ggb-actions [data-ggb]").forEach(btn=>{
    btn.addEventListener("click",()=>setGGBConcept(btn.dataset.ggb));
  });
  loadGGB("derivative");

  // ---------- Active section ----------
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id=entry.target.id;
        $$(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${id}`));
      }
    });
  },{rootMargin:"-40% 0px -50% 0px"});
  ["inicio","trilha","laboratorio","exercicios","sobre"].forEach(id=>{
    const el=document.getElementById(id); if(el)observer.observe(el);
  });
})();
