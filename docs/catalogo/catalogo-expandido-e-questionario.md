# catálogo expandido e questionário de preenchimento — casa de ervas jupira

> documento de trabalho para transformar imagens, catálogo existente e informações do cliente em uma base coesa para loja, posts e publicação online.

## 1. diagnóstico atual

### fontes internas usadas

- `contexto-humano.md`: visão, tom de voz, identidade visual, estratégia de conteúdo e categorias.
- `js/produtos.js`: catálogo atual com 84 produtos, preço sugerido, sku, validade, energia e descrição curta.
- `src/loja/ervas/catalog.md`: catálogo inicial de ervas, defumações e velas.
- `assets/drive-originals/descricao-imagens.md`: descrição visual das 13 imagens reais baixadas do drive.
- `docs/catalogo/imagens/*.md`: fichas individuais por imagem.

### itens reais com imagem identificada

- **13 imagens reais** analisadas.
- **12 fichas de produto/ativo** úteis: 1 logo/identidade + 11 grupos de produtos.
- **aprox. 35 variações visuais identificadas**, contando cores e rótulos: pembas 6 cores, velas oxalá 8 cores, bonecos 3 cores, guia 2 cores, pós 5 rótulos, velas anatômicas/figurativas e abanos.

### o que já está bem definido

- nome da marca: casa de ervas jupira.
- tom: firme, poético, maternal e guerreiro.
- paleta: amarelo, verde mata, vermelho e azul anil.
- catálogo base: 84 produtos em 8 categorias.
- whatsapp: `(75) 8813-6678`.
- instagram: `@casadeervasjupira`.

### o que ainda falta preencher

- preços reais finais.
- estoque/quantidade por item e por cor.
- fotos reais para todos os produtos do catálogo.
- combos e promoções confirmados.
- descrição real do fornecedor/marca para itens industrializados.
- dimensões/peso para velas, abanos, guias, bonecos e pós.
- regras de venda e comunicação para itens sensíveis.

---

## 2. benchmark demonstrativo de preços encontrados na web

> atenção: estes valores são **referência demonstrativa**, não preço final da loja. foram encontrados em buscas web de mercado livre, shopee, magalu e lojas de artigos religiosos. usar apenas como apoio para precificação.

| item pesquisado | faixa encontrada | mediana demonstrativa | observação |
|---|---:|---:|---|
| pemba africana unidade | r$ 2,34–r$ 7,18 | r$ 3,33 | kit com 12 apareceu por r$ 39,99 |
| vela caveira preta | r$ 7,60–r$ 17,00/un | r$ 8,00 | kit 3 por r$ 51,00 distorce valor unitário |
| velas oxalá / religiosas | r$ 13,30–r$ 21,17 | r$ 15,72 | confirmar se é maço, 3 unidades ou 7 dias |
| abano de palha | r$ 4,17–r$ 19,40/un | r$ 14,45 | varia muito por tamanho/kit |
| vela pé branca / anatômica similar | r$ 5,88–r$ 26,90 | r$ 16,90 | pesquisa direta fraca; confirmar fornecedor |
| vela caveira branca | r$ 8,39+ | r$ 8,39 | variação por tamanho/modelo |
| vela membro masculino amarela | r$ 8,50–r$ 39,94 | r$ 14,90 | preço exato da peça anatômica precisa confirmação |
| pós ritualísticos / mironga similar | r$ 13,50 | r$ 13,50 | nomes exatos não apareceram bem na web |
| guia preta e roxa | r$ 23,00+ | r$ 23,00 | guia similar pomba gira/maria mulambo |
| bonecos de pano/vodu | r$ 12,60–r$ 74,29 | r$ 30,35 | depende se casal, unidade ou kit |
| banho de ervas arruda/guiné/alecrim | r$ 9,28–r$ 25,10 | r$ 13,90 | referência para banhos prontos/ervas |
| ervas para defumação | r$ 13,90+ | r$ 13,90 | faltou maço artesanal equivalente |

