/* ================= Dados de Modelos ================= */
/* ================= Dados de Modelos (12 Modelos para Teste) ================= */
const data = [
  {
    id: 1,
    name: 'Luna Andrade',
    city: 'Porto Alegre',
    age: 25,
    height: 170,
    thumb: "img/models02.jpeg",
    tags: ['Morena', 'Tatuada', 'Acompanhante'],
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
    bio: 'Atendimento exclusivo com foco em massagens relaxantes.', lat: -29.17, lng: -51.18
  },
  {
    id: 3,
    name: 'Sofia Menezes',
    city: 'Pelotas',
    age: 22,
    height: 168,
    thumb: 'https://images.unsplash.com/photo-1594824476967-48c8b9642737?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena Clara', 'Universitária', 'Atendimento Hotel'],
    bio: 'Companhia discreta para eventos e viagens a negócios.', lat: -31.77, lng: -52.33
  },
  {
    id: 4,
    name: 'Camila Duarte',
    city: 'Santa Maria',
    age: 27,
    height: 172,
    thumb: 'https://images.unsplash.com/photo-1614289321713-d8b14bfb47e8?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena', 'Modelo', 'Discreta'],
    bio: 'Elegância e sofisticação em todos os encontros.', lat: -29.69, lng: -53.80
  },
  {
    id: 5,
    name: 'Isadora Lima',
    city: 'Novo Hamburgo',
    age: 24,
    height: 166,
    thumb: 'https://images.unsplash.com/photo-1603791452906-bb9d88f6fbc6?auto=format&fit=crop&w=800&q=60',
    tags: ['Ruiva', 'Atendimento Domiciliar', 'VIP'],
    bio: 'Personalidade vibrante e atendimento inesquecível.', lat: -29.69, lng: -51.13
  },
  {
    id: 6,
    name: 'Beatriz Faria',
    city: 'Gravataí',
    age: 30,
    height: 175,
    thumb: 'https://images.unsplash.com/photo-1614287146579-64f19af244d4?auto=format&fit=crop&w=800&q=60',
    tags: ['Loira', 'Experiente', 'Companhia'],
    bio: 'Experiência e profissionalismo em todos os serviços.', lat: -29.94, lng: -50.99
  },
  // --- NOVOS 6 MODELOS PARA TESTE ---
  {
    id: 7,
    name: 'Helena Paz',
    city: 'Canoas',
    age: 23,
    height: 169,
    thumb: 'https://images.unsplash.com/photo-1609143926590-349079f82631?auto=format&fit=crop&w=800&q=60',
    tags: ['Oriental', 'Novata', 'Massagem Tântrica'],
    bio: 'Beleza exótica e serviços focados em relaxamento profundo.', lat: -29.92, lng: -51.18
  },
  {
    id: 8,
    name: 'Gabriela Silva',
    city: 'Porto Alegre',
    age: 26,
    height: 173,
    thumb: 'https://images.unsplash.com/photo-1594747761005-2b02e700a40d?auto=format&fit=crop&w=800&q=60',
    tags: ['Negra', 'Corpo Sarado', 'Viagens'],
    bio: 'Companhia para eventos e viagens nacionais e internacionais.', lat: -30.06, lng: -51.21
  },
  {
    id: 9,
    name: 'Renata Castro',
    city: 'Rio Grande',
    age: 32,
    height: 167,
    thumb: 'https://images.unsplash.com/photo-1594833246738-92a083236e88?auto=format&fit=crop&w=800&q=60',
    tags: ['Madura', 'Experiente', 'Atendimento Domiciliar'],
    bio: 'Profissionalismo e discrição para clientes exigentes.', lat: -32.03, lng: -52.09
  },
  {
    id: 10,
    name: 'Nicole Ferreira',
    city: 'Passo Fundo',
    age: 21,
    height: 162,
    thumb: 'https://images.unsplash.com/photo-1614287146579-64f19af244d4?auto=format&fit=crop&w=800&q=60',
    tags: ['Ruiva', 'Universitária', 'Fotos/Vídeos'],
    bio: 'Energia jovem e serviços sob demanda.', lat: -28.27, lng: -52.40
  },
  {
    id: 11,
    name: 'Carolina Mello',
    city: 'Lajeado',
    age: 29,
    height: 171,
    thumb: 'https://images.unsplash.com/photo-1614289321713-d8b14bfb47e8?auto=format&fit=crop&w=800&q=60',
    tags: ['Loira', 'Tatuada', 'VIP'],
    bio: 'Atendimento de luxo para clientes de alto padrão.', lat: -29.46, lng: -51.96
  },
  {
    id: 12,
    name: 'Duda Costa',
    city: 'Novo Hamburgo',
    age: 24,
    height: 168,
    thumb: 'https://images.unsplash.com/photo-1603791452906-bb9d88f6fbc6?auto=format&fit=crop&w=800&q=60',
    tags: ['Morena', 'Modelo', 'Companhia'],
    bio: 'Presença marcante e personalidade envolvente.', lat: -29.69, lng: -51.13
  }
];
// --- FIM DOS DADOS ---

