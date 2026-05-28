# 🎯 Metodologia de Geração e Validação — Casa de Ervas Jupira

**Data:** 27/05/2026  
**Versão:** 1.0

---

## 📸 Referências Visuais

### 🖼️ Imagens de Exemplo (ChatGPT Images)
- `ChatGPT Image 2026-05-27 21_12_02.png` → Exemplo de estilo/composição
- `ChatGPT Image 2026-05-27 21_22_48.png` → Exemplo de layout
- `ChatGPT Image 2026-05-27 21_49_42 (1).png` → Exemplo de texto integrado
- `ChatGPT Image 2026-05-27 21_49_43 (2).png` → Exemplo de cores
- `ChatGPT Image 2026-05-27 21_49_43 (3).png` → Exemplo de solapa
- `ChatGPT Image 2026-05-27 22_03_11.png` → Exemplo final

**Uso:** Analisar padrões de qualidade, estilo, tipografia, posicionamento de texto.

---

## 🔧 Pipeline de Geração

### 1️⃣ Preparação dos Prompts
- ✅ Usar 48 prompts otimizados (4 por erva)
- ✅ Incluir `**NOME ESCRITO:**` em ângulos 1-3
- ✅ Especificar posição EXATA do nome
- ✅ Incluir cores de tipografia específicas

### 2️⃣ Geração com IA (Midjourney/DALL-E/Claude)
- Entregar prompt COMPLETO (com todas as especificações)
- Parâmetros recomendados:
  - **Estilo:** Photorealistic, professional product photography
  - **Resolução:** 4K (3840×2160) ou alta qualidade
  - **Semente:** Fixa para consistência entre ângulos da mesma erva
  - **Modelo:** V6 (Midjourney) ou DALL-E 3

### 3️⃣ Validação Automática (OCR)
**Objetivo:** Garantir que o NOME da erva aparece na imagem.

#### Ferramentas OCR Recomendadas:
```bash
# Tesseract (instalado Arch)
tesseract imagem.png stdout --psm 6

# ou python easyocr
import easyocr
reader = easyocr.Reader(['pt'])
result = reader.readtext('imagem.png')
textos = [det[1] for det in result]
```

#### Checklist de Validação:
```python
def validar_imagem(imagem_path, nome_erva):
    # 1. Executar OCR
    textos = extrair_texto_ocr(imagem_path)
    
    # 2. Verificar presença do NOME (ignorando case)
    nome_encontrado = any(nome_erva.lower() in texto.lower() for texto in textos)
    
    # 3. Verificar contatos (opcional)
    contatos_ok = any('75 8813' in txt or '@casadeervasjupira' in txt for txt in textos)
    
    # 4. Verificar qualidade (resolução, nitidez)
    qualidade_ok = verificar_resolucao(imagem_path, min_width=1920)
    
    return nome_encontrado and contatos_ok and qualidade_ok
```

---

## 📐 Especificações Técnicas de Posicionamento do Nome

### Posições Preferidas (ordem de prioridade):
1. **Parte inferior central** — faixa de 10% da altura, fundo contrastante
2. **Lateral direita/equerda** — vertical, centralizado na altura
3. **Overlay com contraste** — texto com sombra preta/contorno para legibilidade

