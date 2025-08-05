// AURINZA Website JavaScript - Luxury Edition with Responsive Design

// Product data
const products = [
    {
        id: 1,
        name: "SET 1 ก้อน",
        price: "139.-",
        originalPrice: null,
        image: "public/images/persimmon-promotion.jpg",
        description: "Persimmon Deodorant Soap ช่วยลดกลิ่นกาย",
        badge: null,
        rating: 4.9,
        reviews: 156
    },
    {
        id: 2,
        name: "Duo Deo Set (2 ก้อน)",
        price: "259.-",
        originalPrice: "278.-",
        image: "public/images/persimmon-promotion.jpg",
        description: "ซื้อคู่ประหยัดกว่า เหมาะสำหรับครอบครัว",
        badge: "ประหยัด",
        rating: 4.8,
        reviews: 89
    },
    {
        id: 3,
        name: "Family Fresh Set (4 ก้อน)",
        price: "500.-",
        originalPrice: "556.-",
        image: "public/images/persimmon-promotion.jpg",
        description: "ซื้อครอบครัว ประหยัดสุด",
        badge: "ขายดี",
        rating: 4.9,
        reviews: 234
    },
    {
        id: 4,
        name: "Gentle Glow Set",
        price: "500.-",
        originalPrice: null,
        image: "public/images/gentle-glow-set.jpg",
        description: "เซ็ตบำรุงผิว สุขภาพดี",
        badge: "แนะนำ",
        rating: 4.7,
        reviews: 67
    },
    {
        id: 5,
        name: "Bright Detox Set",
        price: "595.-",
        originalPrice: null,
        image: "public/images/bright-detox-set.jpg",
        description: "เซ็ตบำรุงผิวใส ออร่า",
        badge: "ใหม่",
        rating: 4.8,
        reviews: 45
    },
    {
        id: 6,
        name: "Clear Radiance Cleanser",
        price: "350.-",
        originalPrice: null,
        image: "public/images/clear-radiance.jpg",
        description: "เปิดประสบการณ์ผิวใส กับคลีนเซอร์ที่ให้ความสะอาดผิวหน้า",
        badge: null,
        rating: 4.6,
        reviews: 123
    },
];

// Device detection
const isMobile = window.innerWidth < 768;
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
const isDesktop = window.innerWidth >= 1024;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const productsGrid = document.getElementById('products-grid');
const loadingScreen = document.getElementById('loading-screen');
const backToTopBtn = document.getElementById('back-to-top');
const navbar = document.getElementById('navbar');

// Theme toggle elements
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const mobileLightIcon = document.getElementById('mobile-light-icon');
const mobileDarkIcon = document.getElementById('mobile-dark-icon');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLoadingScreen();
    initializeDeviceDetection();
    initializeMobileMenu();
    loadProducts();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeContactButtons();
    initializeStatsCounter();
    initializeParallaxEffects();
    initializeTypingEffect();
    initializeProductHoverEffects();
    initializeNavbarEffects();
    initializeLuxuryEffects();
    initializeGlowEffects();
    initializeResponsiveFeatures();
    initializeTouchOptimizations();
    initializePerformanceOptimizations();
    initializeBackToTop();
    initializeIntersectionObserver();
    initializeLazyLoading();
    initializeKeyboardNavigation();
    initializeAccessibilityFeatures();
});

// Theme management
function initializeTheme() {
    // Get saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem('aurinza-theme') || 'light';
    setTheme(savedTheme);
    
    // Add event listeners for theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Save theme preference
    localStorage.setItem('aurinza-theme', newTheme);
    
    // Show notification
    showLuxuryNotification(
        newTheme === 'dark' ? 'เปลี่ยนเป็นโหมดมืด' : 'เปลี่ยนเป็นโหมดสว่าง',
        'info'
    );
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update icons
    if (lightIcon && darkIcon) {
        if (theme === 'dark') {
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        } else {
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    }
    
    if (mobileLightIcon && mobileDarkIcon) {
        if (theme === 'dark') {
            mobileLightIcon.classList.add('hidden');
            mobileDarkIcon.classList.remove('hidden');
        } else {
            mobileLightIcon.classList.remove('hidden');
            mobileDarkIcon.classList.add('hidden');
        }
    }
    
    // Update theme toggle button styles
    updateThemeToggleStyles(theme);
}

function updateThemeToggleStyles(theme) {
    const toggleButtons = [themeToggle, mobileThemeToggle];
    
    toggleButtons.forEach(button => {
        if (button) {
            if (theme === 'dark') {
                button.classList.add('dark-mode');
                button.classList.remove('light-mode');
            } else {
                button.classList.add('light-mode');
                button.classList.remove('dark-mode');
            }
        }
    });
}

// Loading screen functionality
function initializeLoadingScreen() {
    if (loadingScreen) {
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    }
}

// Device detection and responsive features
function initializeDeviceDetection() {
    // Add device-specific classes to body
    if (isMobile) {
        document.body.classList.add('mobile-device');
    } else if (isTablet) {
        document.body.classList.add('tablet-device');
    } else {
        document.body.classList.add('desktop-device');
    }
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    }
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            window.location.reload();
        }, 500);
    });
    
    // Handle resize events
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            handleResize();
        }, 250);
    });
}

