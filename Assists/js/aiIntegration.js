  document.addEventListener('DOMContentLoaded', () => {
            // Demo Tabs Functionality
            const demoTabs = document.querySelectorAll('.demo-tab');
            const demoPanels = document.querySelectorAll('.demo-panel');
            
            demoTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.dataset.tab;
                    
                    // Remove active class from all tabs and panels
                    demoTabs.forEach(t => t.classList.remove('active'));
                    demoPanels.forEach(p => p.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding panel
                    tab.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Chatbot Demo
            const chatInput = document.getElementById('chat-input');
            const sendBtn = document.getElementById('send-btn');
            const chatMessages = document.querySelector('.chat-messages');
            
            function addChatMessage(message, isUser = false) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('chat-message');
                if (isUser) {
                    messageDiv.classList.add('user');
                } else {
                    messageDiv.classList.add('ai');
                }
                
                const bubble = document.createElement('div');
                bubble.classList.add('message-bubble');
                bubble.textContent = message;
                
                messageDiv.appendChild(bubble);
                chatMessages.appendChild(messageDiv);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            function handleChatSubmit() {
                const message = chatInput.value.trim();
                if (message) {
                    addChatMessage(message, true);
                    chatInput.value = '';
                    
                    // Simulate AI response
                    setTimeout(() => {
                        const responses = [
                            "That's a great question! Our AI solutions are designed to be flexible and scalable to meet your specific needs.",
                            "I understand your concern. Our team works closely with clients to ensure seamless integration with minimal disruption.",
                            "Thank you for your interest! We offer a range of AI services that can be customized to your business requirements.",
                            "That's a common challenge. Our AI solutions are specifically designed to address issues like this in your industry."
                        ];
                        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                        addChatMessage(randomResponse);
                    }, 1000);
                }
            }
            
            sendBtn.addEventListener('click', handleChatSubmit);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleChatSubmit();
                }
            });
            
            // Sentiment Analysis Demo
            const sentimentText = document.getElementById('sentiment-text');
            const analyzeBtn = document.getElementById('analyze-btn');
            const sentimentResult = document.getElementById('sentiment-result');
            const sentimentOutput = document.getElementById('sentiment-output');
            
            analyzeBtn.addEventListener('click', () => {
                const text = sentimentText.value.trim();
                if (text) {
                    // Simulate sentiment analysis
                    const sentiments = [
                        { sentiment: 'Positive', confidence: '92%', description: 'The text expresses a positive outlook with optimistic language.' },
                        { sentiment: 'Neutral', confidence: '78%', description: 'The text appears to be factual without strong emotional indicators.' },
                        { sentiment: 'Negative', confidence: '85%', description: 'The text contains language that suggests dissatisfaction or concern.' }
                    ];
                    
                    const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
                    
                    sentimentOutput.innerHTML = `
                        <strong>Sentiment:</strong> ${randomSentiment.sentiment}<br>
                        <strong>Confidence:</strong> ${randomSentiment.confidence}<br>
                        <strong>Analysis:</strong> ${randomSentiment.description}
                    `;
                    
                    sentimentResult.style.display = 'block';
                }
            });
            
            // Recommendation Engine Demo
            const categorySelect = document.getElementById('category-select');
            const priceSelect = document.getElementById('price-select');
            const recommendBtn = document.getElementById('recommend-btn');
            const recommendationResult = document.getElementById('recommendation-result');
            const recommendationList = document.getElementById('recommendation-list');
            
            const products = {
                electronics: {
                    low: [
                        { name: 'Wireless Earbuds', price: '$39.99', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Phone Case', price: '$19.99', image: 'https://images.unsplash.com/photo-1596461404565-925ebc77b44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'USB Cable', price: '$12.99', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    medium: [
                        { name: 'Smart Watch', price: '$129.99', image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Bluetooth Speaker', price: '$79.99', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Tablet', price: '$199.99', image: 'https://images.unsplash.com/photo-1561154464-43e9d964ba46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    high: [
                        { name: 'Laptop', price: '$899.99', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Smartphone', price: '$699.99', image: 'https://images.unsplash.com/photo-1580917411433-473c47b536b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: '4K Monitor', price: '$349.99', image: 'https://images.unsplash.com/photo-1527443224154-8a3741e636b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ]
                },
                clothing: {
                    low: [
                        { name: 'T-Shirt', price: '$24.99', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Socks', price: '$9.99', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Cap', price: '$19.99', image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cb533?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    medium: [
                        { name: 'Jeans', price: '$59.99', image: 'https://images.unsplash.com/photo-1542271021-7eec08c54325?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Sweater', price: '$49.99', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Dress', price: '$79.99', image: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    high: [
                        { name: 'Winter Jacket', price: '$249.99', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Leather Boots', price: '$189.99', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Designer Handbag', price: '$299.99', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ]
                },
                books: {
                    low: [
                        { name: 'Fiction Novel', price: '$14.99', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Cookbook', price: '$19.99', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Children\'s Book', price: '$12.99', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    medium: [
                        { name: 'Business Book', price: '$24.99', image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Science Textbook', price: '$89.99', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Art Book', price: '$49.99', image: 'https://images.unsplash.com/photo-1621768216002-5f1719ce2a19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    high: [
                        { name: 'Collector\'s Edition', price: '$149.99', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Signed First Edition', price: '$299.99', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Rare Book Set', price: '$499.99', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ]
                },
                home: {
                    low: [
                        { name: 'Decorative Vase', price: '$24.99', image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Throw Pillow', price: '$19.99', image: 'https://images.unsplash.com/photo-1584232182234-0d9fa8c0d6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Picture Frame', price: '$14.99', image: 'https://images.unsplash.com/photo-1584232182234-0d9fa8c0d6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    medium: [
                        { name: 'Table Lamp', price: '$59.99', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Wall Art', price: '$79.99', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Plant Pot', price: '$39.99', image: 'https://images.unsplash.com/photo-1485955900006-10f4d9d674ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ],
                    high: [
                        { name: 'Dining Table', price: '$599.99', image: 'https://images.unsplash.com/photo-1576022750601-2a9c2d89f572?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Sofa', price: '$899.99', image: 'https://images.unsplash.com/photo-1555041469-a406c73e3c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                        { name: 'Area Rug', price: '$349.99', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91e20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                    ]
                }
            };
            
            recommendBtn.addEventListener('click', () => {
                const category = categorySelect.value;
                const priceRange = priceSelect.value;
                
                const selectedProducts = products[category][priceRange];
                
                recommendationList.innerHTML = '';
                
                selectedProducts.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.style.border = '1px solid var(--color-border)';
                    productCard.style.borderRadius = '8px';
                    productCard.style.overflow = 'hidden';
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 150px; object-fit: cover;">
                        <div style="padding: 1rem;">
                            <h4 style="margin-bottom: 0.5rem;">${product.name}</h4>
                            <p style="font-weight: 600; color: var(--color-accent);">${product.price}</p>
                        </div>
                    `;
                    recommendationList.appendChild(productCard);
                });
                
                recommendationResult.style.display = 'block';
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