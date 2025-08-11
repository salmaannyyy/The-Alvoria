  
        document.addEventListener('DOMContentLoaded', () => {
    // --- NAVBAR SCRIPT ---
    const navData = { 
        "Services": { 
            type: 'mega', 
            columns: [ 
                { 
                    "Development": [
                        { text: "Web Development", href: "webDevelopment.html" }, 
                        { text: "Mobile Applications", href: "Mobileapplication.html" }
                    ] 
                }, 
                { 
                    "Data & AI Consulting": [
                        { text: "Data Strategy", href: "dataStrategy.html" }, 
                        { text: "AI Integration", href: "aiIntegration.html" }, 
                        { text: "Process Optimization", href: "processOptimze.html" }
                    ] 
                }, 
                { 
                    "Branding & Design": [
                        { text: "UI/UX Design", href: "uiux.html" }, 
                        { text: "Brand Strategy", href: "branding.html" }, 
                        { text: "Visual Identity", href: "visualidentity.html" }
                    ] 
                }, 
                { 
                    "Marketing Solutions": [
                        { text: "Social Media Marketing", href: "socialMediamarketing.html" }, 
                        { text: "SEO", href: "SEO.html" }, 
                        { text: "Growth Consulting", href: "growthconsulation.html" }
                    ]
                },
                { 
                    "Brand Consulting": [
                        { text: "Rebranding", href: "rebranding.html" }, 
                        { text: "Storytelling", href: "storytelling.html" }, 
                        { text: "Market Fit", href: "marketfit.html" }
                    ]
                }
            ] 
        }, 
        "Industries": { 
            type: 'simple', 
            items: [
                { text: "Startups", href: "startup.html" }, 
                { text: "SMEs / Businesses", href: "business.html" },
                { text: "Healthcare", href: "healthcare.html" },
                { text: "E-commerce", href: "e-commerce.html" },
                { text: "Wellness / Lifestyle", href: "lifestyle.html" },
                { text: "Tech / SaaS", href: "tech.html" }
            ] 
        }, 
        "Insights": { 
            type: 'simple', 
            items: [
                { text: "Blog", href: "blogs.html" }, 
                { text: "Case Studies", href: "casestudies.html" },
                { text: "Industry Trends", href: "industrytrends.html" },
                { text: "Founder's Voice", href: "founders.html" }
            ] 
        }, 
        "About Us": { 
            type: 'simple', 
            items: [
                // { text: "Our Story", href: "ourstory.html" }, 
                { text: "Vision & Mission", href: "vision.html" },
                // { text: "The Team", href: "Team.html" }
            ] 
        }, 
        "Careers": { type: 'link', href: "carrer.html" } 
    };
    
    const header = document.querySelector('.header'); 
    const navLinksDesktop = header.querySelector('.nav-links'); 
    const mobileMenuPanel = header.querySelector('.mobile-menu-panel'); 
    const mobilePanelContainer = mobileMenuPanel.querySelector('.panel-container'); 
    const mobileMainMenuUl = document.createElement('ul'); 
    mobileMenuPanel.querySelector('.mobile-main-menu').appendChild(mobileMainMenuUl);
    
    Object.entries(navData).forEach(([title, data], index) => { 
        const navItem = navLinksDesktop.querySelector(`.nav-item:nth-child(${index + 1})`); 
        if (!navItem) return; 
        const dropdownMenu = navItem.querySelector('.dropdown-menu'); 
        const mobileLi = document.createElement('li'); 
        const mobileLink = document.createElement('a'); 
        mobileLink.href = data.href || "#"; 
        mobileLink.textContent = title; 
        if(data.type !== 'link') { 
            mobileLink.innerHTML += "<i class='bx bx-chevron-right'></i>"; 
            mobileLink.dataset.targetPanel = `${title.replace(/\s+/g, '-')}-panel`; 
        } else { 
            mobileLink.classList.add('final-nav-link'); 
        } 
        mobileLi.appendChild(mobileLink); 
        mobileMainMenuUl.appendChild(mobileLi); 
        
        if (data.type === 'mega') { 
            data.columns.forEach(colData => { 
                const colDiv = document.createElement('div'); 
                colDiv.className = 'mega-menu-column'; 
                Object.entries(colData).forEach(([heading, links]) => { 
                    const h4 = document.createElement('h4'); 
                    h4.textContent = heading; 
                    colDiv.appendChild(h4); 
                    const ul = document.createElement('ul'); 
                    links.forEach(link => ul.innerHTML += `<li class="dropdown-item"><a href="${link.href}">${link.text}</a></li>`); 
                    colDiv.appendChild(ul); 
                }); 
                dropdownMenu.appendChild(colDiv); 
            }); 
            createMobileSubPanel(title, data); 
        } else if (data.type === 'simple') { 
            data.items.forEach(item => dropdownMenu.innerHTML += `<li class="dropdown-item"><a href="${item.href}">${item.text}</a></li>`); 
            createMobileSubPanel(title, data); 
        } 
    });
    
    function createMobileSubPanel(title, data) { 
        const panelId = `${title.replace(/\s+/g, '-')}-panel`; 
        const subPanel = document.createElement('div'); 
        subPanel.id = panelId; 
        subPanel.className = 'mobile-sub-panel'; 
        let contentHtml = `<div class="panel-content"><div class="mobile-sub-panel-header"><button class="mobile-menu-back"><i class='bx bx-chevron-left'></i></button><h3 class="mobile-sub-panel-title">${title}</h3></div><div class="mobile-sub-panel-content">`; 
        
        if (data.type === 'mega') { 
            data.columns.forEach(colData => { 
                Object.entries(colData).forEach(([heading, links]) => { 
                    contentHtml += `<h4>${heading}</h4><ul>`; 
                    links.forEach(link => contentHtml += `<li><a href="${link.href}" class="final-nav-link">${link.text}</a></li>`); 
                    contentHtml += `</ul>`; 
                }); 
            }); 
        } else { 
            contentHtml += '<ul>'; 
            data.items.forEach(item => contentHtml += `<li><a href="${item.href}" class="final-nav-link">${item.text}</a></li>`); 
            contentHtml += '</ul>'; 
        } 
        contentHtml += `</div></div>`; 
        subPanel.innerHTML = contentHtml; 
        mobilePanelContainer.appendChild(subPanel); 
    }
    
    const menuToggle = document.querySelector('.mobile-menu-toggle'); 
    const menuToggleIcon = menuToggle.querySelector('i'); 
    const closeMenu = () => { 
        mobileMenuPanel.classList.remove('active'); 
        document.querySelectorAll('.mobile-sub-panel.active').forEach(p => p.classList.remove('active')); 
        document.body.classList.remove('no-scroll'); 
        menuToggleIcon.classList.replace('bx-x', 'bx-menu'); 
    };
    
    menuToggle.addEventListener('click', () => { 
        if (mobileMenuPanel.classList.contains('active')) { 
            closeMenu(); 
        } else { 
            mobileMenuPanel.classList.add('active'); 
            document.body.classList.add('no-scroll'); 
            menuToggleIcon.classList.replace('bx-menu', 'bx-x'); 
        } 
    });
    
    document.querySelectorAll('[data-target-panel]').forEach(link => { 
        link.addEventListener('click', e => { 
            e.preventDefault(); 
            document.getElementById(link.dataset.targetPanel).classList.add('active'); 
        }); 
    });
    
    document.querySelectorAll('.mobile-menu-back').forEach(button => { 
        button.addEventListener('click', e => { 
            e.preventDefault(); 
            button.closest('.mobile-sub-panel').classList.remove('active'); 
        }); 
    });
    
    document.querySelectorAll('.final-nav-link').forEach(link => { 
        link.addEventListener('click', () => { 
            closeMenu(); 
        }); 
    });
   
    // --- CAROUSEL SCRIPT ---
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track'); 
        const slides = Array.from(track.children); 
        const nextButton = carousel.querySelector('.carousel-btn.next'); 
        const prevButton = carousel.querySelector('.carousel-btn.prev'); 
        const progressBar = carousel.querySelector('.progress-bar'); 
        const slideCounter = carousel.querySelector('.slide-counter'); 
        let currentIndex = 0;
        
        const moveToSlide = (targetIndex) => { 
            const slideWidth = slides[0].getBoundingClientRect().width; 
            track.style.transform = `translateX(-${slideWidth * targetIndex}px)`; 
            slides[currentIndex].classList.remove('is-selected'); 
            slides[targetIndex].classList.add('is-selected'); 
            currentIndex = targetIndex; 
            updateControls(); 
        };
        
        const updateControls = () => { 
            progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`; 
            slideCounter.textContent = `${currentIndex + 1} / ${slides.length}`; 
            prevButton.disabled = currentIndex === 0; 
            nextButton.disabled = currentIndex === slides.length - 1; 
        };
        
        if (slides.length > 0) { 
            slides[0].classList.add('is-selected'); 
            updateControls(); 
        }
        
        nextButton.addEventListener('click', () => { 
            if (currentIndex < slides.length - 1) moveToSlide(currentIndex + 1); 
        });
        
        prevButton.addEventListener('click', () => { 
            if (currentIndex > 0) moveToSlide(currentIndex - 1); 
        });
        
        window.addEventListener('resize', () => { 
            if (slides.length > 0) { 
                const newWidth = slides[0].getBoundingClientRect().width; 
                track.style.transition = 'none'; 
                track.style.transform = `translateX(-${newWidth * currentIndex}px)`; 
                setTimeout(() => { 
                    track.style.transition = ''; 
                }, 50); 
            } 
        });
    }
});

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



        


        