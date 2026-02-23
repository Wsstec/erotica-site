/* ================= Dados de Modelos ================= */
const data = [
  {
    id: 1,
    name: 'Luna Andrade',
    city: 'Porto Alegre',
    age: 25,
    height: 170,
    thumb: "img/models02.jpeg",
    tags: ['Morena', 'Tatuada', 'Acompanhante'],
    verificado: true,
    vip: false,
    disponivel: true,
    valor_hora: 300,
    servicos: ['Acompanhante', 'Jantar', 'Viagens'],
    bio: 'Modelo de alto padrão, especialista em acompanhamento discreto.', lat: -30.03, lng: -51.22
  },
  {
    id: 2,
    name: 'Valentina Rocha',
    city: 'Caxias do Sul',
    age: 28,
    height: 165,
    thumb: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60',
    tags: ['Loira', 'VIP', 'Massagem'],
    verificado: true,
    vip: true,
    disponivel: true,
    valor_hora: 450,
    servicos: ['Massagem', 'VIP', 'Fetiche'],
    bio: 'Atendimento exclusivo com foco em massagens relaxantes.', lat: -29.17, lng: -51.18
  },
  {
    id: 3,
    name: 'Sofia Menezes',
    city: 'Pelotas',
    age: 22,
    height: 168,
    thumb: 'https://images.unsplash.com/photo-1594824476967-48c8b9642737?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena Clara', 'Universitária'],
    verificado: false,
    vip: false,
    disponivel: true,
    valor_hora: 250,
    servicos: ['Universitária', 'Hotel', 'Eventos'],
    bio: 'Companhia discreta para eventos e viagens a negócios.', lat: -31.77, lng: -52.33
  },
  {
    id: 4,
    name: 'Camila Duarte',
    city: 'Santa Maria',
    age: 27,
    height: 172,
    thumb: 'https://images.unsplash.com/photo-1614289321713-d8b14bfb47e8?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena', 'Modelo'],
    verificado: true,
    vip: false,
    disponivel: false,
    valor_hora: 350,
    servicos: ['Modelo', 'Discreta', 'Jantar'],
    bio: 'Elegância e sofisticação em todos os encontros.', lat: -29.69, lng: -53.80
  },
  {
    id: 5,
    name: 'Isadora Lima',
    city: 'Novo Hamburgo',
    age: 24,
    height: 166,
    thumb: 'https://images.unsplash.com/photo-1603791452906-bb9d88f6fbc6?auto=format&fit=crop&w=800&q=60',
    tags: ['Ruiva', 'VIP'],
    verificado: true,
    vip: true,
    disponivel: true,
    valor_hora: 500,
    servicos: ['Ruiva', 'VIP', 'Luxo'],
    bio: 'Personalidade vibrante e atendimento inesquecível.', lat: -29.69, lng: -51.13
  },
  {
    id: 6,
    name: 'Beatriz Faria',
    city: 'Gravataí',
    age: 30,
    height: 175,
    thumb: 'https://images.unsplash.com/photo-1614287146579-64f19af244d4?auto=format&fit=crop&w=800&q=60',
    tags: ['Loira', 'Experiente'],
    verificado: false,
    vip: false,
    disponivel: true,
    valor_hora: 280,
    servicos: ['Experiente', 'Companhia', 'Viagens'],
    bio: 'Experiência e profissionalismo em todos os serviços.', lat: -29.94, lng: -50.99
  }
  // Adicione os outros modelos seguindo este mesmo padrão...
];

/* ================= Elementos DOM ================= */
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

/* ================= Função de Criação do Card ================= */
function createCardHTML(model) {
    // Ajuste para usar 'city' (como está no seu array)
    const localidade = model.city || model.cidade || "Não informado";
    const servicos = model.servicos || model.tags || [];
    const servicosVisiveis = servicos.slice(0, 3).map(s => `<span class="service-tag">${s}</span>`).join('');
    const servicosExtras = servicos.length > 3 ? `<span class="service-tag">+${servicos.length - 3}</span>` : '';

    return `
        <div class="card-new" onclick="openModal(${model.id})">
            <div class="image-container">
                <img src="${model.thumb}" alt="${model.name}">
                <div class="image-overlay"></div>
                
                <div class="badge-container">
                    ${model.verificado ? `
                        <div class="badge-verified">
                            <i class="fa-solid fa-circle-check"></i> VERIFICADA
                        </div>` : ''}
                    ${model.vip ? `<div class="badge-vip">VIP</div>` : ''}
                </div>

                <button class="heart-btn" onclick="event.stopPropagation();">
                    <i class="fa-regular fa-heart"></i>
                </button>

                ${model.disponivel ? `
                    <div class="status-available">
                        <div class="dot-pulse"></div>
                        <span>DISPONÍVEL</span>
                    </div>` : ''}
            </div>

            <div class="info-section">
                <div class="info-header">
                    <div>
                        <h3>${model.name}</h3>
                        <div class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            ${localidade}
                        </div>
                    </div>
                    ${model.age ? `<span class="price-unit" style="color: #666">${model.age} anos</span>` : ''}
                </div>

                <div class="services-preview">
                    ${servicosVisiveis}
                    ${servicosExtras}
                </div>

                ${model.valor_hora ? `
                    <div class="price-tag">
                        <span class="price-value">R$ ${model.valor_hora}</span>
                        <span class="price-unit">/hora</span>
                    </div>` : ''}
            </div>
        </div>
    `;
}

