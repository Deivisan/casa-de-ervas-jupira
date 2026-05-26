# 🤖 Agentes — Luigi de Aruanda

Sistema de agentes autônomos para orquestrar o ecossistema criativo.

---

## 🧠 Orquestrador Principal

**Nome:** Luigi Core
**Função:** Coordena todos os agentes, mantém a visão do projeto e distribui tarefas.
**Stack:** CLI-First · Bun · Arch Linux
**Modelo:** DevSan (AGI pessoal)

---

## 🎨 Agente de Design

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Aruanda Design                         |
| Skill Map   | `src/design/skill-map.md`              |
| Competências| Brand identity, color palette, tipografia, UI/UX |
| Outputs     | Diretrizes visuais, assets, protótipos |

## 📝 Agente de Conteúdo

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Aruanda Content                        |
| Competências| Copywriting espiritual, legendas, blogs |
| Outputs     | Posts, stories, descrições de produtos |

## 📸 Agente Social

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Aruanda Social                         |
| Competências| Calendário editorial, agendamento, engajamento |
| Outputs     | Cronograma de posts, analytics, réguas |

## 🌿 Agente da Loja

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Aruanda Store                          |
| Competências| Catálogo, ervas, checkout, inventário  |
| Outputs     | Páginas de produto, carrinho, pedidos  |

---

## 🔄 Fluxo de Trabalho

```
Usuário → Luigi Core → Design Agent (briefing visual)
                     → Content Agent (copy + conceito)
                     → Social Agent (formato + agenda)
                     → Store Agent (produto + loja)
```

Cada agente reporta ao Core, que valida, ajusta e publica.

---

## 🛠️ Ferramentas Compartilhadas

- **Busca:** Exa (nível 1) → Tavily (nível 2) → Firecrawl (nível 3)
- **Memória:** mem0
- **Navegador:** BrowserOS MCP
- **Automação:** Composio (Gmail, Sheets, Notion, Discord, Instagram)
- **Infra:** Arch Linux · Zsh · Starship · tmux
