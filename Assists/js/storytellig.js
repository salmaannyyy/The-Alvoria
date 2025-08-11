    // Fade in animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementBottom = element.getBoundingClientRect().bottom;
                    
                    if (elementTop < window.innerHeight && elementBottom > 0) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Initial check
            checkFade();
            
            // Check on scroll
            window.addEventListener('scroll', checkFade);
            
            // Smooth scrolling for scroll indicator
            document.querySelector('.scroll-indicator').addEventListener('click', function() {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            });
            
            // CTA button interaction
            document.querySelector('.cta-button').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create a simple notification instead of alert
                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.left = '50%';
                notification.style.transform = 'translateX(-50%)';
                notification.style.backgroundColor = '#333';
                notification.style.color = 'white';
                notification.style.padding = '15px 30px';
                notification.style.borderRadius = '30px';
                notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.3s ease';
                notification.textContent = 'Thank you for your interest! We\'ll be in touch soon.';
                
                document.body.appendChild(notification);
                
                // Fade in
                setTimeout(() => {
                    notification.style.opacity = '1';
                }, 10);
                
                // Fade out and remove
                setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            });
        });
    