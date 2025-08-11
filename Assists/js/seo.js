document.addEventListener('DOMContentLoaded', () => {
    // --- Services Carousel ---
    const track = document.querySelector('.services-track');
    if (track) {
        const slides = Array.from(track.children);
        const dots = document.querySelectorAll('.nav-dot');
        const slideWidth = slides[0].getBoundingClientRect().width;
        
        const moveToSlide = (targetIndex) => {
            track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
            dots.forEach((dot, index) => dot.classList.toggle('active', index === targetIndex));
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => moveToSlide(index));
        });
    }

    // --- Pricing Toggle ---
    const toggles = document.querySelectorAll('.pricing-toggle');
    if (toggles.length > 0) {
        const prices = document.querySelectorAll('.plan-price');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggles.forEach(t => t.classList.remove('active'));
                toggle.classList.add('active');
                const period = toggle.dataset.period;
                prices.forEach(priceEl => {
                    priceEl.textContent = priceEl.dataset[`price-${period}`];
                });
            });
        });
    }
});