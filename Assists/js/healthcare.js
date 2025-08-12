 // Add interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll for CTA button
            document.querySelector('.cta-button').addEventListener('click', function(e) {
                e.preventDefault();
                // Add your contact form navigation logic here
                console.log('Contact Us clicked');
            });

            // Add parallax effect to background circles
            document.addEventListener('mousemove', function(e) {
                const circles = document.querySelectorAll('.circle');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;

                circles.forEach((circle, index) => {
                    const speed = (index + 1) * 20;
                    const xOffset = (x - 0.5) * speed;
                    const yOffset = (y - 0.5) * speed;
                    circle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                });
            });

            // Animate stat numbers on scroll
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.stat-box').forEach(box => {
                box.style.animationPlayState = 'paused';
                observer.observe(box);
            });
        });