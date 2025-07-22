  document.addEventListener('DOMContentLoaded', () => {
            const categoryFilters = document.querySelectorAll('.category-filters a');

            categoryFilters.forEach(filter => {
                filter.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent page reload

                    // First, remove .active class from all filters
                    categoryFilters.forEach(f => f.classList.remove('active'));
                    
                    // Then, add .active class to the clicked filter
                    this.classList.add('active');
                    
                    // In a real application, you would add logic here to
                    // fetch and display the posts for the selected category.
                    console.log(`Filtering by: ${this.textContent.split(' ')[0]}`);
                });
            });
        });