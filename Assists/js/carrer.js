document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.jobs-nav a');
    const jobItems = document.querySelectorAll('.job-item');

    filters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();

            // Handle active class for filters
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            jobItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

 class InfiniteSlider {
            constructor() {
                this.wrapper = document.getElementById('sliderWrapper');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.indicatorsContainer = document.getElementById('indicators');
                this.speedSlider = document.getElementById('speedSlider');
                this.speedValue = document.getElementById('speedValue');
                
                this.slides = [];
                this.slideWidth = 330; // 300px + 30px margin
                this.currentIndex = 0;
                this.scrollSpeed = 5;
                this.isScrolling = true;
                this.animationId = null;
                this.lastTimestamp = 0;
                this.accumulatedDelta = 0;
                
                this.slideData = [
                    { title: "Mountain Vista", category: "Nature", seed: "mountain1" },
                    { title: "Ocean Waves", category: "Seascape", seed: "ocean1" },
                    { title: "Forest Path", category: "Wilderness", seed: "forest1" },
                    { title: "City Lights", category: "Urban", seed: "city1" },
                    { title: "Desert Dunes", category: "Landscape", seed: "desert1" },
                    { title: "Northern Lights", category: "Aurora", seed: "aurora1" },
                    { title: "Tropical Beach", category: "Paradise", seed: "beach1" },
                    { title: "Snowy Peaks", category: "Winter", seed: "snow1" },
                    { title: "Autumn Colors", category: "Seasons", seed: "autumn1" },
                    { title: "Starry Night", category: "Cosmos", seed: "stars1" }
                ];
                
                this.init();
            }
            
            init() {
                this.createSlides();
                this.createIndicators();
                this.setupEventListeners();
                this.startAutoScroll();
            }
            
            createSlides() {
                // Create enough slides to fill the viewport and beyond
                const slidesNeeded = Math.ceil(window.innerWidth / this.slideWidth) + 5;
                
                for (let i = 0; i < slidesNeeded; i++) {
                    const slideData = this.slideData[i % this.slideData.length];
                    const slide = this.createSlide(slideData, i);
                    this.wrapper.appendChild(slide);
                    this.slides.push(slide);
                }
            }
            
            createSlide(data, index) {
                const slide = document.createElement('div');
                slide.className = 'slide';
                slide.innerHTML = `
                    <img src="https://picsum.photos/seed/${data.seed}/300/400.jpg" alt="${data.title}">
                    <div class="slide-overlay">
                        <h3 class="slide-title">${data.title}</h3>
                        <p class="slide-category">${data.category}</p>
                    </div>
                `;
                
                slide.addEventListener('click', () => {
                    this.pauseAutoScroll();
                    // Add your click handler here
                    console.log(`Clicked on ${data.title}`);
                });
                
                return slide;
            }
            
            createIndicators() {
                for (let i = 0; i < this.slideData.length; i++) {
                    const indicator = document.createElement('div');
                    indicator.className = 'indicator';
                    if (i === 0) indicator.classList.add('active');
                    indicator.addEventListener('click', () => this.goToSlide(i));
                    this.indicatorsContainer.appendChild(indicator);
                }
            }
            
            setupEventListeners() {
                this.prevBtn.addEventListener('click', () => this.scrollPrev());
                this.nextBtn.addEventListener('click', () => this.scrollNext());
                
                this.speedSlider.addEventListener('input', (e) => {
                    this.scrollSpeed = parseInt(e.target.value);
                    this.speedValue.textContent = this.scrollSpeed;
                });
                
                // Pause on hover
                this.wrapper.addEventListener('mouseenter', () => this.pauseAutoScroll());
                this.wrapper.addEventListener('mouseleave', () => this.startAutoScroll());
                
                // Touch support
                let touchStartX = 0;
                let touchEndX = 0;
                
                this.wrapper.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                    this.pauseAutoScroll();
                });
                
                this.wrapper.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe(touchStartX, touchEndX);
                    this.startAutoScroll();
                });
                
                // Window resize
                window.addEventListener('resize', () => {
                    this.handleResize();
                });
            }
            
            handleSwipe(startX, endX) {
                if (endX < startX - 50) {
                    this.scrollNext();
                }
                if (endX > startX + 50) {
                    this.scrollPrev();
                }
            }
            
            handleResize() {
                // Recalculate slide width based on new window size
                this.slideWidth = this.slides[0].offsetWidth + 30;
            }
            
            startAutoScroll() {
                this.isScrolling = true;
                this.lastTimestamp = performance.now();
                this.animate();
            }
            
            pauseAutoScroll() {
                this.isScrolling = false;
                if (this.animationId) {
                    cancelAnimationFrame(this.animationId);
                }
            }
            
            animate(timestamp = 0) {
                if (!this.isScrolling) return;
                
                const deltaTime = timestamp - this.lastTimestamp;
                this.lastTimestamp = timestamp;
                
                // Calculate movement based on time and speed
                this.accumulatedDelta += (this.scrollSpeed * deltaTime) / 16;
                
                if (this.accumulatedDelta >= 1) {
                    const pixelsToMove = Math.floor(this.accumulatedDelta);
                    this.accumulatedDelta -= pixelsToMove;
                    
                    this.currentIndex += pixelsToMove;
                    this.updateSliderPosition();
                }
                
                this.animationId = requestAnimationFrame((ts) => this.animate(ts));
            }
            
            updateSliderPosition() {
                // Move slides that have gone off-screen to the end
                while (this.currentIndex >= this.slideWidth) {
                    this.currentIndex -= this.slideWidth;
                    const firstSlide = this.slides.shift();
                    this.wrapper.appendChild(firstSlide);
                    this.slides.push(firstSlide);
                }
                
                this.wrapper.style.transform = `translateX(-${this.currentIndex}px)`;
                this.updateIndicators();
            }
            
            scrollNext() {
                this.currentIndex += this.slideWidth;
                this.updateSliderPosition();
            }
            
            scrollPrev() {
                // Move last slide to beginning
                const lastSlide = this.slides.pop();
                this.wrapper.insertBefore(lastSlide, this.wrapper.firstChild);
                this.slides.unshift(lastSlide);
                
                this.currentIndex -= this.slideWidth;
                this.updateSliderPosition();
            }
            
            goToSlide(index) {
                // Calculate how many slides to move
                const currentDataIndex = Math.floor(this.currentIndex / this.slideWidth) % this.slideData.length;
                const slidesToMove = (index - currentDataIndex + this.slideData.length) % this.slideData.length;
                
                this.currentIndex += slidesToMove * this.slideWidth;
                this.updateSliderPosition();
            }
            
            updateIndicators() {
                const currentDataIndex = Math.floor(this.currentIndex / this.slideWidth) % this.slideData.length;
                const indicators = this.indicatorsContainer.children;
                
                for (let i = 0; i < indicators.length; i++) {
                    indicators[i].classList.toggle('active', i === currentDataIndex);
                }
            }
        }
        
        // Initialize the slider when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new InfiniteSlider();
        });

        