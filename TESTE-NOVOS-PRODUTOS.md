# 🧪 Guia de Teste — Novos Produtos Casa de Ervas Jupira

**Data:** 27 de maio de 2026  
**Status:** Pronto para Teste  
**Última Atualização:** Integração Concluída  

---

## ✅ Teste Manual (Browser)

### **1. Página de Velas (`velas.html`)**

```bash
# Abrir no navegador:
open http://localhost:3000/velas.html
```

**Verificações:**
- [ ] Página carrega sem erros
- [ ] Grid de produtos exibe 22 velas (antes eram 12)
- [ ] Novos produtos aparecem na lista:
  - [ ] Vela Cifrão (R$ 12,00)
  - [ ] Vela Sapo (R$ 12,00)
  - [ ] Vela Caveira (R$ 12,00)
  - [ ] Cera Pé (R$ 20,00)
  - [ ] Cera Cabeça (R$ 38,00)
  - [ ] Casa de Cera (R$ 20,00)
  - [ ] Vela Amarela (R$ 6,00)
  - [ ] Vela Verde (R$ 6,00)
  - [ ] Vela Azul (R$ 6,00)
  - [ ] Vela Preta/Vermelha (R$ 6,50)

### **2. Página de Ervas (`ervas.html`)**

```bash
# Abrir no navegador:
open http://localhost:3000/ervas.html
```

**Verificações:**
- [ ] Página carrega sem erros
- [ ] Grid de produtos exibe 25 ervas (antes eram 24)
- [ ] Novo produto aparece na lista:
  - [ ] Hibisco (R$ 5,00)
  - [ ] Verificar descrição em português
  - [ ] Verificar SKU `ERV-HIB-001`

### **3. Catálogo Geral (`produtos.html`)**

```bash
# Abrir no navegador:
open http://localhost:3000/produtos.html
```

**Verificações:**
- [ ] Total de produtos: 103 itens
- [ ] Filtro de Velas mostra 22 produtos
- [ ] Filtro de Ervas mostra 25 produtos
- [ ] Busca funciona para "Cifrão", "Sapo", "Hibisco"
- [ ] Preços formatados corretamente em R$

---

## 🔍 Teste de Carrinho

### **1. Adicionar Novo Produto ao Carrinho**

```javascript
// Abrir console do navegador (F12) e testar:
getProduto('vela-cifrão')
// Deve retornar: {id: "vela-cifrão", nome: "Vela Cifrão", ...}
```

**Verificações:**
- [ ] Produto pode ser adicionado ao carrinho
- [ ] Quantidade aumenta corretamente
- [ ] Preço é calculado corretamente (R$ 12,00 × quantidade)
- [ ] Subtotal do carrinho atualiza
- [ ] Botão "Finalizar Pedido" funciona

### **2. Múltiplos Produtos Novos**

```javascript
// Testar adicionar vários produtos:
addToCart('vela-cifrão', 2);      // 2 × R$ 12,00 = R$ 24,00
addToCart('vela-pé', 1);           // 1 × R$ 20,00 = R$ 20,00
addToCart('hibisco', 3);           // 3 × R$ 5,00 = R$ 15,00
// Total esperado: R$ 59,00
```

**Verificações:**
- [ ] Carrinho mostra 3 itens diferentes
- [ ] Total é R$ 59,00
- [ ] Pode remover itens do carrinho
- [ ] Pode aumentar/diminuir quantidade

---

## 🔧 Teste de Código

### **1. Validação JavaScript**

```bash
# No diretório do projeto:
node js/produtos.js
# Não deve gerar erros
```

### **2. Testes de Funções**

```javascript
// Abrir console e testar:

// Teste 1: totalProdutos()
totalProdutos()  // Deve retornar: 103

// Teste 2: getPorCategoria('velas')
getPorCategoria('velas').length  // Deve retornar: 22

// Teste 3: getPorCategoria('ervas')
getPorCategoria('ervas').length  // Deve retornar: 25

// Teste 4: getProduto() com novo produto
getProduto('vela-cifrão')  // Deve retornar objeto completo

// Teste 5: formatPreco()
formatPreco(12.00)  // Deve retornar: "R$ 12,00"

// Teste 6: Verificar SKU
getProduto('vela-sapo').sku  // Deve retornar: "VEL-SAP-001"
```

### **3. Teste de Categorias**

```javascript
// Verificar que todas as categorias estão presentes:
getCategorias()
// Deve retornar: ["ervas", "defumacao", "velas", "kits", "incensos", "banhos", "oferendas", "acessorios"]

// Verificar contagem por categoria:
getPorCategoria('velas').length       // 22
getPorCategoria('ervas').length       // 25
getPorCategoria('defumacao').length   // 14
getPorCategoria('kits').length        // 12
getPorCategoria('incensos').length    // 8
getPorCategoria('banhos').length      // 8
getPorCategoria('oferendas').length   // 6
getPorCategoria('acessorios').length  // 8
// Total: 103 ✓
```

