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