function togglePopup() {
    const triggerButton = document.querySelector('.service-item__btn');
    const popup = document.querySelector('.contacts__popup');

    triggerButton.addEventListener('click', () => {
        popup.setAttribute('style', 'pointer-events: auto; opacity: 1');
    })

    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('contacts__popup') || 
            e.target.classList.contains('contacts__popup__close-btn')) {
            popup.setAttribute('style', 'pointer-events: none; opacity: 0');
        }
    })
}

togglePopup();