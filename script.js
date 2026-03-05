/* ================= Dados de Modelos ================= */
const data = [
  { id: 1, name: 'Luna Andrade', city: 'Porto Alegre', age: 25, height: 170, Image:"img/model01.jpg", tags: ['Morena', 'Tatuada', 'Acompanhante'], verificado: true, vip: false, disponivel: true, valor_hora: 300, bio: 'Modelo de alto padrão, especialista em acompanhamento discreto.', lat: -30.03, lng: -51.22 },
  { id: 2, name: 'Valentina Rocha', city: 'Caxias do Sul', age: 28, height: 165, Image:"img/model02.jpg", tags: ['Loira', 'VIP', 'Massagem'], verificado: true, vip: true, disponivel: true, valor_hora: 450, bio: 'Atendimento exclusivo com foco em massagens relaxantes.', lat: -29.17, lng: -51.18 },
  { id: 3, name: 'Sofia Menezes', city: 'Pelotas', age: 22, height: 168, Image:"img/model03.jpg", tags: ['Morena Clara', 'Universitária'], verificado: false, vip: false, disponivel: true, valor_hora: 250, bio: 'Companhia discreta para eventos e viagens a negócios.', lat: -31.77, lng: -52.33 },
  { id: 4, name: 'Camila Duarte', city: 'Santa Maria', age: 27, height: 172, Image:"img/model04.jpg", tags: ['Morena', 'Modelo'], verificado: true, vip: false, disponivel: false, valor_hora: 350, bio: 'Elegância e sofisticação em todos os encontros.', lat: -29.69, lng: -53.80 },
  { id: 5, name: 'Isadora Lima', city: 'Novo Hamburgo', age: 24, height: 166, Image:"img/model05.jpg", tags: ['Ruiva', 'VIP'], verificado: true, vip: true, disponivel: true, valor_hora: 500, bio: 'Personalidade vibrante e atendimento inesquecível.', lat: -29.69, lng: -51.13 },
  { id: 6, name: 'Beatriz Faria', city: 'Cachoeirinha', age: 22, height: 170, Image:"img/model06.jpg", tags: ['Ruiva', 'Experiente'], verificado: false, vip: false, disponivel: true, valor_hora: 250, bio: 'Experiência e profissionalismo em todos os serviços.', lat: -29.94, lng: -50.99 },
  { id: 7, name: 'Amanda Santos', city: 'Gravataí', age: 30, height: 175, Image:"img/model07.jpg", tags: ['Loira', 'Experiente'], verificado: false, vip: false, disponivel: true, valor_hora: 280, bio: 'Experiência e profissionalismo em todos os serviços.', lat: -29.94, lng: -50.99 },
  { id: 8, name: 'Beatriz Faria', city: 'Gravataí', age: 30, height: 175, Image:"img/model08.jpg", tags: ['Loira', 'Experiente'], verificado: false, vip: false, disponivel: true, valor_hora: 280, bio: 'Experiência e profissionalismo em todos os serviços.', lat: -29.94, lng: -50.99 }
];

/* ================= Função de Navegação para Perfil ================= */
function goToProfile(modelId) {
    const model = data.find(m => m.id === modelId);
    if (!model) return;

    const params = new URLSearchParams({
        nome: model.name,
        foto: model.Image,
        cidade: model.city,
        idade: model.age
    });
    window.location.href = `perfil-modelo.html?${params.toString()}`;
}

/* ================= Função de Criação do Card ================= */
// Adicionei o onclick="goToProfile" diretamente aqui
function createCardHTML(model) {
    return `
    <div class="model-card-modern" onclick="goToProfile(${model.id})">
        <img src="${model.Image}" alt="${model.name}">
        
        ${model.verificado ? `
            <div class="badge-verified-modern">
                <i class="fa-solid fa-circle-check"></i> VERIFICADA
            </div>
        ` : ''}

        <div class="card-info-overlay">
            <h3 class="model-name-modern">${model.name}</h3>
            <div class="model-location-modern">
                <i class="fa-solid fa-location-dot"></i> ${model.city}
            </div>
            <div class="model-price-modern">
                R$ ${model.valor_hora}/hora
            </div>
        </div>
    </div>`;
}

/* ================= Renderização do Grid ================= */
function renderModelsGrid() {
    const grid = document.getElementById('models-grid');
    if (!grid) return;

    // Pega as modelos do seu array 'data'
    grid.innerHTML = '';
    data.forEach(model => {
        grid.insertAdjacentHTML('beforeend', createCardHTML(model));
    });
}

/* ================= Shorts (Carrossel) ================= */
const shortsData = [
    { video: 'videos/modelo1.mp4', title: 'Valentina' },
    { video: 'videos/modelo2.mp4', title: 'Rafaela' },
    { video: 'videos/modelo3.mp4', title: 'Luna' },
    { video: 'videos/modelo4.mp4', title: 'Isabela' }
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
        card.onmouseover = () => videoElement.play();
        card.onmouseout = () => videoElement.pause();
    });
}

/* ================= Eventos e Inicialização ================= */
document.addEventListener('DOMContentLoaded', () => {
    renderModelsGrid();
    renderShorts();

    // Botão Sobre
    const btnSobre = document.getElementById('btn-sobre');
    if(btnSobre) {
        btnSobre.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionSobre = document.querySelector('.about');
            sectionSobre.classList.toggle('active');
            if (sectionSobre.classList.contains('active')) {
                sectionSobre.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Ícones Interativos
    const iconCards = document.querySelectorAll('.icon-card');
    iconCards.forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('active'));
    });
});