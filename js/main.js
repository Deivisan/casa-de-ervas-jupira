// ==========================================================
// CASA DE ERVAS JUPIRA — Main Script
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Toggle ----
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('headerNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // ---- Filtros (Produtos page) ----
  const filtros = document.querySelectorAll('.filtro-btn');
  const grid = document.getElementById('produtosGrid');

  if (filtros.length && grid) {
    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.categoria;
        renderProdutos(cat);
      });
    });
  }

  // ---- Renderização de Produtos ----
  function renderProdutos(categoria) {
    if (!grid) return;
    const lista = getPorCategoria(categoria);

    if (lista.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--gray)">
        <p style="font-size:1.2rem">Nenhum produto encontrado 🌿</p>
      </div>`;
      return;
    }

    grid.innerHTML = lista.map(prod => {
      const badgeClass = prod.badge === 'Linha Jupira' ? 'badge-jupira' : '';
      return `
        <div class="produto-card animate">
          <div class="img-wrap">
            <img src="${prod.img}" alt="${prod.nome}" loading="lazy">
            ${prod.badge ? `<span class="badge ${badgeClass}">${prod.badge}</span>` : ''}
          </div>
          <div class="info">
            <h3>${prod.nome}</h3>
            <div class="energia">🏹 ${prod.energia}</div>
            <div class="desc">${prod.desc}</div>
            <div class="preco">${formatPreco(prod.preco)}</div>
            <div class="actions">
              <button class="btn btn-primary btn-sm" onclick="cartAdd('${prod.id}')">
                🛒 Adicionar
              </button>
              <button class="btn btn-whatsapp btn-sm" onclick="buyWhatsApp('${prod.id}')">
                💬 Comprar
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ---- Produto Detail (single product page) ----
  const detailContainer = document.getElementById('produtoDetail');
  if (detailContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const prod = getProduto(id);

    if (!prod) {
      detailContainer.innerHTML = `<div style="text-align:center;padding:60px 0">
        <p style="font-size:1.2rem;color:var(--gray)">Produto não encontrado 🌿</p>
        <a href="produtos.html" class="btn btn-primary mt-2">Ver catálogo</a>
      </div>`;
    } else {
      document.title = `${prod.nome} — Casa de Ervas Jupira`;
      detailContainer.innerHTML = `
        <div class="gallery">
          <img src="${prod.img}" alt="${prod.nome}">
        </div>
        <div class="info">
          <h1>${prod.nome}</h1>
          <div class="energia">🏹 ${prod.energia}</div>
          <div class="preco">${formatPreco(prod.preco)}</div>
          <p class="desc">${prod.desc}</p>
          <div class="actions">
            <button class="btn btn-primary" onclick="cartAdd('${prod.id}')">
              🛒 Adicionar ao carrinho
            </button>
            <button class="btn btn-whatsapp" onclick="buyWhatsApp('${prod.id}')">
              💬 Comprar via WhatsApp
            </button>
          </div>
        </div>
      `;
    }
  }

  // ---- Initial render if on produtos page ----
  if (grid) {
    const activeFilter = document.querySelector('.filtro-btn.active');
    renderProdutos(activeFilter ? activeFilter.dataset.categoria : 'todos');
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
