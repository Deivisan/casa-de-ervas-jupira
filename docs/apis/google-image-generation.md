# geração de imagens google — gemini api / imagen

## status

o repositório tem código seguro para testar e gerar imagens, mas as chaves devem ficar apenas no `.env` local. o `.env` está no `.gitignore` e não deve ser commitado.

## docs consultadas

- google ai developers — image generation: `https://ai.google.dev/gemini-api/docs/image-generation`
- google ai developers — imagen api: `https://ai.google.dev/gemini-api/docs/imagen`

## endpoint recomendado para imagem por api key

o caminho mais direto com api key é o imagen pela gemini api. se a chave foi criada no console vertex/google cloud e está vinculada a uma service account com acesso à gemini api, ela também pode ser testada por este caminho usando o header `x-goog-api-key`.

```http
POST https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict
header: x-goog-api-key: $GOOGLE_API_KEY
```

body base:

```json
{
  "instances": [
    { "prompt": "A professional studio photo of a green leaf and a golden candle" }
  ],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "4:5",
    "personGeneration": "dont_allow"
  }
}
```

## formatos suportados pelo imagen

- `1:1`
- `3:4`
- `4:3`
- `9:16`
- `16:9`

## scripts disponíveis

### testar apis

```bash
bun scripts/test-google-image-apis.mjs
```

### gerar imagem da jupira

```bash
bun scripts/generate-jupira-image.mjs \
  --product "pemba africana colorida em caixas sobre tecido vermelho" \
  --aspect "4:5" \
  --count 1
```

saída local:

```text
tmp/generated-images/
```

## variáveis no .env local

```env
GOOGLE_API_KEY=""          # chave gemini ai studio, geralmente começa com aiza
GOOGLE_VERTEX_AI_KEY=""    # chave aq vinculada a service account no console vertex/google cloud
GOOGLE_OAUTH_CLIENT_ID=""
GOOGLE_CLOUD_PROJECT_ID=""
GOOGLE_CLOUD_LOCATION="us-central1"
GOOGLE_IMAGE_MODEL="imagen-4.0-generate-001"
```

para a chave `aq...` vinculada à service account, preencha `GOOGLE_VERTEX_AI_KEY` ou `GOOGLE_API_KEY`. os scripts tentam os dois nomes.

## regra de segurança

nunca publicar `.env`, api keys ou client secrets no github. se uma chave foi exposta em chat, print ou commit, rotacione no google cloud/api console.
