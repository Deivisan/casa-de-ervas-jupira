# 🏗️ Estrutura do Site — Casa de Ervas Jupira

Arquitetura de informações e páginas.

---

## 📋 Sitemap

```
/
├── / (Home)
│   ├── Hero com ilustração da Cabocla Jupira
│   ├── Categorias em destaque
│   ├── Produtos mais vendidos
│   ├── Seção "Okê Jupira!" — história breve
│   ├── Depoimentos
│   └── Newsletter
├── /ervas
│   ├── Lista de categorias
│   ├── Filtros (proteção, prosperidade, paz, jupira)
│   └── Grid de produtos
├── /ervas/:slug
│   ├── Imagem do produto
│   ├── Descrição (benefício espiritual + modo de usar)
│   ├── Ingredientes
│   ├── Preço + variações (50g/100g)
│   └── Botão comprar
├── /cabocla-jupira
│   ├── História completa da Cabocla Jupira
│   ├── Cores, dia, saudação
│   ├── Como homenagear com ervas
│   └── Produtos da linha Jupira
├── /sobre
│   ├── História do projeto
│   ├── Missão, visão e valores
│   └── Fotos do espaço
├── /blog
│   ├── Lista de artigos
│   └── /blog/:slug (post completo)
├── /contato
│   ├── Formulário
│   ├── WhatsApp
│   └── Instagram @casadeervasjupira
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
- Header com logo (cabocla com penacho) + nav
- Hero com ilustração de Jupira ou elementos da mata
- Seção "Produtos da Cabocla Jupira"
- Depoimentos em carrossel
- Footer com links, redes, formas de pagamento

### Página de Produto
- Galeria de imagens
- Título + preço
- Seletor de quantidade/variação
- Descrição em abas (Benefícios / Como usar / Ingredientes)
- Produtos relacionados
- Seção "Que tal um banho com a proteção de Jupira?"

### Página da Cabocla Jupira
- Ilustração grande da cabocla
- História completa (quem foi, suas cores, seu dia)
- Produtos da linha especial
- Citação: "Okê Jupira! Que suas flechas afastem o que não presta."

### Checkout
- Progresso (1/3, 2/3, 3/3)
- Carrinho resumido
- Endereço
- Pagamento (Pix, cartão, boleto)
- Confirmação com saudação Okê Jupira

---

## 🎨 Integração com o Design

- Paleta: `src/design/color-palette.md` (amarelo, verde, vermelho, anil)
- Tipografia: `src/design/typography.md`
- Imagens: Diretrizes cabocla em `brand-guidelines.md`
- Logotipo: Cabocla indígena com penacho
- Responsivo: Mobile-first
