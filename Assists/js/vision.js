document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.filter-link');
    const jobItems = document.querySelectorAll('.job-item');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Update active state on links
            filterLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-filter');

            // Show or hide job items based on category
            jobItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (selectedCategory === 'all' || selectedCategory === itemCategory) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});