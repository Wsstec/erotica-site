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


/* ================= Navegação do Carrossel de SHORTS (NOVO CÓDIGO) ================= */
const shortsCarousel = document.querySelector('.shorts-carousel');
//  as variáveis novas shortsPrev e shortsNext para evitar conflito
const shortsPrev = document.querySelector('.shorts-carousel-container .prev');
const shortsNext = document.querySelector('.shorts-carousel-container .next');

if (shortsCarousel && shortsPrev && shortsNext) {
    
    // Calcula o valor da rolagem (largura do card + gap de 20px)
    const cardElement = shortsCarousel.querySelector('.short-card');
    let scrollAmount = 300; // Valor de rolagem padrão (aprox. 1 card)
    
    if (cardElement) {
         // Otimizado: Garante que a largura calculada é correta e legível
         const cardWidth = cardElement.offsetWidth;
         const gap = 20; // O gap que você definiu no CSS para os shorts
         scrollAmount = cardWidth + gap; 
    }

    // Se a rolagem do Models funcionar, o Shorts deve funcionar com essa lógica.
    shortsNext.addEventListener('click', () => {
        shortsCarousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        console.log("Next button clicked. Scrolling:", scrollAmount); // DEBUG
    });

    shortsPrev.addEventListener('click', () => {
        shortsCarousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        console.log("Prev button clicked. Scrolling:", -scrollAmount); // DEBUG
    });
}



/* ================= Fim do script.js ================= */

