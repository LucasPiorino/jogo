// ==========================
// QUIZ DATA
// ==========================
const CHARACTERS = {
  MALUQUINHO: {
    nome: "Menino Maluquinho",
    img: "img/player.png",
    desc: "Criativo, divertido e leal aos amigos. Você transforma a rotina em aventura, lidera com bom humor e vive colecionando histórias.",
    traits: ["criatividade", "amizade", "alegria", "energia"]
  },
  PERERE: {
    nome: "Pererê (Saci)",
    img: "img/perere.png",
    desc: "Espírito livre da mata, amante de travessuras do bem. Você é sagaz, rápido nas respostas e tem um pé (ou dois!) na natureza.",
    traits: ["liberdade", "humor sagaz", "natureza", "improviso"]
  },
  FLICTS: {
    nome: "Flicts",
    img: "img/flicts.jpg",
    desc: "Sensível, único e persistente na própria jornada. Você busca seu lugar no mundo sem abrir mão da sua cor interior.",
    traits: ["sensibilidade", "originalidade", "resiliência", "introspecção"]
  },
  BICHINHO: {
    nome: "Bichinho da Maçã",
    img: "img/maça.png",
    desc: "Curioso, paciente e observador. Você vai cavando com método, aprendendo com cada camada até chegar ao coração das coisas.",
    traits: ["curiosidade", "paciência", "detalhismo", "persistência"]
  }
};

// Perguntas (10)
const QUESTIONS = [
  {
    q: "Quando surge um desafio inesperado, você…",
    opts: [
      { k: "A", t: "Cria um plano divertido e chama os amigos.", tag: "social", map: "MALUQUINHO" },
      { k: "B", t: "Dá um sorriso maroto e improvisa na hora.", tag: "improviso", map: "PERERE" },
      { k: "C", t: "Observa em silêncio e procura um novo ângulo.", tag: "reflexivo", map: "FLICTS" },
      { k: "D", t: "Pesquisa, organiza e vai cavando a solução.", tag: "método", map: "BICHINHO" },
    ]
  },
  {
    q: "Sua ideia de um sábado perfeito é…",
    opts: [
      { k: "A", t: "Juntar a galera para uma aventura urbana.", tag: "aventura", map: "MALUQUINHO" },
      { k: "B", t: "Explorar uma trilha, rio ou parque.", tag: "natureza", map: "PERERE" },
      { k: "C", t: "Passar horas criando algo autoral.", tag: "criar", map: "FLICTS" },
      { k: "D", t: "Aprender uma habilidade nova com calma.", tag: "aprender", map: "BICHINHO" },
    ]
  },
  {
    q: "Num grupo, seu papel natural costuma ser…",
    opts: [
      { k: "A", t: "Animar e unir todo mundo.", tag: "liderança", map: "MALUQUINHO" },
      { k: "B", t: "Trazer leveza e boas pegadinhas.", tag: "humor", map: "PERERE" },
      { k: "C", t: "Ser a voz sensível que nota o que falta.", tag: "empatia", map: "FLICTS" },
      { k: "D", t: "Ser o cérebro detalhista do time.", tag: "detalhe", map: "BICHINHO" },
    ]
  },
  {
    q: "Se pudesse escolher um superpoder, qual seria?",
    opts: [
      { k: "A", t: "Transformar tédio em diversão instantânea.", tag: "diversão", map: "MALUQUINHO" },
      { k: "B", t: "Sumir e aparecer onde quiser.", tag: "mobilidade", map: "PERERE" },
      { k: "C", t: "Mudar de cor conforme a emoção.", tag: "expressão", map: "FLICTS" },
      { k: "D", t: "Enxergar por dentro de qualquer coisa.", tag: "curiosidade", map: "BICHINHO" },
    ]
  },
  {
    q: "Na escola/faculdade, você preferia…",
    opts: [
      { k: "A", t: "Projetos em grupo e apresentações.", tag: "grupo", map: "MALUQUINHO" },
      { k: "B", t: "Feiras de ciência e experiências.", tag: "experiência", map: "PERERE" },
      { k: "C", t: "Artes, escrita, música ou design.", tag: "arte", map: "FLICTS" },
      { k: "D", t: "Laboratórios, listas e exercícios.", tag: "técnico", map: "BICHINHO" },
    ]
  },
  {
    q: "Como lida com mudanças de plano de última hora?",
    opts: [
      { k: "A", t: "Reinventa a noite e ainda fica melhor.", tag: "flexível", map: "MALUQUINHO" },
      { k: "B", t: "Adora! Quanto mais inesperado, melhor.", tag: "espontâneo", map: "PERERE" },
      { k: "C", t: "Processa, entende o porquê e segue.", tag: "consciência", map: "FLICTS" },
      { k: "D", t: "Reorganiza tudo com método.", tag: "organização", map: "BICHINHO" },
    ]
  },
  {
    q: "Qual frase combina mais?",
    opts: [
      { k: "A", t: "A vida é pra ser celebrada com quem a gente ama.", tag: "afeto", map: "MALUQUINHO" },
      { k: "B", t: "Liberdade é o melhor dos ventos.", tag: "liberdade", map: "PERERE" },
      { k: "C", t: "Ser diferente é meu superpoder.", tag: "autenticidade", map: "FLICTS" },
      { k: "D", t: "A curiosidade cava caminhos.", tag: "curiosidade", map: "BICHINHO" },
    ]
  },
  {
    q: "Se fosse um objeto, qual seria?",
    opts: [
      { k: "A", t: "Um chapéu estiloso cheio de histórias.", tag: "estilo", map: "MALUQUINHO" },
      { k: "B", t: "Um pião veloz que nunca para.", tag: "energia", map: "PERERE" },
      { k: "C", t: "Um lápis de cor único no estojo.", tag: "singular", map: "FLICTS" },
      { k: "D", t: "Uma lupa para ver os detalhes.", tag: "análise", map: "BICHINHO" },
    ]
  },
  {
    q: "No trabalho/projetos, seu maior destaque é…",
    opts: [
      { k: "A", t: "Engajar pessoas e contar boas histórias.", tag: "storytelling", map: "MALUQUINHO" },
      { k: "B", t: "Resolver pepinos sob pressão.", tag: "agilidade", map: "PERERE" },
      { k: "C", t: "Trazer visão estética e empática.", tag: "estética", map: "FLICTS" },
      { k: "D", t: "Documentar, medir e melhorar.", tag: "métricas", map: "BICHINHO" },
    ]
  },
  {
    q: "Por fim, o que você mais valoriza na vida?",
    opts: [
      { k: "A", t: "Amizade e memórias inesquecíveis.", tag: "amizade", map: "MALUQUINHO" },
      { k: "B", t: "Autonomia e contato com a natureza.", tag: "natureza", map: "PERERE" },
      { k: "C", t: "Autenticidade e expressão pessoal.", tag: "autenticidade", map: "FLICTS" },
      { k: "D", t: "Aprendizado contínuo e paciência.", tag: "aprendizado", map: "BICHINHO" },
    ]
  }
];

