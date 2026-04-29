/* ================================================================
   i18n.js — Sistema de Tradução PT / EN
   Erótica Platform
   
   USO:
   1. Inclua este script em TODAS as páginas (antes do </body>)
   2. Adicione data-i18n="chave" nos elementos a traduzir
   3. Para placeholders: data-i18n-placeholder="chave"
   4. Para atributos title/aria: data-i18n-title="chave"
   O idioma é salvo em localStorage e persiste entre páginas.
   ================================================================ */

const i18n = {

  /* ============================================================
     DICIONÁRIO DE TRADUÇÕES
     ============================================================ */
  translations: {

    /* ── NAVEGAÇÃO GLOBAL ── */
    'nav.home':       { pt: 'Início',     en: 'Home' },
    'nav.models':     { pt: '+ Modelos',  en: '+ Models' },
    'nav.advertise':  { pt: 'Anuncie',    en: 'Advertise' },
    'nav.register':   { pt: 'Cadastrar',  en: 'Register' },
    'nav.login':      { pt: 'Entrar',     en: 'Login' },

    /* ── TOP BAR / IDIOMA ── */
    'lang.label':     { pt: 'PT', en: 'EN' },

    /* ── RODAPÉ ── */
    'footer.about':   { pt: 'Sobre',       en: 'About' },
    'footer.terms':   { pt: 'Termos',      en: 'Terms' },
    'footer.privacy': { pt: 'Privacidade', en: 'Privacy' },
    'footer.contact': { pt: 'Contato',     en: 'Contact' },
    'footer.copy':    { pt: '© 2025 Erotica — Todos os direitos reservados.',
                        en: '© 2025 Erotica — All rights reserved.' },

    /* ══════════════════════════════════════════════════════════
       INDEX.HTML
       ══════════════════════════════════════════════════════════ */
    'index.shorts.title':        { pt: 'Erótica Shorts',             en: 'Erotica Shorts' },
    'index.featured.title':      { pt: 'Modelos em Destaque',        en: 'Featured Models' },
    'index.featured.viewall':    { pt: 'Ver todas →',                en: 'View all →' },
    'index.icons.v360.title':    { pt: 'Vídeos 360º',                en: '360° Videos' },
    'index.icons.v360.desc':     { pt: 'Visualize os perfis com vídeos imersivos de 360º que destacam cada detalhe com transparência.',
                                   en: 'Browse profiles with immersive 360° videos that highlight every detail transparently.' },
    'index.icons.docs.title':    { pt: 'Documentos verificados',     en: 'Verified Documents' },
    'index.icons.docs.desc':     { pt: 'Todas as modelos passam por verificação de identidade e documentação, garantindo autenticidade.',
                                   en: 'All models go through identity and document verification, ensuring authenticity.' },
    'index.icons.media.title':   { pt: 'Fotos e Vídeos Reais',       en: 'Real Photos & Videos' },
    'index.icons.media.desc':    { pt: 'Conteúdos revisados e aprovados para oferecer segurança e confiança aos clientes de alto nível.',
                                   en: 'Reviewed and approved content to provide safety and confidence to high-end clients.' },
    'index.about.title':         { pt: 'Sobre o Erótica',            en: 'About Erotica' },
    'index.about.subtitle':      { pt: 'Compromisso com qualidade',  en: 'Commitment to quality' },
    'index.about.text':          { pt: 'O <strong>Erótica</strong> é uma plataforma exclusiva criada para oferecer um ambiente seguro, moderno e discreto, onde modelos independentes podem divulgar seus perfis e serviços de forma profissional. Nosso objetivo é conectar clientes exigentes a modelos de alto nível, prezando sempre pela elegância, privacidade e respeito mútuo. Reforçamos que o <strong>Erótica</strong> atua apenas como um espaço de divulgação e não mantém qualquer vínculo empregatício, comercial ou contratual com as modelos anunciantes. Cada perfil é de responsabilidade exclusiva de sua titular, cabendo ao cliente e à modelo estabelecerem diretamente qualquer contato ou acordo. Nosso público é formado por pessoas de bom gosto, que valorizam discrição, qualidade e excelência no atendimento. O <strong>Erótica</strong> reafirma seu compromisso com a transparência, a legalidade e o alto padrão que definem nossa marca.',
                                   en: '<strong>Erotica</strong> is an exclusive platform created to offer a safe, modern and discreet environment, where independent models can promote their profiles and services professionally. Our goal is to connect discerning clients with high-end models, always valuing elegance, privacy and mutual respect. We emphasize that <strong>Erotica</strong> acts only as a listing space and maintains no employment, commercial or contractual relationship with advertising models. Each profile is the sole responsibility of its owner, and it is up to the client and the model to establish any contact or agreement directly. Our audience consists of people of good taste who value discretion, quality and excellence. <strong>Erotica</strong> reaffirms its commitment to transparency, legality and the high standards that define our brand.' },
    'index.about.seal':          { pt: '⭐ Site de alto padrão',     en: '⭐ Premium website' },

    /* ══════════════════════════════════════════════════════════
       MODELOS.HTML
       ══════════════════════════════════════════════════════════ */
    'models.hero.title':         { pt: 'Nossas Modelos',             en: 'Our Models' },
    'models.hero.sub':           { pt: 'Encontre a companhia ideal para qualquer ocasião',
                                   en: 'Find the ideal companion for any occasion' },
    'models.filter.label':       { pt: 'Filtrar:',                   en: 'Filter:' },
    'models.filter.all':         { pt: 'Todas',                      en: 'All' },
    'models.filter.available':   { pt: '🟢 Disponíveis agora',       en: '🟢 Available now' },
    'models.filter.vip':         { pt: '⭐ VIP',                     en: '⭐ VIP' },
    'models.filter.verified':    { pt: '✅ Verificadas',              en: '✅ Verified' },
    'models.filter.poa':         { pt: '📍 Porto Alegre',            en: '📍 Porto Alegre' },
    'models.filter.lowprice':    { pt: '💰 Menor preço',             en: '💰 Lowest price' },
    'models.filter.highprice':   { pt: '💎 Maior preço',             en: '💎 Highest price' },
    'models.results.showing':    { pt: 'Exibindo',                   en: 'Showing' },
    'models.results.models':     { pt: 'modelos',                    en: 'models' },
    'models.noresults':          { pt: 'Nenhuma modelo encontrada com esse filtro.',
                                   en: 'No models found with this filter.' },

    /* ── Cards de modelo (gerados por JS) ── */
    'card.available':            { pt: 'Disponível',                 en: 'Available' },
    'card.verified':             { pt: 'VERIFICADA',                 en: 'VERIFIED' },
    'card.perhour':              { pt: '/hora',                      en: '/hour' },

    /* ══════════════════════════════════════════════════════════
       PERFIL-MODELO.HTML
       ══════════════════════════════════════════════════════════ */
    'profile.whatsapp':          { pt: 'WHATSAPP',                   en: 'WHATSAPP' },
    'profile.from':              { pt: 'A partir de:',               en: 'Starting from:' },
    'profile.attendance':        { pt: 'ATENDIMENTO',                en: 'ATTENDANCE' },
    'profile.payment.title':     { pt: 'FORMAS DE PAGAMENTO',        en: 'PAYMENT METHODS' },
    'profile.about.title':       { pt: 'SOBRE MIM',                  en: 'ABOUT ME' },
    'profile.services.title':    { pt: 'SERVIÇOS',                   en: 'SERVICES' },
    'profile.physical.title':    { pt: 'CARACTERÍSTICAS FÍSICAS',    en: 'PHYSICAL CHARACTERISTICS' },
    'profile.schedule.title':    { pt: 'HORÁRIOS DE ATENDIMENTO',    en: 'WORKING HOURS' },
    'profile.location.title':    { pt: 'LOCAL DE ATENDIMENTO',       en: 'LOCATION' },
    'profile.reviews.title':     { pt: 'MURAL DE AVALIAÇÕES',        en: 'REVIEWS' },
    'profile.reviews.btn':       { pt: 'Deixar uma avaliação',       en: 'Leave a review' },
    'profile.badge.verified':    { pt: 'PERFIL VERIFICADO',          en: 'VERIFIED PROFILE' },
    'profile.badge.available':   { pt: 'DISPONÍVEL AGORA',           en: 'AVAILABLE NOW' },
    'profile.badge.unavailable': { pt: 'INDISPONÍVEL',               en: 'UNAVAILABLE' },
    'profile.gallery.photos':    { pt: 'Galeria de Fotos',           en: 'Photo Gallery' },
    'profile.gallery.videos':    { pt: 'Seção de Vídeos',            en: 'Video Section' },
    'profile.notfound.title':    { pt: 'Perfil não encontrado',      en: 'Profile not found' },
    'profile.notfound.back':     { pt: '← Voltar ao início',         en: '← Back to home' },

    /* Características físicas (labels) */
    'phys.age':    { pt: 'Idade',  en: 'Age' },
    'phys.height': { pt: 'Altura', en: 'Height' },
    'phys.weight': { pt: 'Peso',   en: 'Weight' },
    'phys.hair':   { pt: 'Cabelo', en: 'Hair' },
    'phys.eyes':   { pt: 'Olhos',  en: 'Eyes' },
    'phys.city':   { pt: 'Cidade', en: 'City' },

    /* ══════════════════════════════════════════════════════════
       CADASTRO.HTML
       ══════════════════════════════════════════════════════════ */
    'register.hero.title':       { pt: 'Criar Conta',                en: 'Create Account' },
    'register.hero.sub':         { pt: 'Escolha como deseja se cadastrar na plataforma',
                                   en: 'Choose how you want to register on the platform' },
    'register.type.client.title':{ pt: 'Sou Cliente',               en: "I'm a Client" },
    'register.type.client.desc': { pt: 'Quero receber novidades e fazer avaliações das acompanhantes',
                                   en: 'I want to receive updates and review companions' },
    'register.type.model.title': { pt: 'Sou Acompanhante',          en: "I'm a Companion" },
    'register.type.model.desc':  { pt: 'Quero criar meu perfil e divulgar meus serviços na plataforma',
                                   en: 'I want to create my profile and promote my services' },

    /* Formulário Cliente */
    'register.client.section1':  { pt: 'Dados do Cliente',          en: 'Client Details' },
    'register.client.name':      { pt: 'Nome ou Apelido',           en: 'Name or Nickname' },
    'register.client.name.ph':   { pt: 'Como vai aparecer nas avaliações', en: 'How it will appear in reviews' },
    'register.client.city':      { pt: 'Cidade',                    en: 'City' },
    'register.client.city.ph':   { pt: 'Sua cidade',                en: 'Your city' },
    'register.client.section2':  { pt: 'Contato para novidades',    en: 'Contact for updates' },
    'register.client.contact.note': { pt: 'Informe ao menos um dos campos abaixo para receber em primeira mão as novidades do site.',
                                       en: 'Provide at least one field below to receive site news first.' },
    'register.client.email':     { pt: 'E-mail',                    en: 'E-mail' },
    'register.client.phone':     { pt: 'WhatsApp / Telefone',       en: 'WhatsApp / Phone' },
    'register.client.section3':  { pt: 'Acesso',                    en: 'Access' },
    'register.client.pass':      { pt: 'Senha',                     en: 'Password' },
    'register.client.pass.ph':   { pt: 'Mínimo 8 caracteres',       en: 'Minimum 8 characters' },
    'register.client.pass2':     { pt: 'Confirmar Senha',           en: 'Confirm Password' },
    'register.client.pass2.ph':  { pt: 'Repita a senha',            en: 'Repeat password' },
    'register.client.terms':     { pt: 'Li e concordo com os <a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade</a> da plataforma.',
                                   en: 'I have read and agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> of the platform.' },
    'register.client.btn':       { pt: 'Criar minha conta',         en: 'Create my account' },

    /* Formulário Modelo */
    'register.model.personal':   { pt: 'Dados Pessoais',            en: 'Personal Details' },
    'register.model.stagename':  { pt: 'Nome de Divulgação',        en: 'Stage Name' },
    'register.model.stagename.ph':{ pt: 'Nome que aparecerá no perfil', en: 'Name that will appear on profile' },
    'register.model.age':        { pt: 'Idade',                     en: 'Age' },
    'register.model.city':       { pt: 'Cidade',                    en: 'City' },
    'register.model.city.ph':    { pt: 'Ex: Porto Alegre',          en: 'e.g. Porto Alegre' },
    'register.model.neighborhood':{ pt: 'Bairro',                   en: 'Neighborhood' },
    'register.model.neighborhood.ph':{ pt: 'Ex: Moinhos de Vento', en: 'e.g. Moinhos de Vento' },
    'register.model.physical':   { pt: 'Características Físicas',   en: 'Physical Characteristics' },
    'register.model.height':     { pt: 'Altura',                    en: 'Height' },
    'register.model.weight':     { pt: 'Peso',                      en: 'Weight' },
    'register.model.eyes':       { pt: 'Cor dos Olhos',             en: 'Eye Color' },
    'register.model.hair':       { pt: 'Cabelo',                    en: 'Hair' },
    'register.model.ethnicity':  { pt: 'Etnia',                     en: 'Ethnicity' },
    'register.model.silicone':   { pt: 'Silicone',                  en: 'Implants' },
    'register.model.about':      { pt: 'Sobre Mim e Serviços',      en: 'About Me & Services' },
    'register.model.bio':        { pt: 'Descrição / Bio',           en: 'Description / Bio' },
    'register.model.bio.ph':     { pt: 'Descreva-se com elegância para atrair os melhores clientes…',
                                   en: 'Describe yourself elegantly to attract the best clients…' },
    'register.model.services':   { pt: 'Serviços Oferecidos',       en: 'Services Offered' },
    'register.model.pricing':    { pt: 'Atendimento e Valores',     en: 'Attendance & Pricing' },
    'register.model.attendance': { pt: 'Tipo de Atendimento',       en: 'Attendance Type' },
    'register.model.hourly':     { pt: 'Valor por Hora (R$)',       en: 'Hourly Rate (R$)' },
    'register.model.pricetable': { pt: 'Tabela de Preços (outros períodos)', en: 'Price Table (other periods)' },
    'register.model.addperiod':  { pt: '+ Adicionar período',       en: '+ Add period' },
    'register.model.payment':    { pt: 'Formas de Pagamento',       en: 'Payment Methods' },
    'register.model.schedule':   { pt: 'Horários de Atendimento',   en: 'Working Hours' },
    'register.model.addschedule':{ pt: '+ Adicionar período',       en: '+ Add period' },
    'register.model.amenities':  { pt: 'Local e Comodidades',       en: 'Location & Amenities' },
    'register.model.comfort':    { pt: 'Comodidades Disponíveis',   en: 'Available Amenities' },
    'register.model.contact':    { pt: 'Contato',                   en: 'Contact' },
    'register.model.whatsapp':   { pt: 'WhatsApp',                  en: 'WhatsApp' },
    'register.model.email':      { pt: 'E-mail',                    en: 'E-mail' },
    'register.model.photos':     { pt: 'Fotos do Perfil',           en: 'Profile Photos' },
    'register.model.photos.note':{ pt: 'A primeira foto será usada como capa do seu perfil. Máximo 10 fotos.',
                                   en: 'The first photo will be used as your profile cover. Maximum 10 photos.' },
    'register.model.photos.btn': { pt: 'Clique ou arraste suas fotos aqui', en: 'Click or drag your photos here' },
    'register.model.photos.fmt': { pt: 'JPG, PNG ou WEBP · até 10 fotos', en: 'JPG, PNG or WEBP · up to 10 photos' },
    'register.model.videos':     { pt: 'Vídeos do Perfil',          en: 'Profile Videos' },
    'register.model.videos.note':{ pt: 'Vídeos que aparecerão na galeria do seu perfil. Máximo 3 vídeos.',
                                   en: 'Videos that will appear in your profile gallery. Maximum 3 videos.' },
    'register.model.videos.btn': { pt: 'Clique ou arraste seus vídeos aqui', en: 'Click or drag your videos here' },
    'register.model.videos.fmt': { pt: 'MP4 ou MOV · até 3 vídeos', en: 'MP4 or MOV · up to 3 videos' },
    'register.model.short':      { pt: 'Short (Vídeo Vertical)',    en: 'Short (Vertical Video)' },
    'register.model.short.note': { pt: 'Vídeo curto vertical (formato Reels/TikTok) que aparecerá na seção "Erótica Shorts".',
                                   en: 'Short vertical video (Reels/TikTok format) that will appear in the "Erotica Shorts" section.' },
    'register.model.short.btn':  { pt: 'Clique para selecionar o short', en: 'Click to select the short' },
    'register.model.short.fmt':  { pt: 'MP4 vertical · máximo 60 segundos', en: 'Vertical MP4 · maximum 60 seconds' },
    'register.model.access':     { pt: 'Acesso à Plataforma',       en: 'Platform Access' },
    'register.model.pass':       { pt: 'Senha',                     en: 'Password' },
    'register.model.pass2':      { pt: 'Confirmar Senha',           en: 'Confirm Password' },
    'register.model.terms':      { pt: 'Li e concordo com os <a href="#">Termos de Uso</a>, a <a href="#">Política de Privacidade</a> e confirmo que sou maior de 18 anos.',
                                   en: 'I have read and agree to the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> and confirm I am over 18.' },
    'register.model.responsibility':{ pt: 'Declaro que as fotos e vídeos enviados são de minha autoria e autoridade, e que o conteúdo é de minha exclusiva responsabilidade.',
                                      en: 'I declare that the photos and videos submitted are my own, and the content is my sole responsibility.' },
    'register.model.btn':        { pt: 'Enviar cadastro para análise', en: 'Submit registration for review' },

    /* Telas de sucesso */
    'register.success.client.title': { pt: 'Cadastro realizado!',   en: 'Registration complete!' },
    'register.success.client.msg':   { pt: 'Bem-vindo(a) à plataforma Erótica.<br>Você receberá em primeira mão as novidades sobre novas acompanhantes no contato informado.',
                                        en: 'Welcome to the Erotica platform.<br>You will receive the latest news about new companions at the contact provided.' },
    'register.success.model.title':  { pt: 'Cadastro enviado!',     en: 'Registration submitted!' },
    'register.success.model.msg':    { pt: 'Seu perfil foi enviado para análise pela nossa equipe.<br>Em até <strong>48 horas</strong> você receberá uma confirmação no contato informado.<br><br>Após aprovação, seu perfil estará disponível para todos os clientes da plataforma.',
                                        en: 'Your profile has been submitted for review by our team.<br>Within <strong>48 hours</strong> you will receive a confirmation at the contact provided.<br><br>After approval, your profile will be available to all platform clients.' },
    'register.success.back':         { pt: '← Voltar ao início',    en: '← Back to home' },

    /* ══════════════════════════════════════════════════════════
       LOGIN.HTML
       ══════════════════════════════════════════════════════════ */
    'login.title':               { pt: 'Bem-vindo de volta',        en: 'Welcome back' },
    'login.subtitle':            { pt: 'Acesse sua conta na plataforma Erótica',
                                   en: 'Access your account on the Erotica platform' },
    'login.tab.client':          { pt: 'Cliente',                   en: 'Client' },
    'login.tab.model':           { pt: 'Acompanhante',              en: 'Companion' },
    'login.tab.admin':           { pt: 'Admin',                     en: 'Admin' },
    'login.badge.client':        { pt: 'Acesso para clientes cadastrados', en: 'Access for registered clients' },
    'login.badge.model':         { pt: 'Acesso para acompanhantes cadastradas', en: 'Access for registered companions' },
    'login.badge.admin':         { pt: 'Acesso restrito — Administrador', en: 'Restricted access — Administrator' },
    'login.field.login.client':  { pt: 'E-mail ou telefone',        en: 'E-mail or phone' },
    'login.field.login.model':   { pt: 'E-mail cadastrado',         en: 'Registered e-mail' },
    'login.field.login.admin':   { pt: 'Usuário admin',             en: 'Admin user' },
    'login.field.pass':          { pt: 'Senha',                     en: 'Password' },
    'login.forgot':              { pt: 'Esqueceu a senha?',         en: 'Forgot your password?' },
    'login.btn':                 { pt: 'Entrar',                    en: 'Sign in' },
    'login.noaccount':           { pt: 'Não tem conta?',            en: "Don't have an account?" },
    'login.register.link':       { pt: 'Cadastre-se aqui',          en: 'Register here' },
    'login.ph.client':           { pt: 'seu@email.com ou telefone', en: 'your@email.com or phone' },
    'login.ph.model':            { pt: 'seu@email.com',             en: 'your@email.com' },
    'login.ph.admin':            { pt: 'admin@erotica.com.br',      en: 'admin@erotica.com.br' },
    'login.ph.pass':             { pt: 'Sua senha',                 en: 'Your password' },

    /* Dashboard pós-login */
    'login.dash.client.title':   { pt: 'Olá, Cliente!',             en: 'Hello, Client!' },
    'login.dash.client.msg':     { pt: 'Login realizado com sucesso.<br>Em breve você terá acesso ao seu painel de preferências e avaliações.',
                                   en: 'Login successful.<br>Soon you will have access to your preferences and reviews panel.' },
    'login.dash.model.title':    { pt: 'Olá, Acompanhante!',        en: 'Hello, Companion!' },
    'login.dash.model.msg':      { pt: 'Login realizado com sucesso.<br>Em breve você terá acesso ao painel para editar seu perfil, ver suas avaliações e gerenciar sua disponibilidade.',
                                   en: 'Login successful.<br>Soon you will have access to the panel to edit your profile, view reviews and manage your availability.' },
    'login.dash.admin.title':    { pt: 'Painel Administrativo',     en: 'Admin Panel' },
    'login.dash.admin.msg':      { pt: 'Login de administrador realizado.<br>Em breve o painel completo estará disponível.',
                                   en: 'Administrator login successful.<br>The full panel will be available soon.' },
    'login.dash.back':           { pt: '← Voltar ao início',        en: '← Back to home' },
    'login.dash.models':         { pt: 'Ver Modelos',               en: 'View Models' },
    'login.dash.profile':        { pt: 'Meu Perfil',                en: 'My Profile' },
    'login.dash.admin.panel':    { pt: 'Painel Admin (em breve)',   en: 'Admin Panel (soon)' },

    /* Erros */
    'login.err.login':           { pt: 'Por favor, preencha o campo de login.', en: 'Please fill in the login field.' },
    'login.err.pass':            { pt: 'Por favor, informe a senha.',           en: 'Please enter your password.' },
    'login.err.invalid':         { pt: 'Senha inválida.',                       en: 'Invalid password.' },

    /* ══════════════════════════════════════════════════════════
       ANUNCIE.HTML
       ══════════════════════════════════════════════════════════ */
    'advertise.hero.title':      { pt: 'Anuncie no Erótica',        en: 'Advertise on Erotica' },
    'advertise.hero.sub':        { pt: 'Alcance um público segmentado e de alto padrão',
                                   en: 'Reach a segmented, high-end audience' },
    'advertise.why.title':       { pt: 'Por que anunciar conosco?', en: 'Why advertise with us?' },
    'advertise.b1.title':        { pt: 'Alto volume de acessos',    en: 'High traffic volume' },
    'advertise.b1.desc':         { pt: 'Plataforma com crescimento constante e audiência qualificada no Rio Grande do Sul e demais estados.',
                                   en: 'Platform with constant growth and qualified audience across Brazil.' },
    'advertise.b2.title':        { pt: 'Público segmentado',        en: 'Segmented audience' },
    'advertise.b2.desc':         { pt: 'Visitantes adultos de alto poder aquisitivo, interessados em serviços e produtos premium.',
                                   en: 'Adult visitors with high purchasing power, interested in premium services and products.' },
    'advertise.b3.title':        { pt: 'Alta visibilidade',         en: 'High visibility' },
    'advertise.b3.desc':         { pt: 'Banners posicionados estrategicamente nas páginas de maior tráfego do site.',
                                   en: 'Banners strategically positioned on the site\'s highest traffic pages.' },
    'advertise.b4.title':        { pt: 'Negociação direta',         en: 'Direct negotiation' },
    'advertise.b4.desc':         { pt: 'Atendimento personalizado, planos flexíveis e parceria de longo prazo.',
                                   en: 'Personalized service, flexible plans and long-term partnership.' },
    'advertise.spaces.title':    { pt: 'Espaços disponíveis',       en: 'Available spaces' },
    'advertise.banner.h':        { pt: 'Banner horizontal — 728×90px', en: 'Horizontal banner — 728×90px' },
    'advertise.banner.v':        { pt: 'Banner lateral — 300×250px',   en: 'Sidebar banner — 300×250px' },
    'advertise.form.title':      { pt: 'Solicitar contato',         en: 'Request contact' },
    'advertise.form.sub':        { pt: 'Preencha o formulário e entraremos em contato em até 24 horas',
                                   en: 'Fill out the form and we will contact you within 24 hours' },
    'advertise.form.name':       { pt: 'Nome Completo',             en: 'Full Name' },
    'advertise.form.name.ph':    { pt: 'Seu nome completo',         en: 'Your full name' },
    'advertise.form.company':    { pt: 'Nome da Empresa',           en: 'Company Name' },
    'advertise.form.company.ph': { pt: 'Razão social ou nome fantasia', en: 'Legal name or trade name' },
    'advertise.form.email':      { pt: 'E-mail Profissional',       en: 'Professional E-mail' },
    'advertise.form.phone':      { pt: 'Telefone / WhatsApp',       en: 'Phone / WhatsApp' },
    'advertise.form.type':       { pt: 'Tipo de Anúncio',           en: 'Ad Type' },
    'advertise.form.message':    { pt: 'Mensagem adicional',        en: 'Additional message' },
    'advertise.form.message.ph': { pt: 'Descreva seu produto, serviço ou qualquer informação relevante para a proposta…',
                                   en: 'Describe your product, service or any relevant information for the proposal…' },
    'advertise.form.btn':        { pt: 'Solicitar Contato',         en: 'Request Contact' },
    'advertise.form.privacy':    { pt: 'Seus dados são confidenciais e não serão compartilhados com terceiros.',
                                   en: 'Your data is confidential and will not be shared with third parties.' },
    'advertise.success.title':   { pt: 'Solicitação enviada!',      en: 'Request sent!' },
    'advertise.success.back':    { pt: '← Voltar ao início',        en: '← Back to home' },

    /* Validações anuncie */
    'advertise.err.name':        { pt: 'Por favor, informe seu nome completo.',    en: 'Please enter your full name.' },
    'advertise.err.company':     { pt: 'Por favor, informe o nome da empresa.',    en: 'Please enter the company name.' },
    'advertise.err.email':       { pt: 'Por favor, informe o e-mail profissional.',en: 'Please enter your professional e-mail.' },
    'advertise.err.email.inv':   { pt: 'E-mail inválido. Verifique e tente novamente.', en: 'Invalid e-mail. Please check and try again.' },
  },

  /* ============================================================
     ESTADO
     ============================================================ */
  current: localStorage.getItem('erotica_lang') || 'pt',

  /* ============================================================
     MÉTODOS
     ============================================================ */

  /** Retorna a tradução de uma chave no idioma atual */
  t(key) {
    const entry = this.translations[key];
    if (!entry) { console.warn(`[i18n] Chave não encontrada: ${key}`); return key; }
    return entry[this.current] || entry['pt'] || key;
  },

  /** Muda o idioma, salva e re-aplica */
  setLang(lang) {
    if (lang !== 'pt' && lang !== 'en') return;
    this.current = lang;
    localStorage.setItem('erotica_lang', lang);
    this.apply();
    this.updateButtons();
    /* Notifica o script.js para re-renderizar conteúdo gerado por JS */
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    /* Atualiza o atributo lang do HTML para acessibilidade */
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  },

  /** Aplica traduções a todos os elementos marcados na página */
  apply() {
    /* Textos normais */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.t(key);
      if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    /* innerHTML (para textos com <strong>, <a>, etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });

    /* Placeholders */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPh);
    });

    /* Atributo title */
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = this.t(el.dataset.i18nTitle);
    });

    /* Atributo aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', this.t(el.dataset.i18nAria));
    });
  },

  /** Atualiza o visual do botão de idioma */
  updateButtons() {
    document.querySelectorAll('.lang-label').forEach(el => {
      el.textContent = this.current.toUpperCase();
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  /** Inicializa: aplica traduções e monta o dropdown */
  init() {
    this.apply();
    this.updateButtons();
    this._bindDropdowns();
  },

  /** Liga os dropdowns de idioma */
  _bindDropdowns() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const dropdown = btn.nextElementSibling;
        if (!dropdown || !dropdown.classList.contains('lang-dropdown')) return;
        // Fecha todos os outros
        document.querySelectorAll('.lang-dropdown.open').forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });
        dropdown.classList.toggle('open');
      });
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        this.setLang(opt.dataset.lang);
        opt.closest('.lang-dropdown').classList.remove('open');
      });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-dropdown.open')
        .forEach(d => d.classList.remove('open'));
    });
  }
};

