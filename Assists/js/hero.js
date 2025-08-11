document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    const dotsNav = document.querySelector('.carousel-nav');
    const progressBar = document.querySelector('.progress-bar');
    
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    let autoPlayInterval;

    // Create dots for navigation
    slides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
            moveToSlide(index);
            resetAutoPlay();
        });
        dotsNav.appendChild(dot);
    });
    const dots = Array.from(dotsNav.children);

    const moveToSlide = (targetIndex) => {
        track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
        
        slides[currentIndex].classList.remove('is-selected');
        dots[currentIndex].classList.remove('is-selected');
        
        currentIndex = targetIndex;
        
        slides[currentIndex].classList.add('is-selected');
        dots[currentIndex].classList.add('is-selected');
        
        restartProgressBar();
    };

    const restartProgressBar = () => {
        progressBar.classList.remove('animate');
        // This is a trick to force a CSS reflow, which restarts the animation
        void progressBar.offsetWidth; 
        progressBar.classList.add('animate');
    };

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            moveToSlide(nextIndex);
        }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--carousel-timer')) * 1000);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // Initial setup
    moveToSlide(0);
    startAutoPlay();

    // Recalculate width on resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        // Temporarily disable transition for instant repositioning
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        setTimeout(() => {
            track.style.transition = '';
        }, 50);
    });
});