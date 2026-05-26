# 🔄 Workflow: Criar Post para Instagram

Fluxo completo de criação de um post.

---

## Passos

### 1. Briefing 📋
- Qual o tema? (produto, educativo, citação, promoção)
- Qual a energia? (proteção, prosperidade, paz)
- Tem alguma data especial? (sazonal)

### 2. Design 🎨
- `design-agent` recebe briefing
- Escolhe template em `templates/post-instagram.md`
- Gera imagem seguindo `src/instagram/image-generation.md`
- Aplica identidade visual (cores, fontes, logo)

### 3. Conteúdo 📝
- `content-agent` recebe briefing + imagem
- Escreve legenda (hook + corpo + CTA)
- Seleciona hashtags
- Ajusta tom de voz

### 4. Revisão ✅
- `luigi-core` valida:
  - Imagem dentro das diretrizes de cor
  - Legenda com tom de voz correto
  - Hashtags apropriadas
  - CTA presente

### 5. Publicação 📤
- `social-agent` agenda no Instagram via Composio
- Stories de divulgação do post
- Monitora engajamento nas primeiras 2h

---

## Comando Único

```bash
# "Criar post sobre arruda para proteção"
# O core orquestra automaticamente:
# design-agent → content-agent → luigi-core → social-agent
```