/* ================= Renderização das Linhas ================= */
function renderTwoRows() {
 const row1 = document.getElementById('carousel-row-1');
    const row2 = document.getElementById('carousel-row-2');
    
    if (!row1 || !row2) return;

    // 1. Embaralha e seleciona apenas 8 modelos (em vez de 12)
    const shuffledData = [...data]
        .sort(() => 0.5 - Math.random())
        .slice(0, 8); 

    row1.innerHTML = '';
    row2.innerHTML = '';

    // 2. Divide em 2 grupos de 4
    const halfIndex = 4; // Agora o ponto de corte é fixo em 4
    const dataRow1 = shuffledData.slice(0, halfIndex); // Primeiros 4
    const dataRow2 = shuffledData.slice(halfIndex);    // Últimos 4

    // 3. Renderiza nos containers
    dataRow1.forEach(model => row1.insertAdjacentHTML('beforeend', createCardHTML(model)));
    dataRow2.forEach(model => row2.insertAdjacentHTML('beforeend', createCardHTML(model)));
    
    console.log("Início renderizado com 8 modelos aleatórios (4 por linha).");
}

/* ================= Shorts ================= */
const shortsData = [
    { video: 'videos/modelo1.mp4', title: 'Valentina' },
    { video: 'videos/modelo2.mp4', title: 'Rafaela' },
    { video: 'videos/modelo3.mp4', title: 'Luna' }
];

function renderShorts() {
    const shortsContainer = document.querySelector('.shorts-carousel');
    if (!shortsContainer) return;

    shortsContainer.innerHTML = '';
    const randomShorts = [...shortsData].sort(() => 0.5 - Math.random()).slice(0, 6);

    randomShorts.forEach(item => {
        const card = document.createElement('div');
        card.className = 'short-card';
        card.innerHTML = `
            <video src="${item.video}" muted loop playsinline preload="metadata"></video>
            <h3>${item.title}</h3>
        `;
        shortsContainer.appendChild(card);
        
        const videoElement = card.querySelector('video');
        videoElement.addEventListener('loadeddata', () => {
            videoElement.play().catch(() => console.log("Autoplay blocked"));
        }, { once: true });
    });
}

/* ================= Navegação ================= */
function scrollCarousels(direction) {
    const row1 = document.getElementById('carousel-row-1');
    const row2 = document.getElementById('carousel-row-2');
    const scrollAmount = 350;
    const scrollValue = direction === 'next' ? scrollAmount : -scrollAmount;

    if (row1) row1.scrollBy({ left: scrollValue, behavior: 'smooth' });
    if (row2) row2.scrollBy({ left: scrollValue, behavior: 'smooth' });
}

document.getElementById('prevBtn')?.addEventListener('click', () => scrollCarousels('prev'));
document.getElementById('nextBtn')?.addEventListener('click', () => scrollCarousels('next'));

/* ================= Modal ================= */
function openModal(id) {
    const m = data.find(x => x.id === id);
    if (!m) return;

    document.getElementById('modalName').textContent = m.name;
    document.getElementById('modalDetails').textContent = `${m.city} • ${m.age} anos • ${m.height}cm`;
    document.getElementById('modalBio').textContent = m.bio || 'Descrição não disponível.';
    document.getElementById('modalTags').innerHTML = m.tags.map(t => `<div class='tag'>${t}</div>`).join('');
    document.getElementById('modalImg').style.backgroundImage = `url(${m.thumb})`;

    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

if(closeModalBtn) closeModalBtn.onclick = closeModal;
window.onclick = (event) => { if (event.target == modal) closeModal(); }

/* ================= Inicialização ================= */
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer || typeof L === 'undefined') return;

    const map = L.map('map').setView([-30.5, -52.5], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    data.filter(p => p.lat && p.lng).forEach(p => {
        const marker = L.marker([p.lat, p.lng]).addTo(map);
        marker.bindPopup(`
            <b>${p.name}</b><br>${p.city}<br>
            <img src='${p.thumb}' width='100' style='border-radius:8px;margin:5px 0;'><br>
            <button onclick='openModal(${p.id})' style='background:#EB5A5D;color:white;border:0;padding:5px 10px;border-radius:4px;cursor:pointer;'>Ver perfil</button>
        `);
    });
}

window.onload = () => {
    renderTwoRows();
    renderShorts();
    initMap();
};