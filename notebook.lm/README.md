# notebook.lm — fonte limpa para criação de conteúdo

esta pasta existe para ser enviada ao google notebooklm como **fonte principal e filtrada**, sem confundir o modelo com código, agentes internos, histórico técnico ou arquivos de automação.

## objetivo

orientar o notebooklm a gerar:

- imagens verticais para instagram feed/reels/story;
- imagens horizontais para banners, capas e loja;
- carrosséis;
- infográficos;
- roteiros de vídeo curto;
- histórias em quadrinhos;
- legendas e chamadas;
- rodapés personalizados por item;
- textos de loja e descrições comerciais.

## perfil oficial

- **instagram:** `@casadeervasjupira`
- **saudação:** `okê jupira!`
- **tom:** firme, poético, acolhedor e direto.
- **marca:** casa de ervas jupira.

## como usar no notebooklm

1. envie esta pasta inteira como fonte.
2. se o notebooklm permitir selecionar fontes, priorize:
   - `00-contexto-fonte-limpa.md`
   - `01-identidade-visual.md`
   - `02-regras-de-conteudo.md`
   - `03-prompt-mestre.md`
   - `fontes-condensadas/catalogo-e-itens-reais.md`
3. use os arquivos em `prompts/` conforme o tipo de conteúdo.
4. não use arquivos de agentes, `.git`, código javascript, logs ou credenciais como fonte de criação.

## regra de ouro

o notebooklm deve criar conteúdo como se fosse um diretor criativo da casa de ervas jupira: respeitoso, visualmente coerente, sem promessas perigosas, com energia de mata, cabocla, cura, proteção e ancestralidade.

## teste local de geração de imagem por api

para testar google gemini/vertex sem expor segredo no git:

1. copie `.env.example` para `.env`.
2. preencha localmente `GOOGLE_API_KEY`, `GOOGLE_VERTEX_AI_KEY`, `GOOGLE_OAUTH_CLIENT_ID` e, para vertex, `GOOGLE_CLOUD_PROJECT_ID`.
3. rode:

```bash
bun scripts/test-google-image-apis.mjs
```

se funcionar, as imagens de teste serão salvas em `tmp/api-tests/`, pasta temporária local.
