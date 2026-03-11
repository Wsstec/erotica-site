/* ===============================================================
   script.js — Erotica
   Dados completos + perfil 100% dinâmico via ?id=
   =============================================================== */

/* ===== Array de Modelos — todos os campos do perfil ===== */
const data = [
  {
    id: 1,
    name: 'Luna Andrade',
    city: 'Porto Alegre',
    bairro: 'Moinhos de Vento',
    age: 25,
    height: '1,70m',
    weight: '58kg',
    hair: 'Morena',
    eyes: 'Castanhos',
    Image: 'img/model01.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg','img/thumb4.jpg','img/thumb5.jpg'],
    videos: [
      { src: 'videos/perfil1.mp4', poster: 'img/video-thumb.jpg' },
      { src: 'videos/perfil2.mp4', poster: '' }
    ],
    videoVerificacao: 'videos/verificacao.mp4',
    tags: ['Morena', 'Tatuada', 'Acompanhante'],
    servicos: ['Eventos', 'Jantares', 'Viagens', 'Pernoite'],
    verificado: true,
    vip: false,
    disponivel: true,
    atendimento: 'Com Local',
    whatsapp: '5551999990001',
    valor_hora: 300,
    precos: [
      { label: '30 Minutos', valor: 'R$ 300' },
      { label: '01 Hora',    valor: 'R$ 500', destaque: true },
      { label: '02 Horas',   valor: 'R$ 900' }
    ],
    pagamentos: ['pix','dinheiro','cartao'],
    horarios: [
      { dia: 'Seg a Sex', hora: '10:00 às 22:00' },
      { dia: 'Sábados',   hora: '14:00 às 20:00' },
      { dia: 'Domingos',  hora: 'Somente reserva' }
    ],
    comodidades: ['Ar-condicionado','Banheiro Privativo','Estacionamento','Wi-fi'],
    bio: 'Modelo de alto padrão, especialista em acompanhamento discreto. Sofisticada, inteligente e com ótima conversa para qualquer ambiente.',
    likes: 1248,
    avaliacoes: [
      { autor: 'Ricardo M.', tempo: 'há 2 dias',   texto: 'Atendimento impecável e local muito discreto. Exatamente como nas fotos.' },
      { autor: 'Felipe S.',  tempo: 'há 1 semana', texto: 'Uma das melhores experiências que já tive. Muito educada e o local é excelente.' }
    ],
    nota: 4.8
  },
  {
    id: 2,
    name: 'Valentina Rocha',
    city: 'Caxias do Sul',
    bairro: 'Centro',
    age: 28,
    height: '1,65m',
    weight: '55kg',
    hair: 'Loira',
    eyes: 'Verdes',
    Image: 'img/model02.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg','img/thumb4.jpg'],
    videos: [{ src: 'videos/perfil1.mp4', poster: '' }],
    videoVerificacao: 'videos/verificacao.mp4',
    tags: ['Loira', 'VIP', 'Massagem'],
    servicos: ['Massagem', 'Eventos', 'Viagens'],
    verificado: true,
    vip: true,
    disponivel: true,
    atendimento: 'A Domicílio',
    whatsapp: '5551999990002',
    valor_hora: 450,
    precos: [
      { label: '01 Hora',  valor: 'R$ 450', destaque: true },
      { label: '02 Horas', valor: 'R$ 800' },
      { label: 'Pernoite', valor: 'R$ 1.800' }
    ],
    pagamentos: ['pix','dinheiro'],
    horarios: [
      { dia: 'Seg a Qui', hora: '12:00 às 20:00' },
      { dia: 'Sex e Sáb', hora: '14:00 às 00:00' }
    ],
    comodidades: ['Ar-condicionado','Wi-fi'],
    bio: 'Atendimento exclusivo com foco em massagens relaxantes. VIP e discreta, para homens que valorizam qualidade.',
    likes: 2100,
    avaliacoes: [
      { autor: 'Marcos P.', tempo: 'há 3 dias', texto: 'Experiência incrível, muito profissional e atenciosa.' },
      { autor: 'Bruno K.',  tempo: 'há 5 dias', texto: 'Ambiente confortável, exatamente como anunciado.' }
    ],
    nota: 5.0
  },
  {
    id: 3,
    name: 'Sofia Menezes',
    city: 'Pelotas',
    bairro: 'Centro',
    age: 22,
    height: '1,68m',
    weight: '56kg',
    hair: 'Morena Clara',
    eyes: 'Castanhos',
    Image: 'img/model03.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg'],
    videos: [],
    videoVerificacao: '',
    tags: ['Morena Clara', 'Universitária'],
    servicos: ['Eventos', 'Jantares', 'Passeios'],
    verificado: false,
    vip: false,
    disponivel: true,
    atendimento: 'A Combinar',
    whatsapp: '5551999990003',
    valor_hora: 250,
    precos: [
      { label: '01 Hora',  valor: 'R$ 250', destaque: true },
      { label: '02 Horas', valor: 'R$ 450' }
    ],
    pagamentos: ['pix','dinheiro','cartao'],
    horarios: [
      { dia: 'Seg a Sex', hora: '18:00 às 23:00' },
      { dia: 'Finais',    hora: 'A combinar' }
    ],
    comodidades: ['Wi-fi'],
    bio: 'Universitária, jovem e bem-humorada. Companhia discreta para eventos e viagens a negócios.',
    likes: 890,
    avaliacoes: [
      { autor: 'André T.', tempo: 'há 1 semana', texto: 'Muito simpática e pontual. Ótima companhia.' }
    ],
    nota: 4.5
  },
  {
    id: 4,
    name: 'Camila Duarte',
    city: 'Santa Maria',
    bairro: 'Nossa Senhora das Dores',
    age: 27,
    height: '1,72m',
    weight: '60kg',
    hair: 'Morena',
    eyes: 'Castanhos Escuros',
    Image: 'img/model04.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg','img/thumb4.jpg'],
    videos: [{ src: 'videos/perfil1.mp4', poster: '' }],
    videoVerificacao: 'videos/verificacao.mp4',
    tags: ['Morena', 'Modelo'],
    servicos: ['Eventos', 'Viagens', 'Pernoite', 'Jantares'],
    verificado: true,
    vip: false,
    disponivel: false,
    atendimento: 'Com Local',
    whatsapp: '5551999990004',
    valor_hora: 350,
    precos: [
      { label: '01 Hora',  valor: 'R$ 350', destaque: true },
      { label: '02 Horas', valor: 'R$ 650' },
      { label: 'Pernoite', valor: 'R$ 1.500' }
    ],
    pagamentos: ['pix','cartao'],
    horarios: [
      { dia: 'Ter a Sex', hora: '14:00 às 22:00' },
      { dia: 'Sábados',   hora: '12:00 às 22:00' }
    ],
    comodidades: ['Ar-condicionado','Banheiro Privativo','Estacionamento'],
    bio: 'Elegância e sofisticação em todos os encontros. Modelo profissional com experiência em eventos de alto padrão.',
    likes: 1560,
    avaliacoes: [
      { autor: 'Carlos R.', tempo: 'há 4 dias',    texto: 'Modelo impecável, muito elegante e discreta.' },
      { autor: 'Thiago M.', tempo: 'há 2 semanas', texto: 'Atendimento perfeito, voltarei com certeza.' }
    ],
    nota: 4.9
  },
  {
    id: 5,
    name: 'Isadora Lima',
    city: 'Novo Hamburgo',
    bairro: 'Centro',
    age: 24,
    height: '1,66m',
    weight: '54kg',
    hair: 'Ruiva',
    eyes: 'Mel',
    Image: 'img/model05.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg','img/thumb4.jpg','img/thumb5.jpg'],
    videos: [
      { src: 'videos/perfil1.mp4', poster: 'img/video-thumb.jpg' },
      { src: 'videos/perfil2.mp4', poster: '' }
    ],
    videoVerificacao: 'videos/verificacao.mp4',
    tags: ['Ruiva', 'VIP'],
    servicos: ['Eventos VIP', 'Viagens Internacionais', 'Jantares Executivos', 'Pernoite'],
    verificado: true,
    vip: true,
    disponivel: true,
    atendimento: 'Com Local',
    whatsapp: '5551999990005',
    valor_hora: 500,
    precos: [
      { label: '01 Hora',  valor: 'R$ 500', destaque: true },
      { label: '02 Horas', valor: 'R$ 900' },
      { label: 'Pernoite', valor: 'R$ 2.200' }
    ],
    pagamentos: ['pix','cartao'],
    horarios: [
      { dia: 'Seg a Dom', hora: '14:00 às 02:00' }
    ],
    comodidades: ['Ar-condicionado','Banheiro Privativo','Estacionamento','Wi-fi'],
    bio: 'Personalidade vibrante e atendimento inesquecível. VIP premium para quem exige o melhor.',
    likes: 3200,
    avaliacoes: [
      { autor: 'Eduardo L.', tempo: 'há 1 dia',    texto: 'Absolutamente incrível, superou todas as expectativas.' },
      { autor: 'Rafael B.',  tempo: 'há 3 dias',   texto: 'VIP de verdade. Ambiente luxuoso e atendimento impecável.' },
      { autor: 'Pedro A.',   tempo: 'há 1 semana', texto: 'A melhor experiência que já tive. Vale cada centavo.' }
    ],
    nota: 5.0
  },
  {
    id: 6,
    name: 'Beatriz Faria',
    city: 'Cachoeirinha',
    bairro: 'Centro',
    age: 22,
    height: '1,70m',
    weight: '57kg',
    hair: 'Ruiva',
    eyes: 'Verdes',
    Image: 'img/model06.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg'],
    videos: [],
    videoVerificacao: '',
    tags: ['Ruiva', 'Experiente'],
    servicos: ['Eventos', 'Jantares', 'Pernoite'],
    verificado: false,
    vip: false,
    disponivel: true,
    atendimento: 'A Combinar',
    whatsapp: '5551999990006',
    valor_hora: 250,
    precos: [
      { label: '01 Hora',  valor: 'R$ 250', destaque: true },
      { label: '02 Horas', valor: 'R$ 450' }
    ],
    pagamentos: ['pix','dinheiro'],
    horarios: [{ dia: 'Seg a Sex', hora: '10:00 às 21:00' }],
    comodidades: ['Wi-fi'],
    bio: 'Experiente e profissional. Atendimento com qualidade e discrição garantida.',
    likes: 740,
    avaliacoes: [
      { autor: 'Lucas F.', tempo: 'há 2 semanas', texto: 'Ótima profissional, muito simpática e discreta.' }
    ],
    nota: 4.3
  },
  {
    id: 7,
    name: 'Amanda Santos',
    city: 'Gravataí',
    bairro: 'Morada do Vale',
    age: 30,
    height: '1,75m',
    weight: '63kg',
    hair: 'Loira',
    eyes: 'Azuis',
    Image: 'img/model07.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg','img/thumb4.jpg'],
    videos: [{ src: 'videos/perfil1.mp4', poster: '' }],
    videoVerificacao: '',
    tags: ['Loira', 'Experiente'],
    servicos: ['Eventos', 'Viagens', 'Jantares'],
    verificado: false,
    vip: false,
    disponivel: true,
    atendimento: 'Com Local',
    whatsapp: '5551999990007',
    valor_hora: 280,
    precos: [
      { label: '01 Hora',  valor: 'R$ 280', destaque: true },
      { label: '02 Horas', valor: 'R$ 500' }
    ],
    pagamentos: ['pix','dinheiro','cartao'],
    horarios: [
      { dia: 'Seg a Sex', hora: '09:00 às 20:00' },
      { dia: 'Sábados',   hora: '10:00 às 18:00' }
    ],
    comodidades: ['Ar-condicionado','Banheiro Privativo'],
    bio: 'Alta, loira e experiente. Atendimento com simpatia e profissionalismo em cada encontro.',
    likes: 980,
    avaliacoes: [
      { autor: 'Rodrigo S.', tempo: 'há 5 dias', texto: 'Ótima companhia, muito atenciosa e pontual.' }
    ],
    nota: 4.6
  },
  {
    id: 8,
    name: 'Gabriela Torres',
    city: 'Porto Alegre',
    bairro: 'Bela Vista',
    age: 26,
    height: '1,68m',
    weight: '57kg',
    hair: 'Loira',
    eyes: 'Castanhos',
    Image: 'img/model08.jpg',
    gallery: ['img/thumb1.jpg','img/thumb2.jpg','img/thumb3.jpg','img/thumb4.jpg'],
    videos: [
      { src: 'videos/perfil1.mp4', poster: 'img/video-thumb.jpg' },
      { src: 'videos/perfil2.mp4', poster: '' }
    ],
    videoVerificacao: 'videos/verificacao.mp4',
    tags: ['Loira', 'Verificada'],
    servicos: ['Eventos', 'Jantares', 'Viagens', 'Pernoite'],
    verificado: true,
    vip: false,
    disponivel: true,
    atendimento: 'Com Local',
    whatsapp: '5551999990008',
    valor_hora: 320,
    precos: [
      { label: '30 Minutos', valor: 'R$ 200' },
      { label: '01 Hora',    valor: 'R$ 320', destaque: true },
      { label: '02 Horas',   valor: 'R$ 580' }
    ],
    pagamentos: ['pix','dinheiro','cartao'],
    horarios: [
      { dia: 'Seg a Sex', hora: '11:00 às 22:00' },
      { dia: 'Sábados',   hora: '13:00 às 21:00' }
    ],
    comodidades: ['Ar-condicionado','Banheiro Privativo','Wi-fi'],
    bio: 'Atendimento refinado e ambiente aconchegante. Verificada e comprometida com a qualidade.',
    likes: 1120,
    avaliacoes: [
      { autor: 'Gustavo M.',  tempo: 'há 1 dia',  texto: 'Excelente! Local limpo, discreto e atendimento impecável.' },
      { autor: 'Vinícius T.', tempo: 'há 4 dias', texto: 'Muito profissional e simpática. Recomendo.' }
    ],
    nota: 4.7
  }
];

