document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    initMobileNavigation();
    
    // FAQ toggle functionality
    initFAQToggle();
    
    // Smooth scrolling for internal links
    initSmoothScrolling();
    
    // Add animation on scroll
    initScrollAnimations();
    
    // Contact form handling (if present)
    initContactForm();
    
    console.log('布偶貓網站已載入完成');
});

// Mobile navigation functionality
function initMobileNavigation() {
    // Create mobile menu button
    const header = document.querySelector('.main-content');
    const sidebar = document.querySelector('.sidebar');
    
    // Add mobile menu toggle button for smaller screens
    if (window.innerWidth <= 1024) {
        createMobileMenuButton();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 1024 && !document.querySelector('.mobile-menu-btn')) {
            createMobileMenuButton();
        } else if (window.innerWidth > 1024) {
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            if (mobileBtn) {
                mobileBtn.remove();
            }
            sidebar.classList.remove('active');
        }
    });
}

function createMobileMenuButton() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Create button element
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1001;
        background: #d4af37;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    // Add click event
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        
        // Close menu when clicking outside
        if (sidebar.classList.contains('active')) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
    });
    
    function handleOutsideClick(e) {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
            document.removeEventListener('click', handleOutsideClick);
        }
    }
    
    // Add to page
    document.body.appendChild(menuBtn);
}

// FAQ toggle functionality
function initFAQToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(function(ans) {
                ans.style.display = 'none';
            });
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
                answer.style.animation = 'slideDown 0.3s ease';
            }
            
            // Add visual feedback
            question.style.backgroundColor = isOpen ? '#f8f5f1' : '#ebe6e0';
        });
        
        // Initialize - hide all answers
        const answer = question.nextElementSibling;
        if (answer && answer.classList.contains('faq-answer')) {
            answer.style.display = 'none';
        }
    });
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-item, .guarantee-item, .cat-card, .kitten-card, .step, .award-item'
    );
    
    animateElements.forEach(function(el) {
        observer.observe(el);
    });
    
    // Add CSS for animations
    if (!document.querySelector('#scroll-animations')) {
        const style = document.createElement('style');
        style.id = 'scroll-animations';
        style.textContent = `
            .feature-item, .guarantee-item, .cat-card, .kitten-card, .step, .award-item {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    max-height: 0;
                }
                to {
                    opacity: 1;
                    max-height: 200px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Contact form handling
function initContactForm() {
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff6b6b';
                } else {
                    field.style.borderColor = '#d4af37';
                }
            });
            
            if (isValid) {
                // Show success message
                showMessage('感謝您的詢問，我們會儘快回覆！', 'success');
                form.reset();
            } else {
                showMessage('請填寫所有必填欄位', 'error');
            }
        });
    });
}

// Utility function to show messages
function showMessage(message, type) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1002;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background: #4CAF50;' : 'background: #ff6b6b;'}
    `;
    
    document.body.appendChild(messageEl);
    
    // Remove after 3 seconds
    setTimeout(function() {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
    
    // Add animation styles if not present
    if (!document.querySelector('#message-animations')) {
        const style = document.createElement('style');
        style.id = 'message-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Image lazy loading for better performance
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// Initialize search functionality if search box exists
function initSearchFunctionality() {
    const searchInput = document.querySelector('#search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.kitten-card, .cat-card');
            
            searchableElements.forEach(function(element) {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }
}

// Page loading indicator
function showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .loader-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #d4af37;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loader);
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initSearchFunctionality();
    
    // Show loading indicator for subsequent page loads
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(function(link) {
        link.addEventListener('click', showLoadingIndicator);
    });
});