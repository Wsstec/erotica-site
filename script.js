/* ================= Dados de Modelos ================= */
const data = [
  {
    id: 1,
    name: 'Luna Andrade',
    city: 'Porto Alegre',
    age: 25,
    height: 170,
    thumb: 'https://images.unsplash.com/photo-1601987077953-c9fdcfb6c35a?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena', 'Tatuada', 'Acompanhante']
  },
  {
    id: 2,
    name: 'Valentina Rocha',
    city: 'Caxias do Sul',
    age: 28,
    height: 165,
    thumb: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60',
    tags: ['Loira', 'VIP', 'Massagem']
  },
  {
    id: 3,
    name: 'Sofia Menezes',
    city: 'Pelotas',
    age: 22,
    height: 168,
    thumb: 'https://images.unsplash.com/photo-1594824476967-48c8b9642737?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena Clara', 'Universitária', 'Atendimento Hotel']
  },
  {
    id: 4,
    name: 'Camila Duarte',
    city: 'Santa Maria',
    age: 27,
    height: 172,
    thumb: 'https://images.unsplash.com/photo-1614289321713-d8b14bfb47e8?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena', 'Modelo', 'Discreta']
  },
  {
    id: 5,
    name: 'Isadora Lima',
    city: 'Novo Hamburgo',
    age: 24,
    height: 166,
    thumb: 'https://images.unsplash.com/photo-1603791452906-bb9d88f6fbc6?auto=format&fit=crop&w=800&q=60',
    tags: ['Ruiva', 'Atendimento Domiciliar', 'VIP']
  },
  {
    id: 6,
    name: 'Beatriz Faria',
    city: 'Gravataí',
    age: 30,
    height: 175,
    thumb: 'https://images.unsplash.com/photo-1614287146579-64f19af244d4?auto=format&fit=crop&w=800&q=60',
    tags: ['Loira', 'Experiente', 'Companhia']
  }
];

/* ================= Elementos DOM ================= */
const carousel = document.getElementById('carousel');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

// Função para construir o HTML de um único card
function createCardHTML(model) {
    // Cria as tags
    const tagsHTML = model.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
        <div class="card" data-id="${model.id}">
            <div class="thumb" style="background-image: url('${model.imageUrl}');"></div>
            <div class="meta">
                <span class="name">${model.name}</span>
            </div>
            <p class="info">${model.info}</p>
            <div class="tags">${tagsHTML}</div>
            <button class="pill">Ver Perfil</button>
        </div>
    `;
}

function renderTwoRows() {
    // 1. Encontra os novos containers de rolagem individuais
    const row1 = document.getElementById('carousel-row-1');
    const row2 = document.getElementById('carousel-row-2');
    
    // Verifica se os dados existem e se os containers foram encontrados
    if (!data || data.length === 0 || !row1 || !row2) {
        console.error('Dados de modelo não encontrados ou containers de linha ausentes.');
        return;
    }

    // 2. Limpa os containers (necessário se a função for chamada novamente)
    row1.innerHTML = '';
    row2.innerHTML = '';

    // 3. DIVISÃO CRÍTICA DOS DADOS: Encontra o índice do meio
    const halfIndex = Math.ceil(data.length / 2);
    
    // Cria dois novos arrays:
    const dataRow1 = data.slice(0, halfIndex); // Primeira metade
    const dataRow2 = data.slice(halfIndex);    // Segunda metade

    // 4. Renderiza a PRIMEIRA LINHA
    dataRow1.forEach(model => {
        row1.insertAdjacentHTML('beforeend', createCardHTML(model));
    });

    // 5. Renderiza a SEGUNDA LINHA
    dataRow2.forEach(model => {
        row2.insertAdjacentHTML('beforeend', createCardHTML(model));
    });
}

// Certifique-se de chamar esta nova função quando o DOM estiver carregado:
// Exemplo: window.onload = renderTwoRows;

/* ================= Renderiza Carrossel com 6 modelos aleatórios ================= */
function render() {
  carousel.innerHTML = '';

  // Embaralha os modelos e pega 6 aleatórios
  const destaque = [...data]
    .sort(() => 0.5 - Math.random()) // embaralha
    .slice(0, 6); // seleciona os 6 primeiros

  destaque.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class='thumb' style='background-image:url(${p.thumb})'></div>
      <div class='meta'>
        <div>
          <div class='name'>${p.name}</div>
          <div class='info'>${p.city} • ${p.age} anos • ${p.height}cm</div>
        </div>
        <button class='pill' data-id='${p.id}'>Ver</button>
      </div>
      <div class='tags'>${p.tags.map(t=>`<div class='tag'>${t}</div>`).join('')}</div>
    `;
    carousel.appendChild(card);
  });
}
/* ================= Fim Render Carrossel Modelos ================= */

