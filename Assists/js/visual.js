 document.addEventListener('DOMContentLoaded', () => {
            // Visual Identity Assessment Form
            const assessmentForm = document.getElementById('assessmentForm');
            const assessmentResult = document.getElementById('assessmentResult');
            const scoreValue = document.getElementById('scoreValue');
            const scoreCircle = document.getElementById('scoreCircle');
            const recommendationList = document.getElementById('recommendationList');
            
            assessmentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Calculate score based on form inputs
                const logoQuality = parseInt(document.getElementById('logo-quality').value);
                const colorConsistency = parseInt(document.getElementById('color-consistency').value);
                const typographyCohesion = parseInt(document.getElementById('typography-cohesion').value);
                const brandGuidelines = parseInt(document.getElementById('brand-guidelines').value);
                const visualDifferentiation = parseInt(document.getElementById('visual-differentiation').value);
                
                const totalScore = logoQuality + colorConsistency + typographyCohesion + brandGuidelines + visualDifferentiation;
                const maxScore = 25;
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
                
                if (logoQuality <= 2) {
                    recommendations.push({
                        icon: 'bx-shape',
                        text: 'Consider updating your logo to better reflect your current brand values and market position.'
                    });
                }
                
                if (colorConsistency <= 2) {
                    recommendations.push({
                        icon: 'bx-palette',
                        text: 'Develop a consistent color palette and guidelines to ensure uniform application across all materials.'
                    });
                }
                
                if (typographyCohesion <= 2) {
                    recommendations.push({
                        icon: 'bx-font',
                        text: 'Establish a cohesive typography system to improve readability and brand recognition.'
                    });
                }
                
                if (brandGuidelines <= 2) {
                    recommendations.push({
                        icon: 'bx-book',
                        text: 'Create comprehensive brand guidelines to ensure consistency and guide future design decisions.'
                    });
                }
                
                if (visualDifferentiation <= 2) {
                    recommendations.push({
                        icon: 'bx-diamond',
                        text: 'Explore ways to differentiate your visual identity from competitors while maintaining relevance.'
                    });
                }
                
                if (percentage >= 80) {
                    recommendations.push({
                        icon: 'bx-star',
                        text: 'Your visual identity is strong! Focus on maintaining consistency and exploring new applications.'
                    });
                } else if (percentage >= 60) {
                    recommendations.push({
                        icon: 'bx-up-arrow-alt',
                        text: 'Your visual identity shows good potential. Targeted improvements can significantly strengthen your brand.'
                    });
                } else if (percentage >= 40) {
                    recommendations.push({
                        icon: 'bx-wrench',
                        text: 'Your visual identity would benefit from strategic improvements in key areas.'
                    });
                } else {
                    recommendations.push({
                        icon: 'bx-error',
                        text: 'Your visual identity needs significant attention. A comprehensive redesign is recommended.'
                    });
                }
                
                // Always include this recommendation
                recommendations.push({
                    icon: 'bx-phone',
                    text: 'Schedule a consultation with our visual identity experts to discuss personalized recommendations.'
                });
                
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
    