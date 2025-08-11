 document.addEventListener('DOMContentLoaded', () => {
            // Process Assessment Form
            const assessmentForm = document.getElementById('assessmentForm');
            const assessmentResult = document.getElementById('assessmentResult');
            const scoreValue = document.getElementById('scoreValue');
            const scoreCircle = document.getElementById('scoreCircle');
            const recommendationList = document.getElementById('recommendationList');
            
            assessmentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Calculate score based on form inputs
                const documentation = parseInt(document.getElementById('process-documentation').value);
                const measurement = parseInt(document.getElementById('process-measurement').value);
                const automation = parseInt(document.getElementById('automation-level').value);
                const improvement = parseInt(document.getElementById('continuous-improvement').value);
                
                const totalScore = documentation + measurement + automation + improvement;
                const maxScore = 20;
                const percentage = Math.round((totalScore / maxScore) * 100);
                
                // Display score
                scoreValue.textContent = percentage;
                
                // Set score circle class based on percentage
                scoreCircle.className = 'score-circle';
                if (percentage >= 80) {
                    scoreCircle.classList.add('score-excellent');
                } else if (percentage >= 60) {
                    scoreCircle.classList.add('score-good');
                } else if (percentage >= 40) {
                    scoreCircle.classList.add('score-average');
                } else {
                    scoreCircle.classList.add('score-poor');
                }
                
                // Generate recommendations based on score
                let recommendations = [];
                
                if (documentation <= 2) {
                    recommendations.push({
                        icon: 'bx-file',
                        text: 'Develop comprehensive process documentation to create consistency and enable training.'
                    });
                }
                
                if (measurement <= 2) {
                    recommendations.push({
                        icon: 'bx-bar-chart',
                        text: 'Implement process performance metrics to identify areas for improvement and track progress.'
                    });
                }
                
                if (automation <= 2) {
                    recommendations.push({
                        icon: 'bx-bot',
                        text: 'Identify opportunities for automation to reduce manual tasks and improve efficiency.'
                    });
                }
                
                if (improvement <= 2) {
                    recommendations.push({
                        icon: 'bx-refresh',
                        text: 'Establish a structured continuous improvement program to drive ongoing optimization.'
                    });
                }
                
                if (percentage >= 80) {
                    recommendations.push({
                        icon: 'bx-star',
                        text: 'Consider advanced process optimization techniques and technologies to further enhance performance.'
                    });
                }
                
                // Display recommendations
                recommendationList.innerHTML = '';
                recommendations.forEach(rec => {
                    const item = document.createElement('div');
                    item.className = 'recommendation-item';
                    item.innerHTML = `
                        <i class='bx ${rec.icon}'></i>
                        <span>${rec.text}</span>
                    `;
                    recommendationList.appendChild(item);
                });
                
                // Show results
                assessmentResult.style.display = 'block';
                
                // Scroll to results
                assessmentResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
            
            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    const isOpen = item.classList.contains('active');
                    
                    // Close all FAQ items
                    faqItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });
                    
                    // Open clicked item if it wasn't open
                    if (!isOpen) {
                        item.classList.add('active');
                    }
                });
            });
            
            // Smooth Scrolling for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>