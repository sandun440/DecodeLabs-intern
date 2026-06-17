
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const signUpBtn = document.getElementById('sign-up-btn');
    const modal = document.getElementById('signup-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Sign up modal
    signUpBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submission
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("🎉 Thank you! You've been added to the DecodeLabs journey.");
        modal.style.display = 'none';
        form.reset();
    });
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    console.log('%c✅ DecodeCraft Responsive Interface Loaded Successfully!', 'color: #A59B6F; font-size: 14px; font-weight: 600;');
});