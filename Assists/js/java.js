 
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = menuToggle.querySelector('i');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (menuIcon.classList.contains('bx-menu')) {
                menuIcon.classList.replace('bx-menu', 'bx-x');
            } else {
                menuIcon.classList.replace('bx-x', 'bx-menu');
            }
            document.body.classList.toggle('mobile-menu-open');
        });

        document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.hero-slider-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.nav-arrow.next');
    const prevButton = document.querySelector('.nav-arrow.prev');

    let currentIndex = 0;
    const numSlides = slides.length;

    const goToSlide = (index) => {
        // Move the track
        track.style.transform = `translateX(-${index * (100 / numSlides)}%)`;

        // Handle active class for text animations
        slides.forEach((slide, i) => {
            slide.classList.toggle('active-slide', i === index);
        });
        
        currentIndex = index;
        updateNavButtons();
    };
    
    const updateNavButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === numSlides - 1;
    };

    // Event Listeners
    nextButton.addEventListener('click', () => {
        if (currentIndex < numSlides - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });

    // Initial setup
    goToSlide(0);
});