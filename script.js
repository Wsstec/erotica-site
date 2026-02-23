/* ================= Dados de Modelos ================= */
const data = [
  { id: 1, name: 'Luna Andrade', city: 'Porto Alegre', age: 25, height: 170, thumb: "img/models02.jpeg", tags: ['Morena', 'Tatuada', 'Acompanhante'], verificado: true, vip: false, disponivel: true, valor_hora: 300, bio: 'Modelo de alto padrão, especialista em acompanhamento discreto.', lat: -30.03, lng: -51.22 },
  { id: 2, name: 'Valentina Rocha', city: 'Caxias do Sul', age: 28, height: 165, thumb: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60', tags: ['Loira', 'VIP', 'Massagem'], verificado: true, vip: true, disponivel: true, valor_hora: 450, bio: 'Atendimento exclusivo com foco em massagens relaxantes.', lat: -29.17, lng: -51.18 },
  { id: 3, name: 'Sofia Menezes', city: 'Pelotas', age: 22, height: 168, thumb: 'https://images.unsplash.com/photo-1594824476967-48c8b9642737?auto=format&fit=crop&w=800&q=60', tags: ['Morena Clara', 'Universitária'], verificado: false, vip: false, disponivel: true, valor_hora: 250, bio: 'Companhia discreta para eventos e viagens a negócios.', lat: -31.77, lng: -52.33 },
  { id: 4, name: 'Camila Duarte', city: 'Santa Maria', age: 27, height: 172, thumb: 'https://images.unsplash.com/photo-1614289321713-d8b14bfb47e8?auto=format&fit=crop&w=800&q=60', tags: ['Morena', 'Modelo'], verificado: true, vip: false, disponivel: false, valor_hora: 350, bio: 'Elegância e sofisticação em todos os encontros.', lat: -29.69, lng: -53.80 },
  { id: 5, name: 'Isadora Lima', city: 'Novo Hamburgo', age: 24, height: 166, thumb: 'https://images.unsplash.com/photo-1603791452906-bb9d88f6fbc6?auto=format&fit=crop&w=800&q=60', tags: ['Ruiva', 'VIP'], verificado: true, vip: true, disponivel: true, valor_hora: 500, bio: 'Personalidade vibrante e atendimento inesquecível.', lat: -29.69, lng: -51.13 },
  { id: 6, name: 'Beatriz Faria', city: 'Gravataí', age: 30, height: 175, thumb: 'https://images.unsplash.com/photo-1614287146579-64f19af244d4?auto=format&fit=crop&w=800&q=60', tags: ['Loira', 'Experiente'], verificado: false, vip: false, disponivel: true, valor_hora: 280, bio: 'Experiência e profissionalismo em todos os serviços.', lat: -29.94, lng: -50.99 }
  // Adicione mais modelos aqui para completar os 8...
];

/* ================= Elementos DOM ================= */
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

/* ================= Função de Criação do Card ================= */
function createCardHTML(model) {
    const localidade = model.city || "Não informado";
    const tags = model.tags || [];
    const tagsVisiveis = tags.slice(0, 3).map(t => `<span class="service-tag">${t}</span>`).join('');

    return `
        <div class="card-new" onclick="openModal(${model.id})">
            <div class="image-container">
                <img src="${model.thumb}" alt="${model.name}">
                <div class="image-overlay"></div>
                <div class="badge-container">
                    ${model.verificado ? `<div class="badge-verified"><i class="fa-solid fa-circle-check"></i> VERIFICADA</div>` : ''}
                    ${model.vip ? `<div class="badge-vip">VIP</div>` : ''}
                </div>
                <button class="heart-btn" onclick="event.stopPropagation();"><i class="fa-regular fa-heart"></i></button>
                ${model.disponivel ? `<div class="status-available"><div class="dot-pulse"></div><span>DISPONÍVEL</span></div>` : ''}
            </div>
            <div class="info-section">
                <div class="info-header">
                    <div>
                        <h3>${model.name}</h3>
                        <div class="location"><i class="fa-solid fa-location-dot"></i> ${localidade}</div>
                    </div>
                    <span class="price-unit" style="color: #666">${model.age} anos</span>
                </div>
                <div class="services-preview">${tagsVisiveis}</div>
                <div class="price-tag">
                    <span class="price-value">R$ ${model.valor_hora}</span>
                    <span class="price-unit">/hora</span>
                </div>
            </div>
        </div>`;
}

/* ================= Renderização do Grid Fixo (8 Cards) ================= */
function renderModelsGrid() {
    const grid = document.getElementById('models-grid');
    if (!grid) return;

    // Embaralha e pega 8 modelos
    const shuffledData = [...data].sort(() => 0.5 - Math.random()).slice(0, 8); 

    grid.innerHTML = '';
    shuffledData.forEach(model => {
        grid.insertAdjacentHTML('beforeend', createCardHTML(model));
    });
}

/* ================= Shorts (Carrossel Mantido) ================= */
const shortsData = [
    { video: 'videos/modelo1.mp4', title: 'Valentina' },
    { video: 'videos/modelo2.mp4', title: 'Rafaela' },
    { video: 'videos/modelo3.mp4', title: 'Luna' }
];

function renderShorts() {
    const shortsContainer = document.querySelector('.shorts-carousel');
    if (!shortsContainer) return;

    shortsContainer.innerHTML = '';
    shortsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'short-card';
        card.innerHTML = `
            <video src="${item.video}" muted loop playsinline preload="metadata"></video>
            <h3>${item.title}</h3>`;
        shortsContainer.appendChild(card);
        
        const videoElement = card.querySelector('video');
        videoElement.onmouseover = () => videoElement.play();
        videoElement.onmouseout = () => videoElement.pause();
    });
}

/* Navegação do Shorts */
document.getElementById('nextShorts')?.addEventListener('click', () => {
    document.querySelector('.shorts-carousel').scrollBy({ left: 300, behavior: 'smooth' });
});
document.getElementById('prevShorts')?.addEventListener('click', () => {
    document.querySelector('.shorts-carousel').scrollBy({ left: -300, behavior: 'smooth' });
});

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

if(closeModalBtn) closeModalBtn.onclick = () => modal.style.display = 'none';

/* ================= Inicialização ================= */
window.onload = () => {
    renderModelsGrid(); // Inicia os 8 cards fixos
    renderShorts();     // Inicia os vídeos
};