/**
 * Sanzor Kaboblar Choyxonasi — Asosiy dastur mantig'i
 */

let menuItems = [];
let settings = { ...DEFAULT_SETTINGS };
let ordersHistory = [];

let activeCategory = 'all';
let activeTagFilter = 'all';
let selectedTable = "1-So'ri (Chorpoya)";
let cart = {};
let loggedInUsername = null;
let isManageTableViewOpen = false;

// ================== STORAGE & STATE ==================
function loadState() {
  try {
    const savedMenu = localStorage.getItem(STORAGE_KEYS.MENU);
    menuItems = savedMenu ? JSON.parse(savedMenu) : [...DEFAULT_MENU_ITEMS];

    const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (savedSettings) {
      settings = { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) };
    }

    const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
    ordersHistory = savedOrders ? JSON.parse(savedOrders) : [];

    const savedUser = sessionStorage.getItem(STORAGE_KEYS.SESSION);
    if (savedUser) {
      loggedInUsername = savedUser;
    }
  } catch (e) {
    console.warn("Xotiradan yuklashda xatolik:", e);
    menuItems = [...DEFAULT_MENU_ITEMS];
    settings = { ...DEFAULT_SETTINGS };
  }
}

function saveMenuState() {
  localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menuItems));
}

function saveSettingsState() {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

function saveOrdersState() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(ordersHistory));
}

function formatSom(num) {
  return Number(num || 0).toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm";
}

// ================== INITIALIZATION ==================
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  loadState();
  applySettingsToUI();
  updateAuthHeaderUI();
  populateCategorySelectors();
  renderCategoriesBar();
  renderClientMenu();
  renderCart();
  renderAdminDashboard();
  handleResponsiveElements();
  window.addEventListener('resize', handleResponsiveElements);
}

function handleResponsiveElements() {
  const closeBtn = document.getElementById('btnCloseMobileCart');
  const sidebar = document.getElementById('orderSidebar');
  if (closeBtn && sidebar) {
    if (window.innerWidth <= 1024) {
      closeBtn.style.display = 'inline-block';
    } else {
      closeBtn.style.display = 'none';
      sidebar.classList.remove('mobile-open');
    }
  }
}

function toggleMobileCart(open) {
  const sidebar = document.getElementById('orderSidebar');
  if (!sidebar) return;
  if (open) {
    sidebar.classList.add('mobile-open');
  } else {
    sidebar.classList.remove('mobile-open');
  }
}

function applySettingsToUI() {
  const title = settings.choyxonaName || "Sanzor kaboblar choyxonasi menyusi";
  document.title = title;
  const headerName = document.getElementById('headerChoyxonaName');
  if (headerName) headerName.textContent = title;

  const feeText = document.getElementById('serviceFeePercentText');
  if (feeText) feeText.textContent = settings.serviceFeePercent;

  const setChoyxonaName = document.getElementById('settingChoyxonaName');
  if (setChoyxonaName) setChoyxonaName.value = title;

  const setFee = document.getElementById('settingServiceFee');
  if (setFee) setFee.value = settings.serviceFeePercent;

  const setUser = document.getElementById('settingAdminUser');
  if (setUser) setUser.value = settings.adminUser;

  const setPass = document.getElementById('settingAdminPass');
  if (setPass) setPass.value = settings.adminPass;
}

function updateAuthHeaderUI() {
  const btnLogin = document.getElementById('btnOpenLogin');
  const authGroup = document.getElementById('authUserGroup');
  const usernameSpan = document.getElementById('loggedUsernameText');

  if (loggedInUsername) {
    if (btnLogin) btnLogin.style.display = 'none';
    if (authGroup) authGroup.classList.add('visible');
    if (usernameSpan) usernameSpan.textContent = loggedInUsername;
  } else {
    if (btnLogin) btnLogin.style.display = 'inline-flex';
    if (authGroup) authGroup.classList.remove('visible');
    if (isManageTableViewOpen) {
      toggleAdminView(false);
    }
  }
}

