# 🤖 Agentes — Casa de Ervas Jupira

Sistema de agentes autônomos para orquestrar o ecossistema criativo da Casa de Ervas Jupira.

**Última atualização:** 27/05/2026 | Catálogo: 29 produtos | Imagens: 36 prompts de geração prontos | Status: Aguardando foto das mãos + logo

---

## 🧠 Orquestrador Principal

**Nome:** Core Agent  
**Função:** Coordena todos os agentes, mantém a visão do projeto e distribui tarefas.  
**Stack:** CLI-First · Bun · Arch Linux · Zsh 5.9 + Starship  
**Modelo:** DevSan (AGI pessoal)

---

## 🎨 Agente de Design

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Agente de Design                       |
| Skill Map   | `src/design/skill-map.md`              |
| Competências| Brand identity (cabocla), color palette, tipografia, UI/UX |
| Outputs     | Diretrizes visuais, assets, protótipos |

## 📝 Agente de Conteúdo

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Agente de Conteúdo                     |
| Competências| Copywriting espiritual com tom de cabocla, legendas, blogs |
| Outputs     | Posts, stories, descrições de produtos |

## 📸 Agente Social

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Agente Social                          |
| Competências| Calendário editorial, agendamento, engajamento |
| Outputs     | Cronograma de posts, analytics, réguas |

## 🌿 Agente da Loja

| Campo       | Detalhe                                 |
|-------------|-----------------------------------------|
| Nome        | Agente da Loja                        |
| Competências| Catálogo, ervas, checkout, inventário  |
| Outputs     | Páginas de produto, carrinho, pedidos  |

---

## 📦 Catálogo de Produtos (REAL)

**Arquivo:** `js/produtos.js`  
**Total:** 29 produtos verificados  
**Faixa de preço:** R$ 5,00 – R$ 38,00  
**Imagens:** drive-originals (reais) + Pexels (complementares) + 36 prompts gerados

### 📊 Distribuição por Categoria

| Categoria | Quantidade | Preço Mín. | Preço Máx. | Descrição |
|-----------|-----------|-----------|-----------|-----------|
| 🕯️ Velas | 10 | R$ 6,00 | R$ 38,00 | Figurativas, anatômicas, coloridas |
| 🌱 Ervas | 12 | R$ 5,00 | R$ 12,00 | Ervas com fitoenergética + fitoterapia (36 prompts gerados) |
| 🛍️ Acessórios | 6 | R$ 15,00 | R$ 35,00 | Pembas, pós, guias, bonecos, abanos |
| 🕯️ Defumadores | 1 | R$ 5,00 | R$ 5,00 | Genéricos (conforme embalagem) |
| **TOTAL** | **29** | **R$ 5,00** | **R$ 38,00** | 23 com imagens + 12 aguardando geração |

### 🎯 Produtos Destaque (com imagens reais)

1. **Vela Caveira Preta** (R$ 12,00)
   - Imagem: `assets/drive-originals/vela-preta-caveira-frente.jpg`
   - Energia: Transformação e ancestralidade

2. **Cera formato Pé** (R$ 20,00)
   - Imagem: `assets/drive-originals/vela-pe-branca-par.jpg`
   - Energia: Movimento e caminho

3. **Cera Cabeça** (R$ 38,00)
   - Imagem: `assets/drive-originals/vela-caveira-branca.jpg`
   - Energia: Cura mental e espiritual

4. **Pemba Africana (Cores Sortidas)** (R$ 15,00)
   - Imagem: `assets/drive-originals/pemba-africana-cores-sortidas.jpg`
   - Energia: Marcação espiritual

5. **Pós Ritualísticos** (R$ 35,00)
   - Imagem: `assets/drive-originals/pos-magicos-7-exu-7-desgraca-7-diabo-po-da-peste-corredeira-preta.jpg`
   - Energia: Trabalhos espirituais

---

## 🌿 Metodologia de Geração de Imagens

**Arquivo:** `PROMPTS-GERACAO-IMAGENS.md`  
**Status:** ✅ 36 prompts prontos  
**Foco:** 12 ervas × 3 ângulos cada

### 📐 Os 3 Ângulos Padronizados

| Ângulo | Contexto | Foco | Uso |
|--------|----------|------|-----|
| **1** | POV Mãos | Textura, naturalidade | Capa do produto |
| **2** | Embalagem Frontal | Produto comercial | Galeria principal |
| **3** | Display Rústico | Estética, abundância | Social media |

### 📋 Estrutura do Prompt

Cada prompt contém:
- **Contexto Visual:** Tipo de fotografia (POV, still life, flat lay)
- **Elementos Principais:** Erva + interação (mãos/embalagem/mesa)
- **Especificidades Botânicas:** Cores, texturas, formas características
- **Lighting:** Tipo de iluminação (natural, estúdio, ambiente)
- **Qualidade:** Resolução, fotorealismo, estilo fotográfico

### 🎯 Ativos Base (Próximos)

Aguardando do cliente:
- ✅ **Logo Oficial:** Indígena + onça + texto "CASA DE ERVAS JUPIRA"
- ✅ **Foto das Mãos:** Cliente com palmas abertas viradas para frente

### 🔄 Pipeline de Geração

1. **Input:** Logo + Foto das mãos (referências estruturais)
2. **Geração:** 36 imagens (12 ervas × 3 ângulos)
3. **Saída:** `/assets/images/produtos/[erva]-[angulo].jpg`
4. **Upload:** Atualização automática de `js/produtos.js`
5. **Deploy:** Commit + Push para GitHub Pages

### 📝 Ervas com Prompts Prontos

1. ✅ Hibisco (Ângulos 1-3)
2. ✅ Jurema Preta (Ângulos 1-3)
3. ✅ Erva Cidreira (Ângulos 1-3)
4. ✅ Arruda (Ângulos 1-3)
5. ✅ Unha de Gato (Ângulos 1-3)
6. ✅ Bardana (Ângulos 1-3)
7. ✅ Camomila (Ângulos 1-3)
8. ✅ Erva Doce (Ângulos 1-3)
9. ✅ Eucalipto (Ângulos 1-3)
10. ✅ Sálvia (Ângulos 1-3)
11. ✅ Hortelã (Ângulos 1-3)
12. ✅ Aroeira (Ângulos 1-3)

---

### 🔗 Estrutura de Dados (Produto)

```js
{
  id: 'string-unico',                    // ID para URL/carrinho
  nome: 'Nome do Produto',               // Display name
  categoria: 'velas|ervas|acessorios|defumacao',
  energia: 'Descrição da energia/uso',   // Foco espiritual
  preco: 0.00,                           // Valor em R$
  validade: 'XX meses ou Ilimitada',     // Shelf-life
  sku: 'ABC-123-001',                    // Código interno
  badge: '💰 Label' | null,              // Destaque (Pacote, Nova, etc)
  img: 'assets/... ou https://...',      // URL da imagem
  desc: 'Descrição longa com fit...',    // 2-3 parágrafos
}
```

### 📁 Imagens do Catálogo

**Local:** `assets/drive-originals/` (reais)
- 11 imagens JPG de produtos reais (4.4 MB total)
- Nomes descritivos: `vela-preta-caveira-frente.jpg`, `pemba-africana-cores-sortidas.jpg`, etc.

**Externas:** Pexels (complementares para cobrir lacunas)
- Usando URLs HTTPS com compressão: `https://images.pexels.com/...?auto=compress&cs=tinysrgb&dpr=1&w=400`

---

## 🔄 Fluxo de Trabalho

```
Usuário → Core Agent → Design Agent (briefing visual)
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