// Handle window resize
function handleResize() {
    const newIsMobile = window.innerWidth < 768;
    const newIsTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const newIsDesktop = window.innerWidth >= 1024;
    
    // Update device classes if needed
    if (newIsMobile !== isMobile) {
        document.body.classList.toggle('mobile-device', newIsMobile);
        document.body.classList.toggle('tablet-device', newIsTablet);
        document.body.classList.toggle('desktop-device', newIsDesktop);
    }
    
    // Reinitialize responsive features
    initializeResponsiveFeatures();
}

// Mobile menu functionality with enhanced touch support
function initializeMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        // Touch-friendly mobile menu
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Swipe to close mobile menu (for touch devices)
        if (isTouchDevice) {
            let startX = 0;
            let startY = 0;
            
            mobileMenu.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });
            
            mobileMenu.addEventListener('touchmove', function(e) {
                if (!startX || !startY) return;
                
                const diffX = startX - e.touches[0].clientX;
                const diffY = startY - e.touches[0].clientY;
                
                if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
                    closeMobileMenu();
                }
            });
        }

        // Keyboard navigation for mobile menu
        mobileMenuBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
        mobileMenuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('show'));
        
        // Update menu button icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = mobileMenu.classList.contains('show') ? 'fas fa-times text-lg' : 'fas fa-bars text-lg';
        }
    }
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('show');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        
        // Update menu button icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars text-lg';
        }
    }
}

