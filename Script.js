// Gestionnaire de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du menu mobile améliorée
const mobileMenu = () => {
    const menu = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const links = document.querySelectorAll('.nav-links a');

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Empêcher le défilement du body quand le menu est ouvert
    menuBtn.addEventListener('click', () => {
        document.body.style.overflow = menu.classList.contains('active') ? 'auto' : 'hidden';
    });

    // Gestion de l'orientation de l'appareil
    window.addEventListener('orientationchange', () => {
        menu.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    });
};

// Initialisation
document.addEventListener('DOMContentLoaded', mobileMenu);
