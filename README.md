<p align="center">
  <img src="assets/jupira.jpeg" alt="Casa de Ervas Jupira" width="120"/>
</p>

<h1 align="center">🌿 Casa de Ervas Jupira</h1>

<p align="center">
  <strong>Ervas, design e espiritualidade — uma casa com alma de cabocla.</strong>
  <br />
  <code>@casadeervasjupira</code> &nbsp;·&nbsp; <code>Okê Jupira! 🙏</code>
</p>

<p align="center">
  <a href="https://github.com/Deivisan/casa-de-ervas-jupira"><img src="https://img.shields.io/badge/repo-casa--de--ervas--jupira-2D6A3B?style=flat&logo=github" alt="GitHub"></a>
  <a href="https://deivisan.github.io/casa-de-ervas-jupira"><img src="https://img.shields.io/badge/site-no-ar-E8B830?style=flat&labelColor=1C1C1C" alt="Site"></a>
  <a href="https://wa.me/557588136678"><img src="https://img.shields.io/badge/whatsapp-25D366?style=flat&labelColor=1C1C1C" alt="WhatsApp"></a>
</p>

---

## 🏹 Sobre

A **Casa de Ervas Jupira** é um ecossistema criativo que une o conhecimento ancestral das plantas à potência do design contemporâneo. Cada produto, cada post e cada pixel carrega a força da mata e o frescor das folhas — inspirados pela **Cabocla Jupira**, princesa das matas, guerreira flecheira, filha de Jurema.

### O que entregamos

| Frente              | Descrição                                                                 |
|---------------------|---------------------------------------------------------------------------|
| 📸 **Instagram**    | Posts, stories e reels com identidade visual cabocla e paleta amarelo-verde-vermelho |
| 🎨 **Geração de Imagens** | Prompts estratégicos para IA (Midjourney) com tema de cabocla, ervas e mata |
| 🌱 **Casa de Ervas** | Loja online com banhos, defumações, incensos, velas e Kits Jupira        |
| 🛒 **Site Completo** | Catálogo, página da Cabocla Jupira, checkout com saudação Okê Jupira      |
| 🤖 **Agentes IA**   | 4 agentes autônomos orquestrados para design, conteúdo, redes e loja      |

---

## 🎨 Identidade Visual

A marca é construída sobre as **cores da Cabocla Jupira**:

```color
🟡 Amarelo  #E8B830 — Cor principal (coroa de Jurema, luz, girassol)
🟢 Verde    #2D6A3B — Mata, ervas frescas, Oxóssi
🔴 Vermelho #B83A2A — Fogo de Iansã, força, guerra
🔵 Azul Anil #2A4B7C — Espiritualidade, profundidade, Jacutá
```

| Elemento     | Detalhe                                          |
|--------------|--------------------------------------------------|
| **Logotipo** | Cabocla indígena com penacho (símbolo + texto)   |
| **Tipografia** | Playfair Display (títulos) + Inter (corpo)     |
| **Tom de Voz** | Firme e poético — como uma cabocla que fala pouco mas acolhe |
| **Saudação** | Okê Jupira! 🙏                                    |

---

## 📂 Estrutura do Projeto

```
casa-de-ervas-jupira/
│
│   🏠 SITE (GitHub Pages — estático)
├── 📄 index.html                  # Home — hero, destaques, sobre Jupira
├── 📄 produtos.html               # Catálogo completo com filtros
├── 📄 produto.html                # Página dinâmica de cada produto
├── 📄 sobre.html                  # História completa da Cabocla Jupira
├── 📄 contato.html                # WhatsApp, Instagram, mensagens rápidas
├── 📄 .nojekyll                   # Otimização GH Pages
├── 📁 css/
│   └── 📄 style.css               # Estilo completo (cores cabocla)
├── 📁 js/
│   ├── 📄 produtos.js             # Catálogo com 84+ produtos
│   ├── 📄 cart.js                 # Carrinho + WhatsApp integration
│   └── 📄 main.js                 # Navegação, filtros, renderização
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── 📄 logo-jupira.svg     #   Logotipo com cabocla
│   │   └── 📄 cabocla-jupira.svg  #   Ilustração completa da Cabocla
│   ├── 📁 fonts/                  #   Fontes
│   └── 📁 icons/                  #   Ícones
│
│   📚 DOCUMENTAÇÃO DO PROJETO
├── 📄 README.md                   # → Você está aqui
├── 📄 agentes.md                  # Orquestração dos 4 agentes IA
├── 📁 src/
│   ├── 📁 design/                 # Identidade visual completa
│   │   ├── 📄 skill-map.md        #   Mapa de habilidades
│   │   ├── 📄 brand-guidelines.md #   Diretrizes da marca cabocla
│   │   ├── 📄 color-palette.md    #   Paleta amarelo-verde-vermelho-anil
│   │   └── 📄 typography.md       #   Hierarquia tipográfica
│   ├── 📁 instagram/              # Estratégia de conteúdo
│   │   ├── 📄 content-calendar.md #   Calendário editorial
│   │   ├── 📄 image-generation.md #   Prompts para geração de imagens
│   │   └── 📁 post-templates/
│   ├── 📁 loja/                   # E-commerce e produtos
│   │   ├── 📄 checkout-flow.md    #   Fluxo de compra
│   │   ├── 📁 ervas/
│   │   │   ├── 📄 catalog.md      #   Catálogo com preços
│   │   │   ├── 📄 categories.md   #   Categorias e tags
│   │   │   └── 📁 descricoes/
│   │   └── 📁 site/
│   │       └── 📄 structure.md    #   Sitemap
│   └── 📁 agents/                 # Agentes especializados
│       ├── 📄 design-agent.md     #   🎨 Agente de Design
│       ├── 📄 content-agent.md    #   📝 Agente de Conteúdo
│       ├── 📄 social-agent.md     #   📸 Agente Social
│       └── 📄 store-agent.md      #   🌿 Agente da Loja
├── 📁 docs/
│   ├── 📄 index.md                # Central de documentação
│   └── 📁 vision/
│       ├── 📄 manifesto.md        # Manifesto — história da Cabocla Jupira
│       └── 📄 README.md
├── 📁 templates/                  # Modelos de posts
│   ├── 📄 post-instagram.md
│   ├── 📄 story-instagram.md
│   └── 📄 product-card.md
└── 📁 config/                     # Configuração e automação
    ├── 📄 opencode.json
    └── 📁 workflows/
        ├── 📄 criar-post.md
        └── 📄 cadastrar-produto.md
```

