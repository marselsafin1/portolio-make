// Portfolio Website JavaScript
// Modern, interactive functionality with micro-animations

class PortfolioWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupScrollEffects();
        this.setupSkillBars();
        this.setupFormHandling();
        this.setupMobileNavigation();
        this.setupParallaxEffects();
        this.setupTypingEffect();
        this.setupParticleSystem();
    }

    setupEventListeners() {
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
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
        });

        // Form submission
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(e);
            });
        }

        // Project card interactions
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', this.handleProjectHover.bind(this));
            card.addEventListener('mouseleave', this.handleProjectLeave.bind(this));
        });

        // Skill bars intersection observer
        this.setupSkillBarObserver();
    }

    initializeAnimations() {
        // Add entrance animations to elements
        const animatedElements = document.querySelectorAll('.fade-in');
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
        });

        // Initialize floating animations
        this.initializeFloatingElements();

        // Add hover effects to buttons
        this.setupButtonHoverEffects();

        // Initialize gradient text animations
        this.setupGradientTextAnimations();
    }

    setupScrollEffects() {
        // Parallax background effect
        window.addEventListener('scroll', () => {
            this.handleParallaxScroll();
        });

        // Reveal animations on scroll
        this.setupScrollReveal();
    }

    setupSkillBars() {
        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (level) {
                bar.style.width = '0%';
            }
        });
    }

    setupSkillBarObserver() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const level = bar.getAttribute('data-level');
                    if (level) {
                        setTimeout(() => {
                            bar.style.width = level + '%';
                        }, 200);
                    }
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    setupFormHandling() {
        // Add floating label effect
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', this.handleInputFocus.bind(this));
            input.addEventListener('blur', this.handleInputBlur.bind(this));
        });
    }

    setupMobileNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    setupParallaxEffects() {
        // Create parallax effect for background orbs
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.gradient-orb');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }

    setupTypingEffect() {
        // Typing effect for hero title
        const titleName = document.querySelector('.title-name');
        if (titleName) {
            const text = titleName.textContent;
            titleName.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    titleName.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Start typing effect after initial animation
            setTimeout(typeWriter, 1500);
        }
    }

    setupParticleSystem() {
        // Create floating particles in the background
        this.createFloatingParticles();
    }

    createFloatingParticles() {
        const background = document.querySelector('.background-animation');
        if (!background) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            background.appendChild(particle);
        }

        // Add CSS animation for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(0px) translateX(0px);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(100px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }

    handleParallaxScroll() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const speed = 0.5;
            hero.style.transform = `translateY(${scrolled * speed}px)`;
        }
    }

    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.fade-in-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    initializeFloatingElements() {
        // Add floating animation to various elements
        const floatingElements = document.querySelectorAll('.floating-card, .stat-item, .project-card');
        floatingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }

    setupButtonHoverEffects() {
        // Enhanced button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e);
            });
        });
    }

    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupGradientTextAnimations() {
        // Animate gradient text on scroll
        const gradientTexts = document.querySelectorAll('.section-title, .title-name');
        gradientTexts.forEach(text => {
            text.addEventListener('mouseenter', () => {
                text.style.background = 'var(--gradient-2)';
                text.style.backgroundClip = 'text';
                text.style.webkitBackgroundClip = 'text';
                text.style.webkitTextFillColor = 'transparent';
            });

            text.addEventListener('mouseleave', () => {
                text.style.background = 'var(--gradient-1)';
                text.style.backgroundClip = 'text';
                text.style.webkitBackgroundClip = 'text';
                text.style.webkitTextFillColor = 'transparent';
            });
        });
    }

    handleProjectHover(event) {
        const card = event.currentTarget;
        const overlay = card.querySelector('.project-overlay');
        const links = card.querySelectorAll('.project-link');
        
        // Animate overlay
        if (overlay) {
            overlay.style.opacity = '1';
        }
        
        // Stagger animate links
        links.forEach((link, index) => {
            link.style.transform = 'scale(0)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, index * 100);
        });
    }

    handleProjectLeave(event) {
        const card = event.currentTarget;
        const overlay = card.querySelector('.project-overlay');
        const links = card.querySelectorAll('.project-link');
        
        if (overlay) {
            overlay.style.opacity = '0';
        }
        
        links.forEach(link => {
            link.style.transform = 'scale(1)';
        });
    }

    handleInputFocus(event) {
        const input = event.target;
        const formGroup = input.closest('.form-group');
        
        if (formGroup) {
            formGroup.style.transform = 'translateY(-2px)';
            formGroup.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.2)';
        }
    }

    handleInputBlur(event) {
        const input = event.target;
        const formGroup = input.closest('.form-group');
        
        if (formGroup) {
            formGroup.style.transform = 'translateY(0)';
            formGroup.style.boxShadow = 'none';
        }
    }

    handleFormSubmission(event) {
        const form = event.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Skickar...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            this.showNotification('Meddelande skickat! Tack för din kontakt.', 'success');
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? 'var(--gradient-1)' : 'var(--gradient-2)'};
            color: white;
            border-radius: 10px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Utility method to add CSS animations
    addCSSAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                animation: ripple 0.6s linear;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .fade-in-child {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
            }
            
            .fade-in-child.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the portfolio website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioWebsite();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add cursor trail effect
    let mouseX = 0;
    let mouseY = 0;
    let trail = [];

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create trail effect
        if (Math.random() > 0.8) {
            createTrailParticle(mouseX, mouseY);
        }
    });

    function createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: trail-fade 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Add trail fade animation
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trail-fade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(trailStyle);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations are handled in the main class
}, 16)); // 60fps
