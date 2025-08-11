document.addEventListener('DOMContentLoaded', () => {
    // --- Vertical Nav for Consulting Section ---
    const navItems = document.querySelectorAll('.consulting-nav .nav-item button');
    const navDot = document.querySelector('.vertical-nav-dot');
    
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Update button active state
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Move the dot
            navDot.style.top = `${item.offsetTop + item.offsetHeight / 2 - navDot.offsetHeight / 2}px`;
            
            // Show corresponding content
            document.querySelectorAll('.nav-content').forEach(c => c.classList.remove('active'));
            document.getElementById(item.dataset.content).classList.add('active');
        });
        if(item.classList.contains('active')) {
            navDot.style.top = `${item.offsetTop + item.offsetHeight / 2 - navDot.offsetHeight / 2}px`;
        }
    });

    // --- Tabs for Partnership Section ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const target = button.dataset.tab;
            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === `${target}-content`);
            });
        });
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');
            answer.style.maxHeight = isActive ? answer.scrollHeight + 'px' : '0';
        });
    });
});