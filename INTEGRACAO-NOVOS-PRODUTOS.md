# 🔄 Plano de Integração — Novos Produtos Casa de Ervas Jupira

**Data:** 27 de maio de 2026  
**Status:** Análise e Planejamento  
**Total de Produtos a Adicionar:** 18 itens  

---

## 📊 Resumo dos Novos Produtos

### **VELAS FIGURATIVAS (3 itens)**
- ✅ **Vela Cifrão** — R$ 12,00 — Prosperidade financeira
- ✅ **Vela Sapo** — R$ 12,00 — Amarração e domínio
- ✅ **Vela Caveira** — R$ 12,00 — Transformação e ancestralidade

### **VELAS ANATÔMICAS (2 itens)**
- ✅ **Cera formato Pé** — R$ 20,00 — Movimento e caminho
- ✅ **Cera cabeça** — R$ 38,00 — Cura mental e espiritual

### **VELAS ESPECIAIS (1 item)**
- ✅ **Casa de cera** — R$ 20,00 — Proteção do lar

### **VELAS COLORIDAS (4 itens)**
- ✅ **Vela amarela** — R$ 6,00 (pacote) — Prosperidade financeira
- ✅ **Vela verde** — R$ 6,00 (pacote) — Saúde e fartura
- ✅ **Vela azul** — R$ 6,00 (pacote) — Paz e tranquilidade
- ✅ **Vela preta e vermelha** — R$ 6,50 (pacote) — Força e transformação

### **ERVAS EXPANDIDAS (8 itens)**
- ✅ **Hibisco** — R$ 5,00 (10g) — Amor-próprio e sensualidade
- ✅ **Jurema** — (preço a definir) — Força ancestral
- ✅ **Erva cidreira** — (preço a definir) — Calma e equilíbrio
- ✅ **Arruda** — (preço a definir) — Proteção contra mau-olhado
- ✅ **Unha de gato** — (preço a definir) — Força e resistência
- ✅ **Bardana** — (preço a definir) — Purificação profunda
- ✅ **Camomila** — (preço a definir) — Serenidade
- ✅ **Erva doce** — (preço a definir) — Doçura e equilíbrio

---

## 🔍 Análise Atual vs. Novos Produtos

### **VELAS — Situação Atual**
- Catálogo tem **12 velas** (artesanais/aromáticas)
- **FALTAM velas figurativas** (cifrão, sapo, caveira) ⚠️
- **FALTAM velas anatômicas** (pé, cabeça) ⚠️
- **FALTAM velas coloridas simplificadas** (só pacotes) ⚠️
- **FALTAM casa de cera** ⚠️

**Oportunidade:** Expandir categoria de velas para +10 produtos

### **ERVAS — Situação Atual**
- Catálogo tem **24 ervas** (bem completo)
- **JÁ TEM: Arruda, Camomila, Alecrim, Erva-cidreira**
- **JÁ TEM: Hortelã, Sálvia, Patchouli, Jurema Preta**
- **FALTAM detalhes esotéricos específicos** de Hibisco, Bardana, etc.

**Oportunidade:** Enriquecer descrições com 2 dimensões (Espiritualidade + Fitoterapia)

---

## 🛠️ Plano de Ação

### **FASE 1: Velas Figurativas**
Adicionar 3 velas ao catálogo (`js/produtos.js`):

```javascript
{ id: 'vela-cifrão',    nome: 'Vela Cifrão',    categoria: 'velas', energia: 'Prosperidade financeira', preco: 12.00, ... },
{ id: 'vela-sapo',      nome: 'Vela Sapo',      categoria: 'velas', energia: 'Amarração e domínio', preco: 12.00, ... },
{ id: 'vela-caveira',   nome: 'Vela Caveira',   categoria: 'velas', energia: 'Transformação', preco: 12.00, ... },
```

### **FASE 2: Velas Anatômicas**
Adicionar 2 velas de cera ao catálogo:

```javascript
{ id: 'vela-pé',        nome: 'Cera formato Pé', categoria: 'velas', energia: 'Movimento e caminho', preco: 20.00, ... },
{ id: 'vela-cabeça',    nome: 'Cera cabeça',    categoria: 'velas', energia: 'Cura mental', preco: 38.00, ... },
```

### **FASE 3: Casa de Cera**
Adicionar 1 vela especial:

```javascript
{ id: 'vela-casa',      nome: 'Casa de cera',   categoria: 'velas', energia: 'Proteção do lar', preco: 20.00, ... },
```

### **FASE 4: Velas Coloridas (Pacotes)**
Adicionar 4 velas simplificadas (tipo: "Pacote"):