---

## 🤖 Agentes

O ecossistema é orquestrado por **4 agentes autônomos** que trabalham em sincronia:

```mermaid
graph LR
    A[🧠 Core Agent] --> B[🎨 Design Agent]
    A --> C[📝 Content Agent]
    A --> D[📸 Social Agent]
    A --> E[🌿 Store Agent]
    B --> F[📤 Publicação]
    C --> F
    D --> F
    E --> F
```

| Agente            | Função                                    | Documento                    |
|-------------------|-------------------------------------------|------------------------------|
| 🧠 **Core Agent**  | Orquestra todos os agentes e valida entregas | `agentes.md`                |
| 🎨 **Design Agent**| Cria e mantém a identidade visual cabocla | `src/agents/design-agent.md` |
| 📝 **Content Agent**| Escreve com tom espiritual e firme        | `src/agents/content-agent.md`|
| 📸 **Social Agent**| Gerencia Instagram e métricas             | `src/agents/social-agent.md` |
| 🌿 **Store Agent**  | Cuida do catálogo, estoque e pedidos      | `src/agents/store-agent.md`  |

---

## 🌿 Linha Especial — Cabocla Jupira

Produtos dedicados à Cabocla Jupira, preparados com ervas que remetem à sua força:

| Produto            | Itens incluídos                          | Energia            | Preço   |
|--------------------|------------------------------------------|--------------------|---------|
| Defumação Jupira   | Arruda + Alecrim + Folhas de Jurema      | Descarrego + cura  | R$ 22,00|
| Vela Jupira        | Jurema + Alfazema                        | Cura espiritual    | R$ 28,00|
| Kit Jupira         | Ervas + Vela + Defumação + Guia          | Kit completo       | R$ 62,00|

---

## 🚀 Comece por aqui

```bash
# Clone o repositório
git clone https://github.com/Deivisan/casa-de-ervas-jupira.git

# Explore a estrutura
eza --tree -L 2 casa-de-ervas-jupira

# Leia o manifesto (história da Cabocla Jupira)
bat docs/vision/manifesto.md

# Conheça os agentes
bat agentes.md

# Veja o site (abra no navegador)
xdg-open index.html
```

---

## 📊 Status do Projeto

| Área              | Status            | Observação                                |
|-------------------|-------------------|-------------------------------------------|
| Identidade Visual | ✅ Concluído      | Cores, tipografia, brand definidos       |
| Instagram         | ✅ Concluído      | Calendário e prompts prontos              |
| Loja              | ✅ Concluído      | Catálogo, categorias, checkout definidos |
| Site              | ✅ **No AR**      | GitHub Pages — 5 páginas HTML completas   |
| Agentes           | ✅ Concluído      | 4 agentes documentados                    |
| Logotipo          | ✅ Concluído      | SVG com cabocla + penacho                 |
| Ilustração        | ✅ Concluído      | SVG corpo inteiro da Cabocla Jupira       |
| Catálogo Digital  | ✅ Concluído      | 17 produtos com carrinho + WhatsApp       |
| Fotos de Produtos | ⏳ Cliente        | Placeholder Unsplash (cliente substitui)  |
| Domínio Próprio   | ⏳ Futuro         | Se o cliente quiser um domínio .com       |

---

## 🙏 Okê Jupira!

> _Jupira é a princesa das matas, guerreira que mora no Jacutá — onde a terra encontra o céu, e o design encontra a alma._

<p align="center">
  <a href="https://instagram.com/casadeervasjupira">📸 Instagram</a> &nbsp;·&nbsp;
  <a href="https://wa.me/557588136678?text=Olá! Vim pela Casa de Ervas Jupira 🌿 Okê Jupira!">📱 WhatsApp</a> &nbsp;·&nbsp;
  <a href="docs/vision/manifesto.md">📖 Manifesto</a> &nbsp;·&nbsp;
  <a href="agentes.md">🤖 Agentes</a> &nbsp;·&nbsp;
  <a href="https://github.com/Deivisan/casa-de-ervas-jupira/issues">🐛 Reportar Issue</a>
</p>

---

<p align="center">
  <sub>Feito com 🌿 e 🏹 para honrar a Cabocla Jupira e manter viva a sabedoria das matas.</sub>
</p>
