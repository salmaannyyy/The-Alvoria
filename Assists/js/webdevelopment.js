document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            // Optional: Close other open items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = '0';
                }
            });

            // Toggle the clicked item
            accordionItem.classList.toggle('active');
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = '0';
            }
        });
    });
    
    // Open the first FAQ by default
    const firstFaqItem = document.querySelector('.accordion-item');
    if(firstFaqItem) {
        firstFaqItem.classList.add('active');
        firstFaqItem.querySelector('.accordion-content').style.maxHeight = firstFaqItem.querySelector('.accordion-content').scrollHeight + 'px';
    }
});