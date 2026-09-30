const state={lesson:'tangente'};

function injectGGB(id, filename){
  const el=document.getElementById(id);
  if(!el || typeof GGBApplet==='undefined') return;
  el.innerHTML='';
  const params={appName:'classic',width:'100%',height:'560',showToolBar:true,showAlgebraInput:false,showMenuBar:false,showResetIcon:true,enableLabelDrags:true,enableRightClick:false,allowStyleBar:true,showFullscreenButton:true,filename};
  const applet=new GGBApplet(params,true);
  applet.inject(id);
}
function bootGGB(){
  if(typeof GGBApplet==='undefined'){setTimeout(bootGGB,400);return}
  injectGGB('ggb-tangente','simulacoes/planoTangente.ggb');
  injectGGB('ggb-nivel','simulacoes/curvaNivelParaboloide.ggb');
}

function showLesson(name){
 state.lesson=name;
 document.querySelectorAll('.lesson').forEach(x=>x.classList.toggle('active',x.id===`lesson-${name}`));
 document.querySelectorAll('.lesson-tab').forEach(x=>x.classList.toggle('active',x.dataset.lesson===name));
 document.querySelectorAll('.lab-item').forEach(x=>x.classList.toggle('active',x.dataset.lab===name));
 document.getElementById('aulas').scrollIntoView({behavior:'smooth',block:'start'});
}
document.querySelectorAll('.lesson-tab,.topic-open').forEach(btn=>btn.addEventListener('click',()=>showLesson(btn.dataset.lesson||btn.dataset.topic)));
document.querySelectorAll('.lab-item').forEach(btn=>btn.addEventListener('click',()=>{showLesson(btn.dataset.lab);document.getElementById('aulas').scrollIntoView({behavior:'smooth'});}));

document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('cv-dark',document.body.classList.contains('dark'));});
if(localStorage.getItem('cv-dark')==='true') document.body.classList.add('dark');

document.querySelectorAll('.check').forEach(btn=>btn.addEventListener('click',()=>{
 const q=btn.dataset.q, chosen=document.querySelector(`input[name="${q}"]:checked`), feedback=document.getElementById(`feedback-${q}`), card=btn.closest('.quiz');
 if(!chosen){feedback.textContent='Escolha uma alternativa primeiro.';feedback.className='feedback no';return}
 const ok=chosen.value===card.dataset.answer; feedback.textContent=ok?'✓ Correto. Você conectou a observação visual ao conceito matemático.':'Ainda não. Volte à simulação e tente relacionar o controle à definição matemática.'; feedback.className='feedback '+(ok?'ok':'no');
}));

document.querySelectorAll('.fullscreen-btn').forEach(btn=>btn.addEventListener('click',()=>{const el=document.getElementById(btn.dataset.target);if(!document.fullscreenElement) el.requestFullscreen?.();else document.exitFullscreen?.();}));

bootGGB();
