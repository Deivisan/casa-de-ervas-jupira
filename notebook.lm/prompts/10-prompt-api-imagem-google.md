# prompt — api de imagem google / vertex / gemini

modelo de prompt técnico para geração de imagem quando houver integração por api.

```text
generate a high-resolution [aspect ratio] commercial spiritual brazilian product image for “casa de ervas jupira”.

main subject: [product]
composition: [centered / flat lay / close-up / banner layout]
environment: brazilian herbal shop, red ritual cloth, natural straw, clay bowl, fresh herbs, dark green forest-inspired background
lighting: warm golden hour, soft shadows, product clearly visible
brand colors: deep forest green, golden yellow, red accents, subtle anil blue
style: elegant product photography, sacred brazilian afro-indigenous aesthetic, clean readable space for text
text to render: “[short title]”
footer: “@casadeervasjupira • okê jupira!”
negative prompt: no halloween style, no generic witchcraft, no medical claims, no distorted text, no extra logos, no clutter
```

campos recomendados para api:

- `aspect_ratio`: `4:5`, `9:16`, `1:1`, `16:9`.
- `output_format`: `png` ou `jpeg`.
- `safety`: manter seguro e comercial.
- `seed`: usar quando precisar consistência.
- `reference_images`: usar logo/produto real quando disponível.