/* ===== Mapas auxiliares ===== */
const pagamentoIcons = {
  pix:      { icon: 'fa-brands fa-pix',              label: 'Pix' },
  dinheiro: { icon: 'fa-solid fa-money-bill-1-wave', label: 'Dinheiro' },
  cartao:   { icon: 'fa-solid fa-credit-card',       label: 'Cartão' }
};

const comodidadeIcons = {
  'Ar-condicionado':    'fa-solid fa-snowflake',
  'Banheiro Privativo': 'fa-solid fa-shower',
  'Estacionamento':     'fa-solid fa-square-p',
  'Wi-fi':              'fa-solid fa-wifi'
};

/* ===================================================
   GRID — funções compartilhadas com modelos.html
   =================================================== */
function goToProfile(modelId) {
  window.location.href = `perfil-modelo.html?id=${modelId}`;
}

function createCardHTML(model) {
  return `
    <div class="model-card-modern" onclick="goToProfile(${model.id})">
      <img src="${model.Image}" alt="${model.name}" loading="lazy">
      ${model.vip ? `<div class="badge-vip-card">VIP</div>` : ''}
      ${model.verificado ? `
        <div class="badge-verified-modern">
          <i class="fa-solid fa-circle-check"></i> VERIFICADA
        </div>` : ''}
      <div class="card-info-overlay">
        ${model.disponivel ? `<div class="card-status-dot"><span class="dot-pulse"></span> Disponível</div>` : ''}
        <h3 class="model-name-modern">${model.name}</h3>
        <div class="model-location-modern">
          <i class="fa-solid fa-location-dot"></i> ${model.city}
        </div>
        <div class="model-price-modern">R$ ${model.valor_hora}/hora</div>
      </div>
    </div>`;
}