/* ================= Elementos DOM ================= */
// O ID 'carousel' foi removido do HTML e não será mais usado
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

// Função para construir o HTML de um único card
function createCardHTML(model) {
    // Cria as tags
    // Adicionando city, age, e height para as informações do card
    const info = `${model.city} • ${model.age} anos • ${model.height}cm`;
    const tagsHTML = model.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
        <div class="card" data-id="${model.id}">
            <div class="thumb" style="background-image: url('${model.thumb}');"></div>
            <div class="meta">
                <span class="name">${model.name}</span>
                <button class='pill' data-id='${model.id}'>Ver</button>
            </div>
            <p class="info">${info}</p>
            <div class="tags">${tagsHTML}</div>
        </div>
    `;
}

/**
 * @description Renderiza 12 modelos aleatórios (6 por linha) nas duas linhas roláveis.
 */
function renderTwoRows() {
    const row1 = document.getElementById('carousel-row-1');
    const row2 = document.getElementById('carousel-row-2');
    
    if (!data || data.length === 0 || !row1 || !row2) {
        console.error('Dados de modelo não encontrados ou containers de linha ausentes.');
        return;
    }

    // CRÍTICO: 1. Embaralha e seleciona 12 modelos
    const shuffledData = [...data]
        .sort(() => 0.5 - Math.random()) // Embaralha o array
        .slice(0, 12); // Seleciona até 12 modelos (6 por linha)

    // 2. Limpa os containers
    row1.innerHTML = '';
    row2.innerHTML = '';

    // 3. DIVISÃO CRÍTICA DOS DADOS: Encontra o índice do meio do grupo de 12
    const totalModels = shuffledData.length;
    const halfIndex = Math.ceil(totalModels / 2); // Será 6 se houver 12 modelos

    // Cria dois novos arrays:
    const dataRow1 = shuffledData.slice(0, halfIndex); // Modelos para a Linha 1 (máx. 6)
    const dataRow2 = shuffledData.slice(halfIndex);    // Modelos para a Linha 2 (máx. 6)

    // 4. Renderiza a PRIMEIRA LINHA
    dataRow1.forEach(model => {
        row1.insertAdjacentHTML('beforeend', createCardHTML(model));
    });

    // 5. Renderiza a SEGUNDA LINHA
    dataRow2.forEach(model => {
        row2.insertAdjacentHTML('beforeend', createCardHTML(model));
    });
    
    console.log(`Carrossel Renderizado: ${dataRow1.length} cards na Linha 1 e ${dataRow2.length} na Linha 2, totalizando ${totalModels} modelos aleatórios.`);
}

// A função render() antiga foi removida.
/* ================= Fim Render Carrossel Modelos ================= */


/* ================= Dados de Shorts (Exemplo) ================= */
// CRIE UM ARRAY DE DADOS PARA OS SHORTS (Se não tiver, use um mockup)
const shortsData = [
  { video: 'videos/modelo1.mp4', title: 'Valentina' },
  { video: 'videos/modelo2.mp4', title: 'Rafaela' },
  { video: 'videos/modelo3.mp4', title: 'Luna' },
  { video: 'videos/modelo4.mp4', title: 'Isabella' },
  { video: 'videos/modelo5.mp4', title: 'Giovanna' },
  { video: 'videos/modelo6.mp4', title: 'Helena' },
  // ... adicione mais itens para garantir que a randomização funcione ...
];

/* ================= Renderiza Shorts Randômicos ================= */
function renderShorts() {
    const shortsContainer = document.querySelector('.shorts-carousel');
    if (!shortsContainer) return;

    shortsContainer.innerHTML = '';

    // 1. Embaralha e seleciona 6 itens
    const randomShorts = [...shortsData]
        .sort(() => 0.5 - Math.random()) 
        .slice(0, 6);

    // 2. Renderiza os 6 cards
    randomShorts.forEach(item => {
        const card = document.createElement('div');
        card.className = 'short-card';
        card.innerHTML = `
            <video 
                src="${item.video || 'videos/placeholder.mp4'}" 
                muted 
                loop 
                playsinline 
                preload="metadata"
            ></video>
            <h3>${item.title}</h3>
        `;
        shortsContainer.appendChild(card);
        
        // 🚨 NOVO: Garante o autoplay e evita travamento
        const videoElement = card.querySelector('video');
        videoElement.addEventListener('loadeddata', () => {
            // Tenta dar play no vídeo. O 'muted' é necessário para autoplay funcionar.
            videoElement.play().catch(error => {
                // Console.warn para o caso de o navegador bloquear o autoplay
                console.warn("Autoplay bloqueado pelo navegador.", error);
            });
        }, { once: true });
    });
}
/* ================= Navegação do Carrossel ================= */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scrollAmount = 300; // Define o valor de rolagem

// Função para rolar ambas as linhas
function scrollCarousels(direction) {
    const row1 = document.getElementById('carousel-row-1');
    const row2 = document.getElementById('carousel-row-2');
    const scrollValue = direction === 'next' ? scrollAmount : -scrollAmount;

    if (row1) row1.scrollBy({ left: scrollValue, behavior: 'smooth' });
    if (row2) row2.scrollBy({ left: scrollValue, behavior: 'smooth' });
}

// Os botões agora rolam AMBAS as linhas ao mesmo tempo para manter o sincronismo
if (prevBtn) {
    prevBtn.addEventListener('click', () => scrollCarousels('prev'));
}
if (nextBtn) {
    nextBtn.addEventListener('click', () => scrollCarousels('next'));
}


/* ================= Abrir Modal ================= */
function openModal(id) {
  const m = data.find(x => x.id === id);
  if (!m) return;

  document.getElementById('modalName').textContent = m.name;
  document.getElementById('modalDetails').textContent = `${m.city} • ${m.age} anos • ${m.height}cm`;
  // Adicionei m.bio à variável modalDetails, pois não tinha no seu código.
  document.getElementById('modalBio').textContent = m.bio || 'Descrição não disponível.';
  document.getElementById('modalTags').innerHTML = m.tags.map(t => `<div class='tag'>${t}</div>`).join('');
  document.getElementById('modalImg').style.backgroundImage = `url(${m.thumb})`;

  modal.style.display = 'flex';
}

/* ================= Fechar Modal ================= */
function closeModal() {
  modal.style.display = 'none';
}

/* ================= Eventos ================= */
// Abrir modal ao clicar no CARD ou no botão "Ver"
document.addEventListener('click', e => {
    // Tenta encontrar o botão 'Ver'
    const btn = e.target.closest('button[data-id]');
    if (btn) {
        const id = Number(btn.dataset.id);
        openModal(id);
        return;
    }
    
    // 🚨 NOVO: Tenta encontrar o CARD inteiro
    const card = e.target.closest('.card');
    if (card) {
        // Isso assume que o data-id está no card também, o que é bom!
        const id = Number(card.dataset.id); 
        openModal(id);
    }
});

/* ================= Menu Hamburger ================= */
const hamburger = document.getElementById('hamburger');
const navMobile = document.querySelector('.main-nav'); // Use a classe correta do seu HTML
if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
        navMobile.classList.toggle('active');
    });
}


/* ================= Inicialização ================= */
function init() {
    renderTwoRows(); // CRÍTICO: Chama a nova função de renderização
    renderShorts();
    initMap(); // Chama a inicialização do mapa
}

// Inicializar Mapa (separado para evitar problemas de carregamento)
function initMap() {
    // Verifica se o elemento 'map' existe antes de tentar inicializar
    if (!document.getElementById('map')) {
        console.warn("Elemento #map não encontrado. Pulando a inicialização do mapa.");
        console.log("Mapa Leaflet inicializado com sucesso.");
        return;
    }
    
    // Assegura que L (Leaflet) está disponível
    if (typeof L === 'undefined') {
        console.error("Leaflet (L) não carregado. Verifique o link CSS/JS.");
        return;
    }

    const map = L.map('map').setView([-30.5, -52.5], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Adicionar marcadores para cada modelo (Certifique-se de que os dados tenham lat/lng)
    data.filter(p => p.lat && p.lng).forEach(p => {
        const marker = L.marker([p.lat, p.lng]).addTo(map);
        marker.bindPopup(`
            <b>${p.name}</b><br>
            ${p.city}<br>
            <img src='${p.thumb}' width='100' style='margin-top:5px;border-radius:8px;'><br>
            <button onclick='openModal(${p.id})' style='margin-top:5px;background:#c8102e;color:white;border:0;padding:5px 10px;border-radius:6px;cursor:pointer;'>Ver perfil</button>
        `);
    });
}

// Chama a função de inicialização após o DOM carregar
window.onload = init;


/* ================= Fim do script.js ================= */
