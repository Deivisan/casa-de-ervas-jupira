// ==========================================================
// CASA DE ERVAS JUPIRA — Catálogo de Produtos
// ==========================================================

const CATALOGO = [
  // ---- ERVAS ----
  {
    id: 'arruda', nome: 'Arruda', categoria: 'ervas',
    energia: 'Proteção', desc: 'Banho de descarrego poderoso. Remove energias pesadas e abre os caminhos.',
    preco: 8.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: '🔥 Mais vendida'
  },
  {
    id: 'guine', nome: 'Guiné', categoria: 'ervas',
    energia: 'Defesa', desc: 'Banho de proteção pesada. Ideal para limpeza profunda do campo energético.',
    preco: 7.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'alecrim', nome: 'Alecrim', categoria: 'ervas',
    energia: 'Purificação', desc: 'Banho de limpeza energética. Renova as energias e traz clareza mental.',
    preco: 6.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'manjericao', nome: 'Manjericão', categoria: 'ervas',
    energia: 'Prosperidade', desc: 'Banho de abertura de caminhos. Atrai fartura, sorte e prosperidade.',
    preco: 6.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'alfazema', nome: 'Alfazema', categoria: 'ervas',
    energia: 'Paz', desc: 'Banho relaxante para perfumar o ambiente e atrair harmonia espiritual.',
    preco: 9.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'rosa-branca', nome: 'Rosa Branca', categoria: 'ervas',
    energia: 'Amor próprio', desc: 'Banho de autoestima e amor-próprio. Suaviza a energia do coração.',
    preco: 10.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'camomila', nome: 'Camomila', categoria: 'ervas',
    energia: 'Calma', desc: 'Banho de equilíbrio emocional. Acalma a mente e traz serenidade.',
    preco: 7.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  // ---- DEFUMAÇÃO ----
  {
    id: 'defumacao-guardiao', nome: 'Defumação Guardião', categoria: 'defumacao',
    energia: 'Proteção máxima', desc: 'Arruda + Guiné + Sal grosso. Poderosa defumação para proteção do lar.',
    preco: 15.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'defumacao-cabocla', nome: 'Defumação Cabocla', categoria: 'defumacao',
    energia: 'Harmonia do lar', desc: 'Alfazema + Camomila + Rosas + Penas. Defumação especial para paz no lar.',
    preco: 18.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'defumacao-abertura', nome: 'Defumação Abertura', categoria: 'defumacao',
    energia: 'Prosperidade', desc: 'Alecrim + Canela + Louro. Abre caminhos e atrai boas energias.',
    preco: 18.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'defumacao-jupira', nome: 'Defumação Jupira ✨', categoria: 'defumacao',
    energia: 'Descarrego + Cura', desc: 'Arruda + Alecrim + Folhas de Jurema. Defumação especial inspirada na Cabocla Jupira.',
    preco: 22.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: 'Linha Jupira'
  },
  // ---- VELAS ----
  {
    id: 'vela-guardia', nome: 'Vela Guardiã', categoria: 'velas',
    energia: 'Proteção', desc: 'Arruda + Alecrim. Vela artesanal para proteção do lar e da família.',
    preco: 22.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'vela-cabocla', nome: 'Vela Cabocla', categoria: 'velas',
    energia: 'Tranquilidade', desc: 'Lavanda + Camomila. Vela suave para equilíbrio e harmonia.',
    preco: 25.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'vela-jupira', nome: 'Vela Jupira ✨', categoria: 'velas',
    energia: 'Cura espiritual', desc: 'Jurema + Alfazema. Vela especial da Linha Jupira para cura espiritual profunda.',
    preco: 28.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: 'Linha Jupira'
  },
  {
    id: 'vela-atrai', nome: 'Vela Atrai', categoria: 'velas',
    energia: 'Prosperidade', desc: 'Canela + Laranja. Vela para atrair prosperidade e boas oportunidades.',
    preco: 25.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  // ---- KITS ----
  {
    id: 'kit-banho', nome: 'Kit Banho (3 ervas)', categoria: 'kits',
    energia: 'Completo', desc: 'Escolha 3 ervas do nosso catálogo. Kit personalizado para sua necessidade.',
    preco: 18.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: 'Econômico'
  },
  {
    id: 'kit-jupira', nome: 'Kit Jupira 🌟', categoria: 'kits',
    energia: 'Cura + Proteção', desc: 'Kit completo: Ervas + Vela Jupira + Defumação Jupira + Guia de uso. Presenteie-se com a força da Cabocla.',
    preco: 62.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: 'Linha Jupira'
  },
  {
    id: 'kit-bem-estar', nome: 'Kit Bem-Estar Cabocla', categoria: 'kits',
    energia: 'Equilíbrio', desc: 'Alfazema + Camomila + Vela Cabocla. Para dias que pedem calma e acolhimento.',
    preco: 35.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  },
  {
    id: 'kit-defumacao-completo', nome: 'Kit Defumação Completo', categoria: 'kits',
    energia: 'Proteção total', desc: '3 defumações + incensário de barro + guia de defumação. Para proteger todos os ambientes.',
    preco: 55.00, img: 'https://images.unsplash.com/photo-1593001874117-c99c80fbe6d4?auto=format&fit=crop&w=400&q=80',
    badge: null
  }
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
