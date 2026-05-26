# 🏗️ Estrutura do Site — Luigi de Aruanda

Arquitetura de informações e páginas.

---

## 📋 Sitemap

```
/
├── / (Home)
│   ├── Hero com chamada mística
│   ├── Categorias em destaque
│   ├── Produtos mais vendidos
│   ├── Depoimentos
│   └── Newsletter
├── /ervas
│   ├── Lista de categorias
│   ├── Filtros (proteção, prosperidade, paz)
│   └── Grid de produtos
├── /ervas/:slug
│   ├── Imagem do produto
│   ├── Descrição (benefício espiritual + modo de usar)
│   ├── Ingredientes
│   ├── Preço + variações (50g/100g)
│   └── Botão comprar
├── /sobre
│   ├── História do Luigi de Aruanda
│   ├── Missão, visão e valores
│   └── Fotos do espaço
├── /blog
│   ├── Lista de artigos
│   └── /blog/:slug (post completo)
├── /contato
│   ├── Formulário
│   ├── WhatsApp
│   └── Instagram
├── /carrinho
│   ├── Itens
│   ├── Cupom de desconto
│   └── Botão finalizar
└── /checkout
    ├── Dados de entrega
    ├── Forma de pagamento
    └── Confirmação
```

---

## 🧩 Componentes por Página

### Home
- Header com logo + nav
- Hero carrossel ou vídeo
- Seção "Ervas mais amadas"
- Depoimentos em carrossel
- Footer com links, redes, formas de pagamento

### Página de Produto
- Galeria de imagens
- Título + preço
- Seletor de quantidade/variação
- Descrição em abas (Benefícios / Como usar / Ingredientes)
- Produtos relacionados

### Checkout
- Progresso (1/3, 2/3, 3/3)
- Carrinho resumido
- Endereço
- Pagamento (Pix, cartão, boleto)
- Confirmação

---

## 🎨 Integração com o Design

- Paleta: `src/design/color-palette.md`
- Tipografia: `src/design/typography.md`
- Imagens: Diretrizes em `brand-guidelines.md`
- Responsivo: Mobile-first
