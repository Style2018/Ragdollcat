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
    
    // Initialize lightbox functionality
    initLightbox();
    
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

// Lightbox functionality
function initLightbox() {
    // Create lightbox modal if it doesn't exist
    if (!document.getElementById('lightboxModal')) {
        createLightboxModal();
    }
    
    // Initialize single image lightbox
    initSingleImageLightbox();
    
    // Initialize gallery lightbox
    initGalleryLightbox();
}

function createLightboxModal() {
    const modal = document.createElement('div');
    modal.id = 'lightboxModal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-nav prev" onclick="changeImage(-1)">&#10094;</button>
            <button class="lightbox-nav next" onclick="changeImage(1)">&#10095;</button>
            <img class="lightbox-image" id="lightboxImage" src="" alt="">
            <div class="lightbox-counter" id="lightboxCounter" style="display: none;"></div>
            <div class="lightbox-info" id="lightboxInfo" style="display: none;">
                <h3 id="lightboxTitle"></h3>
                <p id="lightboxDescription"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal events
    const closeBtn = modal.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });
    
    // Touch/swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (!modal.classList.contains('show')) return;
        
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe right - go to previous image
                changeImage(-1);
            } else {
                // Swipe left - go to next image  
                changeImage(1);
            }
        }
    }
}

let currentImageIndex = 0;
let currentGallery = [];

function initSingleImageLightbox() {
    // Add click handlers to single images (not in galleries)
    const singleImages = document.querySelectorAll('.cert-image, .hero-cat-image-large, .photo-placeholder');
    
    singleImages.forEach(function(img) {
        // Skip if it's part of a gallery
        if (!img.closest('.cat-card') && !img.closest('.kitten-card') && !img.closest('.gallery-item')) {
            img.classList.add('clickable-image');
            img.addEventListener('click', function() {
                openSingleImage(this);
            });
        }
    });
}

function initGalleryLightbox() {
    // Handle cat/kitten galleries
    const catCards = document.querySelectorAll('.cat-card, .kitten-card');
    catCards.forEach(function(card) {
        const img = card.querySelector('img, .cat-image-placeholder, .kitten-image-placeholder');
        if (img) {
            img.classList.add('gallery-image');
            img.addEventListener('click', function() {
                openCatGallery(card);
            });
        }
    });
    
    // Handle photo gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item, index) {
        const placeholder = item.querySelector('.photo-placeholder');
        if (placeholder) {
            placeholder.classList.add('gallery-image');
            placeholder.addEventListener('click', function() {
                openPhotoGallery(index);
            });
        }
    });
}

function openSingleImage(imgElement) {
    const modal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    const info = document.getElementById('lightboxInfo');
    const prevBtn = modal.querySelector('.lightbox-nav.prev');
    const nextBtn = modal.querySelector('.lightbox-nav.next');
    
    // Hide navigation and counter for single images
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    counter.style.display = 'none';
    info.style.display = 'none';
    
    // Set image source
    if (imgElement.tagName === 'IMG') {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt;
    } else {
        // For placeholders, show a message
        lightboxImg.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0ebe5"/><text x="200" y="150" text-anchor="middle" fill="%23666" font-family="Arial" font-size="20">圖片即將上傳</text></svg>';
    }
    
    modal.classList.add('show');
}

function openCatGallery(cardElement) {
    const modal = document.getElementById('lightboxModal');
    const catName = cardElement.querySelector('h3').textContent;
    const catImg = cardElement.querySelector('img');
    
    // Create gallery array (in real implementation, you'd have multiple images per cat)
    currentGallery = [];
    
    if (catImg) {
        currentGallery.push({
            src: catImg.src,
            alt: catImg.alt,
            title: '',
            description: '',
            thumb: catImg.src
        });
        
        // Add sample additional images (placeholder)
        currentGallery.push({
            src: catImg.src,
            alt: catName + ' - 生活照',
            title: '',
            description: '',
            thumb: catImg.src
        });
        
        currentGallery.push({
            src: catImg.src,
            alt: catName + ' - 寫真照',
            title: '',
            description: '',
            thumb: catImg.src
        });
    }
    
    currentImageIndex = 0;
    showCatGalleryImage();
    modal.classList.add('show');
}

function openPhotoGallery(startIndex) {
    const modal = document.getElementById('lightboxModal');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    currentGallery = [];
    galleryItems.forEach(function(item) {
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        
        currentGallery.push({
            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f0ebe5"/><text x="300" y="200" text-anchor="middle" fill="%23666" font-family="Arial" font-size="24">' + title + '</text></svg>',
            alt: title,
            title: title,
            description: description
        });
    });
    
    currentImageIndex = startIndex;
    showGalleryImage();
    modal.classList.add('show');
}

function showGalleryImage() {
    const lightboxImg = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    const info = document.getElementById('lightboxInfo');
    const title = document.getElementById('lightboxTitle');
    const description = document.getElementById('lightboxDescription');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');
    
    if (currentGallery.length === 0) return;
    
    const currentImage = currentGallery[currentImageIndex];
    
    // Show image
    lightboxImg.src = currentImage.src;
    lightboxImg.alt = currentImage.alt;
    
    // Show/update counter
    if (currentGallery.length > 1) {
        counter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
        counter.style.display = 'block';
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        
        // Update navigation buttons
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex === currentGallery.length - 1;
    } else {
        counter.style.display = 'none';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    
    // Show info
    if (currentImage.title || currentImage.description) {
        title.textContent = currentImage.title || '';
        description.textContent = currentImage.description || '';
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}

function showCatGalleryImage() {
    const lightboxImg = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    const info = document.getElementById('lightboxInfo');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');
    
    if (currentGallery.length === 0) return;
    
    const currentImage = currentGallery[currentImageIndex];
    
    // Show image
    lightboxImg.src = currentImage.src;
    lightboxImg.alt = currentImage.alt;
    
    // Hide info for cat galleries
    info.style.display = 'none';
    
    // Show/update counter
    if (currentGallery.length > 1) {
        counter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
        counter.style.display = 'block';
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        
        // Update navigation buttons
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex === currentGallery.length - 1;
    } else {
        counter.style.display = 'none';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    
    // Hide thumbnails for cats
    hideThumbnails();
}

function changeImage(direction) {
    if (currentGallery.length === 0) return;
    
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = 0;
    } else if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = currentGallery.length - 1;
    }
    
    // Check if this is a cat gallery or regular gallery
    const isCatGallery = currentGallery[0] && currentGallery[0].thumb !== undefined;
    
    if (isCatGallery) {
        showCatGalleryImage();
    } else {
        showGalleryImage();
    }
}

function showThumbnails() {
    let thumbnailsContainer = document.getElementById('lightboxThumbnails');
    
    if (!thumbnailsContainer) {
        thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.id = 'lightboxThumbnails';
        thumbnailsContainer.className = 'lightbox-thumbnails';
        document.querySelector('.lightbox-content').appendChild(thumbnailsContainer);
    }
    
    thumbnailsContainer.innerHTML = '';
    
    currentGallery.forEach(function(image, index) {
        const thumb = document.createElement('img');
        thumb.src = image.thumb;
        thumb.className = 'lightbox-thumb';
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        }
        
        thumb.addEventListener('click', function() {
            currentImageIndex = index;
            showCatGalleryImage();
        });
        
        thumbnailsContainer.appendChild(thumb);
    });
    
    thumbnailsContainer.style.display = 'flex';
}

function hideThumbnails() {
    const thumbnailsContainer = document.getElementById('lightboxThumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.style.display = 'none';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('show');
    hideThumbnails();
    currentGallery = [];
    currentImageIndex = 0;
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