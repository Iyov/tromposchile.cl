// TromposChile.cl - Main JavaScript File

// Global Variables
let cart = JSON.parse(localStorage.getItem('trompos-cart')) || [];
let currentTheme = localStorage.getItem('trompos-theme') || 'light';

// Products Database
const products = [
    {
        id: 1,
        name: 'Trompo Industrial Pro',
        category: 'trompos',
        price: 299990,
        image: 'gradient-blue-trompo',
        description: 'Trompo de alta resistencia para uso industrial intensivo. Fabricado con materiales de primera calidad.'
    },
    {
        id: 2,
        name: 'Betonera Max 350L',
        category: 'betoneras',
        price: 1299990,
        image: 'gradient-green-betonera',
        description: 'Betonera de 350 litros con motor de alta potencia. Ideal para obras de construcción medianas y grandes.'
    },
    {
        id: 3,
        name: 'Placa Steel Premium',
        category: 'placas',
        price: 89990,
        image: 'gradient-purple-placa',
        description: 'Placa de acero reforzado para construcción pesada. Resistente a la corrosión y deformación.'
    },
    {
        id: 4,
        name: 'Kit Herramientas Completo',
        category: 'herramientas',
        price: 199990,
        image: 'gradient-yellow-herramientas',
        description: 'Set completo de herramientas para metalúrgica. Incluye todo lo necesario para trabajos profesionales.'
    },
    {
        id: 5,
        name: 'Trompo Compacto',
        category: 'trompos',
        price: 149990,
        image: 'gradient-red-trompo',
        description: 'Trompo compacto ideal para trabajos menores y espacios reducidos. Fácil transporte y manejo.'
    },
    {
        id: 6,
        name: 'Betonera Portátil 180L',
        category: 'betoneras',
        price: 799990,
        image: 'gradient-cyan-betonera',
        description: 'Betonera portátil de 180 litros. Perfecta para proyectos residenciales y trabajos menores.'
    },
    {
        id: 7,
        name: 'Placa Reforzada Industrial',
        category: 'placas',
        price: 159990,
        image: 'gradient-lime-placa',
        description: 'Placa reforzada para uso industrial pesado. Máxima durabilidad y resistencia.'
    },
    {
        id: 8,
        name: 'Martillo Neumático Pro',
        category: 'herramientas',
        price: 349990,
        image: 'gradient-orange-martillo',
        description: 'Martillo neumático profesional para demolición y construcción. Alta potencia y durabilidad.'
    }
];

// Image configurations for products
const imageConfigs = {
    'gradient-blue-trompo': {
        gradient: 'from-blue-500 to-blue-600',
        icon: 'fas fa-cog',
        label: 'Trompo Industrial'
    },
    'gradient-green-betonera': {
        gradient: 'from-green-500 to-green-600',
        icon: 'fas fa-industry',
        label: 'Betonera'
    },
    'gradient-purple-placa': {
        gradient: 'from-purple-500 to-purple-600',
        icon: 'fas fa-layer-group',
        label: 'Placa Steel'
    },
    'gradient-yellow-herramientas': {
        gradient: 'from-yellow-500 to-orange-500',
        icon: 'fas fa-tools',
        label: 'Herramientas'
    },
    'gradient-red-trompo': {
        gradient: 'from-red-500 to-red-600',
        icon: 'fas fa-cog',
        label: 'Trompo Compacto'
    },
    'gradient-cyan-betonera': {
        gradient: 'from-cyan-500 to-cyan-600',
        icon: 'fas fa-industry',
        label: 'Betonera Portátil'
    },
    'gradient-lime-placa': {
        gradient: 'from-lime-500 to-lime-600',
        icon: 'fas fa-layer-group',
        label: 'Placa Industrial'
    },
    'gradient-orange-martillo': {
        gradient: 'from-orange-500 to-orange-600',
        icon: 'fas fa-hammer',
        label: 'Martillo'
    }
};

