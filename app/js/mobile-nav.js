function toggleMobileMenu() {
    const triggerButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-nav__container');

    triggerButton.addEventListener('click', () => {
        menu.setAttribute('style', 'pointer-events: auto; opacity: 1');
    })

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('mobile-nav__container') || 
            e.target.classList.contains('mobile-nav__close-btn')) {
            menu.setAttribute('style', 'pointer-events: none; opacity: 0');
        }
    })
}

toggleMobileMenu();