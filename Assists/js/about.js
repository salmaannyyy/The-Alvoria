document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about-alvoria');
    
    // --- Intersection Observer for Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Trigger animations that need JS
                animateCounters();
                // Optional: Unobserve after animating once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });

    observer.observe(aboutSection);

    // --- Staggered Word Animation ---
    // The CSS handles the animation, JS just sets the delay
    const titleWords = document.querySelectorAll('.about-title .word');
    titleWords.forEach((word, index) => {
        word.style.transitionDelay = `${index * 0.1}s`;
    });

    // --- Counter Animation ---
    let hasCounterAnimated = false; // Flag to ensure it runs only once
    function animateCounters() {
        if (hasCounterAnimated) return;
        hasCounterAnimated = true;
        
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the faster

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                
                // Calculate the increment
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
});