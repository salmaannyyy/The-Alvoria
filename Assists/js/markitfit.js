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

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Animate numbers
        function animateNumber(element) {
            const target = parseFloat(element.getAttribute('data-target'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    element.textContent = current.toFixed(1);
                    requestAnimationFrame(updateNumber);
                } else {
                    element.textContent = target % 1 === 0 ? target : target.toFixed(1);
                }
            };

            updateNumber();
        }

        // Trigger number animation when metrics are visible
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numbers = entry.target.querySelectorAll('.metric-number');
                    numbers.forEach(num => {
                        if (!num.classList.contains('animated')) {
                            num.classList.add('animated');
                            animateNumber(num);
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        const heroMetrics = document.querySelector('.hero-metrics');
        if (heroMetrics) {
            metricsObserver.observe(heroMetrics);
        }

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

        // CTA handler
        function handleCTA(event) {
            event.preventDefault();
            
            // Create modal
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            `;
            
            const modalContent = document.createElement('div');
            modalContent.style.cssText = `
                background: var(--dark);
                padding: 40px;
                border-radius: 20px;
                max-width: 500px;
                width: 90%;
                text-align: center;
                border: 1px solid rgba(255, 255, 255, 0.1);
            `;
            
            modalContent.innerHTML = `
                <h3 style="margin-bottom: 20px; color: var(--primary);">Let's Connect!</h3>
                <p style="color: var(--gray); margin-bottom: 30px;">Enter your email and we'll reach out within 24 hours</p>
                <form onsubmit="submitEmail(event)" style="display: flex; flex-direction: column; gap: 15px;">
                    <input type="email" placeholder="your@email.com" required style="
                        padding: 15px;
                        background: var(--card-bg);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 10px;
                        color: var(--light);
                        font-size: 1rem;
                    ">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                </form>
                <button onclick="closeModal()" style="
                    margin-top: 20px;
                    background: none;
                    border: none;
                    color: var(--gray);
                    cursor: pointer;
                ">Close</button>
            `;
            
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
        }

        function submitEmail(event) {
            event.preventDefault();
            const email = event.target.querySelector('input').value;
            
            // Show success message
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
                z-index: 10001;
                animation: fadeInUp 0.5s ease;
            `;
            successMsg.textContent = `Thank you! We'll contact you at ${email} soon.`;
            document.body.appendChild(successMsg);
            
            closeModal();
            
            setTimeout(() => {
                successMsg.style.animation = 'fadeInUp 0.5s ease reverse';
                setTimeout(() => successMsg.remove(), 500);
            }, 3000);
        }

        function closeModal() {
            const modal = document.querySelector('div[style*="position: fixed"]');
            if (modal) {
                modal.style.animation = 'fadeIn 0.3s ease reverse';
                setTimeout(() => modal.remove(), 300);
            }
        }

        // Add hover effect to cards
        document.querySelectorAll('.explanation-card, .case-study-card, .feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add CSS animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    