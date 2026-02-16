document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.vision-card, .service-card, .contact-item, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                this.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                        <h3 style="color: var(--text-dark); margin-bottom: 1rem;">Thank you for your message!</h3>
                        <p style="color: var(--text-light);">We'll get back to you soon.</p>
                    </div>
                `;
            }
        });
    }

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const sunIcon = document.querySelector('.sun-icon i');
    if (sunIcon) {
        sunIcon.addEventListener('mouseenter', function() {
            this.style.animationDuration = '2s';
        });
        
        sunIcon.addEventListener('mouseleave', function() {
            this.style.animationDuration = '20s';
        });
    }

    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.querySelector('.vision-icon').style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.vision-icon').style.transform = 'scale(1) rotate(0deg)';
        });
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon').style.transform = 'scale(1.1)';
            this.querySelector('.service-icon').style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon').style.transform = 'scale(1)';
            this.querySelector('.service-icon').style.boxShadow = 'none';
        });
    });

    // Parallax effect removed - pseudo-elements cannot be queried with querySelectorAll

    const pledgeItems = document.querySelectorAll('.pledge-item');
    pledgeItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });

    pledgeItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');
                animateStats(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateStats(element) {
        const text = element.textContent;
        if (text === '∞' || text === '🌍') return;
        
        const finalNumber = parseInt(text) || 2025;
        let currentNumber = 0;
        const increment = finalNumber / 100;
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                element.textContent = finalNumber;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(currentNumber);
            }
        }, 20);
    }
});