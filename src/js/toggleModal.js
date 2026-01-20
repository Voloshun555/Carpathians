const openModalHeroBtn = document.querySelector(".btn-hero");
const modalHero = document.querySelector("#modal-hero");
const closeModalHeroBtn = document.querySelector(".btn-cross-modal");

const toggleBurgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector("#burger-menu");
const iconOpenBurgerMenu = document.querySelector(".burger-icon--open");
const iconCloseBurgerMenu = document.querySelector(".burger-icon--close");

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
  } else {
    body.classList.remove("modal-open");
    iconOpenBurgerMenu.classList.remove("changeIcon");
    iconCloseBurgerMenu.classList.add("changeIcon");
  }
}
openModalHeroBtn.addEventListener("click", () => openModal(modalHero));
closeModalHeroBtn.addEventListener("click", () => closeModal(modalHero));

toggleBurgerBtn.addEventListener("click", () => toggleModal(burgerMenu));

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

window.matchMedia("(max-width: 768px)").addEventListener("change", () => {
  burgerMenu.classList.add("is-hidden");
  body.classList.remove("modal-open");

  iconOpenBurgerMenu?.classList.remove("changeIcon");
  iconCloseBurgerMenu?.classList.add("changeIcon");
});