---

## 3. catálogo interno existente — resumo por categoria

### ervas — 24 itens

| sku | produto | energia | preço atual no código | falta confirmar |
|---|---|---|---:|---|
| erv-001 | arruda | proteção | r$ 8,00 | peso, estoque, imagem real |
| erv-002 | guiné | defesa | r$ 7,00 | peso, estoque, imagem real |
| erv-003 | alecrim | purificação | r$ 6,00 | peso, estoque, imagem real |
| erv-004 | manjericão | prosperidade | r$ 6,00 | peso, estoque, imagem real |
| erv-005 | alfazema | paz | r$ 9,00 | peso, estoque, imagem real |
| erv-006 | rosa branca | amor próprio | r$ 10,00 | peso, estoque, imagem real |
| erv-007 | camomila | calma | r$ 7,00 | peso, estoque, imagem real |
| erv-008 | espada de s. jorge | proteção máxima | r$ 9,00 | formato: folha/corte/pacote |
| erv-009 | comigo ninguém pode | defesa contra inveja | r$ 8,00 | atenção: planta tóxica, instruções |
| erv-010 | pimenteira | força e coragem | r$ 7,00 | formato e peso |
| erv-011 | erva cidreira | tranquilidade | r$ 6,00 | peso, estoque, imagem real |
| erv-012 | hortelã | vitalidade | r$ 6,00 | fresco/seco, peso |
| erv-013 | louro | vitória | r$ 5,00 | folhas/unidade/peso |
| erv-014 | canela | prosperidade | r$ 7,00 | pau/pó/casca, peso |
| erv-015 | cravo da índia | proteção e cura | r$ 8,00 | peso |
| erv-016 | gengibre | energia e ação | r$ 6,00 | fresco/seco/pó |
| erv-017 | erva doce | harmonia | r$ 6,00 | semente/erva, peso |
| erv-018 | sálvia | purificação | r$ 9,00 | maço/folha seca |
| erv-019 | patchouli | aterramento | r$ 10,00 | peso |
| erv-020 | jurema preta | força ancestral | r$ 12,00 | disponibilidade e orientação |
| erv-021 | aroeira | cura física | r$ 8,00 | parte da planta e peso |
| erv-022 | barbatimão | cicatrização | r$ 7,00 | casca/pó, peso |
| erv-023 | sucupira | proteção | r$ 9,00 | semente/casca, peso |
| erv-024 | angélica | purificação | r$ 10,00 | raiz/erva, peso |

### defumação — 14 itens

| sku | produto | composição base | preço atual | falta confirmar |
|---|---|---|---:|---|
| def-001 | defumação guardião | arruda + guiné + sal grosso | r$ 15,00 | peso, formato, foto real |
| def-002 | defumação cabocla | alfazema + camomila + rosas | r$ 18,00 | peso, foto real |
| def-003 | defumação abertura | alecrim + canela + louro | r$ 18,00 | peso, foto real |
| def-004 | defumação jupira | arruda + alecrim + jurema | r$ 22,00 | receita final |
| def-005 | defumação proteção pesada | espada + guiné + arruda + sal | r$ 20,00 | peso |
| def-006 | defumação limpeza profunda | ervas amargas + cascas cítricas | r$ 16,00 | composição real |
| def-007 | defumação prosperidade | canela + cravo + louro + gengibre | r$ 18,00 | peso |
| def-008 | defumação amor | rosa + alfazema + canela | r$ 18,00 | peso |
| def-009 | defumação paz | camomila + erva doce + hortelã | r$ 15,00 | peso |
| def-010 | defumação descarrego | arruda + guiné + alecrim + pimenta | r$ 17,00 | peso |
| def-011 | defumação sete ervas | sete ervas sagradas | r$ 22,00 | quais sete ervas |
| def-012 | defumação são miguel | ervas de proteção + mirra | r$ 20,00 | composição real |
| def-013 | defumação sete flechas | jurema + arruda + alecrim + guiné | r$ 22,00 | linha jupira |
| def-014 | defumação jurema | folhas de jurema + ervas da mata | r$ 25,00 | disponibilidade |