// Load products with enhanced animations
function loadProducts() {
    if (!productsGrid) return;

    const getGridCols = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    productsGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-2xl overflow-hidden luxury-shadow hover-lift';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        const discount = product.originalPrice ? 
            Math.round(((parseFloat(product.originalPrice) - parseFloat(product.price)) / parseFloat(product.originalPrice)) * 100) : 0;
        
        productCard.innerHTML = `
            <div class="relative product-image h-48 md:h-56 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500">
                ${product.badge ? `<div class="badge">${product.badge}</div>` : ''}
                ${discount > 0 ? `<div class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">-${discount}%</div>` : ''}
            </div>
            <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold text-navy-text mb-2 line-clamp-2">${product.name}</h3>
                <p class="text-navy-muted text-sm md:text-base mb-3 line-clamp-2">${product.description}</p>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-1">
                        ${generateStars(product.rating)}
                        <span class="text-navy-muted text-xs md:text-sm ml-1">(${product.reviews})</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span class="text-lg md:text-xl font-bold text-navy-primary">${product.price}</span>
                        ${product.originalPrice ? `<span class="text-navy-muted line-through text-sm">${product.originalPrice}</span>` : ''}
                    </div>
                    <button class="btn-primary px-4 py-2 rounded-lg text-sm md:text-base group">
                        <span class="flex items-center">
                            <i class="fas fa-shopping-cart mr-2 group-hover:scale-110 transition-transform duration-200"></i>
                            เพิ่มตะกร้า
                        </span>
                    </button>
                </div>
            </div>
        `;
        
        // Add intersection observer for animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-scale-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(productCard);
        productsGrid.appendChild(productCard);
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-navy-gold text-xs md:text-sm"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-navy-gold text-xs md:text-sm"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-navy-gold text-xs md:text-sm"></i>';
    }
    
    return starsHTML;
}

// Scroll animations with intersection observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-left, .animate-fade-in-right, .animate-fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact buttons functionality
function initializeContactButtons() {
    const phoneButtons = document.querySelectorAll('button:has(.fa-phone)');
    const lineButtons = document.querySelectorAll('button:has(.fa-line)');
    
    phoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            showLuxuryNotification('กำลังเชื่อมต่อโทรศัพท์...', 'info');
            setTimeout(() => {
                window.open('tel:0986164264', '_self');
            }, 1000);
        });
    });
    
    lineButtons.forEach(button => {
        button.addEventListener('click', function() {
            showLuxuryNotification('กำลังเปิด LINE...', 'info');
                setTimeout(() => {
                window.open('https://line.me/ti/p/@acaurinza', '_blank');
            }, 1000);
        });
    });
}

// Luxury notification system
function showLuxuryNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.luxury-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `luxury-notification fixed top-20 right-4 z-[9999] bg-white border-l-4 border-navy-gold shadow-lg rounded-lg p-4 transform translate-x-full transition-transform duration-300`;
    
    const icon = type === 'success' ? 'fas fa-check-circle text-green-500' : 
                 type === 'error' ? 'fas fa-exclamation-circle text-red-500' : 
                 'fas fa-info-circle text-navy-gold';
    
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="${icon} text-lg"></i>
            <span class="text-navy-text font-medium">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Stats counter animation
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                if (text.includes('%')) {
                    const number = parseInt(text);
                    animateCounter(element, 0, number, true);
                } else if (text.includes('+')) {
                    const number = parseInt(text);
                    animateCounter(element, 0, number, false);
                } else if (text.includes('★')) {
                    element.classList.add('animate');
                }
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, isPercentage, isStar) {
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        
        if (isPercentage) {
            element.textContent = `${current}%`;
        } else if (isStar) {
            element.textContent = `${current}★`;
        } else {
            element.textContent = `${current}+`;
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Parallax effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-elements');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Typing effect for hero title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-section h1 span:first-child');
    if (!heroTitle) return;
    
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            setTimeout(typeWriter, 100);
            }
        };
        
    // Start typing effect when hero section is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                setTimeout(typeWriter, 500);
                    observer.unobserve(entry.target);
                }
            });
    }, { threshold: 0.5 });
        
    observer.observe(document.querySelector('.hero-section'));
}

// Product hover effects
function initializeProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
}

// Navbar effects
function initializeNavbarEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
                // Scrolling up
            navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
}

// Luxury effects
function initializeLuxuryEffects() {
    // Add luxury glow to premium elements
    const premiumElements = document.querySelectorAll('.text-gradient-navy, .text-gradient-gold');
    
    premiumElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

// Glow effects
function initializeGlowEffects() {
    const glowElements = document.querySelectorAll('.btn-primary, .btn-navy-outline');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.3)';
        });
        
        element.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
    });
}

// Back to top functionality
function initializeBackToTop() {
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for lazy loading
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, observerOptions);
    
    // Observe all lazy-loaded images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observer.observe(img));
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowUp' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Theme toggle with keyboard shortcut (Ctrl+T)
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// Accessibility features
function initializeAccessibilityFeatures() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'ข้ามไปยังเนื้อหาหลัก';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy-primary text-white px-4 py-2 rounded z-[9999]';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('.hero-section');
    if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('role', 'main');
    }
    
    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            const icon = button.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                if (iconClass.includes('fa-phone')) {
                    button.setAttribute('aria-label', 'โทรศัพท์');
                } else if (iconClass.includes('fa-line')) {
                    button.setAttribute('aria-label', 'LINE Chat');
                } else if (iconClass.includes('fa-shopping-cart')) {
                    button.setAttribute('aria-label', 'เพิ่มลงตะกร้า');
                }
            }
        }
    });
}

// Responsive features
function initializeResponsiveFeatures() {
    // Handle responsive grid adjustments
    const updateGrid = () => {
        const grid = document.querySelector('.grid');
        if (grid) {
            const cols = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            grid.className = `grid grid-cols-${cols} gap-6 md:gap-8`;
        }
    };
    
    updateGrid();
    window.addEventListener('resize', updateGrid);
}

// Touch optimizations
function initializeTouchOptimizations() {
    if (isTouchDevice) {
        // Add touch-friendly hover states
        const touchElements = document.querySelectorAll('.product-card, .contact-card, .ingredient-card');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
        });
    });
    }
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based optimizations
        }, 16);
    });
    
    // Preload critical images
preloadImages();
}

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'public/images/luxury-branding.jpg',
        'public/images/aurinza-logo.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('border-red-500');
                isValid = false;
        }
    }
});

    return isValid;
}

// Add luxury scroll indicator
function addLuxuryScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40';
    indicator.innerHTML = `
        <div class="w-6 h-10 border-2 border-navy-primary rounded-full flex justify-center">
            <div class="w-1 h-3 bg-navy-primary rounded-full mt-2 animate-pulse"></div>
        </div>
    `;
    
    document.body.appendChild(indicator);
    
    // Hide indicator after first scroll
    let hasScrolled = false;
    window.addEventListener('scroll', () => {
        if (!hasScrolled && window.pageYOffset > 100) {
            indicator.style.opacity = '0';
            hasScrolled = true;
        }
    });
}

// Initialize luxury scroll indicator
addLuxuryScrollIndicator();