// Blog Content
const blogContent = {
    blog1: {
        title: 'Innovaciones en Metalurgia Industrial',
        content: `
            <div class="prose dark:prose-invert max-w-none">
                <div class="h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                    <div class="text-center text-white">
                        <i class="fas fa-industry text-8xl mb-4"></i>
                        <div class="text-xl font-semibold">Metalurgia Industrial</div>
                    </div>
                </div>
                
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    La industria metalúrgica está experimentando una revolución tecnológica sin precedentes. Las nuevas tecnologías están transformando la manera en que trabajamos con metales y desarrollamos equipos industriales.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tecnologías Emergentes</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    Las innovaciones en automatización, inteligencia artificial y nuevos materiales están redefiniendo los estándares de la industria. En TromposChile, nos mantenemos a la vanguardia de estas tecnologías para ofrecer productos de última generación.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Beneficios para la Industria</h3>
                <ul class="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Mayor eficiencia en los procesos de producción</li>
                    <li>Reducción de costos operativos</li>
                    <li>Mejora en la calidad de los productos finales</li>
                    <li>Mayor seguridad para los trabajadores</li>
                    <li>Sostenibilidad ambiental mejorada</li>
                </ul>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">El Futuro de la Metalurgia</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    Con más de 10 años de experiencia en el sector, hemos sido testigos de esta evolución y continuamos adaptándonos para brindar las mejores soluciones a nuestros clientes. La metalurgia del futuro será más eficiente, sostenible y tecnológicamente avanzada.
                </p>
                
                <p class="text-gray-600 dark:text-gray-300">
                    En TromposChile, estamos comprometidos con la innovación constante y la mejora continua de nuestros productos y servicios.
                </p>
            </div>
        `
    },
    blog2: {
        title: 'Guía de Mantenimiento de Equipos',
        content: `
            <div class="prose dark:prose-invert max-w-none">
                <div class="h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-6 flex items-center justify-center">
                    <div class="text-center text-white">
                        <i class="fas fa-tools text-8xl mb-4"></i>
                        <div class="text-xl font-semibold">Mantenimiento de Equipos</div>
                    </div>
                </div>
                
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    El mantenimiento adecuado de los equipos de metalurgia es fundamental para garantizar su rendimiento óptimo y prolongar su vida útil. En esta guía te compartimos los mejores consejos.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mantenimiento Preventivo</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    El mantenimiento preventivo es la clave para evitar costosas reparaciones y tiempos de inactividad. Establecer un programa regular de inspección y mantenimiento puede ahorrar miles de pesos a largo plazo.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Checklist de Mantenimiento Diario</h3>
                <ul class="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Inspección visual de componentes principales</li>
                    <li>Verificación de niveles de lubricantes</li>
                    <li>Revisión de conexiones eléctricas</li>
                    <li>Limpieza de filtros y conductos</li>
                    <li>Prueba de funcionamiento de sistemas de seguridad</li>
                </ul>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mantenimiento Semanal y Mensual</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    Además del mantenimiento diario, es importante realizar inspecciones más profundas de manera periódica. Esto incluye la calibración de instrumentos, revisión de desgaste en piezas móviles y actualización de software en equipos automatizados.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Capacitación del Personal</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    Un personal bien capacitado es esencial para el mantenimiento efectivo. En TromposChile ofrecemos programas de capacitación para que tu equipo pueda realizar el mantenimiento básico y detectar problemas potenciales antes de que se conviertan en fallas mayores.
                </p>
                
                <p class="text-gray-600 dark:text-gray-300">
                    Recuerda que un equipo bien mantenido no solo funciona mejor, sino que también es más seguro para los operadores y más eficiente en términos de consumo energético.
                </p>
            </div>
        `
    },
    blog3: {
        title: 'Seguridad en el Trabajo Industrial',
        content: `
            <div class="prose dark:prose-invert max-w-none">
                <div class="h-64 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                    <div class="text-center text-white">
                        <i class="fas fa-hard-hat text-8xl mb-4"></i>
                        <div class="text-xl font-semibold">Seguridad Industrial</div>
                    </div>
                </div>
                
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    La seguridad en el trabajo industrial es nuestra prioridad número uno. Trabajar con equipos de metalurgia requiere conocimiento, preparación y el uso adecuado de equipos de protección personal.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Equipos de Protección Personal (EPP)</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    El uso correcto de EPP es fundamental para prevenir accidentes. Cada tipo de trabajo requiere equipos específicos de protección que deben ser utilizados en todo momento durante las operaciones.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">EPP Esencial para Metalurgia</h3>
                <ul class="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Casco de seguridad certificado</li>
                    <li>Gafas de protección o careta facial</li>
                    <li>Guantes resistentes al calor y cortes</li>
                    <li>Calzado de seguridad con puntera de acero</li>
                    <li>Ropa de trabajo ignífuga</li>
                    <li>Protección auditiva en ambientes ruidosos</li>
                </ul>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Protocolos de Seguridad</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    Establecer y seguir protocolos de seguridad claros es esencial. Esto incluye procedimientos de bloqueo y etiquetado (LOTO), manejo seguro de materiales peligrosos, y planes de respuesta ante emergencias.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Capacitación Continua</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    La capacitación en seguridad debe ser continua y actualizada. Los trabajadores deben conocer los riesgos específicos de su área de trabajo y saber cómo responder ante situaciones de emergencia.
                </p>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Cultura de Seguridad</h3>
                <p class="mb-4 text-gray-600 dark:text-gray-300">
                    En TromposChile promovemos una cultura de seguridad donde cada trabajador se siente responsable no solo de su propia seguridad, sino también de la de sus compañeros. La comunicación abierta sobre riesgos y la mejora continua de los procedimientos son fundamentales.
                </p>
                
                <p class="text-gray-600 dark:text-gray-300">
                    Recuerda: ningún trabajo es tan urgente que no pueda hacerse de manera segura. La seguridad siempre debe ser la prioridad número uno.
                </p>
            </div>
        `
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupTheme();
    setupEventListeners();
    loadProducts();
    updateCartUI();
    setupScrollProgress();
    setupBackToTop();
    setupFAQ();
    setupMobileMenu();
    
    // Animate elements on scroll
    setupScrollAnimations();
}

// Theme Management
function setupTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Apply saved theme
    if (currentTheme === 'dark') {
        html.classList.add('dark');
    }
    
    themeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('trompos-theme', currentTheme);
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Cart toggle
    document.getElementById('cart-toggle').addEventListener('click', toggleCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    
    // Checkout
    document.getElementById('checkout-btn').addEventListener('click', openCheckout);
    document.getElementById('close-checkout').addEventListener('click', closeCheckout);
    document.getElementById('checkout-form').addEventListener('submit', processPayment);
    
    // Blog modal
    document.getElementById('close-blog-modal').addEventListener('click', closeBlogModal);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterProducts(filter);
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close modals on outside click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('fixed') && e.target.classList.contains('inset-0')) {
            closeAllModals();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            }
        });
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Scroll Progress Bar
function setupScrollProgress() {
    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// FAQ Setup
function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Products Management
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    const imageConfig = imageConfigs[product.image];
    
    card.innerHTML = `
        <div class="h-48 bg-gradient-to-br ${imageConfig.gradient} flex items-center justify-center">
            <div class="text-center text-white">
                <i class="${imageConfig.icon} text-6xl mb-2"></i>
                <div class="text-sm font-semibold">${imageConfig.label}</div>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">${product.name}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-3 text-sm">${product.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-blue-600 dark:text-blue-400">$${formatPrice(product.price)}</span>
                <button onclick="addToCart(${product.id})" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <i class="fas fa-cart-plus mr-1"></i>
                    Agregar
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('fade-in-up');
        } else {
            card.style.display = 'none';
        }
    });
}

// Cart Management
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification('Producto agregado al carrito', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    updateCartModal();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
            updateCartModal();
        }
    }
}

function saveCart() {
    localStorage.setItem('trompos-cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('hidden');
    updateCartModal();
}

function closeCart() {
    document.getElementById('cart-modal').classList.add('hidden');
}

function updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-center py-8">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const imageConfig = imageConfigs[item.image];
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="w-16 h-16 bg-gradient-to-br ${imageConfig.gradient} rounded-lg flex items-center justify-center">
                <i class="${imageConfig.icon} text-white text-xl"></i>
            </div>
            <div class="flex-1">
                <h4 class="font-semibold text-gray-800 dark:text-white">${item.name}</h4>
                <p class="text-gray-600 dark:text-gray-300">$${formatPrice(item.price)}</p>
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                <span class="w-8 text-center text-gray-800 dark:text-white">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = '$' + formatPrice(total);
}

// Checkout Process
function openCheckout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    closeCart();
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.classList.remove('hidden');
    updateCheckoutModal();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function updateCheckoutModal() {
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    checkoutItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600';
        orderItem.innerHTML = `
            <span class="text-gray-800 dark:text-white">${item.name} x ${item.quantity}</span>
            <span class="font-semibold text-gray-800 dark:text-white">$${formatPrice(item.price * item.quantity)}</span>
        `;
        
        checkoutItems.appendChild(orderItem);
    });
    
    checkoutTotal.textContent = '$' + formatPrice(total);
}

function processPayment(e) {
    e.preventDefault();
    
    // Simulate payment processing
    showNotification('Procesando pago...', 'info');
    
    setTimeout(() => {
        // Simulate successful payment
        showNotification('¡Pago procesado exitosamente! Recibirás un email de confirmación.', 'success');
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();
        
        // Close modal
        closeCheckout();
        
        // Reset form
        document.getElementById('checkout-form').reset();
    }, 2000);
}

// Blog Modal
function openBlogModal(blogId) {
    const modal = document.getElementById('blog-modal');
    const title = document.getElementById('blog-modal-title');
    const content = document.getElementById('blog-modal-content');
    
    const blog = blogContent[blogId];
    if (blog) {
        title.textContent = blog.title;
        content.innerHTML = blog.content;
        modal.classList.remove('hidden');
    }
}

function closeBlogModal() {
    document.getElementById('blog-modal').classList.add('hidden');
}

function closeAllModals() {
    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('checkout-modal').classList.add('hidden');
    document.getElementById('blog-modal').classList.add('hidden');
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.hover-card, .product-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('es-CL').format(price);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set notification style based on type
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-500', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        case 'info':
            notification.classList.add('bg-blue-500', 'text-white');
            break;
        default:
            notification.classList.add('bg-gray-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Lazy Loading for Images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search Functionality (if needed in the future)
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            const query = e.target.value.toLowerCase();
            searchProducts(query);
        }, 300));
    }
}

function searchProducts(query) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (productName.includes(query) || productDescription.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupLazyLoading();
    
    // Add loading states to buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.type === 'submit') {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openBlogModal = openBlogModal;
window.scrollToTop = scrollToTop;