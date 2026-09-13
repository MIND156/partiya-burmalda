// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});
links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('active'));
});

// Advantages scroll reveal
const advCards = document.querySelectorAll('.adv-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
advCards.forEach(card => observer.observe(card));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
