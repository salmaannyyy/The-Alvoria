document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Optional: close other items
                // accordionItems.forEach(otherItem => {
                //     otherItem.classList.remove('active');
                //     otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                // });

                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
        });
    }
});