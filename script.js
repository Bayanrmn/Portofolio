// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Project Modal (you can expand this functionality)
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectTitle = button.parentElement.querySelector('h3').textContent;
        alert(`Anda memilih proyek: ${projectTitle}\n\nFitur detail proyek bisa dikembangkan lebih lanjut.`);
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .project-card, .skill-category, .contact-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.about-content, .project-card, .skill-category, .contact-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation after a short delay
    setTimeout(animateOnScroll, 300);
});

window.addEventListener('scroll', animateOnScroll);

// Add animation to hero text
const heroContent = document.querySelector('.hero-content');
heroContent.style.opacity = '0';
heroContent.style.transform = 'translateY(20px)';
heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

setTimeout(() => {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
}, 500);
