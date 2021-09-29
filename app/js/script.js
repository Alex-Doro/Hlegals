function switchActiveCarouselTitle() {
    const carouselTitleParent = document.querySelector('.carousel__slide__title--hero-desktop').parentElement

    carouselTitleParent.addEventListener('click', (e) => {
        for (let item of carouselTitleParent.children) {
            if (item.classList.contains('active')) item.classList.toggle('active')
        }
        if (e.target.classList.contains('carousel__slide__title')) e.target.classList.toggle('active')
    })
}

switchActiveCarouselTitle()