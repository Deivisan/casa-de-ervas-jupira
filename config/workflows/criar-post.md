# 🔄 Workflow: Criar Post para Instagram

Fluxo completo de criação de um post.

---

## Passos

### 1. Briefing 📋
- Qual o tema? (produto, educativo, citação, história da cabocla)
- Qual a energia? (proteção, prosperidade, paz)
- Tem alguma data especial? (sazonal, dia de cabocla)

### 2. Design 🎨
- `design-agent` recebe briefing
- Escolhe template em `templates/post-instagram.md`
- Gera imagem seguindo `src/instagram/image-generation.md`
- Aplica identidade visual (cores amarelo-verde-vermelho, cabocla, fontes)

### 3. Conteúdo 📝
- `content-agent` recebe briefing + imagem
- Escreve legenda (hook + corpo + CTA)
- Inclui saudação "Okê Jupira!" quando pertinente
- Seleciona hashtags com `#casadeervasjupira`

### 4. Revisão ✅
- `core` valida:
  - Imagem dentro das diretrizes de cor (amarelo domina)
  - Legenda com tom de cabocla
  - Hashtags apropriadas
  - CTA presente

### 5. Publicação 📤
- `social-agent` agenda no Instagram via Composio
- Stories de divulgação do post
- Monitora engajamento nas primeiras 2h

---

## Comando Único

```bash
# "Criar post sobre arruda para proteção com a cabocla"
# O core orquestra automaticamente:
# design-agent → content-agent → core → social-agent
```