### Tipografia:
- **Fonte:** Serif elegante (Playfair Display) ou Sans-serif clean (Inter/Roboto)
- **Cor:** Dourado (#E8B830) / Vermelho (#B83A2A) / Verde (#2D6A3B) / Branco com sombra preta
- **Tamanho:** 15-20% da altura da imagem (mínimo 100px em 1080p)
- **Peso:** Bold ou semibold para legibilidade
- **Contraste:** Mínimo 4.5:1 (WCAG AA)

---

## 🖼️ Análise das Imagens de Referência

Vamos extrair padrões das imagens ChatGPT fornecidas:

```bash
# Executar OCR em cada referência
for img in assets/images/referencias/ChatGPT*.png; do
    echo "=== $img ==="
    tesseract "$img" stdout --psm 6 | grep -i "jupira\|erva\|10g"
done
```

**ATENÇÃO:** Precisamos que você confirme o que vê nessas imagens:
- Onde está posicionado o texto?
- Que cores de fonte usaram?
- O nome da erva aparece?
- Como é a embalagem (saco simples vs vácuo)?

---

## 📋 Checklist de Qualidade Pós-Geração

Para CADA imagem gerada, validar:

### ✅ Textual
- [ ] NOME da erva aparece CLARAMENTE (ex: "HIBISCO")
- [ ] Contatos estão presentes (WhatsApp 75 8813-6678)
- [ ] Instagram @casadeervasjupira visível
- [ ] Peso 10g legível
- [ ] Sem erros de ortografia

### ✅ Técnico
- [ ] Resolução mínima: 1920×1080 (Full HD)
- [ ] Formato: JPG/PNG
- [ ] Saco SIMPLES (sem vácuo aparente)
- [ ] Solapa na BORDA LATERAL (não topo)
- [ ] Nada grampeado no topo

### ✅ Estético
- [ ] Atmosfera mística/ancestral
- [ ] Cores da matriz africana (amarelo #E8B830, verde #2D6A3B, vermelho #B83A2A)
- [ ] Iluminação de estúdio/ritual
- [ ] Texturas realistas (madeira rústica, folhas secas)
- [ ] Foco nítido no produto

---

## 🔄 Fluxo de Trabalho Completo

```
1. PREPARAÇÃO
   ├─ Copiar prompts atualizados (48)
   ├─ Selecionar modelo de IA (Midjourney v6 / DALL-E 3)
   └─ Configurar seed fixo por erva

2. GERAÇÃO
   ├─ Gerar Ângulos 1-3 (com NOME ESCRITO)
   ├─ Gerar Ângulo 4 (Instagram Story)
   └─ Salvar em assets/images/produtos/[erva]-[angulo].png

3. VALIDAÇÃO OCR
   ├─ Executar OCR em cada imagem
   ├─ Verificar se nome da erva foi detectado
   ├─ Se falhar → reprocessar com prompt mais explícito
   └─ Log de validação em logs/validacao.log

4. REVISÃO MANUAL (opcional)
   ├─ Checar qualidade visual
   ├─ Ajustar prompts se necessário
   └─ Regenerar imagens problemáticas

5. DEPLOY
   ├─ Atualizar js/produtos.js com URLs
   ├─ Commit & push
   └─ GitHub Pages atualizado
```

---

## 🛠️ Script de Validação Automática (exemplo)

```python
#!/usr/bin/env python3
"""
validador_imagens.py — Verifica se imagens geradas contêm o nome da erva
"""

import pytesseract
from PIL import Image
import os

ERVAS = [
    "HIBISCO", "JUREMA PRETA", "ERVA CIDREIRA", "ARRUDA",
    "UNHA DE GATO", "BARDANA", "CAMOMILA", "ERVA DOCE",
    "EUCALIPTO", "SÁLVIA", "HORTELÃ", "AROEIRA"
]

def extrair_texto(caminho_imagem):
    img = Image.open(caminho_imagem)
    texto = pytesseract.image_to_string(img, lang='por')
    return texto.upper()

def validar_imagem(caminho_imagem,NomeErva Esperado):
    texto = extrair_texto(caminho_imagem)
    return NomeErva Esperado in texto

def main():
    pasta = "assets/images/produtos/"
    for arquivo in os.listdir(pasta):
        if arquivo.endswith(('.png', '.jpg', '.jpeg')):
            caminho = os.path.join(pasta, arquivo)
            for erva in ERVAS:
                if erva.lower().replace(' ', '_') in arquivo.lower():
                    ok = validar_imagem(caminho, erva.upper())
                    status = "✅" if ok else "❌"
                    print(f"{status} {arquivo} — contém '{erva}': {ok}")
                    break

if __name__ == "__main__":
    main()
```

---

## 🎨 Padrões Extraídos das Referências (precisamos da sua análise)

Pela sua experiência com as imagens ChatGPT geradas:

1. **Posição do texto:** O nome aparece na parte inferior? lateral?
2. **Estilo da fonte:** Serif? Sans-serif? manuscrita?
3. **Cor do texto:** Dourado? branco? vermelho?
4. **Saco:** Parece simples ou a vácuo?
5. **Solapa:** Está grampeada na borda? Tem espaço em branco?
6. **Geral:** Qual o impacto visual geral?

**Por favor, analise as 6 imagens ChatGPT e nos dê um resumo dos padrões que você quer replicar.**

---

## 📊 Log de Validação

Cada lote de geração deve gerar `logs/validacao.log`:

```
[2026-05-27 22:15] Hibisco-Angulo1.png — ✅ NOME: HIBISCO detectado | Contatos: ✅ | Resolução: 3840x2160 ✅
[2026-05-27 22:16] Hibisco-Angulo2.png — ⚠️ NOME: HIBISCO não detectado (reprocessar)
[2026-05-27 22:17] Hibisco-Angulo3.png — ✅ NOME: HIBISCO detectado
[2026-05-27 22:20] Hibisco-Story.png — ✅ NOME: HIBISCO detectado
```

---

## 🚀 Próximos Passos

1. **Você analisa as imagens de referência** e nos dá os padrões visuais
2. **Atualizamos prompts** com posicionamento EXATO baseado nas referências
3. **Implementamos validação OCR** automática
4. **Testamos com 1-2 ervas** primeiro
5. **Ajustamos e scaling** para todas as 12

---

**Esta metodologia garante:** Nome sempre visível, qualidade consistente, validação automática.
