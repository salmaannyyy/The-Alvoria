document.addEventListener('DOMContentLoaded', () => {
    // --- Testimonial Slider ---
    const track = document.querySelector('.testimonial-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.slider-arrow.next');
        const prevButton = document.querySelector('.slider-arrow.prev');
        let slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        const moveToSlide = (targetIndex) => {
            track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
            currentIndex = targetIndex;
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === slides.length - 1;
        };

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
        });
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) moveToSlide(currentIndex - 1);
        });

        window.addEventListener('resize', () => {
            slideWidth = slides[0].getBoundingClientRect().width;
            moveToSlide(currentIndex);
        });
        
        moveToSlide(0); // Initialize
    }

    // --- FAQ Accordion ---
    const accordionItems = document.querySelectorAll('.faq-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.textContent = '−';
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                    icon.textContent = '+';
                }
            });
        });
    }
});