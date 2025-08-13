   // Hide loader when page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.story-section, .timeline-item, .team-member').forEach(el => {
            observer.observe(el);
        });

        // Smooth scroll for navigation links
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

        // Form submission handler
        function handleSubmit(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(45deg, var(--primary), var(--secondary));
                color: white;
                padding: 20px 40px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                animation: fadeInUp 0.5s ease;
            `;
            successMsg.textContent = `Thank you! We'll contact you at ${email} soon.`;
            document.body.appendChild(successMsg);
            
            // Reset form
            event.target.reset();
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.style.animation = 'fadeInUp 0.5s ease reverse';
                setTimeout(() => successMsg.remove(), 500);
            }, 3000);
        }

        // Add parallax effect to floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const floatingElements = document.querySelectorAll('.floating-element');
            
            floatingElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Add hover effect to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Dynamic circuit animation
        function createCircuitLine() {
            const heroBg = document.querySelector('.hero-bg');
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.cssText = `
                position: absolute;
                background: var(--primary);
                opacity: 0.2;
                animation: pulse 3s infinite;
            `;
            
            // Random position and size
            const isVertical = Math.random() > 0.5;
            if (isVertical) {
                line.style.width = '2px';
                line.style.height = Math.random() * 200 + 100 + 'px';
                line.style.left = Math.random() * 100 + '%';
                line.style.top = Math.random() * 100 + '%';
            } else {
                line.style.width = Math.random() * 300 + 100 + 'px';
                line.style.height = '2px';
                line.style.left = Math.random() * 100 + '%';
                line.style.top = Math.random() * 100 + '%';
            }
            
            heroBg.appendChild(line);
            
            // Remove after animation
            setTimeout(() => line.remove(), 3000);
        }

        // Create circuit lines periodically
        setInterval(createCircuitLine, 2000);
    