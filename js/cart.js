// ==========================================================
// CASA DE ERVAS JUPIRA — Carrinho + WhatsApp
// ==========================================================

const WHATSAPP_NUM = '557588136678';

let cart = [];

function cartLoad() {
  try {
    const data = localStorage.getItem('jupira-cart');
    cart = data ? JSON.parse(data) : [];
  } catch { cart = []; }
}

function cartSave() {
  localStorage.setItem('jupira-cart', JSON.stringify(cart));
  cartUpdateUI();
}

function cartAdd(produtoId) {
  cartLoad();
  const existing = cart.find(item => item.id === produtoId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: produtoId, qty: 1 });
  }
  cartSave();
  showCart();
}

function cartRemove(produtoId) {
  cartLoad();
  cart = cart.filter(item => item.id !== produtoId);
  cartSave();
  renderCartItems();
}

function cartChangeQty(produtoId, delta) {
  cartLoad();
  const item = cart.find(i => i.id === produtoId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== produtoId);
  }
  cartSave();
  renderCartItems();
}

function cartTotal() {
  cartLoad();
  return cart.reduce((sum, item) => {
    const prod = getProduto(item.id);
    return sum + (prod ? prod.preco * item.qty : 0);
  }, 0);
}

function cartCount() {
  cartLoad();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ----- UI -----
function cartUpdateUI() {
  const count = cartCount();
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  renderCartItems();
}

function hideCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
}

function renderCartItems() {
  cartLoad();
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotalValue');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🌿</div>
        <p>Seu carrinho está vazio</p>
        <p style="font-size:0.85rem;margin-top:8px">Adicione ervas, defumações e velas para proteger sua energia!</p>
      </div>
    `;
    totalEl.textContent = 'R$ 0,00';
    return;
  }

  container.innerHTML = cart.map(item => {
    const prod = getProduto(item.id);
    if (!prod) return '';
    return `
      <div class="cart-item">
        <img src="${prod.img}" alt="${prod.nome}" loading="lazy">
        <div class="cart-item-info">
          <h4>${prod.nome}</h4>
          <div class="preco">${formatPreco(prod.preco)}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="cartChangeQty('${prod.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="cartChangeQty('${prod.id}', 1)">+</button>
        </div>
        <button class="remove" onclick="cartRemove('${prod.id}')">✕</button>
      </div>
    `;
  }).join('');

  totalEl.textContent = formatPreco(cartTotal());
}

function cartWhatsApp() {
  cartLoad();
  if (cart.length === 0) return;

  let msg = '🛒 *Pedido - Casa de Ervas Jupira* 🏹\n\n';
  cart.forEach(item => {
    const prod = getProduto(item.id);
    if (prod) {
      msg += `• ${item.qty}x ${prod.nome} — ${formatPreco(prod.preco * item.qty)}\n`;
    }
  });
  msg += `\n*Total: ${formatPreco(cartTotal())}*`;
  msg += `\n\nOkê Jupira! 🙏`;

  const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Direct WhatsApp buy (single product)
function buyWhatsApp(produtoId) {
  const prod = getProduto(produtoId);
  if (!prod) return;

  const msg = `🛒 *Pedido - Casa de Ervas Jupira* 🏹\n\nQuero comprar:\n• 1x ${prod.nome} — ${formatPreco(prod.preco)}\n\nEnergia: ${prod.energia}\n\nOkê Jupira! 🙏`;

  const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  cartLoad();
  cartUpdateUI();

  // Cart overlay click
  document.getElementById('cartOverlay').addEventListener('click', hideCart);

  // Render if on page with cart
  if (document.getElementById('cartItems')) {
    renderCartItems();
  }
});