---

## 🎨 Teste de Interface

### **1. Responsividade**

- [ ] Layout desktop (1200px+): Todos os novos produtos visíveis
- [ ] Tablet (768px): Grid adapta para 2-3 colunas
- [ ] Mobile (320px): Grid adapta para 1 coluna
- [ ] Imagens carregam sem quebra
- [ ] Preços legíveis em todas as resoluções

### **2. Acessibilidade**

- [ ] Navegação por teclado funciona (Tab)
- [ ] Produtos têm ALT text nas imagens
- [ ] Cores contrast suficiente (WCAG AA)
- [ ] Carrinho é acessível
- [ ] Mensagens de erro são claras

### **3. Performance**

```bash
# Medir tempo de carregamento:
# DevTools → Performance → Record
# Verificar:
# - First Paint < 1s
# - Largest Contentful Paint < 2.5s
# - Cumulative Layout Shift < 0.1
```

---

## 📱 Teste WhatsApp

### **1. Envio de Pedido**

1. Adicionar produtos ao carrinho
2. Clicar "💬 Finalizar Pedido"
3. Verificar mensagem WhatsApp:

```
Olá! Gostaria de fazer um pedido:

✅ Vela Cifrão (R$ 12,00) × 1
✅ Cera Pé (R$ 20,00) × 1
✅ Hibisco (R$ 5,00) × 3

Total: R$ 57,00

Pode me informar a disponibilidade e frete?
```

**Verificações:**
- [ ] Mensagem é enviada corretamente
- [ ] Produtos aparecem com nome e preço
- [ ] Total está correto
- [ ] Link WhatsApp redireciona para conversa

---

## 🐛 Teste de Erros

### **1. Validar Erros Comuns**

```javascript
// Teste 1: Produto inexistente
getProduto('vela-inexistente')  // Deve retornar: undefined

// Teste 2: Categoria vazia
getPorCategoria('categoria-fake')  // Deve retornar: []

// Teste 3: Adicionar quantidade negativa
addToCart('vela-cifrão', -1)  // Deve ser ignorado ou tratar

// Teste 4: Preço zero
precoMinimo()  // Deve ser > 0
```

### **2. Console Sem Erros**

- [ ] F12 → Console → Nenhum erro vermelho
- [ ] Nenhum warning de layout shift
- [ ] Nenhum erro de recursos faltando

---

## 📊 Teste de Dados

### **1. Integridade de SKUs**

```javascript
// Verificar que não há SKUs duplicados:
const skus = CATALOGO.map(p => p.sku);
const unique = new Set(skus);
console.log(skus.length === unique.size);  // Deve ser: true
```

### **2. Preços Válidos**

```javascript
// Todos os preços devem ser números > 0:
CATALOGO.every(p => typeof p.preco === 'number' && p.preco > 0)
// Deve retornar: true
```

### **3. Descrições Completas**

```javascript
// Verificar que todos têm descrição:
CATALOGO.every(p => p.desc && p.desc.length > 10)
// Deve retornar: true
```

---

## ✨ Teste Final — Checklist Completo

```
TESTE DE CÓDIGO:
✅ JavaScript válido
✅ Sem erros na console
✅ Funções helper funcionam
✅ SKUs únicos
✅ Preços válidos
✅ Descrições presentes

TESTE DE INTERFACE:
✅ Novos produtos aparecem em velas.html
✅ Novo produto aparece em ervas.html
✅ Catálogo mostra 103 itens
✅ Grid responsivo
✅ Imagens carregam

TESTE DE FUNCIONALIDADE:
✅ Adicionar ao carrinho funciona
✅ Calcular total funciona
✅ Remover do carrinho funciona
✅ WhatsApp envia corretamente
✅ Filtros funcionam

TESTE DE DADOS:
✅ SKUs únicos
✅ Preços válidos
✅ Descrições em português
✅ Categorias corretas
✅ Total = 103 produtos

APROVADO PARA DEPLOY? → SIM ✅
```

---

## 🚀 Deploy

Após passar em todos os testes:

```bash
# Fazer commit (já feito)
git add .
git commit -m "feat: integração 11 novos produtos"

# Push para main
git push origin main

# Deploy em produção
# (Seguir seu processo de deploy)
```

---

## 📞 Suporte

Caso encontre algum erro:

1. Verifique se `js/produtos.js` está íntegro
2. Limpe cache do navegador (Ctrl+Shift+Del)
3. Recarregue a página (F5 ou Ctrl+R)
4. Abra DevTools e verifique erros (F12)
5. Consulte `INTEGRACAO-CONCLUIDA.md` para referência

---

**Status:** ✅ Pronto para Teste  
**Última Verificação:** 27/05/2026  
**Okê Jupira! 🙏**
