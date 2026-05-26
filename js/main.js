// ==========================================================
// CASA DE ERVAS JUPIRA — Main Script
// Scroll animations · Mobile toggle · Product render · Filters
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================
  // 1. SCROLL ANIMATIONS — IntersectionObserver (60fps)
  // ==========================================================
  function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');

    if (targets.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add stagger index if parent has stagger class
          const parent = entry.target.closest('.reveal-stagger');
          if (parent) {
            const siblings = parent.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
            const idx = Array.from(siblings).indexOf(entry.target);
            entry.target.style.setProperty('--i', idx);
          }
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(el => observer.observe(el));
  }

  initScrollReveal();

  // ==========================================================
  // 2. MOBILE TOGGLE & DROPDOWN
  // ==========================================================
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('headerNav');
  const dropdownToggle = document.getElementById('produtosToggle');
  const dropdownMenu = document.getElementById('produtosMenu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    // Close nav on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Dropdown toggle
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('open');
      }
    });
  }

  // ==========================================================
  // 3. CATEGORY FILTERS (Produtos page)
  // ==========================================================
  const filtros = document.querySelectorAll('.filtro-btn');
  const grid = document.getElementById('produtosGrid');

  if (filtros.length && grid) {
    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.categoria;
        renderProdutos(cat);

        // Re-init scroll reveal for new content
        setTimeout(initScrollReveal, 100);
      });
    });
  }

  // ==========================================================
  // 4. RENDER PRODUTOS
  // ==========================================================
  function renderProdutos(categoria) {
    if (!grid) return;
    const lista = getPorCategoria(categoria);

    if (lista.length === 0) {
      grid.innerHTML = `<div class="reveal" style="grid-column:1/-1;text-align:center;padding:var(--space-10);color:var(--gray-600)">
        <p style="font-size:1.2rem">Nenhum produto encontrado 🌿</p>
        <p style="font-size:0.9rem;margin-top:var(--space-2)">Tente outra categoria</p>
      </div>`;
      return;
    }

    grid.innerHTML = lista.map(prod => {
      const badgeClass = prod.badge === 'Linha Jupira' ? 'badge-jupira' :
                         prod.badge === '🌟 Especial' ? 'badge-especial' : '';
      return `
        <div class="produto-card reveal-scale">
          <a href="produto.html?id=${prod.id}" class="img-wrap">
            <img src="${prod.img}" alt="${prod.nome}" loading="lazy">
            ${prod.badge ? `<span class="badge ${badgeClass}">${prod.badge}</span>` : ''}
          </a>
          <div class="info">
            <h3><a href="produto.html?id=${prod.id}" style="color:inherit">${prod.nome}</a></h3>
            <div class="energia">🏹 ${prod.energia}</div>
            <div class="sku">SKU: ${prod.sku}</div>
            <div class="desc">${prod.desc}</div>
            <div class="preco">${formatPreco(prod.preco)}</div>
            <div class="validade">⏳ Validade: ${prod.validade}</div>
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

  // Expose for filter buttons
  window.renderProdutos = renderProdutos;

  // ==========================================================
  // 5. PRODUTO DETAIL (Single product page)
  // ==========================================================
  const detailContainer = document.getElementById('produtoDetail');
  if (detailContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const prod = getProduto(id);

    if (!prod) {
      detailContainer.innerHTML = `<div style="text-align:center;padding:60px 0">
        <p style="font-size:1.2rem;color:var(--gray-600)">Produto não encontrado 🌿</p>
        <a href="produtos.html" class="btn btn-primary mt-2">Ver catálogo</a>
      </div>`;
    } else {
      document.title = `${prod.nome} — Casa de Ervas Jupira`;

      const badgeClass = prod.badge === 'Linha Jupira' ? 'badge-jupira' :
                         prod.badge === '🌟 Especial' ? 'badge-especial' : '';

      detailContainer.innerHTML = `
        <div class="gallery reveal-left">
          <img src="${prod.img}" alt="${prod.nome}">
          ${prod.badge ? `<span class="gallery-badge ${badgeClass}" style="background:${prod.badge === 'Linha Jupira' ? 'var(--red)' : prod.badge === '🌟 Especial' ? 'var(--green)' : 'var(--yellow)'};color:${prod.badge === 'Linha Jupira' || prod.badge === '🌟 Especial' ? 'white' : 'var(--dark)'}">${prod.badge}</span>` : ''}
        </div>
        <div class="info reveal-right">
          <h1>${prod.nome}</h1>
          <div class="energia">🏹 ${prod.energia}</div>
          <div class="sku-validade">
            <span>📦 SKU: <strong>${prod.sku}</strong></span>
            <span>⏳ Validade: <strong>${prod.validade}</strong></span>
          </div>
          <div class="preco">${formatPreco(prod.preco)}</div>
          <p class="desc">${prod.desc}</p>
          <div class="produto-info-grid">
            <div class="produto-info-item">
              <span>🏹</span>
              <div><div class="label">Energia</div><div class="value">${prod.energia}</div></div>
            </div>
            <div class="produto-info-item">
              <span>📦</span>
              <div><div class="label">SKU</div><div class="value">${prod.sku}</div></div>
            </div>
            <div class="produto-info-item">
              <span>⏳</span>
              <div><div class="label">Validade</div><div class="value">${prod.validade}</div></div>
            </div>
            <div class="produto-info-item">
              <span>📁</span>
              <div><div class="label">Categoria</div><div class="value">${prod.categoria.charAt(0).toUpperCase() + prod.categoria.slice(1)}</div></div>
            </div>
          </div>
          <div class="actions" style="margin-top:var(--space-6)">
            <button class="btn btn-primary" onclick="cartAdd('${prod.id}')">
              🛒 Adicionar ao carrinho
            </button>
            <button class="btn btn-whatsapp" onclick="buyWhatsApp('${prod.id}')">
              💬 Comprar via WhatsApp
            </button>
          </div>
        </div>
      `;

      // Re-init scroll
      setTimeout(initScrollReveal, 100);
    }
  }

// ==========================================================
  // 8. INITIAL RENDER (if on produtos page)
  // ==========================================================
  if (grid) {
    const activeFilter = document.querySelector('.filtro-btn.active');
    renderProdutos(activeFilter ? activeFilter.dataset.categoria : 'todos');
    setTimeout(initScrollReveal, 200);
  }

  // ==========================================================
  // 9. CATEGORY PAGE RENDER (ervas.html, velas.html, etc.)
  // ==========================================================
  // Check if we're on a category page (has produtosGrid but no filtros)
  const produtosGrid = document.getElementById('produtosGrid');
  const filtrosContainer = document.querySelector('.filtros');

  if (produtosGrid && !filtrosContainer) {
    // Determine category from URL or page context
    const path = window.location.pathname;
    let categoria = 'todos';

    if (path.includes('ervas.html')) categoria = 'ervas';
    else if (path.includes('defumadores.html') || path.includes('velas.html')) categoria = 'defumacao';
    else if (path.includes('kits.html')) categoria = 'kits';
    else if (path.includes('acessorios.html')) categoria = 'acessorios';

    renderProdutos(categoria);
    setTimeout(initScrollReveal, 200);
  }

  // ==========================================================
  // 7. SMOOTH SCROLL for anchor links
  // ==========================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==========================================================
  // 8. STATS COUNTER animation (if on page with stats)
  // ==========================================================
  const stats = document.querySelectorAll('.stat-card .numero');
  if (stats.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          if (!target) return;
          let current = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current;
          }, 30);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(s => observer.observe(s));
  }
});