function applyFilter(lista, filtro) {
  switch (filtro) {
    case 'disponiveis':  return lista.filter(m => m.disponivel);
    case 'vip':          return lista.filter(m => m.vip);
    case 'verificadas':  return lista.filter(m => m.verificado);
    case 'porto-alegre': return lista.filter(m => m.city === 'Porto Alegre');
    case 'menor-preco':  return [...lista].sort((a, b) => a.valor_hora - b.valor_hora);
    case 'maior-preco':  return [...lista].sort((a, b) => b.valor_hora - a.valor_hora);
    default:             return lista;
  }
}

function renderModelsGrid(filtro = 'todos') {
  const grid = document.getElementById('models-grid');
  if (!grid) return;
  const lista = applyFilter([...data], filtro);
  grid.innerHTML = lista.length === 0
    ? '<p style="text-align:center;color:#999;padding:40px;grid-column:1/-1;">Nenhuma modelo encontrada.</p>'
    : lista.map(createCardHTML).join('');
}

/* ===== Shorts ===== */
const shortsData = [
  { video: 'videos/modelo1.mp4', title: 'Valentina' },
  { video: 'videos/modelo2.mp4', title: 'Rafaela' },
  { video: 'videos/modelo3.mp4', title: 'Luna' },
  { video: 'videos/modelo4.mp4', title: 'Isabela' }
];

