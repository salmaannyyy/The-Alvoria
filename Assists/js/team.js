
      document.addEventListener('DOMContentLoaded', () => {
    const memberData = {
        michael: {
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
            bio: `<ul>
                    <li>Product Manager with a passion for user-centric design and agile methodologies.</li>
                    <li>Led the development of three major platform releases, resulting in a 40% increase in user engagement.</li>
                    <li>Experienced in market research, product roadmapping, and cross-functional team leadership.</li>
                  </ul>`
        },
        olga: {
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop',
            bio: `<ul>
                    <li>Lead UX/UI Designer with over 8 years of experience in creating intuitive and beautiful digital products.</li>
                    <li>Specializes in SaaS and mobile applications, focusing on creating seamless user journeys.</li>
                    <li>Proficient in Figma, Sketch, and Adobe Creative Suite, with a strong understanding of front-end development principles.</li>
                  </ul>`
        },
        george: {
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop',
            bio: `<ul>
                    <li>PR and Communications expert with background in web3, gaming and esports. Delivered dozens of media campaigns for brands such as Cloudbet and CSMONEY.</li>
                    <li>Co-authored research papers on Women in Esports and Professional Skin Trading at DICORP.</li>
                    <li>George brings a wealth of experience in his industries and helps clients transform these insights into actionable long-term PR plans.</li>
                  </ul>`
        }
    };

    const selectors = document.querySelectorAll('.member-selectors button');
    const photoElement = document.getElementById('member-photo-img');
    const bioElement = document.getElementById('member-bio-content');

    function updateSpotlight(memberName) {
        const data = memberData[memberName];
        if (!data) return;

        // Add fading class to trigger animation
        photoElement.classList.add('fading');
        bioElement.classList.add('fading');

        setTimeout(() => {
            // Update the content after the fade-out
            photoElement.src = data.photo;
            bioElement.innerHTML = data.bio;

            // Remove fading class to trigger fade-in
            photoElement.classList.remove('fading');
            bioElement.classList.remove('fading');
        }, 300); // This duration should match the CSS transition duration
    }

    selectors.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state on buttons
            selectors.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update the content
            const memberName = button.dataset.member;
            updateSpotlight(memberName);
        });
    });

    // Initialize with the default active member
    const initialMember = document.querySelector('.member-selectors button.active').dataset.member;
    updateSpotlight(initialMember);
});
