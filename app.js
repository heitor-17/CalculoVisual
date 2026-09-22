(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const courseProfile = {
    code: "MAT-201",
    title: "Cálculo Diferencial e Integral II",
    subtitle: "Sistema de ensino interativo orientado por visualização, raciocínio geométrico e aplicação.",
    workload: "60h",
    format: "Presencial + laboratório digital",
    level: "Graduação / Ensino superior",
    objectives: [
      "Interpretar integrais como acumulação de grandezas em intervalos.",
      "Conectar derivada, área e crescimento de funções por meio do teorema fundamental.",
      "Aplicar técnicas de integração em problemas reais de matemática e física.",
      "Usar séries e aproximações para modelar comportamento local de funções."
    ],
    competencies: [
      "Representação gráfica de funções e variações.",
      "Interpretação de área e acumulação.",
      "Modelagem e resolução de problemas aplicados.",
      "Avaliação da precisão por aproximações e limites."
    ]
  };

  const moduleData = [
    {
      id: "m1",
      title: "Integrais definidas",
      icon: "∫",
      lessons: 4,
      duration: "6h",
      difficulty: "Básico",
      summary: "Área, acumulação e soma de Riemann.",
      objective: "Entender que a integral definida mede a acumulação de uma grandeza ao longo de um intervalo e que a área sob a curva surge como limite de somas aproximadas.",
      competencies: ["Área sob a curva", "Limite de somas", "Interpretação geométrica"],
      resources: ["Soma de Riemann", "GeoGebra", "Exercícios guiados"],
      simulation: "Soma de Riemann",
      formula: "\\[\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^{n} f(x_i^*)\\Delta x\\]",
      keyIdeas: [
        "A soma de retângulos aproxima a área sob a curva.",
        "Quando o número de retângulos cresce, a aproximação melhora.",
        "A integral definida é o limite dessa soma.",
        "A área e a acumulação são interpretações equivalentes do mesmo conceito."
      ],
      studyPlan: [
        "Entenda a interpretação geométrica da área sob a curva.",
        "Visualize a soma de retângulos e perceba o efeito do aumento de n.",
        "Relacione a soma aproximada com o conceito de limite.",
        "Interprete a integral como quantidade total acumulada."
      ],
      practiceQuestions: [
        {
          question: "Qual é a interpretação principal da integral definida \\int_a^b f(x)\\,dx?",
          options: [
            "O valor médio da função no intervalo.",
            "A área acumulada ou total sob a curva entre a e b.",
            "A derivada da função em cada ponto do intervalo.",
            "A equação da reta tangente no ponto médio."
          ],
          answer: "A área acumulada ou total sob a curva entre a e b.",
          explanation: "A integral definida mede a acumulação total de uma grandeza entre os limites a e b, e no caso geométrico essa quantidade é a área sob a curva."
        },
        {
          question: "Se aumentarmos o número de retângulos na soma de Riemann, o que acontece com a aproximação?",
          options: [
            "A soma geralmente fica pior.",
            "A área aproximada se torna mais precisa.",
            "A função deixa de ser contínua.",
            "A altura dos retângulos aumenta sem limite."
          ],
          answer: "A área aproximada se torna mais precisa.",
          explanation: "Com mais retângulos, o intervalo é subdividido melhor e a soma dos retângulos se aproxima mais da área verdadeira."
        },
        {
          question: "Qual expressão representa corretamente a integral de x² de 0 a 2?",
          options: [
            "\\int_0^2 x^2 \\,dx = 2",
            "\\int_0^2 x^2 \\,dx = 8/3",
            "\\int_0^2 x^2 \\,dx = 4",
            "\\int_0^2 x^2 \\,dx = 3/2"
          ],
          answer: "\\int_0^2 x^2 \\,dx = 8/3",
          explanation: "A primitiva de x² é x³/3. Avaliando de 0 a 2 temos 8/3 - 0 = 8/3."
        }
      ],
      theme: "riemann"
    },
    {
      id: "m2",
      title: "Teorema Fundamental",
      icon: "↔",
      lessons: 3,
      duration: "5h",
      difficulty: "Intermediário",
      summary: "Conexão entre derivada e integral.",
      objective: "Relacionar a taxa de variação de uma função acumulada com a função original e interpretar a integral como uma operação inversa da derivada em um intervalo.",
      competencies: ["Função acumulada", "Taxa de variação", "Conexão entre operações"],
      resources: ["Derivada visual", "Área acumulada", "Problemas de interpretação"],
      simulation: "Derivada e área acumulada",
      formula: "\\[\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)\\]",
      keyIdeas: [
        "A integral acumulada guarda a história da variação.",
        "Sua derivada retorna a função original.",
        "A área sob a curva é uma medida de crescimento total.",
        "Derivação e integração são operações complementares."
      ],
      studyPlan: [
        "Interprete a função acumulada como uma área em crescimento.",
        "Observe que a inclinação dessa área muda conforme f(x).",
        "Relacione o comportamento local da derivada com a taxa de mudança total.",
        "Use o teorema para conectar área, crescimento e derivada."
      ],
      practiceQuestions: [
        {
          question: "O que o Teorema Fundamental do Cálculo afirma sobre a função A(x) = \\int_a^x f(t)\\,dt?",
          options: [
            "A'(x) = 0 para todo x.",
            "A'(x) = f(x).",
            "A'(x) = f'(x).",
            "A'(x) = a + x."
          ],
          answer: "A'(x) = f(x).",
          explanation: "A derivada da função área acumulada é exatamente a função integranda, mostrando que a taxa de variação da área é o valor da função em cada ponto."
        },
        {
          question: "Se f(x) = 2x, então qual é a derivada de \\int_0^x 2t\\,dt?",
          options: [
            "x",
            "2x",
            "x²",
            "2"
          ],
          answer: "2x",
          explanation: "Pelo Teorema Fundamental, a derivada da integral acumulada em x é exatamente f(x), que aqui é 2x."
        },
        {
          question: "Qual é a ideia central do teorema?",
          options: [
            "A integral sempre é menor que a derivada.",
            "A derivada da área acumulada reproduz o fenômeno local.",
            "A derivada cancela o efeito da função.",
            "A integral sempre é constante."
          ],
          answer: "A derivada da área acumulada reproduz o fenômeno local.",
          explanation: "A área acumulada cresce de acordo com f(x), então sua taxa de mudança local é justamente o valor da função naquele ponto."
        }
      ],
      theme: "derivative"
    },
    {
      id: "m3",
      title: "Técnicas de integração",
      icon: "∫·",
      lessons: 5,
      duration: "8h",
      difficulty: "Intermediário",
      summary: "Substituição, partes e padrões de resolução.",
      objective: "Reconhecer situações em que a integral pode ser reescrita em uma forma mais simples por substituição, decomposição ou integração por partes.",
      competencies: ["Substituição", "Integração por partes", "Reconhecimento de padrões"],
      resources: ["Padrões de integração", "Transformação de variáveis", "Checklist de estratégia"],
      simulation: "Visualização de padrão e transformação",
      formula: "\\[\\int u'\\,f(u)\\,dx = \\int f(u)\\,du\\]",
      keyIdeas: [
        "Substituição reorganiza a função para uma forma reconhecível.",
        "Integração por partes inverte a regra do produto.",
        "A regra correta depende do padrão da expressão.",
        "A visualização ajuda a escolher a estratégia adequada."
      ],
      studyPlan: [
        "Busque padrões: potências, funções compostas e produtos.",
        "Teste a substituição quando o argumento interno aparece como derivada.",
        "Use integração por partes quando houver produto de funções distintas.",
        "Compare a forma final com a expressão original para conferir o resultado."
      ],
      practiceQuestions: [
        {
          question: "Qual é a melhor estratégia para \\int 2x(x^2+1)^3 \\,dx?",
          options: [
            "Integração por partes.",
            "Substituição com u = x² + 1.",
            "Regra da potência direta sem mudança.",
            "Usar série de Taylor."
          ],
          answer: "Substituição com u = x² + 1.",
          explanation: "O termo x² + 1 aparece em composição com derivada 2x, então a substituição é natural e simplifica a integral."
        },
        {
          question: "Em que caso a integração por partes costuma ser útil?",
          options: [
            "Quando há produto de funções e uma parte é fácil de derivar e outra de integrar.",
            "Quando a função é sempre crescente.",
            "Quando a expressão é uma potência simples.",
            "Quando a função tem apenas um termo."
          ],
          answer: "Quando há produto de funções e uma parte é fácil de derivar e outra de integrar.",
          explanation: "A integração por partes vem da regra do produto e é útil quando não conseguimos simplificar por substituição simples."
        },
        {
          question: "Qual é o papel da substituição na integração?",
          options: [
            "Eliminar todos os termos da integral.",
            "Transformar uma expressão complicada em uma mais simples usando uma mudança de variável.",
            "Trocar o intervalo de integração.",
            "Derivar a função original."
          ],
          answer: "Transformar uma expressão complicada em uma mais simples usando uma mudança de variável.",
          explanation: "A substituição permite reduzir a expressão a uma integral mais reconhecível, preservando o valor da área ou da acumulação."
        }
      ],
      theme: "integral"
    },
    {
      id: "m4",
      title: "Aplicações de integrais",
      icon: "◫",
      lessons: 4,
      duration: "7h",
      difficulty: "Avançado",
      summary: "Áreas, volumes, trabalho e comprimento.",
      objective: "Aplicar integrais em problemas físicos e geométricos para medir área entre curvas, volume de sólidos, trabalho e outras grandezas acumuladas.",
      competencies: ["Volumes por seções", "Área entre curvas", "Grandezas físicas acumuladas"],
      resources: ["Área e volume", "Trabalho e energia", "Modelagem aplicada"],
      simulation: "GeoGebra: área e volume",
      formula: "\\[V = \\int_a^b A(x)\\,dx\\]",
      keyIdeas: [
        "Volumes são obtidos a partir de seções transversais.",
        "A área entre curvas mede diferença de duas grandezas.",
        "Trabalho e deslocamento são grandezas acumuladas.",
        "A integral transforma uma grandeza local em uma total."
      ],
      studyPlan: [
        "Identifique a grandeza que está sendo acumulada.",
        "Escolha a função que representa a área ou a densidade local.",
        "Estabeleça os limites do intervalo de integração.",
        "Relacione o resultado com o problema físico ou geométrico."
      ],
      practiceQuestions: [
        {
          question: "Se A(x) representa a área de uma seção transversal de um sólido, como se calcula o volume?",
          options: [
            "V = A(x) + a",
            "V = \\int_a^b A(x)\\,dx",
            "V = A'(x)",
            "V = \\frac{A(x)}{x}"
          ],
          answer: "V = \\int_a^b A(x)\\,dx",
          explanation: "O volume é obtido pela soma infinitesimal das áreas transversais ao longo do intervalo, isto é, pela integral da área."
        },
        {
          question: "Qual é a ideia de área entre curvas?",
          options: [
            "É a soma das raízes das funções.",
            "É a diferença entre duas funções integradas no intervalo.",
            "É o produto das derivadas.",
            "É a média dos valores das funções."
          ],
          answer: "É a diferença entre duas funções integradas no intervalo.",
          explanation: "A área entre curvas é obtida pela integral da diferença entre a função superior e a inferior dentro do intervalo."
        },
        {
          question: "Por que a integral aparece em problemas de trabalho?",
          options: [
            "Porque o trabalho é constante.",
            "Porque o trabalho é uma quantidade acumulada de força ao longo do deslocamento.",
            "Porque a derivada mede trabalho total.",
            "Porque as funções são lineares."
          ],
          answer: "Porque o trabalho é uma quantidade acumulada de força ao longo do deslocamento.",
          explanation: "Em muitas situações, a força varia com a posição; somando a contribuição infinitesimal em cada trecho, obtemos o trabalho total pela integral."
        }
      ],
      theme: "integral"
    },
    {
      id: "m5",
      title: "Sequências e séries",
      icon: "∞",
      lessons: 6,
      duration: "9h",
      difficulty: "Avançado",
      summary: "Convergência e aproximação por Taylor.",
      objective: "Compreender como sequências e séries aproximam funções e como a série de Taylor oferece uma boa representação local de uma função suave.",
      competencies: ["Convergência", "Séries de Taylor", "Aproximação funcional"],
      resources: ["Taylor visual", "Somas parciais", "Análise de erro"],
      simulation: "Aproximação por Taylor",
      formula: "\\[e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}\\]",
      keyIdeas: [
        "Uma série é soma infinita de termos.",
        "A convergência decide se a soma faz sentido.",
        "Taylor aproxima uma função por polinômios locais.",
        "O número de termos controla a precisão da aproximação."
      ],
      studyPlan: [
        "Observe o comportamento de uma sequência e da soma parcial.",
        "Entenda o significado de convergência e divergência.",
        "Compare a função original com seu polinômio de Taylor.",
        "Ajuste o número de termos para perceber a melhora da aproximação."
      ],
      practiceQuestions: [
        {
          question: "O que significa dizer que uma série converge?",
          options: [
            "Que todos os termos são iguais.",
            "Que a soma parcial tende a um valor finito.",
            "Que a série possui apenas um termo.",
            "Que a função original é sempre crescente."
          ],
          answer: "Que a soma parcial tende a um valor finito.",
          explanation: "Convergência quer dizer que, ao somarmos mais termos, a sequência de somas parciais se aproxima de um limite finito."
        },
        {
          question: "Qual é a ideia da série de Taylor?",
          options: [
            "Substituir a função por uma soma de termos lineares e quadráticos.",
            "Aproximar uma função suave por um polinômio próximo de um ponto.",
            "Calcular somente a derivada primeira.",
            "Transformar a função em uma sequência divergente."
          ],
          answer: "Aproximar uma função suave por um polinômio próximo de um ponto.",
          explanation: "Taylor utiliza derivadas em um ponto para construir um polinômio que reproduz o comportamento da função perto desse ponto."
        },
        {
          question: "Para e^x, a série de Taylor em x = 0 é:",
          options: [
            "1 + x + x²/2! + x³/3! + ...",
            "x + x² + x³ + ...",
            "1 + x²/2 + x⁴/4 + ...",
            "x²/2 + x³/3 + ..."
          ],
          answer: "1 + x + x²/2! + x³/3! + ...",
          explanation: "A série de e^x em torno de 0 é a soma de x^n / n!, começando em n = 0."
        }
      ],
      theme: "taylor"
    },
    {
      id: "m6",
      title: "Curvas de nível",
      icon: "◌",
      lessons: 4,
      duration: "6h",
      difficulty: "Intermediário",
      summary: "Funções de duas variáveis e mapas de contorno.",
      objective: "Entender que uma curva de nível é o conjunto de pontos do plano em que uma função de duas variáveis assume o mesmo valor constante, conectando visualização geométrica, interpretação física e análise de superfícies.",
      competencies: ["Funções de duas variáveis", "Mapas de contorno", "Interpretação geométrica"],
      resources: ["Mapas topográficos", "Superfícies em 3D", "Contornos e gradiente"],
      simulation: "Visualização de curvas de nível",
      formula: "\\[f(x,y)=c\\]",
      keyIdeas: [
        "Uma curva de nível reúne pontos com o mesmo valor da função.",
        "A densidade de curvas indica variação mais rápida da função.",
        "As curvas não se cruzam em regiões onde o campo é bem definido.",
        "O gradiente aponta na direção de maior crescimento da função."
      ],
      studyPlan: [
        "Interprete uma função de duas variáveis como uma superfície no espaço.",
        "Observe como os cortes horizontais produzem curvas em um plano.",
        "Relacione o valor c com o contorno da superfície.",
        "Use a forma das curvas para inferir crescimento, declive e pontos críticos."
      ],
      practiceQuestions: [
        {
          question: "O que é uma curva de nível de uma função f(x,y)?",
          options: [
            "É o conjunto de pontos em que f(x,y) = c, para um valor constante c.",
            "É a derivada parcial da função em relação a y.",
            "É a reta tangente ao gráfico da função.",
            "É a média dos valores de f no plano."
          ],
          answer: "É o conjunto de pontos em que f(x,y) = c, para um valor constante c.",
          explanation: "As curvas de nível são os contornos da superfície. Cada curva reúne todos os pontos que têm o mesmo valor da função."
        },
        {
          question: "Se f(x,y)=x^2+y^2, qual é a forma geométrica da curva de nível para c>0?",
          options: [
            "Uma reta",
            "Uma parábola",
            "Uma circunferência",
            "Uma hipérbole"
          ],
          answer: "Uma circunferência",
          explanation: "A equação x² + y² = c descreve uma circunferência centrada na origem e raio √c."
        },
        {
          question: "O que a proximidade entre curvas de nível indica?",
          options: [
            "Que a função é constante.",
            "Que a função muda mais rapidamente em uma região.",
            "Que o domínio da função é vazio.",
            "Que a função não depende de x e y."
          ],
          answer: "Que a função muda mais rapidamente em uma região.",
          explanation: "Quando as curvas de nível ficam próximas, o valor da função varia mais rapidamente em pouco espaço, indicando maior gradiente."
        }
      ],
      theme: "levelcurves"
    }
  ];

  const state = JSON.parse(localStorage.getItem("cv2-progress") || "{}");
  const page = document.body.dataset.page || "home";

  function setupSharedNavigation() {
    const navLinks = [...document.querySelectorAll(".nav-link")];
    const activePage = page === "home" ? "index" : page;
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menu-toggle");
    const themeToggle = document.getElementById("theme-toggle");

    navLinks.forEach((link) => {
      const href = (link.getAttribute("href") || "").replace(/\.html$/, "");
      const shouldBeActive = href === activePage || (activePage === "index" && href === "index");
      link.classList.toggle("active", shouldBeActive);
      link.addEventListener("click", () => {
        if (sidebar) sidebar.classList.remove("open");
      });
    });

    if (menuButton && sidebar) {
      menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
      });
    }

    if (themeToggle) {
      const applyTheme = (isDark) => {
        document.body.classList.toggle("dark", isDark);
        localStorage.setItem("cv2-theme", isDark ? "dark" : "light");
        if (typeof drawAll === "function") drawAll();
      };

      const savedTheme = localStorage.getItem("cv2-theme");
      if (savedTheme === "dark") applyTheme(true);

      themeToggle.addEventListener("click", () => {
        applyTheme(!document.body.classList.contains("dark"));
      });
    }
  }

  function syncProgressUI() {
    const progressPercent = document.getElementById("progress-percent");
    const progressBar = document.getElementById("progress-bar");
    const progressLabel = document.getElementById("progress-label");

    if (!progressPercent || !progressBar || !progressLabel) return;

    const total = moduleData.length;
    const done = Object.values(state).filter(Boolean).length;
    const pct = Math.round((done / total) * 100);

    progressPercent.textContent = `${pct}%`;
    progressBar.style.width = `${pct}%`;
    progressLabel.textContent = done === 0 ? "Comece pelo primeiro módulo." : `${done} de ${total} módulos explorados.`;
  }

  function normalizeMathText(value) {
    if (typeof value !== "string") return value;

    return value
      .replace(/\\left|\\right/g, "")
      .replace(/\\,|\\cdot|\\quad/g, " ")
      .replace(/\\\^/g, "^")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function renderMathText(value) {
    const text = String(value || "").trim();
    if (!text) return "";

    const formulaRegex = /(\\(?:int|sum)_[^\n]*?(?:dx|\\Delta x)|\\frac\{[^}]+\}\{[^}]+\}|x\^\d+|\\pi|\\theta|\\alpha|\\lim|\\infty|\\Delta)/g;
    if (!formulaRegex.test(text)) {
      return text;
    }

    return text.replace(formulaRegex, "\\\\($1\\\\)");
  }

  function renderCourseOverview() {
    const overview = document.getElementById("course-overview");
    if (!overview) return;

    overview.innerHTML = `
      <div class="course-summary">
        <div class="course-card course-identity">
          <span class="course-badge">${courseProfile.code}</span>
          <h2>${courseProfile.title}</h2>
          <p>${courseProfile.subtitle}</p>
        </div>
        <div class="course-grid">
          <div class="course-card">
            <span>Carga horária</span>
            <strong>${courseProfile.workload}</strong>
          </div>
          <div class="course-card">
            <span>Formato</span>
            <strong>${courseProfile.format}</strong>
          </div>
          <div class="course-card">
            <span>Nível</span>
            <strong>${courseProfile.level}</strong>
          </div>
          <div class="course-card">
            <span>Módulos</span>
            <strong>${moduleData.length}</strong>
          </div>
        </div>
      </div>
      <div class="course-objectives">
        <div class="course-panel">
          <h3>Objetivos da disciplina</h3>
          <ul>
            ${courseProfile.objectives.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="course-panel">
          <h3>Competências esperadas</h3>
          <ul>
            ${courseProfile.competencies.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  function activateLabTab(tabName) {
    const target = String(tabName || "riemann");
    const tab = document.querySelector(`[data-lab="${target}"]`);
    if (!tab) return;

    $$(".lab-tab").forEach((item) => item.classList.remove("active"));
    $$(".lab-panel").forEach((panel) => panel.classList.remove("active"));
    tab.classList.add("active");
    const panel = document.getElementById(`lab-${target}`);
    if (panel) panel.classList.add("active");
  }

  function renderModules() {
    const grid = $("#module-grid");
    if (!grid) return;

    const labMap = { m1: "riemann", m2: "derivative", m3: "integral", m4: "integral", m5: "taylor", m6: "levelcurves" };

    grid.innerHTML = moduleData.map((module) => {
      const target = labMap[module.id] || "riemann";
      return `
        <article class="module-card" data-title="${module.title.toLowerCase()} ${module.summary.toLowerCase()}" data-module="${module.id}">
          <div class="module-number">${String(module.id.slice(1)).padStart(2, "0")}</div>
          <div class="module-icon">${module.icon}</div>
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
          <div class="module-footer"><span>${module.lessons} aulas</span><a class="module-start" href="laboratorio.html#lab-${target}" data-complete="${module.id}">Explorar →</a></div>
        </article>
      `;
    }).join("");

    $$(".module-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest(".module-start")) return;
        renderModuleInspector(card.dataset.module);
      });
    });

    $$(".module-start").forEach((button) => {
      button.addEventListener("click", () => {
        const moduleId = button.dataset.complete;
        state[moduleId] = true;
        localStorage.setItem("cv2-progress", JSON.stringify(state));
        updateProgress();
        renderModuleInspector(moduleId);
        const target = labMap[moduleId] || "riemann";
        window.location.href = `laboratorio.html#lab-${target}`;
      });
    });
  }

  function renderModuleInspector(moduleId) {
    const currentModule = moduleData.find((module) => module.id === moduleId) || moduleData[0];
    const inspector = $("#module-inspector");
    if (!inspector) return;

    inspector.innerHTML = `
      <div class="module-inspector-header">
        <div>
          <div class="eyebrow">Conteúdo do módulo</div>
          <h3>${currentModule.title}</h3>
          <div class="module-meta">
            <span>${currentModule.duration}</span>
            <span>${currentModule.difficulty}</span>
            <span>${currentModule.lessons} aulas</span>
          </div>
        </div>
        <button class="button small primary" data-open-lab="${currentModule.theme}">Ir para a simulação</button>
      </div>
      <div class="module-inspector-grid">
        <div class="module-inspector-card">
          <span class="module-tag">Objetivo</span>
          <p>${currentModule.objective}</p>
        </div>
        <div class="module-inspector-card">
          <span class="module-tag">Simulação</span>
          <p>${currentModule.simulation}</p>
          <div class="math-callout">${renderMathText(currentModule.formula)}</div>
        </div>
      </div>
      <div class="module-inspector-grid">
        <div class="module-inspector-card">
          <span class="module-tag">Competências</span>
          <ul class="module-keypoints">
            ${currentModule.competencies.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="module-inspector-card">
          <span class="module-tag">Recursos</span>
          <ul class="module-keypoints">
            ${currentModule.resources.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="module-inspector-grid">
        <div class="module-inspector-card">
          <span class="module-tag">Plano de estudo</span>
          <ul class="module-keypoints">
            ${currentModule.studyPlan.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="module-inspector-card">
          <span class="module-tag">Ideias-chave</span>
          <ul class="module-keypoints">
            ${currentModule.keyIdeas.map((idea) => `<li>${idea}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([inspector]).catch(() => {});
    }

    const button = inspector.querySelector("[data-open-lab]");
    if (button) {
      button.addEventListener("click", () => {
        const lab = button.dataset.openLab;
        activateLabTab(lab);
        const labElement = document.getElementById("laboratorio");
        if (labElement) {
          labElement.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = `laboratorio.html#lab-${lab}`;
        }
      });
    }

    renderPracticeQuestions(currentModule.id);
  }

  // ---------- Tema e navegação ----------
  setupSharedNavigation();

  // ---------- Busca ----------
  const moduleSearch = $("#module-search");
  if (moduleSearch) {
    moduleSearch.addEventListener("input", e => {
      const q = e.target.value.toLowerCase().trim();
      let visible = 0;
      $$(".module-card").forEach(card => {
        const show = !q || card.dataset.title.includes(q);
        card.style.display = show ? "" : "flex";
        if (show) visible++;
      });
      const emptySearch = $("#empty-search");
      if (emptySearch) emptySearch.hidden = visible !== 0;
    });
  }

  // ---------- Progresso ----------
  const updateProgress = () => {
    syncProgressUI();

    const progressPercent = $("#progress-percent");
    if (!progressPercent) return;

    $$(".module-start").forEach((btn) => {
      if (state[btn.dataset.complete]) {
        btn.textContent = "Concluído ✓";
        btn.style.color = "var(--accent)";
      }
    });
  };

  if (page !== "home") {
    renderCourseOverview();
    renderModules();
    renderModuleInspector("m1");
    updateProgress();
  }

  if (page === "exercicios") {
    bindExerciseCardScoring();
  }

  // ---------- Tabs do laboratório ----------
  $$(".lab-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      activationTarget = tab.dataset.lab;
      $$(".lab-tab").forEach(t => t.classList.remove("active"));
      $$(".lab-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const selectedPanel = $(`#lab-${tab.dataset.lab}`);
      if (selectedPanel) selectedPanel.classList.add("active");
      if (window.location.hash !== `#lab-${tab.dataset.lab}`) {
        history.replaceState(null, "", `#lab-${tab.dataset.lab}`);
      }
      drawAll();
    });
  });

  const initialLabHash = window.location.hash.replace("#lab-", "").trim();
  if (page === "laboratorio" && initialLabHash) {
    setTimeout(() => activateLabTab(initialLabHash), 50);
  }

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
  if (nSlider) nSlider.addEventListener("input", drawRiemann);

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
  if (x0Slider) x0Slider.addEventListener("input", drawDerivative);

  // ---------- Simulação de integral ----------
  const integralCanvas = $("#integral-canvas");
  const integralSlider = $("#integral-b-slider");
  function drawIntegral(){
    if(!integralCanvas) return;
    const {ctx,w,h}=setupCanvas(integralCanvas); clear(ctx,w,h);
    const tr=graphTransform(w,h,0,3,-0.5,5.5); axes(ctx,w,h,tr,0,3,-0.5,5.5);
    const b = +integralSlider.value;
    const area = (b*b*b)/3;
    curve(ctx,tr,x=>x*x,0,3,0.01,"#5b5ce2",3);
    ctx.fillStyle="rgba(91,92,226,0.20)";
    ctx.beginPath();
    ctx.moveTo(tr.X(0), tr.Y(0));
    for (let x=0; x<=b; x+=0.05) {
      const y = x*x;
      ctx.lineTo(tr.X(x), tr.Y(y));
    }
    ctx.lineTo(tr.X(b), tr.Y(0));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle="#16b7a4"; ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(tr.X(b), tr.Y(0)); ctx.lineTo(tr.X(b), tr.Y(b*b)); ctx.stroke();
    text(ctx,`b = ${b.toFixed(2)}`, tr.X(b)-10, tr.Y(0)-10, 12, "#16b7a4", 800);
    text(ctx,`Área = ${area.toFixed(4)}`, 18, 30, 12, "#5b5ce2", 800);
    $("#integral-b-value").textContent = b.toFixed(2);
    $("#integral-area-value").textContent = area.toFixed(4);
  }
  if (integralSlider) integralSlider.addEventListener("input", drawIntegral);

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
  if (termsSlider) termsSlider.addEventListener("input", drawTaylor);

  // ---------- Curvas de nível ----------
  const levelCurvesCanvas = $("#level-curves-canvas");
  const levelCurvesSlider = $("#level-curves-slider");
  const surfaceSelect = $("#surface-select");
  const surfaceParamSlider = $("#surface-parameter-slider");
  const surfaceParamValue = $("#surface-parameter-value");
  const surfaceNameEl = $("#surface-name");
  const surfaceCurveNameEl = $("#surface-curve-name");
  const levelFormulaText = $("#level-curves-formula");
  const surfaceExpressionInput = $("#surface-expression");

  function sanitizeSurfaceExpression(expression) {
    if (!expression) return "x^2 + y^2";
    return expression
      .replace(/\s+/g, "")
      .replace(/π/g, "Math.PI")
      .replace(/ℯ|e\b/g, "Math.E")
      .replace(/sen\(/g, "sin(")
      .replace(/cos\(/g, "cos(")
      .replace(/tan\(/g, "tan(")
      .replace(/ln\(/g, "log(")
      .replace(/log\(/g, "log(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/abs\(/g, "Math.abs(")
      .replace(/exp\(/g, "Math.exp(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log(")
      .replace(/\^/g, "**")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/([0-9])\s*\(\s*([xy])/g, "$1*($2")
      .replace(/([xy])\s*\(\s*([0-9])/g, "$1*($2")
      .replace(/([0-9])\s*(x|y)/g, "$1*$2")
      .replace(/(x|y)\s*([0-9])/g, "$1*$2");
  }

  function compileSurfaceFunction(expression, a = 1) {
    const clean = sanitizeSurfaceExpression(expression);
    const formula = clean
      .replace(/x/g, "x")
      .replace(/y/g, "y");
    try {
      const fn = new Function("x", "y", `return ${formula} * ${a};`);
      return { ok: true, fn };
    } catch (error) {
      return { ok: false, error };
    }
  }

  const surfaceDefinitions = {
    paraboloid: {
      label: "Paraboloide circular",
      curve: "circunferência",
      equation: (a, c) => `x^2 + y^2 = ${(c / a).toFixed(2)}`,
      getLevelValue: (level, a) => Math.sqrt(level / a),
      drawContour: (ctx, tr, level, a, fn) => {
        const radius = Math.sqrt(Math.max(level / a, 0));
        ctx.beginPath();
        for (let angle = 0; angle <= Math.PI * 2 + 0.05; angle += 0.06) {
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const px = tr.X(x);
          const py = tr.Y(y);
          if (angle === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    },
    elliptic: {
      label: "Paraboloide elíptico",
      curve: "elipse",
      equation: (a, c) => `x^2 + 2y^2 = ${(c / a).toFixed(2)}`,
      getLevelValue: (level, a) => Math.sqrt(level / a),
      drawContour: (ctx, tr, level, a) => {
        const rx = Math.sqrt(Math.max(level / a, 0));
        const ry = Math.sqrt(Math.max(level / (2 * a), 0));
        ctx.beginPath();
        for (let angle = 0; angle <= Math.PI * 2 + 0.05; angle += 0.06) {
          const x = rx * Math.cos(angle);
          const y = ry * Math.sin(angle);
          const px = tr.X(x);
          const py = tr.Y(y);
          if (angle === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    },
    cone: {
      label: "Cone",
      curve: "circunferência",
      equation: (a, c) => `x^2 + y^2 = ${(c / a).toFixed(2)}^2`,
      getLevelValue: (level, a) => Math.abs(level / a),
      drawContour: (ctx, tr, level, a) => {
        const radius = Math.abs(level / a);
        ctx.beginPath();
        for (let angle = 0; angle <= Math.PI * 2 + 0.05; angle += 0.06) {
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const px = tr.X(x);
          const py = tr.Y(y);
          if (angle === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    },
    custom: {
      label: "Função personalizada",
      curve: "contorno geral",
      equation: (a, c) => `f(x, y) = c`,
      getLevelValue: (level) => level,
      drawContour: (ctx, tr, level, a, fn) => {
        const segments = buildGenericContourSegments(fn, level, -3, 3, -3, 3, 46);
        if (!segments.length) return;
        ctx.beginPath();
        segments.forEach(([p1, p2], index) => {
          const px1 = tr.X(p1.x);
          const py1 = tr.Y(p1.y);
          const px2 = tr.X(p2.x);
          const py2 = tr.Y(p2.y);
          if (index === 0) {
            ctx.moveTo(px1, py1);
          }
          ctx.lineTo(px1, py1);
          ctx.lineTo(px2, py2);
        });
        ctx.stroke();
      }
    }
  };

  function buildGenericContourSegments(fn, level, xMin, xMax, yMin, yMax, resolution = 48) {
    const segments = [];
    const xStep = (xMax - xMin) / resolution;
    const yStep = (yMax - yMin) / resolution;

    for (let i = 0; i < resolution; i++) {
      for (let j = 0; j < resolution; j++) {
        const x0 = xMin + i * xStep;
        const y0 = yMin + j * yStep;
        const x1 = x0 + xStep;
        const y1 = y0 + yStep;

        const corners = [
          { x: x0, y: y0, v: fn(x0, y0) },
          { x: x1, y: y0, v: fn(x1, y0) },
          { x: x1, y: y1, v: fn(x1, y1) },
          { x: x0, y: y1, v: fn(x0, y1) }
        ];

        const edgePairs = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0]
        ];

        const intersections = [];

        edgePairs.forEach(([aIndex, bIndex]) => {
          const a = corners[aIndex];
          const b = corners[bIndex];
          const va = a.v;
          const vb = b.v;

          if (Math.abs(va - level) < 1e-9) {
            intersections.push({ x: a.x, y: a.y });
          }
          if (Math.abs(vb - level) < 1e-9) {
            intersections.push({ x: b.x, y: b.y });
          }
          if ((va - level) * (vb - level) < 0) {
            const t = (level - va) / (vb - va);
            intersections.push({
              x: a.x + (b.x - a.x) * t,
              y: a.y + (b.y - a.y) * t
            });
          }
        });

        if (intersections.length >= 2) {
          for (let k = 0; k + 1 < intersections.length; k += 2) {
            const p1 = intersections[k];
            const p2 = intersections[k + 1];
            if (Number.isFinite(p1.x) && Number.isFinite(p1.y) && Number.isFinite(p2.x) && Number.isFinite(p2.y)) {
              segments.push([p1, p2]);
            }
          }
        }
      }
    }

    return segments;
  }

  function updateLevelCurveText(surfaceKey, a, c) {
    const surface = surfaceDefinitions[surfaceKey] || surfaceDefinitions.paraboloid;
    if (surfaceNameEl) surfaceNameEl.textContent = surface.label;
    if (surfaceCurveNameEl) surfaceCurveNameEl.textContent = surface.curve;
    if (surfaceParamValue) surfaceParamValue.textContent = a.toFixed(2);
    if (levelFormulaText) {
      levelFormulaText.textContent = surfaceKey === "custom"
        ? `f(x, y) = ${surfaceExpressionInput ? surfaceExpressionInput.value.trim() || "x^2 + y^2" : "x^2 + y^2"}`
        : surface.equation(a, c);
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([levelFormulaText]).catch(() => {});
      }
    }
  }

  function projectIsometricPoint(x, y, z, width, height) {
    const scale = Math.min(width, height) * 0.12;
    const cx = width * 0.58;
    const cy = height * 0.7;
    const px = cx + (x - y) * scale;
    const py = cy + (x + y) * scale * 0.5 - z * scale * 0.9;
    return { x: px, y: py };
  }

  function getSurfaceValue(x, y, surfaceKey, a, compiledCustomFn) {
    switch (surfaceKey) {
      case "paraboloid":
        return a * (x * x + y * y);
      case "elliptic":
        return a * (x * x + 2 * y * y);
      case "cone":
        return a * Math.sqrt(Math.max(x * x + y * y, 0));
      case "custom":
        return compiledCustomFn ? compiledCustomFn.fn(x, y) * a : 0;
      default:
        return a * (x * x + y * y);
    }
  }

  function drawSurfaceProjection(ctx, w, h, surfaceKey, a, compiledCustomFn) {
    const xMin = -2.2;
    const xMax = 2.2;
    const yMin = -2.2;
    const yMax = 2.2;
    const steps = 16;

    let zMin = Infinity;
    let zMax = -Infinity;
    const grid = [];

    for (let i = 0; i <= steps; i++) {
      const row = [];
      const x = xMin + (i / steps) * (xMax - xMin);
      for (let j = 0; j <= steps; j++) {
        const y = yMin + (j / steps) * (yMax - yMin);
        const z = getSurfaceValue(x, y, surfaceKey, a, compiledCustomFn);
        row.push(z);
        if (z < zMin) zMin = z;
        if (z > zMax) zMax = z;
      }
      grid.push(row);
    }

    if (!Number.isFinite(zMin) || !Number.isFinite(zMax)) return;

    for (let i = 0; i < steps; i++) {
      for (let j = 0; j < steps; j++) {
        const x0 = xMin + (i / steps) * (xMax - xMin);
        const y0 = yMin + (j / steps) * (yMax - yMin);
        const x1 = xMin + ((i + 1) / steps) * (xMax - xMin);
        const y1 = yMin + ((j + 1) / steps) * (yMax - yMin);

        const z00 = grid[i][j];
        const z10 = grid[i + 1][j];
        const z11 = grid[i + 1][j + 1];
        const z01 = grid[i][j + 1];

        const p00 = projectIsometricPoint(x0, y0, z00, w, h);
        const p10 = projectIsometricPoint(x1, y0, z10, w, h);
        const p11 = projectIsometricPoint(x1, y1, z11, w, h);
        const p01 = projectIsometricPoint(x0, y1, z01, w, h);

        const avgZ = (z00 + z10 + z11 + z01) / 4;
        const t = (avgZ - zMin) / (zMax - zMin || 1);
        ctx.fillStyle = `rgba(${Math.round(20 + t * 120)}, ${Math.round(120 + t * 110)}, ${Math.round(200 - t * 70)}, 0.78)`;
        ctx.beginPath();
        ctx.moveTo(p00.x, p00.y);
        ctx.lineTo(p10.x, p10.y);
        ctx.lineTo(p11.x, p11.y);
        ctx.lineTo(p01.x, p01.y);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const baseX = -2.2;
    const baseY = -2.2;
    const baseP1 = projectIsometricPoint(baseX, baseY, 0, w, h);
    const baseP2 = projectIsometricPoint(2.2, -2.2, 0, w, h);
    const baseP3 = projectIsometricPoint(2.2, 2.2, 0, w, h);
    const baseP4 = projectIsometricPoint(-2.2, 2.2, 0, w, h);
    ctx.strokeStyle = "rgba(91,92,226,0.45)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(baseP1.x, baseP1.y);
    ctx.lineTo(baseP2.x, baseP2.y);
    ctx.lineTo(baseP3.x, baseP3.y);
    ctx.lineTo(baseP4.x, baseP4.y);
    ctx.closePath();
    ctx.stroke();
  }

  function drawLevelCurves(){
    if(!levelCurvesCanvas) return;
    const {ctx,w,h}=setupCanvas(levelCurvesCanvas); clear(ctx,w,h);
    const tr=graphTransform(w,h,-3,3,-3,3); axes(ctx,w,h,tr,-3,3,-3,3);

    const surfaceKey = surfaceSelect ? surfaceSelect.value : "paraboloid";
    const a = surfaceParamSlider ? +surfaceParamSlider.value : 1;
    const c = +levelCurvesSlider.value;
    const surface = surfaceDefinitions[surfaceKey] || surfaceDefinitions.paraboloid;
    let compiledCustomFn = null;

    if (surfaceKey === "custom") {
      const expression = surfaceExpressionInput ? surfaceExpressionInput.value : "x^2 + y^2";
      compiledCustomFn = compileSurfaceFunction(expression, a);
    }

    drawSurfaceProjection(ctx, w, h, surfaceKey, a, compiledCustomFn);

    if (surfaceKey === "custom") {
      if (compiledCustomFn && compiledCustomFn.ok) {
        const baseLevels = [-8, -6, -4, -2, 0, 2, 4, 6, 8];
        const levels = baseLevels.filter((level) => Math.abs(level - c) < 5 || Math.abs(level - c) < 1e-6);
        const targetLevels = levels.length ? levels : [c];
        targetLevels.forEach((level) => {
          const segments = buildGenericContourSegments(compiledCustomFn.fn, level, -3, 3, -3, 3, 52);
          if (!segments.length) return;
          ctx.beginPath();
          segments.forEach(([start, end], index) => {
            const x1 = tr.X(start.x);
            const y1 = tr.Y(start.y);
            const x2 = tr.X(end.x);
            const y2 = tr.Y(end.y);
            if (index === 0) ctx.moveTo(x1, y1);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
          });
          ctx.strokeStyle = Math.abs(level - c) < 0.25 ? "#5b5ce2" : "rgba(22,183,164,0.55)";
          ctx.lineWidth = Math.abs(level - c) < 0.25 ? 2.8 : 1.2;
          ctx.stroke();
        });
      } else {
        text(ctx, "Expressão inválida", 20, 30, 13, "#d0465d", 800);
      }
    } else {
      const levels = [];
      const maxLevel = 8;
      for (let level = -maxLevel; level <= maxLevel; level += 1.2) {
        levels.push(level);
      }
      levels.forEach((level) => {
        const isActive = Math.abs(level - c) < 0.2;
        ctx.beginPath();
        surface.drawContour(ctx, tr, level, a);
        ctx.strokeStyle = isActive ? "#5b5ce2" : "rgba(22,183,164,0.55)";
        ctx.lineWidth = isActive ? 2.8 : 1.4;
        ctx.stroke();
      });

      ctx.strokeStyle="#5b5ce2"; ctx.lineWidth=3; ctx.setLineDash([6,6]);
      ctx.beginPath();
      surface.drawContour(ctx, tr, c, a);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    text(ctx, `Plano z = ${c.toFixed(2)}`, 18, 28, 12, "#5b5ce2", 800);
    text(ctx, `Superfície: ${surface.label}`, 18, 48, 11, "#16b7a4", 700);
    if (levelCurvesSlider) $("#level-curves-value").textContent = c.toFixed(2);
    updateLevelCurveText(surfaceKey, a, c);
  }
  if (levelCurvesSlider) levelCurvesSlider.addEventListener("input", drawLevelCurves);
  if (surfaceSelect) surfaceSelect.addEventListener("input", () => {
    const customRow = document.querySelector(".custom-func-row");
    if (customRow) customRow.style.display = surfaceSelect.value === "custom" ? "flex" : "none";
    drawLevelCurves();
  });
  if (surfaceParamSlider) surfaceParamSlider.addEventListener("input", drawLevelCurves);
  if (surfaceExpressionInput) surfaceExpressionInput.addEventListener("input", drawLevelCurves);
  if (surfaceSelect && surfaceExpressionInput) {
    const customRow = document.querySelector(".custom-func-row");
    if (customRow) customRow.style.display = surfaceSelect.value === "custom" ? "flex" : "none";
  }

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

  function drawAll(){drawHero();drawRiemann();drawDerivative();drawIntegral();drawTaylor();drawLevelCurves();}
  function animation(){drawHero();requestAnimationFrame(animation)}

  if (page === "home") {
    drawHero();
    window.addEventListener("resize", drawHero);
  } else {
    animation();
    drawAll();
    window.addEventListener("resize", drawAll);
  }

  // ---------- Exercícios ----------
  function bindExerciseCardScoring() {
    const normalizeChoice = (value) => String(value ?? "")
      .replace(/\\,|\\cdot|\\quad/g, " ")
      .replace(/\\\^/g, "^")
      .replace(/\s+/g, " ")
      .trim();

    const scoreEl = $("#score");
    let score = Number(scoreEl ? scoreEl.textContent.trim() : "0") || 0;
    const answered = new Set();
    const cards = $$(".exercise-card");

    cards.forEach((card) => {
      if (card.dataset.scoredBound === "true") return;
      card.dataset.scoredBound = "true";

      $$(".answers button", card).forEach((btn) => {
        btn.addEventListener("click", () => {
          if (answered.has(card)) return;
          answered.add(card);

          const isCorrect = normalizeChoice(btn.dataset.choice) === normalizeChoice(card.dataset.answer);
          btn.classList.add(isCorrect ? "correct" : "wrong");

          const feedback = $(".feedback", card);
          if (isCorrect) {
            score += 1;
            feedback.innerHTML = "✓ Correto. Você identificou a ideia central.";
            feedback.style.color = "var(--accent)";
          } else {
            feedback.innerHTML = `Quase. A resposta correta é: ${renderMathText(card.dataset.answer)}`;
            feedback.style.color = "var(--danger)";
            const rightButtons = [...$$(".answers button", card)].filter((button) =>
              normalizeChoice(button.dataset.choice) === normalizeChoice(card.dataset.answer)
            );
            rightButtons.forEach((button) => button.classList.add("correct"));
          }

          if (scoreEl) scoreEl.textContent = String(score);
        });
      });
    });
  }

  function renderPracticeQuestions(moduleId) {
    const module = moduleData.find((item) => item.id === moduleId) || moduleData[0];
    const exerciseList = $("#exercise-list") || $(".exercise-list");
    if (!exerciseList) return;

    const normalizeChoice = (value) => String(value ?? "")
      .replace(/\\,|\\cdot|\\quad/g, " ")
      .replace(/\\\^/g, "^")
      .replace(/\s+/g, " ")
      .trim();

    exerciseList.innerHTML = module.practiceQuestions.map((item, index) => {
      const question = renderMathText(item.question);
      const answer = normalizeChoice(item.answer);
      const options = item.options.map((option) => ({
        raw: normalizeChoice(option),
        text: option.includes("\\int_") || option.includes("\\frac") || option.includes("x^")
          ? renderMathText(option)
          : option
      }));

      return `
        <article class="exercise-card" data-answer="${answer}">
          <div class="exercise-top"><span>${String(index + 1).padStart(2, "0")} · ${module.title}</span><span>nível ${index === 0 ? 1 : index === 1 ? 1 : 2}</span></div>
          <h3>${question}</h3>
          <div class="answers">
            ${options.map((option) => `<button data-choice="${option.raw}">${option.text}</button>`).join("")}
          </div>
          <div class="feedback" aria-live="polite"></div>
        </article>
      `;
    }).join("");

    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise();
    }

    bindExerciseCardScoring();
  }

  // ---------- GeoGebra ----------
  const ggbElement = $("#ggb-element");

  function loadGGB(concept = "derivative") {
    if (!ggbElement) return;

    const conceptMap = {
      derivative: "https://www.geogebra.org/graphing?lang=en",
      integral: "https://www.geogebra.org/graphing?lang=en",
      taylor: "https://www.geogebra.org/graphing?lang=en",
      levelcurves: "https://www.geogebra.org/3d?lang=en",
      classic: "https://www.geogebra.org/classic?lang=en"
    };

    const url = conceptMap[concept] || conceptMap.derivative;
    ggbElement.innerHTML = "";

    const loading = document.createElement("div");
    loading.className = "ggb-loading";
    loading.innerHTML = '<div class="spinner"></div><span>Carregando GeoGebra…</span>';

    const frame = document.createElement("iframe");
    frame.className = "ggb-iframe";
    frame.title = "GeoGebra";
    frame.src = url;
    frame.loading = "lazy";
    frame.allowFullscreen = true;
    frame.setAttribute("allow", "fullscreen; clipboard-write; microphone; camera");
    frame.addEventListener("load", () => {
      loading.remove();
    });

    ggbElement.appendChild(loading);
    ggbElement.appendChild(frame);
  }

  function setGGBConcept(concept) {
    loadGGB(concept);
  }

  $$(".ggb-actions button[data-ggb]").forEach(button => {
    button.addEventListener("click", () => {
      setGGBConcept(button.dataset.ggb);
    });
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