// ==========================
// STATE
// ==========================
const state = {
  i: 0,
  answers: Array(QUESTIONS.length).fill(null),
};

// ==========================
// DOM
// ==========================
const qBox = document.getElementById('question-box');
const qIndex = document.getElementById('q-index');
const qText  = document.getElementById('q-text');
const qOpts  = document.getElementById('options');
const btnPrev = document.getElementById('prev');
const pBar = document.getElementById('progress-bar');

const resWrap = document.getElementById('result');
const resTitle = document.getElementById('res-title');
const resDesc = document.getElementById('res-desc');
const resBadge = document.getElementById('res-badge');
const resTraits = document.getElementById('res-traits');
const btnRestart = document.getElementById('restart');
const btnCopy = document.getElementById('copy');

// ==========================
// RENDER
// ==========================
function renderQuestion(){
  const i = state.i;
  const total = QUESTIONS.length;
  const q = QUESTIONS[i];

  const answeredCount = state.answers.filter(v => v !== null).length;
  const prog = Math.round((Math.max(answeredCount, i) / total) * 100);
  pBar.style.width = prog + "%";

  qIndex.textContent = `Pergunta ${i+1} de ${total}`;
  qText.textContent = q.q;

  qOpts.innerHTML = "";

  q.opts.forEach((opt, idx) => {
    const chosen = state.answers[i] === opt.map;
    const el = document.createElement('button');
    el.className = 'option';
    el.setAttribute('type','button');
    el.setAttribute('aria-pressed', chosen ? 'true' : 'false');
    el.dataset.map = opt.map;
    el.dataset.idx = idx;

    el.innerHTML = `
      <div class="opt-key">${opt.k}</div>
      <div class="opt-text">${opt.t}</div>
      <div class="opt-tag">${opt.tag}</div>
    `;

    el.addEventListener('click', () => {
      state.answers[i] = opt.map;
      signalSelect(el);
      setTimeout(() => goNext(), 160);
    });

    if (chosen) {
      el.style.borderColor = 'rgba(251, 195, 97, 0.5)';
      el.style.background = 'rgba(251, 195, 97, 0.12)';
    }

    qOpts.appendChild(el);
  });

  btnPrev.disabled = (i === 0);
}