function renderShorts() {
  const container = document.querySelector('.shorts-carousel');
  if (!container) return;
  container.innerHTML = '';
  shortsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'short-card';
    card.innerHTML = `<video src="${item.video}" muted loop playsinline preload="metadata"></video><h3>${item.title}</h3>`;
    container.appendChild(card);
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  });
}

/* ===================================================
   PERFIL DINÂMICO — carregado por perfil-modelo.html
   =================================================== */
function loadProfile() {
  const id    = parseInt(new URLSearchParams(window.location.search).get('id'));
  const model = data.find(m => m.id === id);

  if (!model) {
    document.body.innerHTML = `
      <div style="text-align:center;padding:80px 20px;font-family:sans-serif;">
        <h2 style="color:#EB5A5D">Perfil não encontrado</h2>
        <a href="index.html" style="color:#28616C">← Voltar ao início</a>
      </div>`;
    return;
  }

  document.title = `${model.name} — Perfil | Erótica`;

  const set = (sel, val, prop = 'textContent') =>
    document.querySelectorAll(sel).forEach(el => el[prop] = val);
  const setHTML = (sel, val) =>
    document.querySelectorAll(sel).forEach(el => el.innerHTML = val);
  const el = id => document.getElementById(id);

  /* Nome + meta */
  set('.profile-name-desktop, .profile-name-mobile', model.name);
  setHTML('.profile-meta-desktop, .profile-meta-mobile',
    `<i class="fa-solid fa-location-dot"></i> ${model.city} — ${model.age} anos`);

  /* Foto */
  const mp = el('mainPhoto');
  if (mp) { mp.src = model.Image; mp.alt = model.name; }

  /* Badges */
  const bv = el('badgeVerificado');
  if (bv) bv.style.display = model.verificado ? 'block' : 'none';

  const bd = el('badgeDisponivel');
  if (bd) {
    bd.textContent = model.disponivel ? 'DISPONÍVEL AGORA' : 'INDISPONÍVEL';
    bd.style.borderLeftColor = model.disponivel ? '#25D366' : '#EB5A5D';
  }

  const bvip = el('badgeVip');
  if (bvip) bvip.style.display = model.vip ? 'block' : 'none';

  /* Likes */
  const lc = el('like-count');
  if (lc) lc.textContent = model.likes.toLocaleString('pt-BR');

  /* Galeria de fotos */
  const tg = el('thumbGrid');
  if (tg) tg.innerHTML = model.gallery.map(src =>
    `<img src="${src}" alt="foto" onclick="updatePhoto('${src}')" loading="lazy">`
  ).join('');

  /* Vídeos */
  const vg = el('videoGrid');
  if (vg) {
    if (model.videos.length === 0) {
      vg.closest('.video-section').style.display = 'none';
    } else {
      vg.innerHTML = model.videos.map(v =>
        `<div class="video-item"><video src="${v.src}" ${v.poster ? `poster="${v.poster}"` : ''} controls></video></div>`
      ).join('');
    }
  }

  /* Vídeo verificação */
  const vs = el('verifSection');
  if (vs) {
    if (!model.videoVerificacao) {
      vs.style.display = 'none';
    } else {
      vs.querySelector('video').src = model.videoVerificacao;
    }
  }

  /* WhatsApp */
  document.querySelectorAll('.btn-whatsapp-profile')
    .forEach(btn => btn.href = `https://wa.me/${model.whatsapp}`);

  /* Atendimento */
  const av = el('atendValue');
  if (av) av.textContent = model.atendimento;

  /* Preços */
  const pt = el('priceTable');
  if (pt) pt.innerHTML = model.precos.map(p =>
    `<div class="price-row-item ${p.destaque ? 'highlighted' : ''}">
      <span>${p.label}</span><strong>${p.valor}</strong>
    </div>`
  ).join('');

  /* Pagamentos */
  const pg = el('payGrid');
  if (pg) pg.innerHTML = model.pagamentos.map(p => {
    const info = pagamentoIcons[p] || { icon: 'fa-solid fa-circle', label: p };
    return `<div class="pay-item"><i class="${info.icon}"></i><span>${info.label}</span></div>`;
  }).join('');

  /* Bio */
  const bio = el('profileBio');
  if (bio) bio.textContent = model.bio;

  /* Serviços */
  const st = el('servicosTags');
  if (st) st.innerHTML = model.servicos.map(s => `<span>${s}</span>`).join('');

  /* Características físicas */
  const phys = el('physGrid');
  if (phys) {
    phys.innerHTML = [
      { label: 'Idade',  val: `${model.age} anos` },
      { label: 'Altura', val: model.height },
      { label: 'Peso',   val: model.weight },
      { label: 'Cabelo', val: model.hair },
      { label: 'Olhos',  val: model.eyes },
      { label: 'Cidade', val: model.city }
    ].map(s => `<div class="p-item"><span>${s.label}</span><strong>${s.val}</strong></div>`).join('');
  }

  /* Horários */
  const sg = el('schedGrid');
  if (sg) sg.innerHTML = model.horarios.map(h =>
    `<div class="s-item"><span>${h.dia}</span><strong>${h.hora}</strong></div>`
  ).join('');

  /* Local */
  const la = el('locAddress');
  if (la) la.innerHTML = `<i class="fa-solid fa-house-chimney"></i> <strong>${model.city}</strong> — ${model.bairro}`;

  const cg = el('comfortGrid');
  if (cg) cg.innerHTML = model.comodidades.map(c => {
    const icon = comodidadeIcons[c] || 'fa-solid fa-check';
    return `<div class="comfort-tag"><i class="${icon}"></i> ${c}</div>`;
  }).join('');

  /* Avaliações */
  const rn = el('reviewsNota');
  if (rn) rn.textContent = `(${model.nota.toFixed(1)} de 5)`;

  const se = el('starsEl');
  if (se) {
    const full = Math.floor(model.nota);
    const half = model.nota % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    se.innerHTML =
      '<i class="fa-solid fa-star"></i>'.repeat(full) +
      (half ? '<i class="fa-solid fa-star-half-stroke"></i>' : '') +
      '<i class="fa-regular fa-star"></i>'.repeat(empty);
  }

  const rl = el('reviewsList');
  if (rl) rl.innerHTML = model.avaliacoes.map(r =>
    `<div class="review-item">
      <div class="review-header">
        <strong>${r.autor}</strong>
        <span class="review-date">${r.tempo}</span>
      </div>
      <p>"${r.texto}"</p>
    </div>`
  ).join('');
}

/* ===== Inicialização (index.html) ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderModelsGrid();
  renderShorts();

  const btnSobre = document.getElementById('btn-sobre');
  if (btnSobre) {
    btnSobre.addEventListener('click', e => {
      e.preventDefault();
      const s = document.querySelector('.about');
      if (!s) return;
      s.classList.toggle('active');
      if (s.classList.contains('active')) s.scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.icon-card').forEach(c =>
    c.addEventListener('click', () => c.classList.toggle('active'))
  );

  const closeBtn = document.getElementById('closeModal');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
});


