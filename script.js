AOS.init({ duration: 800 });

// Dark Mode
document.getElementById('darkToggle').onclick = () => {
    document.documentElement.classList.toggle('light-mode');
};

// Mobile Menu
document.getElementById('hamburger').onclick = () => {
    document.getElementById('nav-menu').classList.toggle('active');
};

// Active Page
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
});

// Navbar Scroll Effect
window.onscroll = () => {
    document.querySelector('.navbar').style.background = window.scrollY > 50 
        ? 'rgba(255,255,255,0.95)' 
        : 'rgba(255,255,255,0.1)';
};