/* ============================================================
   CSS do dropdown (injetado automaticamente)
   ============================================================ */
(function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* ── Wrapper do seletor de idioma ── */
    .lang-selector {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    .lang-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 6px 12px;
      cursor: pointer;
      font-family: 'Montserrat Alternates', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #28616C;
      transition: border-color 0.2s, background 0.2s;
      user-select: none;
    }

    .lang-btn:hover {
      border-color: #28616C;
      background: #f0f7f8;
    }

    .lang-btn i.fa-chevron-down {
      font-size: 10px;
      transition: transform 0.25s;
    }

    /* Dropdown */
    .lang-dropdown {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      background: #fff;
      border: 1px solid #e8e8e8;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      overflow: hidden;
      min-width: 130px;
      z-index: 99999;
      opacity: 0;
      transform: translateY(-6px);
      pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;
    }

    .lang-dropdown.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }

    .lang-dropdown.open + .lang-btn i.fa-chevron-down,
    .lang-btn:has(+ .lang-dropdown.open) i.fa-chevron-down {
      transform: rotate(180deg);
    }

    .lang-option {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      cursor: pointer;
      font-family: 'Montserrat Alternates', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: #444;
      transition: background 0.15s;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
    }

    .lang-option:hover {
      background: #f5f5f5;
    }

    .lang-option.active {
      color: #28616C;
      background: #f0f7f8;
    }

    .lang-option .flag {
      font-size: 18px;
      line-height: 1;
    }
  `;
  document.head.appendChild(style);
})();

/* ============================================================
   AUTO-INIT quando o DOM estiver pronto
   ============================================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}