function populateCategorySelectors() {
  const adminCatFilter = document.getElementById('adminCatFilter');
  const dishCatInput = document.getElementById('dishCatInput');

  if (adminCatFilter) {
    adminCatFilter.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
  }
  if (dishCatInput) {
    dishCatInput.innerHTML = CATEGORIES.filter(c => c.id !== 'all')
      .map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
  }
}

// ================== CATEGORY BAR & MENU RENDERING ==================
function renderCategoriesBar() {
  const bar = document.getElementById('categoryBar');
  if (!bar) return;
  bar.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'all'
      ? menuItems.length
      : menuItems.filter(i => i.category === cat.id).length;
    const isActive = activeCategory === cat.id ? 'active' : '';
    return `
      <button class="cat-pill ${isActive}" onclick="selectCategory('${cat.id}')">
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
        <span class="cat-pill-count">${count}</span>
      </button>
    `;
  }).join('');
}

function selectCategory(catId) {
  activeCategory = catId;
  const catObj = CATEGORIES.find(c => c.id === catId);
  const titleEl = document.getElementById('currentCategoryTitle');
  if (titleEl) {
    titleEl.textContent = catObj ? catObj.name : 'Barcha Taomlar';
  }
  if (isManageTableViewOpen) {
    toggleAdminView(false);
  }
  renderCategoriesBar();
  renderClientMenu();
}

function setTagFilter(tag, btnEl) {
  activeTagFilter = tag;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderClientMenu();
}

function handleGlobalSearch() {
  renderClientMenu();
  if (isManageTableViewOpen) {
    renderAdminTable();
  }
}

function getBadgeHtml(item) {
  if (!item.inStock) {
    return `<span class="dish-badge badge-out">Vaqtincha tugagan</span>`;
  }
  if (item.badge === 'hit') return `<span class="dish-badge badge-hit">🔥 Xit taom</span>`;
  if (item.badge === 'chef') return `<span class="dish-badge badge-chef">👨‍🍳 Oshpaz tavsiyasi</span>`;
  if (item.badge === 'new') return `<span class="dish-badge badge-new">✨ Yangi</span>`;
  return '';
}

function getVisualHtml(item) {
  const imgSrc = item.customImage || 'images/dishes/kabob_gijduvon.webp';
  return `<img src="${imgSrc}" alt="${item.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='images/dishes/kabob_gijduvon.webp';" />`;
}

function renderClientMenu() {
  const searchInput = document.getElementById('menuSearchInput');
  const searchVal = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchTag = activeTagFilter === 'all' || item.badge === activeTagFilter;
    const matchSearch = !searchVal ||
      item.name.toLowerCase().includes(searchVal) ||
      (item.desc && item.desc.toLowerCase().includes(searchVal));
    return matchCat && matchTag && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 54px 20px; background:#FFF; border-radius:16px; border:1px solid var(--border); color: var(--text-muted);">
        <div style="font-size:42px; margin-bottom:10px;">🍢</div>
        <h3 style="color:var(--text-main); margin-bottom:6px;">Hech qanday taom topilmadi</h3>
        <p style="font-size:14px;">Qidiruv so'zini yoki kategoriya filtrini o'zgartirib ko'ring.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const qtyInCart = cart[item.id] || 0;
    let actionControl = '';

    if (!item.inStock) {
      actionControl = `<button class="btn-add-cart" disabled onclick="event.stopPropagation()">Tugagan</button>`;
    } else if (qtyInCart > 0) {
      actionControl = `
        <div class="qty-stepper" onclick="event.stopPropagation()">
          <button onclick="event.stopPropagation(); changeCartQty('${item.id}', -1)" title="Kamaytirish">−</button>
          <span>${qtyInCart}</span>
          <button onclick="event.stopPropagation(); changeCartQty('${item.id}', 1)" title="Ko'paytirish">+</button>
        </div>
      `;
    } else {
      actionControl = `
        <button class="btn-add-cart" onclick="event.stopPropagation(); changeCartQty('${item.id}', 1)">
          <span>+ Qo'shish</span>
        </button>
      `;
    }

    const adminInlineStrip = loggedInUsername ? `
      <div class="card-admin-strip" onclick="event.stopPropagation()">
        <div class="card-price-edit">
          <input type="number" id="cardPrice_${item.id}" value="${item.price}" step="500" min="500" title="Narxni tahrirlash" />
          <button onclick="saveCardInlinePrice('${item.id}')" title="Saqlash">✓</button>
        </div>
        <button class="btn-icon" onclick="openDishModal('${item.id}')" title="To'liq tahrirlash">✏️</button>
        <button class="btn-icon ${item.inStock ? '' : 'danger'}" onclick="toggleItemStock('${item.id}')" title="${item.inStock ? 'Tugagan deb belgilash' : 'Bor deb belgilash'}">
          ${item.inStock ? '👁️' : '🚫'}
        </button>
      </div>
    ` : '';

    return `
      <div class="dish-card ${!item.inStock ? 'out-of-stock' : ''}" id="card_${item.id}" onclick="openDishFullscreen('${item.id}')" style="cursor:pointer;" title="Rasmni katta qilib ko'rish">
        <div class="dish-visual">
          ${getVisualHtml(item)}
          ${getBadgeHtml(item)}
          ${item.time ? `<span class="dish-meta-pill">⏱️ ${item.time}</span>` : ''}
        </div>
        <div class="dish-content">
          <h3 class="dish-title">${item.name}</h3>
          <div class="dish-portion">⚖️ ${item.portion || '1 porsiya'}</div>
          <p class="dish-desc">${item.desc || ''}</p>
          <div class="dish-footer">
            <div class="dish-price">${formatSom(item.price)}</div>
            ${actionControl}
          </div>
          ${adminInlineStrip}
        </div>
      </div>
    `;
  }).join('');
}