function signalSelect(el){
  el.style.transform = 'translateY(-1px) scale(1.01)';
  el.style.boxShadow = '0 12px 28px rgba(251, 195, 97, 0.28)';
  el.style.borderColor = 'rgba(251, 195, 97, 0.6)';
  el.style.background = 'rgba(251, 195, 97, 0.14)';
  setTimeout(() => {
    el.style.transform = '';
    el.style.boxShadow = '';
  }, 220);
}

function goNext(){
  if (state.i < QUESTIONS.length - 1){
    state.i++;
    renderQuestion();
  } else {
    showResult();
  }
}

function goPrev(){
  if (state.i > 0){
    state.i--;
    renderQuestion();
  }
}

// ==========================
// RESULTADO
// ==========================
function computeScores(){
  const scores = { MALUQUINHO:0, PERERE:0, FLICTS:0, BICHINHO:0 };
  state.answers.forEach((map) => {
    if (!map) return;
    scores[map] += 1;
  });
  return scores;
}

function resolveResult(scores){
  const order = ["MALUQUINHO","PERERE","FLICTS","BICHINHO"];
  const entries = Object.entries(scores).sort((a,b)=> b[1]-a[1]);
  const topScore = entries[0][1];
  const tops = entries.filter(([k,v])=> v === topScore).map(([k])=> k);

  const mainKey = order.find(k => tops.includes(k)) || entries[0][0];
  const main = CHARACTERS[mainKey];

  const top2 = entries.slice(0,2).map(([k])=> k);
  const mixNote = (top2.length === 2 && top2[0] !== top2[1])
    ? ` (com um toque de ${CHARACTERS[top2[1]].nome})`
    : "";

  return { key: mainKey, data: main, mixNote, scores, ranking: entries };
}

function showResult(){
  const scores = computeScores();
  const res = resolveResult(scores);

  qBox.style.display = 'none';
  resWrap.classList.add('show');

  resTitle.textContent = `${res.data.nome}${res.mixNote}`;
  resDesc.textContent  = res.data.desc;
  
  // Usar imagem em vez de emoji
  resBadge.innerHTML = `<img src="${res.data.img}" alt="${res.data.nome}">`;

  resTraits.innerHTML = "";
  res.data.traits.forEach(t => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = t;
    resTraits.appendChild(chip);
  });

  sessionStorage.setItem('ziraldo_quiz_result', JSON.stringify({
    result: res.data.nome,
    scores: res.scores,
    at: new Date().toISOString()
  }));

  pBar.style.width = "100%";
}

function restart(){
  state.i = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  resWrap.classList.remove('show');
  qBox.style.display = 'grid';
  renderQuestion();
  pBar.style.width = "0%";
}

async function copyResult(){
  const stored = sessionStorage.getItem('ziraldo_quiz_result');
  let text = "Meu resultado no Quiz de Personalidade (Ziraldo):\n";
  if (stored){
    const obj = JSON.parse(stored);
    text += `• Personagem: ${obj.result}\n`;
    const mapName = {
      MALUQUINHO: "Menino Maluquinho",
      PERERE: "Pererê (Saci)",
      FLICTS: "Flicts",
      BICHINHO: "Bichinho da Maçã"
    };
    if (obj.scores){
      text += "• Pontuações: "
        + Object.entries(obj.scores)
            .map(([k,v])=> `${mapName[k]||k}: ${v}`)
            .join(" | ")
        + "\n";
    }
  } else {
    text += "(jogue em: este arquivo local)";
  }
  try{
    await navigator.clipboard.writeText(text);
    flashCopy(true);
  }catch(e){
    flashCopy(false);
  }
}

function flashCopy(ok=true){
  btnCopy.textContent = ok ? "Copiado!" : "Falhou — tente Ctrl+C";
  btnCopy.disabled = true;
  setTimeout(()=>{
    btnCopy.textContent = "Copiar resultado";
    btnCopy.disabled = false;
  }, 1500);
}

// ==========================
// EVENTS
// ==========================
btnPrev.addEventListener('click', goPrev);
btnRestart?.addEventListener('click', restart);
btnCopy?.addEventListener('click', copyResult);

// Atalhos de teclado
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  const resultOpen = document.getElementById('result').classList.contains('show');

  if (resultOpen){
    if (key === 'r'){ restart(); }
    if (key === 'c'){ copyResult(); }
    return;
  }
  if (key === 'arrowleft'){ e.preventDefault(); goPrev(); }
  if (['1','2','3','4'].includes(key)){
    const idx = parseInt(key,10) - 1;
    const btn = document.getElementById('options').querySelectorAll('.option')[idx];
    if (btn){ btn.click(); }
  }
});

// Inicializa
renderQuestion();