```javascript
{ id: 'vela-amarela',         nome: 'Vela amarela',         categoria: 'velas', tipo: 'Pacote', preco: 6.00, ... },
{ id: 'vela-verde',           nome: 'Vela verde',           categoria: 'velas', tipo: 'Pacote', preco: 6.00, ... },
{ id: 'vela-azul',            nome: 'Vela azul',            categoria: 'velas', tipo: 'Pacote', preco: 6.00, ... },
{ id: 'vela-preta-vermelha',  nome: 'Vela preta e vermelha', categoria: 'velas', tipo: 'Pacote', preco: 6.50, ... },
```

### **FASE 5: Enriquecer Ervas Existentes**
Atualizar 8 ervas existentes com estrutura 2D:

```javascript
{
  id: 'arruda',
  nome: 'Arruda',
  categoria: 'ervas',
  espiritualidade: {
    energia: 'Proteção contra mau-olhado',
    usos: ['Banhos de descarrego', 'Proteção espiritual', ...],
    desc: 'Uma das ervas mais usadas contra inveja...'
  },
  fitoterapia: {
    beneficios: ['Cólicas', 'Circulação', 'Anti-inflamatória'],
    desc: 'Tradicionalmente usada para cólicas...'
  },
  ...
}
```

### **FASE 6: Adicionar Hibisco (Nova Erva)**
Adicionar 1 erva completamente nova com preço:

```javascript
{
  id: 'hibisco',
  nome: 'Hibisco',
  categoria: 'ervas',
  preco: 5.00,
  quantidade: '10g',
  energia: 'Amor-próprio e sensualidade',
  ...
}
```

---

## 📝 SKUs a Usar

### **Velas Figurativas**
- `VEL-CIF-001` — Vela Cifrão
- `VEL-SAP-001` — Vela Sapo
- `VEL-CAV-001` — Vela Caveira

### **Velas Anatômicas**
- `VEL-PE-001` — Cera Pé
- `VEL-CAB-001` — Cera Cabeça

### **Velas Especiais**
- `VEL-CASA-001` — Casa de cera

### **Velas Coloridas**
- `VEL-AMAR-001` — Vela Amarela
- `VEL-VERDE-001` — Vela Verde
- `VEL-AZUL-001` — Vela Azul
- `VEL-PV-001` — Vela Preta/Vermelha

### **Ervas (Expansão)**
- `ERV-HIB-001` — Hibisco (NOVA)
- `ERV-ARR-001` — Arruda (ATUALIZAÇÃO)
- `ERV-CAM-001` — Camomila (ATUALIZAÇÃO)
- `ERV-CID-001` — Erva Cidreira (ATUALIZAÇÃO)
- `ERV-JUR-001` — Jurema (ATUALIZAÇÃO)
- `ERV-UNG-001` — Unha de Gato (ATUALIZAÇÃO)
- `ERV-BAR-001` — Bardana (ATUALIZAÇÃO)
- `ERV-DOC-001` — Erva Doce (ATUALIZAÇÃO)
- `ERV-EUC-001` — Eucalipto (ATUALIZAÇÃO)
- `ERV-SAL-001` — Sálvia (ATUALIZAÇÃO)
- `ERV-HOR-001` — Hortelã (ATUALIZAÇÃO)
- `ERV-ARO-001` — Aroeira (ATUALIZAÇÃO)

---

## 💾 Arquivo JSON de Referência

Veja `/tmp/novos-produtos.json` para estrutura completa de dados.

---

## ✅ Checklist de Implementação

- [ ] **Fase 1:** Adicionar 3 velas figurativas
- [ ] **Fase 2:** Adicionar 2 velas anatômicas
- [ ] **Fase 3:** Adicionar 1 casa de cera
- [ ] **Fase 4:** Adicionar 4 velas coloridas (pacotes)
- [ ] **Fase 5:** Enriquecer 8 ervas existentes (estrutura 2D)
- [ ] **Fase 6:** Adicionar hibisco como nova erva
- [ ] **Teste:** Renderizar velas.html
- [ ] **Teste:** Renderizar ervas.html
- [ ] **Commit:** "feat: integração 18 novos produtos + enriquecimento"
- [ ] **Deploy:** Push para main

---

## 📢 Impacto Esperado

| Métrica | Antes | Depois | Δ |
|---------|-------|--------|---|
| **Total de Velas** | 12 | 22 | +10 (+83%) |
| **Total de Ervas** | 24 | 24 | +0 (enriquecimento) |
| **Produtos no Catálogo** | 84 | 103 | +19 |
| **Categorias de Vela** | 1 | 5 | +4 |

---

## 🎯 Próximas Etapas

1. ✅ Copiar código do `/tmp/novos-produtos.json`
2. ✅ Integrar ao `js/produtos.js`
3. ✅ Validar renderização em `velas.html` e `ervas.html`
4. ✅ Testar carrinho com novos produtos
5. ✅ Commit e push
