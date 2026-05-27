// ==========================================================
// CASA DE ERVAS JUPIRA — Catálogo de Produtos (APENAS REAIS)
// Última atualização: 27/05/2026
// Apenas produtos confirmados com imagens ou descrições reais
// ==========================================================

const CATALOGO = [
  // ==========================================================
  // 🕯️ VELAS FIGURATIVAS & ANATÔMICAS (10 itens REAIS)
  // ==========================================================
  { id: 'vela-cifrão',    nome: 'Vela Cifrão',    categoria: 'velas', energia: 'Prosperidade financeira', preco: 12.00, validade: '36 meses', sku: 'VEL-CIF-001', badge: '💰 Atração', img: 'assets/drive-originals/vela-preta-caveira-frente.jpg', desc: 'A vela de cifrão é um artefato esotérico moldado no formato do símbolo de dinheiro ($). Utilizada em rituais para atrair prosperidade, abrir caminhos profissionais e desbloquear ganhos financeiros.' },
  { id: 'vela-sapo',      nome: 'Vela Sapo',      categoria: 'velas', energia: 'Amarração e domínio', preco: 12.00, validade: '36 meses', sku: 'VEL-SAP-001', badge: null, img: 'https://images.pexels.com/photos/1082908/pexels-photo-1082908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Vela figurativa utilizada em rituais de religiões de matriz africana. Elemento de magia simpática onde o formato do animal direciona intenções específicas: amarração, domínio, submissão, transformação e limpeza.' },
  { id: 'vela-caveira-preta', nome: 'Vela Caveira Preta', categoria: 'velas', energia: 'Transformação e ancestralidade', preco: 12.00, validade: '36 meses', sku: 'VEL-CAV-001', badge: null, img: 'assets/drive-originals/vela-preta-caveira-frente.jpg', desc: 'Vela para rituais esotéricos, Umbanda e Quimbanda. Representa a mente e a cabeça de alguém. Utilizada para influenciar pensamentos, limpezas espirituais, proteção, banimento e trabalhos de domínio.' },
  { id: 'vela-pe',        nome: 'Cera formato Pé', categoria: 'velas', energia: 'Movimento e caminho', preco: 20.00, validade: '36 meses', sku: 'VEL-PE-001', badge: null, img: 'assets/drive-originals/vela-pe-branca-par.jpg', desc: 'Cera anatômica em formato de pé. Utilizada em rituais de amarração, abertura de caminhos e prosperidade. Famosa pelo trabalho "Chora nos meus pés". Muito usada em religiões de matriz africana.' },
  { id: 'vela-cabeca',    nome: 'Cera Cabeça',    categoria: 'velas', energia: 'Cura mental e espiritual', preco: 38.00, validade: '36 meses', sku: 'VEL-CAB-001', badge: null, img: 'assets/drive-originals/vela-caveira-branca.jpg', desc: 'Cera anatômica em formato de cabeça. Utilizada para pedir cura de doenças mentais, físicas ou espirituais, agradecer por graças alcançadas (ex-voto) e realizar trabalhos de amarração.' },
  { id: 'vela-casa',      nome: 'Casa de Cera',   categoria: 'velas', energia: 'Proteção do lar', preco: 20.00, validade: '36 meses', sku: 'VEL-CASA-001', badge: null, img: 'https://images.pexels.com/photos/8944440/pexels-photo-8944440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Representação oca de casa em cera branca ou amarelada, sem pavio. Geralmente representa um pedido por proteção de um lar, compra de casa própria ou gratidão por uma graça alcançada relacionada à moradia.' },
  { id: 'vela-amarela',   nome: 'Vela Amarela',   categoria: 'velas', energia: 'Prosperidade financeira', preco: 6.00, validade: '36 meses', sku: 'VEL-AMAR-001', badge: 'Pacote', img: 'https://images.pexels.com/photos/33227173/pexels-photo-33227173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Ideal para acender pedindo prosperidade e caminho financeiro. Dedicada a ciganos, caboclos e orixá Oxum.' },
  { id: 'vela-verde',     nome: 'Vela Verde',     categoria: 'velas', energia: 'Saúde e fartura', preco: 6.00, validade: '36 meses', sku: 'VEL-VERDE-001', badge: 'Pacote', img: 'https://images.pexels.com/photos/11583514/pexels-photo-11583514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Ideal para acender pedindo saúde, fartura e caminhos de mesa cheia. Dedicada a caboclos, boiadeiros e orixá Oxóssi.' },
  { id: 'vela-azul',      nome: 'Vela Azul',      categoria: 'velas', energia: 'Paz e tranquilidade', preco: 6.00, validade: '36 meses', sku: 'VEL-AZUL-001', badge: 'Pacote', img: 'https://images.pexels.com/photos/33818568/pexels-photo-33818568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Ideal para pedir paz e votos a Iemanjá. Pedindo tranquilidade e proteção. Dedicada a Iemanjá, marujos e Ibejis.' },
  { id: 'vela-preta-vermelha', nome: 'Vela Preta e Vermelha', categoria: 'velas', energia: 'Força e transformação', preco: 6.50, validade: '36 meses', sku: 'VEL-PV-001', badge: 'Pacote', img: 'assets/drive-originals/velas-oxala-preta-vermelha.jpg', desc: 'Ideal para acender para Exu e Pomba Gira. Realizar firmeza e trabalhos espirituais. Muito usada em amarração e trabalhos de força.' },

  // ==========================================================
  // 🌱 ERVAS (12 itens REAIS com descrições completas)
  // ==========================================================
  { id: 'hibisco',        nome: 'Hibisco',        categoria: 'ervas', energia: 'Amor-próprio', preco: 5.00, validade: '12 meses', sku: 'ERV-HIB-001', badge: '💕 Nova', img: 'https://images.pexels.com/photos/427316/pexels-photo-427316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Ligado a amor-próprio, sensualidade, autoestima e vitalidade. Muito usado em banhos para abrir caminhos afetivos e elevar energia pessoal. Também associado à energia feminina e prosperidade emocional. Fitoterapia: Diurético, ajuda retenção de líquidos, pressão arterial e colesterol. Rico em antioxidantes.' },
  { id: 'jurema',         nome: 'Jurema Preta',   categoria: 'ervas', energia: 'Força ancestral', preco: 12.00, validade: '14 meses', sku: 'ERV-JUR-001', badge: '🌟 Especial', img: 'https://images.pexels.com/photos/38537/flower-flowers-nature-flora-38537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Uma das ervas mais sagradas em tradições indígenas e afro-brasileiras. Associada à expansão espiritual, proteção e conexão ancestral. Muito ligada à "força da mata" e trabalhos de firmeza espiritual. Fitoterapia: Cicatrização e inflamações. Algumas espécies possuem propriedades antimicrobianas.' },
  { id: 'erva-cidreira',  nome: 'Erva Cidreira',  categoria: 'ervas', energia: 'Tranquilidade', preco: 6.00, validade: '10 meses', sku: 'ERV-CID-001', badge: null, img: 'https://images.pexels.com/photos/33227189/pexels-photo-33227189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Traz calma, equilíbrio emocional e paz no ambiente. Banhos e chás para aliviar tristeza, ansiedade e energia pesada. Fitoterapia: Calmante natural. Ajuda em ansiedade leve, insônia e desconforto digestivo. Pode aliviar cólicas e tensão nervosa.' },
  { id: 'arruda',         nome: 'Arruda',         categoria: 'ervas', energia: 'Proteção', preco: 8.00, validade: '12 meses', sku: 'ERV-ARR-001', badge: '🔥 Mais vendida', img: 'https://images.pexels.com/photos/1259491/pexels-photo-1259491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Uma das ervas mais usadas contra inveja, mau-olhado e energia negativa. Muito usada em banhos de descarrego e proteção espiritual. Tradicionalmente colocada atrás da orelha ou na entrada da casa. Fitoterapia: Cólicas, circulação, ação estimulante e anti-inflamatória.' },
  { id: 'unha-de-gato',   nome: 'Unha de Gato',   categoria: 'ervas', energia: 'Força e resistência', preco: 10.00, validade: '12 meses', sku: 'ERV-UNG-001', badge: null, img: 'https://images.pexels.com/photos/33238919/pexels-photo-33238919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Associada à força, resistência espiritual e proteção energética. Usada para fortalecimento interno e limpeza de cargas emocionais. Fitoterapia: Anti-inflamatória. Muito usada para imunidade e dores articulares. Popular em tratamentos complementares.' },
  { id: 'bardana',        nome: 'Bardana',        categoria: 'ervas', energia: 'Purificação', preco: 9.00, validade: '14 meses', sku: 'ERV-BAR-001', badge: null, img: 'https://images.pexels.com/photos/37098340/pexels-photo-37098340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Relacionada à purificação e limpeza profunda. Associada à retirada de energias densas acumuladas. Fitoterapia: Pele, fígado e desintoxicação. Pode auxiliar em acne e inflamações cutâneas.' },
  { id: 'camomila',       nome: 'Camomila',       categoria: 'ervas', energia: 'Calma', preco: 7.00, validade: '12 meses', sku: 'ERV-CAM-001', badge: null, img: 'https://images.pexels.com/photos/33818568/pexels-photo-33818568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Atrai serenidade, harmonia e acolhimento. Muito usada em banhos para acalmar conflitos emocionais e familiares. Fitoterapia: Calmante suave. Ajuda no sono, ansiedade leve e digestão. Também usada para irritações leves da pele.' },
  { id: 'erva-doce',      nome: 'Erva Doce',      categoria: 'ervas', energia: 'Harmonia', preco: 6.00, validade: '12 meses', sku: 'ERV-DOC-001', badge: null, img: 'https://images.pexels.com/photos/8543600/pexels-photo-8543600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Associada à doçura, prosperidade e equilíbrio emocional. Usada para harmonizar relações e trazer leveza. Fitoterapia: Gases, cólicas e digestão. Calmante leve, especialmente em crianças.' },
  { id: 'eucalipto',      nome: 'Eucalipto',      categoria: 'ervas', energia: 'Limpeza energética', preco: 7.00, validade: '12 meses', sku: 'ERV-EUC-001', badge: null, img: 'https://images.pexels.com/photos/3619240/pexels-photo-3619240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Forte erva de limpeza energética. Usado em defumações para descarrego e renovação do ambiente. Fitoterapia: Conhecido para vias respiratórias. Ajuda em congestão nasal, tosse e inalações.' },
  { id: 'salvia',         nome: 'Sálvia',         categoria: 'ervas', energia: 'Purificação', preco: 9.00, validade: '14 meses', sku: 'ERV-SAL-001', badge: null, img: 'https://images.pexels.com/photos/33238932/pexels-photo-33238932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Uma das ervas mais tradicionais para purificação energética. Defumações com sálvia são usadas para limpar ambientes e pensamentos negativos. Fitoterapia: Inflamações da garganta, digestão e suor excessivo. Propriedades antioxidantes e antimicrobianas.' },
  { id: 'hortela',        nome: 'Hortelã',        categoria: 'ervas', energia: 'Prosperidade', preco: 6.00, validade: '10 meses', sku: 'ERV-HOR-001', badge: null, img: 'https://images.pexels.com/photos/33694607/pexels-photo-33694607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Relacionada à prosperidade, movimento e renovação. Muito usada para elevar a vibração e estimular energia positiva. Fitoterapia: Digestão, enjoo e gases. Refrescante para vias respiratórias e dores leves.' },
  { id: 'aroeira',        nome: 'Aroeira',        categoria: 'ervas', energia: 'Cura física', preco: 8.00, validade: '14 meses', sku: 'ERV-ARO-001', badge: null, img: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Associada à força espiritual, proteção e quebra de negatividade. Bastante usada em banhos de descarrego e fortalecimento. Fitoterapia: Inflamações, cicatrização e saúde íntima feminina. Propriedades antimicrobianas.' },

  // ==========================================================
  // 🛍️ PRODUTOS DAS IMAGENS REAIS (drive-originals)
  // ==========================================================
  { id: 'pemba-africana',      nome: 'Pemba Africana (Cores Sortidas)', categoria: 'acessorios', energia: 'Marcação espiritual', preco: 15.00, validade: 'Ilimitada', sku: 'ACE-PEM-001', badge: null, img: 'assets/drive-originals/pemba-africana-cores-sortidas.jpg', desc: 'Conjunto de pembas africanas coloridas (azul, marrom, verde, vermelho, roxo, amarela). Usada para marcações, pontos riscados, firmezas e trabalhos espirituais conforme prática da casa.' },
  { id: 'vela-membro-masculino', nome: 'Vela Membro Masculino (Amarela)', categoria: 'velas', energia: 'Energia masculina', preco: 18.00, validade: '36 meses', sku: 'VEL-MEM-001', badge: null, img: 'assets/drive-originals/vela-membro-masculino-amarela.jpg', desc: 'Vela anatômica masculina em cera amarela. Produto ritualístico voltado a trabalhos simbólicos ligados a energia masculina, atração, sexualidade e vitalidade.' },
  { id: 'velas-oxala-sortidas', nome: 'Velas Oxalá (Cores Sortidas)', categoria: 'velas', energia: 'Variada', preco: 22.00, validade: '36 meses', sku: 'VEL-OXA-001', badge: null, img: 'assets/drive-originals/velas-oxala-cores-sortidas.jpg', desc: 'Maços de velas oxalá em cores sortidas (marrom, preta, vermelha, branca, roxa, azul, verde e amarela). Para uso religioso/espiritual, trabalhos, firmezas e pedidos conforme a cor.' },
  { id: 'abanos-palha',        nome: 'Abanos de Palha Trançada', categoria: 'acessorios', energia: 'Manipulação de fumaça', preco: 25.00, validade: 'Ilimitada', sku: 'ACE-ABA-001', badge: null, img: 'assets/drive-originals/abanos-palha-trancada.jpg', desc: 'Três abanos/leques artesanais em palha natural trançada, tamanhos diferentes. Para uso ritual, defumação, manipulação de fumaça, decoração de terreiro/altar. Material natural e fabricação artesanal.' },
  { id: 'pos-magicos',         nome: 'Pós Ritualísticos', categoria: 'acessorios', energia: 'Trabalhos espirituais', preco: 35.00, validade: '24 meses', sku: 'ACE-POS-001', badge: null, img: 'assets/drive-originals/pos-magicos-7-exu-7-desgraca-7-diabo-po-da-peste-corredeira-preta.jpg', desc: 'Kit com 5 saquinhos de pós ritualísticos: Corredeira Preta Preparada, 7 Exu, Pó da Peste, 7 Desgraça e 7 Diabo. Itens ritualísticos de linha forte para trabalhos espirituais específicos.' },
  { id: 'guia-contas',         nome: 'Guia de Contas (Preta/Roxa)', categoria: 'acessorios', energia: 'Proteção espiritual', preco: 20.00, validade: 'Ilimitada', sku: 'ACE-GUI-001', badge: null, img: 'assets/drive-originals/guia-contas-preta-roxa.jpg', desc: 'Guia/colar de miçangas em cores preta e roxa, com fecho preto. Colar ritualístico possivelmente associado a linhas de esquerda/exu/pomba-gira ou proteção.' },
  { id: 'bonecos-vodu',        nome: 'Bonecos Vodu (Preto/Vermelho/Branco)', categoria: 'acessorios', energia: 'Representação simbólica', preco: 28.00, validade: 'Ilimitada', sku: 'ACE-BON-001', badge: null, img: 'assets/drive-originals/bonecos-vodu-pano-preto-vermelho-branco.jpg', desc: 'Três bonecos de pano tipo vodu/fetiche ritual em cores preto, vermelho e branco. Usados como representação simbólica em trabalhos espirituais e simpatias com variações por cor.' },

  // ==========================================================
  // 🕯️ DEFUMADORES (1 item a R$ 5,00)
  // ==========================================================
   { id: 'defumador-5',    nome: 'Defumador',      categoria: 'defumacao', energia: 'Conforme indicação', preco: 5.00, validade: '24 meses', sku: 'DEF-GEN-001', badge: null, img: 'https://images.pexels.com/photos/5632538/pexels-photo-5632538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400', desc: 'Cada defumador serve para aquilo que é indicado na frente da caixa. Defumações com ervas selecionadas para diferentes necessidades espirituais.' },
];

// ==========================================================
// Helpers
// ==========================================================
function formatPreco(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function getProduto(id) {
  return CATALOGO.find(p => p.id === id);
}

function getPorCategoria(cat) {
  if (!cat || cat === 'todos') return CATALOGO;
  return CATALOGO.filter(p => p.categoria === cat);
}

function getCategorias() {
  return [...new Set(CATALOGO.map(p => p.categoria))];
}

// Stats
function totalProdutos() { return CATALOGO.length; }
function totalCategorias() { return getCategorias().length; }
function precoMinimo() { return Math.min(...CATALOGO.map(p => p.preco)); }
function precoMaximo() { return Math.max(...CATALOGO.map(p => p.preco)); }

// ==========================================================
// Exports (Node.js)
// ==========================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CATALOGO,
    formatPreco,
    getProduto,
    getPorCategoria,
    getCategorias,
    totalProdutos,
    totalCategorias,
    precoMinimo,
    precoMaximo,
  };
}