// ================== CART & ORDERS ==================
function changeCartQty(dishId, delta) {
  const current = cart[dishId] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete cart[dishId];
  } else {
    cart[dishId] = next;
  }
  renderClientMenu();
  renderCart();
}

function clearCart() {
  if (Object.keys(cart).length === 0) return;
  if (confirm("Savatchadagi barcha taomlar o'chirilsinmi?")) {
    cart = {};
    renderClientMenu();
    renderCart();
    showToast("Savatcha tozalandi", "info");
  }
}

function updateSelectedTable(val) {
  selectedTable = val;
  showToast(`Stol tanlandi: ${val}`, "success");
}

function renderCart() {
  const itemsList = document.getElementById('orderItemsList');
  const badge = document.getElementById('orderCountBadge');
  const subtotalEl = document.getElementById('subtotalText');
  const feeEl = document.getElementById('serviceFeeText');
  const totalEl = document.getElementById('grandTotalText');
  const submitBtn = document.getElementById('btnSubmitOrder');
  const mobileBar = document.getElementById('mobileCartBar');
  const mobileCount = document.getElementById('mobileCartCount');
  const mobileTotal = document.getElementById('mobileCartTotal');

  const cartKeys = Object.keys(cart);
  let totalItemsCount = 0;
  let subtotal = 0;

  cartKeys.forEach(id => {
    const qty = cart[id];
    const dish = menuItems.find(d => d.id === id);
    if (dish) {
      totalItemsCount += qty;
      subtotal += (dish.price * qty);
    }
  });

  const feeAmount = Math.round(subtotal * (settings.serviceFeePercent / 100));
  const grandTotal = subtotal + feeAmount;

  if (badge) badge.textContent = totalItemsCount;
  if (subtotalEl) subtotalEl.textContent = formatSom(subtotal);
  if (feeEl) feeEl.textContent = formatSom(feeAmount);
  if (totalEl) totalEl.textContent = formatSom(grandTotal);

  if (submitBtn) {
    submitBtn.disabled = totalItemsCount === 0;
  }

  // Mobile Sticky Bar
  if (mobileBar && mobileCount && mobileTotal) {
    if (totalItemsCount > 0) {
      mobileBar.classList.add('visible');
      mobileCount.textContent = `${totalItemsCount} ta taom`;
      mobileTotal.textContent = formatSom(grandTotal);
    } else {
      mobileBar.classList.remove('visible');
    }
  }

  if (!itemsList) return;

  if (cartKeys.length === 0) {
    itemsList.innerHTML = `
      <div style="text-align:center; padding: 40px 16px; color: var(--text-muted);">
        <div style="font-size:36px; margin-bottom:8px;">🛒</div>
        <p style="font-weight:600; font-size:14px; color:var(--text-main);">Buyurtmalar savati bo'sh</p>
        <p style="font-size:12.5px; margin-top:4px;">Menyudan taomlarni tanlab <strong>+ Qo'shish</strong> tugmasini bosing</p>
      </div>
    `;
    return;
  }

  itemsList.innerHTML = cartKeys.map(id => {
    const qty = cart[id];
    const dish = menuItems.find(d => d.id === id);
    if (!dish) return '';
    const itemTotal = dish.price * qty;

    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${dish.name}</div>
          <div class="cart-item-price">${formatSom(dish.price)} &times; ${qty} = <strong>${formatSom(itemTotal)}</strong></div>
        </div>
        <div class="cart-item-actions">
          <div class="qty-stepper compact">
            <button onclick="changeCartQty('${dish.id}', -1)">−</button>
            <span>${qty}</span>
            <button onclick="changeCartQty('${dish.id}', 1)">+</button>
          </div>
          <button class="btn-remove-item" onclick="changeCartQty('${dish.id}', -${qty})" title="O'chirish">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function submitOrder() {
  const cartKeys = Object.keys(cart);
  if (cartKeys.length === 0) return;

  const items = [];
  let subtotal = 0;
  cartKeys.forEach(id => {
    const qty = cart[id];
    const dish = menuItems.find(d => d.id === id);
    if (dish) {
      items.push({ id: dish.id, name: dish.name, price: dish.price, qty });
      subtotal += (dish.price * qty);
    }
  });

  const feeAmount = Math.round(subtotal * (settings.serviceFeePercent / 100));
  const total = subtotal + feeAmount;

  const orderRecord = {
    id: 'ORD-' + Date.now().toString().slice(-6),
    table: selectedTable,
    time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
    items,
    subtotal,
    feePercent: settings.serviceFeePercent,
    feeAmount,
    total,
    status: 'Yangi'
  };

  ordersHistory.unshift(orderRecord);
  saveOrdersState();

  cart = {};
  renderClientMenu();
  renderCart();
  renderAdminOrders();
  toggleMobileCart(false);

  showToast(`🎉 Buyurtmangiz qabul qilindi! Buyurtma ID: #${orderRecord.id}. Stol: ${selectedTable}`, "success", 6000);
}

function callWaiter() {
  showToast(`🔔 ${selectedTable} ga ofitsiant chaqirildi! Xodimimiz 1 daqiqada yetib keladi.`, "success", 5000);
}

// ================== FULLSCREEN DISH IMAGE LIGHTBOX ==================
function openDishFullscreen(dishId) {
  const dish = menuItems.find(d => d.id === dishId);
  if (!dish) return;

  const lightbox = document.getElementById('dishImageLightbox');
  const imgEl = document.getElementById('lightboxImage');
  const titleEl = document.getElementById('lightboxTitle');
  const priceEl = document.getElementById('lightboxPrice');

  if (imgEl) {
    imgEl.src = dish.customImage || '';
    imgEl.alt = dish.name;
  }
  if (titleEl) {
    titleEl.textContent = dish.name;
  }
  if (priceEl) {
    priceEl.textContent = formatSom(dish.price);
  }

  if (lightbox) {
    lightbox.classList.add('visible', 'open');
    document.body.style.overflow = 'hidden';
  }
}

function closeImageLightbox() {
  const lightbox = document.getElementById('dishImageLightbox');
  if (lightbox) {
    lightbox.classList.remove('visible', 'open');
    document.body.style.overflow = '';
  }
}

// Fallback alias for backward compatibility
function openDishDetail(dishId) {
  openDishFullscreen(dishId);
}

// ================== ADMIN & INLINE MANAGEMENT ==================
function openLoginModal() {
  const err = document.getElementById('loginErrorMsg');
  if (err) err.style.display = 'none';
  openModal('loginModal');
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = (document.getElementById('loginUsernameInput').value || '').trim();
  const p = (document.getElementById('loginPasswordInput').value || '').trim();
  const err = document.getElementById('loginErrorMsg');

  if (u === settings.adminUser && p === settings.adminPass) {
    loggedInUsername = u;
    sessionStorage.setItem(STORAGE_KEYS.SESSION, u);
    updateAuthHeaderUI();
    closeModal('loginModal');
    renderClientMenu();
    renderAdminDashboard();
    showToast("Xush kelibsiz, administrator!", "success");
  } else {
    if (err) err.style.display = 'block';
  }
}

function logoutAdmin() {
  loggedInUsername = null;
  sessionStorage.removeItem(STORAGE_KEYS.SESSION);
  updateAuthHeaderUI();
  renderClientMenu();
  showToast("Hisobdan chiqildi", "info");
}

function toggleAdminView(forceOpen) {
  const menuSec = document.getElementById('menuSectionView');
  const adminSec = document.getElementById('adminSectionView');
  const btn = document.getElementById('btnToggleManageView');
  if (!menuSec || !adminSec) return;

  if (forceOpen !== undefined) {
    isManageTableViewOpen = forceOpen;
  } else {
    isManageTableViewOpen = !isManageTableViewOpen;
  }

  if (isManageTableViewOpen) {
    menuSec.style.display = 'none';
    adminSec.classList.add('visible');
    if (btn) btn.textContent = "🍽️ Menyu vitrinasi";
    renderAdminTable();
    renderAdminOrders();
  } else {
    menuSec.style.display = 'block';
    adminSec.classList.remove('visible');
    if (btn) btn.textContent = "📊 Boshqaruv jadvali";
  }
}

function switchAdminSubTab(tab) {
  const tabProd = document.getElementById('adminSubTabProducts');
  const tabOrd = document.getElementById('adminSubTabOrders');
  const tabSet = document.getElementById('adminSubTabSettings');

  const pillProd = document.getElementById('pillTabProducts');
  const pillOrd = document.getElementById('pillTabOrders');
  const pillSet = document.getElementById('pillTabSettings');

  [pillProd, pillOrd, pillSet].forEach(p => p && p.classList.remove('active'));
  [tabProd, tabOrd, tabSet].forEach(t => t && (t.style.display = 'none'));

  if (tab === 'products') {
    if (tabProd) tabProd.style.display = 'block';
    if (pillProd) pillProd.classList.add('active');
    renderAdminTable();
  } else if (tab === 'orders') {
    if (tabOrd) tabOrd.style.display = 'block';
    if (pillOrd) pillOrd.classList.add('active');
    renderAdminOrders();
  } else if (tab === 'settings') {
    if (tabSet) tabSet.style.display = 'block';
    if (pillSet) pillSet.classList.add('active');
  }
}

function saveCardInlinePrice(dishId) {
  const input = document.getElementById(`cardPrice_${dishId}`);
  if (!input) return;
  const newPrice = Number(input.value);
  if (!newPrice || newPrice < 500) {
    showToast("Noto'g'ri narx kiritildi", "danger");
    return;
  }
  const dish = menuItems.find(d => d.id === dishId);
  if (dish) {
    dish.price = newPrice;
    saveMenuState();
    renderClientMenu();
    renderCart();
    showToast(`"${dish.name}" narxi yangilandi: ${formatSom(newPrice)}`, "success");
  }
}

function toggleItemStock(dishId) {
  const dish = menuItems.find(d => d.id === dishId);
  if (dish) {
    dish.inStock = !dish.inStock;
    saveMenuState();
    renderClientMenu();
    renderAdminTable();
    showToast(`"${dish.name}" ${dish.inStock ? 'sotuvga qo\'yildi' : 'tugagan deb belgilandi'}`, "info");
  }
}

function renderAdminDashboard() {
  const kpiGrid = document.getElementById('adminKpiGrid');
  if (!kpiGrid) return;

  const totalDishes = menuItems.length;
  const inStockCount = menuItems.filter(d => d.inStock).length;
  const avgPrice = Math.round(menuItems.reduce((acc, d) => acc + (d.price || 0), 0) / (totalDishes || 1));
  const totalOrders = ordersHistory.length;

  kpiGrid.innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Jami tovarlar</div>
      <div class="kpi-val">${totalDishes} ta</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Sotuvda mavjud</div>
      <div class="kpi-val" style="color:var(--success);">${inStockCount} ta</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">O'rtacha narx</div>
      <div class="kpi-val" style="color:var(--gold);">${formatSom(avgPrice)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Buyurtmalar soni</div>
      <div class="kpi-val">${totalOrders} ta</div>
    </div>
  `;

  const badgeEl = document.getElementById('adminOrdersBadge');
  if (badgeEl) badgeEl.textContent = totalOrders;
}

function renderAdminTable() {
  renderAdminDashboard();
  const filterCatEl = document.getElementById('adminCatFilter');
  const catVal = filterCatEl ? filterCatEl.value : 'all';
  const tbody = document.getElementById('adminTableBody');
  if (!tbody) return;

  const filtered = menuItems.filter(item => catVal === 'all' || item.category === catVal);

  tbody.innerHTML = filtered.map(item => {
    const catObj = CATEGORIES.find(c => c.id === item.category);
    const catName = catObj ? `${catObj.icon} ${catObj.name}` : item.category;

    return `
      <tr>
        <td>
          <div class="table-dish-meta">
            <img src="${item.customImage || 'images/dishes/kabob_gijduvon.webp'}" alt="" class="table-dish-thumb" onerror="this.src='images/dishes/kabob_gijduvon.webp'" />
            <div>
              <div style="font-weight:700; color:var(--text-main);">${item.name}</div>
              <div style="font-size:11.5px; color:var(--text-muted); max-width:260px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.desc || ''}</div>
            </div>
          </div>
        </td>
        <td><span style="font-size:12.5px; font-weight:600;">${catName}</span></td>
        <td>
          <div style="font-size:12.5px; font-weight:600;">${item.portion || '—'}</div>
          <div style="font-size:11px; color:var(--text-muted);">${item.time || '—'}</div>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:6px;">
            <input type="number" class="admin-input-price" id="adminTablePrice_${item.id}" value="${item.price}" step="500" min="500" />
            <button class="btn-outline" style="padding:4px 8px; font-size:12px;" onclick="saveAdminTablePrice('${item.id}')">✓</button>
          </div>
        </td>
        <td>
          <label style="cursor:pointer; display:flex; align-items:center; gap:6px;">
            <input type="checkbox" ${item.inStock ? 'checked' : ''} onchange="toggleItemStock('${item.id}')" />
            <span style="font-size:12.5px; font-weight:600; color:${item.inStock ? 'var(--success)' : 'var(--danger)'};">
              ${item.inStock ? 'Bor' : 'Tugagan'}
            </span>
          </label>
        </td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn-icon" onclick="openDishModal('${item.id}')" title="Tahrirlash">✏️</button>
            <button class="btn-icon danger" onclick="deleteDish('${item.id}')" title="O'chirish">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function saveAdminTablePrice(dishId) {
  const input = document.getElementById(`adminTablePrice_${dishId}`);
  if (!input) return;
  const newPrice = Number(input.value);
  if (!newPrice || newPrice < 500) {
    showToast("Noto'g'ri narx", "danger");
    return;
  }
  const dish = menuItems.find(d => d.id === dishId);
  if (dish) {
    dish.price = newPrice;
    saveMenuState();
    renderClientMenu();
    renderAdminTable();
    showToast(`"${dish.name}" narxi: ${formatSom(newPrice)}`, "success");
  }
}

function bulkAdjustPrices(percent) {
  if (!confirm(`Barcha taomlar narxini ${percent > 0 ? '+' : ''}${percent}% ga o'zgartirishni xohlaysizmi?`)) return;

  menuItems.forEach(item => {
    const updated = Math.round((item.price * (1 + percent / 100)) / 500) * 500;
    item.price = Math.max(1000, updated);
  });

  saveMenuState();
  renderClientMenu();
  renderAdminTable();
  renderCart();
  showToast(`Narxlar ${percent > 0 ? '+' : ''}${percent}% ga muvaffaqiyatli o'zgartirildi`, "success");
}

function deleteDish(dishId) {
  const dish = menuItems.find(d => d.id === dishId);
  if (!dish) return;
  if (confirm(`Haqiqatdan ham "${dish.name}" tovarini o'chirmoqchimisiz?`)) {
    menuItems = menuItems.filter(d => d.id !== dishId);
    delete cart[dishId];
    saveMenuState();
    renderCategoriesBar();
    renderClientMenu();
    renderAdminTable();
    renderCart();
    showToast(`"${dish.name}" o'chirildi`, "info");
  }
}

// ================== ADD / EDIT DISH MODAL ==================
function openDishModal(dishId) {
  const form = document.querySelector('#dishFormModal form');
  if (form) form.reset();

  const titleEl = document.getElementById('dishModalTitle');
  const idInput = document.getElementById('dishIdInput');
  const customImgInput = document.getElementById('dishCustomImageData');

  if (dishId) {
    const dish = menuItems.find(d => d.id === dishId);
    if (!dish) return;
    if (titleEl) titleEl.textContent = "✏️ Tovarni Tahrirlash";
    if (idInput) idInput.value = dish.id;
    document.getElementById('dishNameInput').value = dish.name;
    document.getElementById('dishCatInput').value = dish.category;
    document.getElementById('dishPriceInput').value = dish.price;
    document.getElementById('dishPortionInput').value = dish.portion || '';
    document.getElementById('dishTimeInput').value = dish.time || '';
    document.getElementById('dishBadgeInput').value = dish.badge || '';
    document.getElementById('dishDescInput').value = dish.desc || '';
    if (customImgInput) customImgInput.value = dish.customImage || '';
  } else {
    if (titleEl) titleEl.textContent = "➕ Yangi Tovar Qo'shish";
    if (idInput) idInput.value = '';
    if (customImgInput) customImgInput.value = '';
  }

  openModal('dishFormModal');
}

function handleDishImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('dishCustomImageData').value = e.target.result;
    showToast("Rasm tanlandi", "info");
  };
  reader.readAsDataURL(file);
}

function saveDishForm(e) {
  e.preventDefault();
  const id = document.getElementById('dishIdInput').value;
  const name = document.getElementById('dishNameInput').value.trim();
  const category = document.getElementById('dishCatInput').value;
  const price = Number(document.getElementById('dishPriceInput').value);
  const portion = document.getElementById('dishPortionInput').value.trim();
  const time = document.getElementById('dishTimeInput').value.trim();
  const badge = document.getElementById('dishBadgeInput').value;
  const desc = document.getElementById('dishDescInput').value.trim();
  const customImage = document.getElementById('dishCustomImageData').value;

  if (id) {
    // Edit existing
    const idx = menuItems.findIndex(d => d.id === id);
    if (idx !== -1) {
      menuItems[idx] = {
        ...menuItems[idx],
        name, category, price, portion, time, badge, desc,
        customImage: customImage || menuItems[idx].customImage
      };
      showToast(`"${name}" yangilandi`, "success");
    }
  } else {
    // Add new
    const newDish = {
      id: 'dish_' + Date.now(),
      name, category, price, portion, time, badge, desc,
      customImage: customImage || 'images/dishes/kabob_gijduvon.webp',
      inStock: true
    };
    menuItems.unshift(newDish);
    showToast(`Yangi tovar qo'shildi: "${name}"`, "success");
  }

  saveMenuState();
  closeModal('dishFormModal');
  renderCategoriesBar();
  renderClientMenu();
  renderAdminTable();
}

// ================== ORDERS HISTORY VIEW ==================
function renderAdminOrders() {
  const listEl = document.getElementById('adminOrdersList');
  const badgeEl = document.getElementById('adminOrdersBadge');
  if (badgeEl) badgeEl.textContent = ordersHistory.length;
  if (!listEl) return;

  if (ordersHistory.length === 0) {
    listEl.innerHTML = `
      <div style="grid-column:1 / -1; text-align:center; padding:36px; background:#FFF; border-radius:12px; border:1px solid var(--border); color:var(--text-muted);">
        <p>Hozircha hech qanday buyurtma kelib tushmadi</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = ordersHistory.map(order => {
    const itemsHtml = order.items.map(it => `
      <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px;">
        <span>${it.name} &times; ${it.qty}</span>
        <strong>${formatSom(it.price * it.qty)}</strong>
      </div>
    `).join('');

    return `
      <div class="admin-table-card" style="padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:8px; margin-bottom:10px;">
          <div>
            <strong style="color:var(--primary-dark); font-size:15px;">#${order.id}</strong>
            <span style="font-size:12px; color:var(--text-muted); margin-left:6px;">⏱️ ${order.time}</span>
          </div>
          <span style="background:var(--gold-light); color:#8C590E; font-size:12px; font-weight:700; padding:2px 8px; border-radius:6px;">
            ${order.table}
          </span>
        </div>
        <div style="margin-bottom:12px;">${itemsHtml}</div>
        <div style="border-top:1px dashed var(--border); padding-top:8px; display:flex; justify-content:space-between; font-size:14px; font-weight:800; color:var(--primary-dark);">
          <span>Jami to'lov:</span>
          <span>${formatSom(order.total)}</span>
        </div>
      </div>
    `;
  }).join('');
}

function clearAllOrdersHistory() {
  if (confirm("Barcha kelib tushgan buyurtmalar tarixi tozalansinmi?")) {
    ordersHistory = [];
    saveOrdersState();
    renderAdminOrders();
    showToast("Buyurtmalar tarixi tozalandi", "info");
  }
}

// ================== GENERAL SETTINGS ==================
function saveGeneralSettings() {
  const name = document.getElementById('settingChoyxonaName').value.trim();
  const fee = Number(document.getElementById('settingServiceFee').value);

  if (name) settings.choyxonaName = name;
  if (!isNaN(fee) && fee >= 0 && fee <= 40) settings.serviceFeePercent = fee;

  saveSettingsState();
  applySettingsToUI();
  renderCart();
  showToast("Sozlamalar saqlandi", "success");
}

function saveCredentials() {
  const u = document.getElementById('settingAdminUser').value.trim();
  const p = document.getElementById('settingAdminPass').value.trim();

  if (!u || !p) {
    showToast("Username va parol bo'sh bo'lishi mumkin emas", "danger");
    return;
  }

  settings.adminUser = u;
  settings.adminPass = p;
  saveSettingsState();
  showToast("Yangi username va parol muvaffaqiyatli saqlandi!", "success");
}

function exportMenuJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(menuItems, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `sanzor_menu_${Date.now()}.json`);
  dlAnchor.click();
}

function resetToDefaultMenu() {
  if (confirm("Haqiqatdan ham boshlang'ich menyuni qaytarmoqchimisiz? Kiritilgan barcha o'zgarishlar bekor qilinadi.")) {
    menuItems = [...DEFAULT_MENU_ITEMS];
    settings = { ...DEFAULT_SETTINGS };
    saveMenuState();
    saveSettingsState();
    applySettingsToUI();
    renderCategoriesBar();
    renderClientMenu();
    renderAdminTable();
    showToast("Standart menyu tiklandi", "info");
  }
}

// ================== MODAL HELPERS ==================
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.add('visible');
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove('visible');
    m.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global backdrop click and Escape key listeners
document.addEventListener('click', function(e) {
  if (e.target && e.target.classList && e.target.classList.contains('modal-backdrop')) {
    closeModal(e.target.id);
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeImageLightbox();
    document.querySelectorAll('.modal-backdrop.open, .modal-backdrop.visible').forEach(function(m) {
      closeModal(m.id);
    });
  }
});

// ================== TOAST SYSTEM ==================
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" style="background:none; border:none; color:inherit; font-weight:bold; cursor:pointer; font-size:16px;">×</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, duration);
}