### velas — 12 itens no catálogo + novas imagens reais

| sku/id | produto | energia/uso | preço atual/referência | status |
|---|---|---|---:|---|
| vel-001 | vela guardiã | proteção | r$ 22,00 | sem foto real específica |
| vel-002 | vela cabocla | tranquilidade | r$ 25,00 | sem foto real específica |
| vel-003 | vela jupira | cura espiritual | r$ 28,00 | sem foto real específica |
| vel-004 | vela atrai | prosperidade | r$ 25,00 | sem foto real específica |
| vel-005 | vela erva poderosa | descarrego | r$ 24,00 | sem foto real específica |
| vel-006 | vela defesa | defesa | r$ 24,00 | sem foto real específica |
| vel-007 | vela paz & calma | serenidade | r$ 22,00 | sem foto real específica |
| vel-008 | vela sete dias | trabalho contínuo | r$ 35,00 | sem foto real específica |
| vel-009 | vela jejê | força ancestral | r$ 30,00 | sem foto real específica |
| vel-010 | vela de coco | purificação | r$ 20,00 | sem foto real específica |
| vel-011 | vela rosa mística | amor próprio | r$ 26,00 | sem foto real específica |
| vel-012 | vela canela quente | atração | r$ 24,00 | sem foto real específica |
| novo | vela oxalá cores sortidas | uso religioso/espiritual | ref. r$ 15,72 | imagem real disponível |
| novo | vela caveira preta | figurativa/ritual | ref. r$ 8,00 | imagem real disponível |
| novo | vela caveira branca | figurativa/ritual | ref. r$ 8,39 | imagem real disponível |
| novo | vela pé branca par | anatômica/caminhos | ref. r$ 16,90 | imagem real disponível |
| novo | vela membro masculino amarela | anatômica | ref. r$ 14,90 | imagem real disponível |

### kits — 12 itens

| sku | produto | preço atual | precisa revisar combo? |
|---|---|---:|---|
| kit-001 | kit banho (3 ervas) | r$ 18,00 | sim: escolher ervas permitidas |
| kit-002 | kit jupira | r$ 62,00 | sim: composição final |
| kit-003 | kit bem-estar cabocla | r$ 35,00 | sim |
| kit-004 | kit defumação completo | r$ 55,00 | sim |
| kit-005 | kit proteção pesada | r$ 48,00 | sim |
| kit-006 | kit prosperidade | r$ 42,00 | sim |
| kit-007 | kit amor próprio | r$ 38,00 | sim |
| kit-008 | kit descarrego | r$ 45,00 | sim |
| kit-009 | kit meditação & paz | r$ 40,00 | sim |
| kit-010 | kit iniciação espiritual | r$ 68,00 | sim |
| kit-011 | kit jurema & caboclos | r$ 72,00 | sim |
| kit-012 | kit banho completo (7 ervas) | r$ 32,00 | sim |

### incensos, banhos, oferendas e acessórios

estes itens existem no código e precisam de fotos reais ou validação do fornecedor.

- **incensos:** arruda, alecrim, alfazema, sândalo, mirra, benjoim, jupira, cravo.
- **banhos prontos:** descarrego, proteção, prosperidade, amor próprio, paz, jupira, abertura, vitória.
- **oferendas:** vela de mel, frutas secas, milho de pipoca, batata doce, kit 7 velas, farinha de mandioca.
- **acessórios:** incensário de barro, pena de gavião, penacho mini, guia de contas, sino ritual, tigela de barro, kit velas coloridas, defumador de metal.

novos acessórios/imagens reais que devem entrar no catálogo:

- abanos de palha trançada.
- guia de contas preta e roxa.
- bonecos de pano tipo vodu.
- pemba africana cores sortidas.
- pós ritualísticos identificados por rótulo.

---

## 4. questionário para completar o catálogo

### dados comerciais gerais

1. qual é a moeda e política de arredondamento? ex.: r$ 14,90, r$ 15,00 ou r$ 15,99?
2. a loja vende online com entrega, retirada ou somente whatsapp?
3. quais formas de pagamento aceita? pix, cartão, dinheiro, link de pagamento?
4. existe taxa de entrega? por bairro/cidade?
5. quais cidades atende?
6. há política de troca/devolução para itens ritualísticos?
7. haverá preço de atacado?
8. haverá desconto para combos?

### estoque e variações

1. cada produto tem estoque contado por unidade?
2. as ervas são vendidas em 50g, 100g ou pacote fixo?
3. as velas oxalá têm quantas unidades por maço?
4. as pembas são vendidas por unidade, caixa ou kit?
5. os pós são vendidos separadamente?
6. os bonecos são vendidos por cor ou kit com 3?
7. os abanos têm tamanho p/m/g?
8. a guia preta e roxa pertence a qual linha/entidade?

### descrições e segurança de comunicação

1. quais promessas devem ser evitadas nas descrições?
2. quais produtos exigem orientação antes da venda?
3. algum item não deve ir para vitrine pública?
4. existem produtos apenas sob encomenda?
5. a loja quer linguagem mais religiosa, mais esotérica ou mais neutra?

### fotos e publicação

1. quais produtos já têm fotos reais?
2. quais fotos precisam fundo limpo/recorte?
3. quais fotos podem virar post de instagram?
4. quais produtos precisam carrossel com explicação de uso?
5. haverá padrão visual com tecido vermelho, palha, verde e dourado?

---

## 5. lista de catálogo para preenchimento

copiar esta tabela para cada produto novo ou incompleto.

| campo | preencher |
|---|---|
| nome comercial final |  |
| categoria |  |
| subcategoria |  |
| sku |  |
| foto principal |  |
| fotos secundárias |  |
| descrição curta |  |
| descrição longa |  |
| energia/uso simbólico |  |
| composição/material |  |
| cor/variação |  |
| tamanho/peso |  |
| quantidade por embalagem |  |
| preço real |  |
| preço promocional |  |
| estoque atual |  |
| fornecedor |  |
| validade |  |
| restrições/orientações |  |
| hashtags/post |  |
| status | rascunho / revisar / publicado |

---

## 6. plano recomendado de oferta

### combos possíveis

- **combo proteção:** arruda + guiné + vela preta/branca + defumação guardião.
- **combo caminhos:** vela pé branca + alecrim + louro + banho de abertura.
- **combo jupira:** banho jupira + defumação jupira + vela jupira + guia/folheto de uso.
- **combo velas oxalá:** maços por cor ou kit colorido com 5/7/8 cores.
- **combo fundamentos:** pemba + abano + guia + vela conforme intenção.

### itens prioritários para cadastro final

1. velas oxalá cores sortidas — já tem foto e muitas variações.
2. pemba africana — já tem foto e cores identificadas.
3. abanos de palha — produto simples, visual forte e fácil de explicar.
4. guia preta e roxa — precisa confirmar linha antes de publicar.
5. velas figurativas/anatômicas — precisam nome e preço reais.
6. pós ritualísticos — precisam cuidado de comunicação e confirmação de venda pública.

---

## 7. observação sobre publicação na gtrubi online

não encontrei no workspace uma configuração explícita com endpoint, credencial ou workflow chamado `gtrubi`. o repositório remoto encontrado é `https://github.com/Deivisan/casa-de-ervas-jupira.git`. este documento deixa o conteúdo pronto para publicação; a publicação efetiva depende de confirmar se `gtrubi online` significa github/pages, loja externa, painel próprio ou outro serviço.
