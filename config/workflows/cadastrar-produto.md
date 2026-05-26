# 🔄 Workflow: Cadastrar Produto na Loja

---

## Passos

### 1. Produto 📦
- Nome, categoria, preço, variações
- Energia e benefícios espirituais (inspirados em Jupira)
- Ingredientes e modo de usar

### 2. Descrição ✍️
- `content-agent` escreve descrição sensorial
- Inclui: cheiro, textura, cor, energia — com tom de cabocla
- Título SEO-friendly

### 3. Imagem 📸
- `design-agent` gera imagem do produto
- Flat lay com elementos naturais, cores amarelo-verde
- Variações para feed e página do produto

### 4. Loja 🛒
- `store-agent` cadastra no sistema
- Atualiza `src/loja/ervas/catalog.md`
- Sincroniza estoque e preço
- Cria página no site

### 5. Divulgação 📢
- `social-agent` programa post de lançamento
- Story "Chegou! Okê Jupira!"

---

**Input:** Nome + preço + categoria + energia
**Output:** Produto no ar + post no Instagram com `#casadeervasjupira`
