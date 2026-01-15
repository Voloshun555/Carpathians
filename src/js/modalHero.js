const openModalHeroBtn = document.querySelector('.btn-hero')
const modalHero = document.querySelector('.modal__hero-backdrop')

function openModalHero () {
    modalHero.classList.remove('is-hidden'); 
}
openModalHeroBtn.addEventListener("click", openModalHero);


