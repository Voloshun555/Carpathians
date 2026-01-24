const openModalHeroBtn = document.querySelector(".btn-hero");
const modalHero = document.querySelector("#modal-hero");
const closeModalHeroBtn = document.querySelector(".btn-cross-modal");

const toggleBurgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector("#burger-menu");
const burgerMenuItem = document.querySelector(".burger-menu");
const iconOpenBurgerMenu = document.querySelector(".burger-icon--open");
const iconCloseBurgerMenu = document.querySelector(".burger-icon--close");
const visibleHero = document.querySelector(".wraper-hero");

const navBurgerMenu = document.querySelector(".nav__burger__menu");

const btnMoreDatails = document.querySelector("#moreDetails");
const modalUpcomingTours = document / querySelector("#modal-upcoming-tours");

const body = document.body;

function openModal(modal) {
  modal.classList.remove("is-hidden");
  body.classList.add("modal-open");
}
function closeModal(modal) {
  modal.classList.add("is-hidden");
  body.classList.remove("modal-open");
}

function toggleModal(modal) {
  const isHidden = modal.classList.contains("is-hidden");
  modal.classList.toggle("is-hidden");
  if (isHidden) {
    body.classList.add("modal-open");
    iconOpenBurgerMenu.classList.add("changeIcon");
    iconCloseBurgerMenu.classList.remove("changeIcon");
    visibleHero.classList.add("is-hidden");
    burgerMenuItem.classList.add("isOpen");
  } else {
    body.classList.remove("modal-open");
    iconOpenBurgerMenu.classList.remove("changeIcon");
    iconCloseBurgerMenu.classList.add("changeIcon");
    visibleHero.classList.remove("is-hidden");
    burgerMenuItem.classList.remove("isOpen");
  }
}

btnMoreDatails.addEventListener("click", () => openModal(modalUpcomingTours));

openModalHeroBtn.addEventListener("click", () => openModal(modalHero));
closeModalHeroBtn.addEventListener("click", () => closeModal(modalHero));

toggleBurgerBtn.addEventListener("click", () => toggleModal(burgerMenu));

navBurgerMenu.addEventListener("click", () => {
  burgerMenu.classList.add("is-hidden");
  body.classList.remove("modal-open");
  iconOpenBurgerMenu.classList.remove("changeIcon");
  iconCloseBurgerMenu.classList.add("changeIcon");
  visibleHero.classList.remove("is-hidden");
  burgerMenuItem.classList.remove("isOpen");
});

modalHero.addEventListener("click", (event) => {
  if (event.target === modalHero) {
    closeModal(modalHero);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal(modalHero);
  }
});

window.matchMedia("(max-width: 1439px)").addEventListener("change", () => {
  burgerMenu.classList.add("is-hidden");
  body.classList.remove("modal-open");

  iconOpenBurgerMenu?.classList.remove("changeIcon");
  iconCloseBurgerMenu?.classList.add("changeIcon");
  visibleHero.classList.remove("is-hidden");
});