/* ================= Dados de Shorts (Exemplo) ================= */
// CRIE UM ARRAY DE DADOS PARA OS SHORTS (Se não tiver, use um mockup)
const shortsData = [
  { video: 'video/modelo1.mp4', title: 'Luna em Ação' },
  { video: 'video/modelo2.mp4', title: 'Bastidores com Gabi' },
  { video: 'caminho/video-3.mp4', title: 'Novo Ensaio de Bia' },
  { video: 'caminho/video-4.mp4', title: 'Momento Relax' },
  { video: 'caminho/video-5.mp4', title: 'Preview VIP' },
  { video: 'caminho/video-6.mp4', title: 'Novidade do Mês' },
  { video: 'caminho/video-7.mp4', title: 'Making Off' },
  // ... adicione mais itens para garantir que a randomização funcione ...
];

/* ================= Renderiza Shorts Randômicos ================= */
function renderShorts() {
    const shortsContainer = document.querySelector('.shorts-carousel');
    if (!shortsContainer) return; // Sai se o container não for encontrado
    
    shortsContainer.innerHTML = '';
    
    // 1. Embaralha os dados
    const randomShorts = [...shortsData]
        .sort(() => 0.5 - Math.random()) // Embaralha (Randomiza)
        .slice(0, 6); // 2. Seleciona exatamente 6 itens
    
    // 3. Renderiza os 6 cards
    randomShorts.forEach(item => {
        const card = document.createElement('div');
        card.className = 'short-card';
        card.innerHTML = `
            <video src="${item.video || 'video/placeholder.mp4'}" muted loop playsinline autoplay></video>
            <h3>${item.title}</h3>
        `;
        shortsContainer.appendChild(card);
    });
}

/* ================= Navegação do Carrossel ================= */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

/* ================= Abrir Modal ================= */
function openModal(id) {
  const m = data.find(x => x.id === id);
  if (!m) return;

  document.getElementById('modalName').textContent = m.name;
  document.getElementById('modalDetails').textContent = `${m.city} • ${m.age} anos • ${m.height}cm`;
  document.getElementById('modalBio').textContent = m.bio;
  document.getElementById('modalTags').innerHTML = m.tags.map(t => `<div class='tag'>${t}</div>`).join('');
  document.getElementById('modalImg').style.backgroundImage = `url(${m.thumb})`;

  modal.style.display = 'flex';
}

/* ================= Fechar Modal ================= */
function closeModal() {
  modal.style.display = 'none';
}

/* ================= Eventos ================= */
// Abrir modal ao clicar no botão "Ver"
document.addEventListener('click', e => {
  const btn = e.target.closest('button[data-id]');
  if (btn) {
    const id = Number(btn.dataset.id);
    openModal(id);
  }
});

// Fechar modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', closeModal);

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

/* ================= Menu Hamburger ================= */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
});

/* ================= Inicializar Grid ================= */
render();

/* ================= Inicializar Mapa ================= */
const map = L.map('map').setView([-30.5, -52.5], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Adicionar marcadores para cada modelo
data.forEach(p => {
  const marker = L.marker([p.lat, p.lng]).addTo(map);
  marker.bindPopup(`
    <b>${p.name}</b><br>
    ${p.city}<br>
    <img src='${p.thumb}' width='100' style='margin-top:5px;border-radius:8px;'><br>
    <button onclick='openModal(${p.id})' style='margin-top:5px;background:#c8102e;color:white;border:0;padding:5px 10px;border-radius:6px;cursor:pointer;'>Ver perfil</button>
  `);
});





/* ================= Fim do script.js ================= */

