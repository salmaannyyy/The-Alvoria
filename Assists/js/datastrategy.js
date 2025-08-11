 document.addEventListener('DOMContentLoaded', () => {
            // Data Maturity Assessment Form
            const assessmentForm = document.getElementById('assessmentForm');
            const assessmentResult = document.getElementById('assessmentResult');
            const maturityLevel = document.getElementById('maturityLevel');
            const maturityText = document.getElementById('maturityText');
            const recommendationList = document.getElementById('recommendationList');
            const maturityLevels = document.querySelectorAll('.maturity-level');
            
            assessmentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Calculate score based on form inputs
                const culture = parseInt(document.getElementById('data-culture').value);
                const quality = parseInt(document.getElementById('data-quality').value);
                const governance = parseInt(document.getElementById('data-governance').value);
                const technology = parseInt(document.getElementById('data-technology').value);
                const skills = parseInt(document.getElementById('data-skills').value);
                
                const totalScore = culture + quality + governance + technology + skills;
                const avgScore = totalScore / 5;
                const maturityLevelValue = Math.round(avgScore);
                
                // Update maturity level indicator
                maturityLevels.forEach(level => {
                    level.classList.remove('active');
                    if (parseInt(level.dataset.level) <= maturityLevelValue) {
                        level.classList.add('active');
                    }
                });
                
                // Set maturity level description
                const maturityDescriptions = {
                    1: {
                        title: "Aware",
                        description: "Your organization is in the early stages of its data journey. You recognize the value of data but lack formal processes and capabilities. Data is used inconsistently, and there are significant opportunities for improvement."
                    },
                    2: {
                        title: "Developing",
                        description: "Your organization is beginning to establish data management practices. Some data initiatives are underway, but they are often siloed and lack coordination. You're building foundational capabilities but need more structure and governance."
                    },
                    3: {
                        title: "Defined",
                        description: "Your organization has established data management practices and governance. Data is consistently used in decision-making, and there are clear processes for data quality and management. You have a solid foundation but opportunities exist to optimize and scale."
                    },
                    4: {
                        title: "Managed",
                        description: "Your organization has mature data management practices with strong governance. Data is integrated into business processes, and there are metrics to measure performance. You're effectively leveraging data but can further optimize for innovation and competitive advantage."
                    },
                    5: {
                        title: "Optimized",
                        description: "Your organization is a leader in data-driven practices. Data is a strategic asset with advanced governance, analytics, and capabilities. You continuously innovate and optimize your data practices to maintain competitive advantage."
                    }
                };
                
                const description = maturityDescriptions[maturityLevelValue];
                maturityLevel.textContent = description.title;
                maturityText.textContent = description.description;
                
                // Generate recommendations based on maturity level
                let recommendations = [];
                
                if (maturityLevelValue <= 2) {
                    recommendations.push({
                        icon: 'bx-book',
                        text: 'Establish a data governance framework with clear policies, roles, and responsibilities.'
                    });
                    recommendations.push({
                        icon: 'bx-bar-chart',
                        text: 'Implement basic data quality measures to improve the reliability of your data.'
                    });
                    recommendations.push({
                        icon: 'bx-user-graduate',
                        text: 'Invest in data literacy training to build foundational skills across your organization.'
                    });
                }
                
                if (maturityLevelValue === 3) {
                    recommendations.push({
                        icon: 'bx-cog',
                        text: 'Enhance your data architecture to better integrate systems and improve data flow.'
                    });
                    recommendations.push({
                        icon: 'bx-line-chart',
                        text: 'Develop more advanced analytics capabilities to derive deeper insights from your data.'
                    });
                    recommendations.push({
                        icon: 'bx-sync',
                        text: 'Implement continuous improvement processes for ongoing data management optimization.'
                    });
                }
                
                if (maturityLevelValue >= 4) {
                    recommendations.push({
                        icon: 'bx-brain',
                        text: 'Explore advanced analytics and AI/ML capabilities to gain competitive insights.'
                    });
                    recommendations.push({
                        icon: 'bx-bulb',
                        text: 'Foster a culture of innovation to identify new opportunities for data-driven value creation.'
                    });
                    recommendations.push({
                        icon: 'bx-trending-up',
                        text: 'Continuously measure and optimize the business impact of your data initiatives.'
                    });
                }
                
                // Always include this recommendation
                recommendations.push({
                    icon: 'bx-map',
                    text: 'Develop a strategic roadmap to advance your data maturity and align with business objectives.'
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
    