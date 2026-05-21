// ===== DATA =====
const USERS = [
    'Noor Imansyah', 'Nizhar Saftaji', 'Akhmad Nur Irvansyah', 'Clara Shinta Kartika',
    'Septiana Ayu Mahdayati', 'Dicky Yanor', 'Helly Rozana', 'Ronny Syahriza',
    'Adam Faturrahman Arifin', 'Melita Septiana Sari', 'Melinda Syahani',
    'Lisa Januarita D', 'Muhammad Akbar', 'Erni Oktavianti', 'Fina Amalia Hayati',
    'Hery Aprianto', 'Nadya', 'Muhammad Anshari', 'Rendy'
];

const MENU_ITEMS = [
    // === MAKANAN ===
    { id: 1, name: 'GORENGAN', price: 2000, category: 'makanan', emoji: '🍤' },
    { id: 2, name: 'KRUPUK STIK', price: 3000, category: 'makanan', emoji: '🥨' },
    { id: 3, name: 'KRUPUK ACAN', price: 3000, category: 'makanan', emoji: '🥨' },
    { id: 4, name: 'INDOMIE + TELOR DADAR', price: 12000, category: 'makanan', emoji: '🍜' },
    { id: 5, name: 'POP MIE GORENG', price: 5000, category: 'makanan', emoji: '🍝' },
    { id: 6, name: 'POP MIE SOTO', price: 5000, category: 'makanan', emoji: '🍝' },
    { id: 7, name: 'NASI SOP', price: 15000, category: 'makanan', emoji: '🍲' },
    { id: 8, name: 'SOTO', price: 15000, category: 'makanan', emoji: '🍲' },
    { id: 9, name: 'GADO-GADO', price: 15000, category: 'makanan', emoji: '🥗' },
    { id: 10, name: 'ROTI BAKAR', price: 15000, category: 'makanan', emoji: '🍞' },
    { id: 11, name: 'ENOKI CRISPY', price: 15000, category: 'makanan', emoji: '🍄' },
    { id: 12, name: 'NASI KUNING + AYAM', price: 15000, category: 'makanan', emoji: '🍛' },

    // === SNACK ===
    { id: 13, name: 'FITBAR CHEESE 20g', price: 5000, category: 'snack', emoji: '🧀' },
    { id: 14, name: 'FITBAR TIRAMISU 20g', price: 5000, category: 'snack', emoji: '🍫' },
    { id: 15, name: 'FITBAR CHOCO', price: 5000, category: 'snack', emoji: '🍫' },
    { id: 16, name: 'FITBAR FRUIT', price: 5000, category: 'snack', emoji: '🍇' },
    { id: 17, name: 'ROTI CROISSANT CHOCOLATE 60g', price: 5000, category: 'snack', emoji: '🥐' },
    { id: 18, name: 'ROTI CROISSANT MIX BERRIES 60g', price: 5000, category: 'snack', emoji: '🥐' },
    { id: 19, name: 'ROTI CROISSANT CREAMY CHEESE 60g', price: 7000, category: 'snack', emoji: '🥐' },
    { id: 20, name: 'ROTI CROISSANT PANDAN SRIKAYA 60g', price: 7000, category: 'snack', emoji: '🥐' },
    { id: 21, name: 'TIC TAC ORIGINAL 90g', price: 6000, category: 'snack', emoji: '🍘' },
    { id: 22, name: 'TIC TAC PEDAS 90g', price: 6000, category: 'snack', emoji: '🌶️' },
    { id: 23, name: 'TIC TAC AYAM BAWANG 90g', price: 6000, category: 'snack', emoji: '🍘' },
    { id: 24, name: 'TIC TAC MIX 90g', price: 6000, category: 'snack', emoji: '🍘' },
    { id: 25, name: 'TIC TAC RUMPUT LAUT 90g', price: 6000, category: 'snack', emoji: '🍘' },
    { id: 26, name: 'TIC TAC SAPI PANGGANG 90g', price: 6000, category: 'snack', emoji: '🍘' },
    { id: 27, name: 'QTELA', price: 8000, category: 'snack', emoji: '🍟' },
    { id: 28, name: 'KACANG DUA KELINCI GARLIC 75g', price: 8000, category: 'snack', emoji: '🥜' },
    { id: 29, name: 'KACANG GARING 75g', price: 8000, category: 'snack', emoji: '🥜' },
    { id: 30, name: 'KACANG KORO ORIGINAL 70g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 31, name: 'KACANG KORO PEDAS 65g', price: 10000, category: 'snack', emoji: '🌶️' },
    { id: 32, name: 'KACANG KORO RUMPUT LAUT 65g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 33, name: 'KACANG LOFET 65g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 34, name: 'KACANG ATOM KECIL ORIGINAL', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 35, name: 'KACANG ATOM KECIL PEDAS', price: 10000, category: 'snack', emoji: '🌶️' },
    { id: 36, name: 'SUKRO BBQ 140g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 37, name: 'SUKRO KRIBO 140g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 38, name: 'SUKRO KEDELAI 140g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 39, name: 'SUKRO ORIGINAL 140g', price: 10000, category: 'snack', emoji: '🥜' },
    { id: 40, name: 'SUKRO OVEN JAGUNG BAKAR 140g', price: 10000, category: 'snack', emoji: '🌽' },
    { id: 41, name: 'SUKRO OVEN BAWANG 140g', price: 10000, category: 'snack', emoji: '🧅' },
    { id: 42, name: 'SUKRO OVEN PEDAS 140g', price: 10000, category: 'snack', emoji: '🌶️' },
    { id: 43, name: 'SILVERQUEEN 28/30g', price: 11000, category: 'snack', emoji: '🍫' },
    { id: 44, name: 'SILVERQUEEN CHUNKY 33g', price: 11000, category: 'snack', emoji: '🍫' },
    { id: 45, name: 'KACANG CAMPUR MIXED NUTS', price: 12000, category: 'snack', emoji: '🥜' },
    { id: 46, name: 'KACANG PANGGANG BALADO', price: 14000, category: 'snack', emoji: '🌶️' },
    { id: 47, name: 'KACANG PANGGANG MADU', price: 14000, category: 'snack', emoji: '🍯' },

    // === MINUMAN ===
    { id: 48, name: 'COCA-COLA 390ML', price: 6000, category: 'minuman', emoji: '🥤' },
    { id: 49, name: 'FANTA STROBERI 390ML', price: 6000, category: 'minuman', emoji: '🥤' },
    { id: 50, name: 'ORONAMIN C DRINK', price: 6000, category: 'minuman', emoji: '🧃' },
    { id: 51, name: 'POCARI SWEAT ION WATER 350ML', price: 6500, category: 'minuman', emoji: '💧' },
    { id: 52, name: 'POCARI SWEAT BOTOL 350ML', price: 6500, category: 'minuman', emoji: '💧' },
    { id: 53, name: 'CIM UHT BLUEBERRY 200ML', price: 7000, category: 'minuman', emoji: '🫐' },
    { id: 54, name: 'CIM UHT CASHEW 250ML', price: 7000, category: 'minuman', emoji: '🥛' },
    { id: 55, name: 'CIM UHT CHOCO MALT 250ML', price: 7000, category: 'minuman', emoji: '🥛' },
    { id: 56, name: 'CIM UHT HAZELNUT 250ML', price: 7000, category: 'minuman', emoji: '🥛' },
    { id: 57, name: 'CIM UHT MILK ALMOND 250ML', price: 7000, category: 'minuman', emoji: '🥛' },
    { id: 58, name: 'CIM UHT MILK BEBAS LAKTOSA', price: 7000, category: 'minuman', emoji: '🥛' },
    { id: 59, name: 'CIM UHT MILK CHOCOLATE 250ML', price: 7000, category: 'minuman', emoji: '🍫' },
    { id: 60, name: 'CIM UHT MILK MARIE REGAL 250ML', price: 7000, category: 'minuman', emoji: '🍪' },
    { id: 61, name: 'CIM UHT MILK MATCHA 250ML', price: 7000, category: 'minuman', emoji: '🍵' },
    { id: 62, name: 'CIM UHT MILK SALTED CARAMEL 250ML', price: 7000, category: 'minuman', emoji: '🍮' },
    { id: 63, name: 'CIM UHT MILK STROBERRY 250ML', price: 7000, category: 'minuman', emoji: '🍓' },
    { id: 64, name: 'CIM UHT MIXED FRUIT 200ML', price: 7000, category: 'minuman', emoji: '🍹' },
    { id: 65, name: 'CIM UHT STROBERRY 200ML', price: 7000, category: 'minuman', emoji: '🍓' },
    { id: 66, name: 'CIM UHT TIRAMISU 250ML', price: 7000, category: 'minuman', emoji: '☕' },
    { id: 67, name: 'POCARI SWEAT BOTOL 500ML', price: 7000, category: 'minuman', emoji: '💧' },
    { id: 68, name: 'POCARI SWEAT ION WATER 500ML', price: 7000, category: 'minuman', emoji: '💧' },
    { id: 69, name: 'NUTRISARI UHT', price: 8000, category: 'minuman', emoji: '🧃' },
    { id: 70, name: 'ENTRASOL', price: 10000, category: 'minuman', emoji: '🥛' },
    { id: 71, name: 'TROPICANA UHT', price: 10000, category: 'minuman', emoji: '🧃' },
    { id: 72, name: 'HYDRO COCO LATE', price: 11000, category: 'minuman', emoji: '🥥' },
    { id: 73, name: 'HILO PROTEIN COKLAT UHT', price: 14000, category: 'minuman', emoji: '💪' },
    { id: 74, name: 'JUS BUAH APEL', price: 15000, category: 'minuman', emoji: '🍎' },
    { id: 75, name: 'JUS BUAH NAGA', price: 15000, category: 'minuman', emoji: '🐉' },
    { id: 76, name: 'JUS BUAH JERUK', price: 15000, category: 'minuman', emoji: '🍊' },
    { id: 77, name: 'JUS JERUK + MADU', price: 15000, category: 'minuman', emoji: '🍯' },
];

// ===== ADMIN CREDENTIALS =====
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'hc2026';

const MAX_BUDGET = 15000;
const STORAGE_KEY = 'pos_jamuan_orders';
const ADMIN_SESSION_KEY = 'pos_jamuan_admin';

// ===== STATE =====
let currentUser = null;
let cart = [];
let activeCategory = 'all';
let isAdmin = false;
let selectedDate = getTodayKey();
let orders = [];

// ===== UTILITY FUNCTIONS =====
function formatRupiah(amount) {
    return 'Rp' + amount.toLocaleString('id-ID');
}

function getInitials(name) {
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function getAvatarColor(name) {
    const colors = [
        'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'linear-gradient(135deg, #ec4899, #f43f5e)',
        'linear-gradient(135deg, #f59e0b, #f97316)',
        'linear-gradient(135deg, #10b981, #34d399)',
        'linear-gradient(135deg, #3b82f6, #2dd4bf)',
        'linear-gradient(135deg, #8b5cf6, #ec4899)',
        'linear-gradient(135deg, #f97316, #ef4444)',
        'linear-gradient(135deg, #14b8a6, #06b6d4)',
        'linear-gradient(135deg, #a855f7, #6366f1)',
        'linear-gradient(135deg, #f43f5e, #fb923c)',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}

function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDateDisplay(dateKey) {
    const parts = dateKey.split('-');
    const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    return d.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function loadOrders() {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        return data[selectedDate] || [];
    } catch {
        return [];
    }
}

function saveOrders() {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        data[selectedDate] = orders;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Error saving orders:', e);
    }
}

function getUsersWhoOrdered() {
    return orders.map(o => o.user);
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getRemainingBudget() {
    return MAX_BUDGET - getCartTotal();
}

// ===== DATE MANAGEMENT =====
function onDateChange() {
    const picker = document.getElementById('datePicker');
    selectedDate = picker.value;
    orders = loadOrders();
    
    // Update the selected date display on user selection page
    updateSelectedDateDisplay();
    
    // If on recap, re-render it
    if (!document.getElementById('stepRecap').classList.contains('hidden')) {
        renderRecap();
    }
    
    // If on user selection, re-render users to update ordered status
    if (!document.getElementById('stepUser').classList.contains('hidden')) {
        renderUsers(document.getElementById('userSearch').value);
    }
}

function updateSelectedDateDisplay() {
    const el = document.getElementById('selectedDateDisplay');
    const isToday = selectedDate === getTodayKey();
    const dateStr = formatDateDisplay(selectedDate);
    
    el.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        📅 Pesanan untuk: <strong>${dateStr}</strong>
        ${isToday ? '<span style="color: var(--accent-success); font-size: 0.75rem; margin-left: 4px;">(Hari Ini)</span>' : '<span style="color: var(--accent-warning); font-size: 0.75rem; margin-left: 4px;">(Tanggal Lain)</span>'}
    `;
}

// ===== ADMIN SYSTEM =====
function showAdminLogin() {
    document.getElementById('adminLoginModal').classList.remove('hidden');
    document.getElementById('loginError').classList.add('hidden');
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
    setTimeout(() => document.getElementById('adminUsername').focus(), 200);
}

function closeAdminLogin() {
    document.getElementById('adminLoginModal').classList.add('hidden');
    document.getElementById('loginError').classList.add('hidden');
}

function adminLogin() {
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        isAdmin = true;
        localStorage.setItem(ADMIN_SESSION_KEY, 'true');
        closeAdminLogin();
        updateAdminUI();
        showToast('Login admin berhasil! 🔓', 'success');
    } else {
        document.getElementById('loginError').classList.remove('hidden');
        document.getElementById('adminPassword').value = '';
        document.getElementById('adminPassword').focus();
    }
}

function adminLogout() {
    isAdmin = false;
    localStorage.removeItem(ADMIN_SESSION_KEY);
    updateAdminUI();
    
    // If currently on recap, go back to user selection
    if (!document.getElementById('stepRecap').classList.contains('hidden')) {
        document.getElementById('stepRecap').classList.add('hidden');
        if (currentUser) {
            document.getElementById('stepMenu').classList.remove('hidden');
        } else {
            document.getElementById('stepUser').classList.remove('hidden');
            renderUsers();
        }
    }
    
    showToast('Admin logout berhasil', 'success');
}

function updateAdminUI() {
    const adminBadge = document.getElementById('adminBadge');
    const btnRecap = document.getElementById('btnRecap');
    const btnAdminLogin = document.getElementById('btnAdminLogin');
    const btnAdminLogout = document.getElementById('btnAdminLogout');
    const btnModalRecap = document.getElementById('btnModalRecap');
    
    if (isAdmin) {
        adminBadge.classList.remove('hidden');
        btnRecap.classList.remove('hidden');
        btnAdminLogin.classList.add('hidden');
        btnAdminLogout.classList.remove('hidden');
        if (btnModalRecap) btnModalRecap.classList.remove('hidden');
    } else {
        adminBadge.classList.add('hidden');
        btnRecap.classList.add('hidden');
        btnAdminLogin.classList.remove('hidden');
        btnAdminLogout.classList.add('hidden');
        if (btnModalRecap) btnModalRecap.classList.add('hidden');
    }
}

function togglePassword() {
    const input = document.getElementById('adminPassword');
    const icon = document.getElementById('eyeIcon');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
    } else {
        input.type = 'password';
        icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    }
}

function checkAdminSession() {
    const session = localStorage.getItem(ADMIN_SESSION_KEY);
    if (session === 'true') {
        isAdmin = true;
    }
    updateAdminUI();
}

// ===== TOAST =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️'
    };
    
    toast.innerHTML = `
        <span style="font-size: 1.1rem">${icons[type] || '✅'}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== USER SELECTION =====
function renderUsers(filter = '') {
    const grid = document.getElementById('userGrid');
    const orderedUsers = getUsersWhoOrdered();
    const filterLower = filter.toLowerCase();
    
    const filtered = USERS.filter(u => u.toLowerCase().includes(filterLower));
    
    grid.innerHTML = filtered.map(user => {
        const hasOrdered = orderedUsers.includes(user);
        const initials = getInitials(user);
        const color = getAvatarColor(user);
        
        return `
            <button class="user-btn ${hasOrdered ? 'has-ordered' : ''}" 
                    onclick="selectUser('${user.replace(/'/g, "\\'")}')"
                    title="${hasOrdered ? user + ' (sudah pesan)' : user}">
                <div class="user-avatar-small" style="background: ${color}">${initials}</div>
                <span>${user}</span>
            </button>
        `;
    }).join('');
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 30px; color: var(--text-muted);">
                <p>Nama tidak ditemukan</p>
            </div>
        `;
    }
}

function selectUser(name) {
    // Check if user already ordered
    const orderedUsers = getUsersWhoOrdered();
    if (orderedUsers.includes(name)) {
        showToast(`${name} sudah memesan untuk tanggal ini. Pesanan sebelumnya akan diganti jika Anda melanjutkan.`, 'warning');
    }
    
    currentUser = name;
    cart = [];
    
    // Update UI
    document.getElementById('stepUser').classList.add('hidden');
    document.getElementById('stepMenu').classList.remove('hidden');
    
    // Set user info
    const avatar = document.getElementById('userAvatar');
    avatar.textContent = getInitials(name);
    avatar.style.background = getAvatarColor(name);
    document.getElementById('userName').textContent = name;
    
    // Render menu and cart
    renderMenu();
    renderCart();
    updateBudget();
    
    // Focus search
    setTimeout(() => document.getElementById('menuSearch').focus(), 300);
}

function changeUser() {
    currentUser = null;
    cart = [];
    activeCategory = 'all';
    
    document.getElementById('stepMenu').classList.add('hidden');
    document.getElementById('stepUser').classList.remove('hidden');
    document.getElementById('menuSearch').value = '';
    document.getElementById('userSearch').value = '';
    
    // Reset category tabs
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === 'all');
    });
    
    renderUsers();
}

// ===== MENU =====
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const searchTerm = document.getElementById('menuSearch').value.toLowerCase();
    const remaining = getRemainingBudget();
    
    let items = MENU_ITEMS;
    
    // Filter by category
    if (activeCategory !== 'all') {
        items = items.filter(item => item.category === activeCategory);
    }
    
    // Filter by search
    if (searchTerm) {
        items = items.filter(item => item.name.toLowerCase().includes(searchTerm));
    }
    
    const categoryLabels = { makanan: 'Makanan', snack: 'Snack', minuman: 'Minuman' };
    
    grid.innerHTML = items.map(item => {
        const inCart = cart.find(c => c.id === item.id);
        const canAfford = item.price <= remaining || inCart;
        const disabled = !canAfford && !inCart;
        
        return `
            <div class="menu-item ${disabled ? 'disabled' : ''} ${inCart ? 'in-cart' : ''}" 
                 onclick="${disabled ? '' : `toggleCartItem(${item.id})`}"
                 id="menu-item-${item.id}">
                ${inCart ? `
                    <div class="menu-item-check">
                        <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                ` : ''}
                <div class="menu-item-top">
                    <div class="menu-item-emoji">${item.emoji}</div>
                    <span class="menu-item-category">${categoryLabels[item.category]}</span>
                </div>
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-bottom">
                    <span class="menu-item-price">${formatRupiah(item.price)}</span>
                    <button class="menu-item-add" onclick="event.stopPropagation(); ${disabled ? '' : `toggleCartItem(${item.id})`}">
                        ${inCart ? '−' : '+'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p>Menu tidak ditemukan</p>
            </div>
        `;
    }
}

function filterCategory(category) {
    activeCategory = category;
    
    // Update tabs
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    renderMenu();
}

function filterMenu() {
    renderMenu();
}

// ===== CART =====
function toggleCartItem(itemId) {
    const existing = cart.find(c => c.id === itemId);
    
    if (existing) {
        // Remove from cart
        cart = cart.filter(c => c.id !== itemId);
    } else {
        // Add to cart
        const menuItem = MENU_ITEMS.find(m => m.id === itemId);
        if (!menuItem) return;
        
        // Check budget
        if (menuItem.price > getRemainingBudget()) {
            showToast('Budget tidak cukup! Maksimal Rp15.000', 'error');
            const el = document.getElementById(`menu-item-${itemId}`);
            if (el) {
                el.style.animation = 'shake 0.4s ease';
                setTimeout(() => el.style.animation = '', 400);
            }
            return;
        }
        
        cart.push({ ...menuItem, qty: 1, notes: '' });
    }
    
    renderMenu();
    renderCart();
    updateBudget();
}

function updateQty(itemId, delta) {
    const item = cart.find(c => c.id === itemId);
    if (!item) return;
    
    const newQty = item.qty + delta;
    
    if (newQty <= 0) {
        cart = cart.filter(c => c.id !== itemId);
    } else {
        // Check budget for increase
        if (delta > 0) {
            const additionalCost = item.price;
            if (additionalCost > getRemainingBudget()) {
                showToast('Budget tidak cukup!', 'error');
                return;
            }
        }
        item.qty = newQty;
    }
    
    renderMenu();
    renderCart();
    updateBudget();
}

function updateNote(itemId, note) {
    const item = cart.find(c => c.id === itemId);
    if (item) item.notes = note;
}

function removeCartItem(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    renderMenu();
    renderCart();
    updateBudget();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const countEl = document.getElementById('cartCount');
    const totalEl = document.getElementById('totalAmount');
    const submitBtn = document.getElementById('btnSubmit');
    const mobileCartBadge = document.getElementById('mobileCartBadge');
    
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    countEl.textContent = totalItems;
    if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
    totalEl.textContent = formatRupiah(getCartTotal());
    submitBtn.disabled = cart.length === 0;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
                <p>Belum ada pesanan</p>
                <span>Pilih menu di sebelah kiri</span>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-main">
                <div class="cart-item-info">
                    <div class="cart-item-name" title="${item.name}">${item.emoji} ${item.name}</div>
                    <div class="cart-item-price">${formatRupiah(item.price * item.qty)}</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn remove" onclick="updateQty(${item.id}, -1)">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(${item.id})" title="Hapus">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="cart-item-notes">
                <input type="text" class="notes-input" 
                       placeholder="✏️ Tambah catatan..." 
                       value="${(item.notes || '').replace(/"/g, '&quot;')}" 
                       onchange="updateNote(${item.id}, this.value)"
                       oninput="updateNote(${item.id}, this.value)">
            </div>
        </div>
    `).join('');
}

function updateBudget() {
    const remaining = getRemainingBudget();
    const percentage = (remaining / MAX_BUDGET) * 100;
    
    const amountEl = document.getElementById('budgetAmount');
    const barEl = document.getElementById('budgetBarFill');
    
    amountEl.textContent = formatRupiah(remaining);
    barEl.style.width = percentage + '%';
    
    // Update colors based on remaining budget
    amountEl.classList.remove('low', 'empty');
    barEl.classList.remove('low', 'empty');
    
    if (remaining <= 0) {
        amountEl.classList.add('empty');
        barEl.classList.add('empty');
    } else if (remaining <= 5000) {
        amountEl.classList.add('low');
        barEl.classList.add('low');
    }
}

// ===== SUBMIT ORDER =====
function submitOrder() {
    if (cart.length === 0 || !currentUser) return;
    
    const total = getCartTotal();
    
    if (total > MAX_BUDGET) {
        showToast('Total melebihi budget Rp15.000!', 'error');
        return;
    }
    
    // Remove existing order for this user if any
    orders = orders.filter(o => o.user !== currentUser);
    
    // Create order
    const order = {
        id: Date.now(),
        user: currentUser,
        items: cart.map(item => ({ id: item.id, name: item.name, price: item.price, qty: item.qty, emoji: item.emoji, notes: item.notes || '' })),
        total: total,
        timestamp: new Date().toISOString()
    };
    
    orders.push(order);
    saveOrders();
    
    // Show success modal
    const dateDisplay = formatDateDisplay(selectedDate);
    const isToday = selectedDate === getTodayKey();
    const itemNames = cart.map(i => `${i.emoji} ${i.name}${i.qty > 1 ? ` x${i.qty}` : ''}${i.notes ? ` (${i.notes})` : ''}`).join(', ');
    document.getElementById('modalMessage').innerHTML = `
        <strong>${currentUser}</strong> memesan:<br>
        <span style="font-size: 0.82rem; color: var(--text-muted)">${itemNames}</span><br>
        <span style="font-size: 0.78rem; color: var(--text-accent)">📅 ${dateDisplay} ${isToday ? '(Hari Ini)' : ''}</span><br><br>
        Total: <strong style="color: var(--accent-success); font-family: var(--font-mono)">${formatRupiah(total)}</strong>
    `;
    document.getElementById('successModal').classList.remove('hidden');
    
    showToast(`Pesanan ${currentUser} berhasil disimpan!`, 'success');
}

function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
    changeUser();
}

function closeModalAndRecap() {
    document.getElementById('successModal').classList.add('hidden');
    changeUser();
    toggleRecap();
}

// ===== RECAP =====
function toggleRecap() {
    if (!isAdmin) {
        showToast('Hanya admin yang dapat mengakses rekap', 'error');
        return;
    }
    
    const recapSection = document.getElementById('stepRecap');
    const userSection = document.getElementById('stepUser');
    const menuSection = document.getElementById('stepMenu');
    const btnRecap = document.getElementById('btnRecap');
    
    if (recapSection.classList.contains('hidden')) {
        // Show recap
        userSection.classList.add('hidden');
        menuSection.classList.add('hidden');
        recapSection.classList.remove('hidden');
        btnRecap.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Kembali</span>
        `;
        renderRecap();
    } else {
        // Hide recap
        recapSection.classList.add('hidden');
        if (currentUser) {
            menuSection.classList.remove('hidden');
        } else {
            userSection.classList.remove('hidden');
            renderUsers();
        }
        btnRecap.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                <rect x="9" y="3" width="6" height="4" rx="1"/>
                <path d="M9 12h6M9 16h6"/>
            </svg>
            <span>Rekap</span>
        `;
    }
}

function renderRecap() {
    // Update date display
    const dateDisplay = formatDateDisplay(selectedDate);
    const isToday = selectedDate === getTodayKey();
    document.getElementById('recapDate').innerHTML = `${dateDisplay} ${isToday ? '<span style="color: var(--accent-success)">(Hari Ini)</span>' : ''}`;
    
    // Update stats
    const totalPeople = orders.length;
    const totalItems = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.qty, 0), 0);
    const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);
    const avgSpent = totalPeople > 0 ? Math.round(totalSpent / totalPeople) : 0;
    
    document.getElementById('statPeople').textContent = totalPeople;
    document.getElementById('statItems').textContent = totalItems;
    document.getElementById('statTotal').textContent = formatRupiah(totalSpent);
    document.getElementById('statAvg').textContent = formatRupiah(avgSpent);
    
    // Render table
    const tbody = document.getElementById('recapTableBody');
    const emptyEl = document.getElementById('recapEmpty');
    const tableEl = document.getElementById('recapTable');
    
    if (orders.length === 0) {
        tableEl.classList.add('hidden');
        emptyEl.classList.remove('hidden');
        return;
    }
    
    tableEl.classList.remove('hidden');
    emptyEl.classList.add('hidden');
    
    tbody.innerHTML = orders.map((order, index) => {
        const time = new Date(order.timestamp);
        const timeStr = time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        
        const itemTags = order.items.map(item => `
            <span class="recap-item-tag">
                ${item.emoji} ${item.name}
                ${item.qty > 1 ? `<span class="qty">x${item.qty}</span>` : ''}
            </span>
            ${item.notes ? `<span class="recap-item-note">📝 ${item.notes}</span>` : ''}
        `).join('');
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; color: white; background: ${getAvatarColor(order.user)}; flex-shrink: 0;">
                            ${getInitials(order.user)}
                        </div>
                        <strong>${order.user}</strong>
                    </div>
                </td>
                <td>
                    <div class="recap-item-list">${itemTags}</div>
                </td>
                <td class="recap-total-cell">${formatRupiah(order.total)}</td>
                <td class="recap-time-cell">${timeStr}</td>
                <td>
                    <button class="btn-delete-order" onclick="deleteOrder(${order.id})" title="Hapus pesanan">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function deleteOrder(orderId) {
    if (!isAdmin) return;
    
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    document.getElementById('confirmTitle').textContent = 'Hapus Pesanan?';
    document.getElementById('confirmMessage').textContent = `Apakah Anda yakin ingin menghapus pesanan ${order.user}?`;
    document.getElementById('confirmModal').classList.remove('hidden');
    
    document.getElementById('confirmYes').onclick = () => {
        orders = orders.filter(o => o.id !== orderId);
        saveOrders();
        renderRecap();
        closeConfirm();
        showToast(`Pesanan ${order.user} telah dihapus`, 'success');
    };
}

function clearAllOrders() {
    if (!isAdmin) return;
    
    if (orders.length === 0) {
        showToast('Tidak ada pesanan untuk dihapus', 'warning');
        return;
    }
    
    const dateDisplay = formatDateDisplay(selectedDate);
    document.getElementById('confirmTitle').textContent = 'Hapus Semua Pesanan?';
    document.getElementById('confirmMessage').textContent = `Apakah Anda yakin ingin menghapus semua ${orders.length} pesanan pada ${dateDisplay}? Tindakan ini tidak dapat dibatalkan.`;
    document.getElementById('confirmModal').classList.remove('hidden');
    
    document.getElementById('confirmYes').onclick = () => {
        orders = [];
        saveOrders();
        renderRecap();
        closeConfirm();
        showToast('Semua pesanan telah dihapus', 'success');
    };
}

function closeConfirm() {
    document.getElementById('confirmModal').classList.add('hidden');
}

// ===== EXPORT CSV =====
function exportRecap() {
    if (!isAdmin) return;
    if (orders.length === 0) {
        showToast('Tidak ada data untuk diekspor', 'warning');
        return;
    }
    
    let csv = '\uFEFF'; // BOM for UTF-8
    csv += 'No,Nama,Item Pesanan,Qty,Catatan,Harga Satuan,Subtotal,Total Pesanan,Waktu\n';
    
    let rowNum = 1;
    orders.forEach(order => {
        const time = new Date(order.timestamp);
        const timeStr = time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        
        order.items.forEach((item, idx) => {
            csv += `${rowNum},`;
            csv += `"${order.user}",`;
            csv += `"${item.name}",`;
            csv += `${item.qty},`;
            csv += `"${(item.notes || '').replace(/"/g, '""')}",`;
            csv += `${item.price},`;
            csv += `${item.price * item.qty},`;
            csv += `${idx === 0 ? order.total : ''},`;
            csv += `${idx === 0 ? timeStr : ''}\n`;
        });
        rowNum++;
    });
    
    // Add summary
    const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);
    csv += `\n,,,,,,,\n`;
    csv += `Total,${orders.length} orang,,,,,${totalSpent},\n`;
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rekap_Jamuan_${selectedDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('File CSV berhasil diunduh!', 'success');
}

// ===== EXPORT EXCEL =====
function exportExcel() {
    if (!isAdmin) return;
    if (orders.length === 0) {
        showToast('Tidak ada data untuk diekspor', 'warning');
        return;
    }

    const dateDisplay = formatDateDisplay(selectedDate);

    // Build data rows
    const rows = [];

    // Title rows
    rows.push(['REKAP JAMUAN HARIAN - DIVISI HUMAN CAPITAL']);
    rows.push([`Tanggal: ${dateDisplay}`]);
    rows.push([]); // empty row
    rows.push(['No', 'Nama', 'Item Pesanan', 'Qty', 'Catatan', 'Harga Satuan (Rp)', 'Subtotal (Rp)', 'Total Pesanan (Rp)', 'Waktu']);

    let grandTotal = 0;
    let rowNum = 1;

    orders.forEach(order => {
        const time = new Date(order.timestamp);
        const timeStr = time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        order.items.forEach((item, idx) => {
            const subtotal = item.price * item.qty;
            rows.push([
                idx === 0 ? rowNum : '',
                idx === 0 ? order.user : '',
                item.name,
                item.qty,
                item.notes || '',
                item.price,
                subtotal,
                idx === 0 ? order.total : '',
                idx === 0 ? timeStr : ''
            ]);
        });

        grandTotal += order.total;
        rowNum++;
    });

    // Summary rows
    rows.push([]);
    rows.push(['', 'TOTAL', '', '', '', '', '', grandTotal, '']);
    rows.push(['', `Jumlah Pemesan: ${orders.length} orang`, '', '', '', '', '', '', '']);
    rows.push(['', `Rata-rata per orang: ${formatRupiah(Math.round(grandTotal / orders.length))}`, '', '', '', '', '', '', '']);

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(rows);

    // Set column widths
    ws['!cols'] = [
        { wch: 5 },   // No
        { wch: 28 },  // Nama
        { wch: 38 },  // Item
        { wch: 6 },   // Qty
        { wch: 25 },  // Catatan
        { wch: 18 },  // Harga Satuan
        { wch: 16 },  // Subtotal
        { wch: 18 },  // Total Pesanan
        { wch: 10 },  // Waktu
    ];

    // Merge title cells
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 8 } }, // Title row
        { s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }, // Date row
    ];

    // Create workbook and export
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Rekap Jamuan');
    XLSX.writeFile(wb, `Rekap_Jamuan_${selectedDate}.xlsx`);

    showToast('File Excel berhasil diunduh!', 'success');
}

// ===== MOBILE CART =====
function toggleMobileCart() {
    const cartSection = document.getElementById('cartSection');
    cartSection.classList.toggle('mobile-open');
}

// ===== EVENT LISTENERS =====
document.getElementById('userSearch').addEventListener('input', function() {
    renderUsers(this.value);
});

// Close mobile cart when clicking outside
document.addEventListener('click', function(e) {
    const cartSection = document.getElementById('cartSection');
    const mobileToggle = document.getElementById('mobileCartToggle');
    
    if (cartSection && cartSection.classList.contains('mobile-open')) {
        if (!cartSection.contains(e.target) && !mobileToggle.contains(e.target)) {
            cartSection.classList.remove('mobile-open');
        }
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('successModal').classList.add('hidden');
        document.getElementById('confirmModal').classList.add('hidden');
        document.getElementById('adminLoginModal').classList.add('hidden');
    }
});

// Admin login on Enter key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !document.getElementById('adminLoginModal').classList.contains('hidden')) {
        adminLogin();
    }
});

// ===== INIT =====
function init() {
    // Set date picker to today
    const datePicker = document.getElementById('datePicker');
    datePicker.value = getTodayKey();
    selectedDate = getTodayKey();
    
    // Load orders for selected date
    orders = loadOrders();
    
    // Check admin session
    checkAdminSession();
    
    // Update UI
    updateSelectedDateDisplay();
    renderUsers();
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
