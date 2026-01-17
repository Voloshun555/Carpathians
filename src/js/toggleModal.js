
const openModalHeroBtn = document.querySelector(".btn-hero");
const modalHero = document.querySelector("#modal-hero");
const closeModalHeroBtn = document.querySelector(".btn-cross-modal");

const openBurgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector("#burger-menu");

const body = document.body;

/**
 * @param {HTMLElement} modal
 */

function openTarget(modal) {
  modal.classList.remove("is-hidden");
  body.classList.add("modal-open");
}

function closeModal() {
  modalHero.classList.add("is-hidden");
  body.classList.remove("modal-open");
}

openModalHeroBtn.addEventListener("click", () => openTarget(modalHero));

openBurgerBtn.addEventListener("click", () => openTarget(burgerMenu));

closeModalHeroBtn.addEventListener("click", closeModal);

modalHero.addEventListener("click", (event) => {
  if (event.target === modalHero) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    if (!modalHero.classList.contains("is-hidden")) {
      closeModal();
    }
  }
});
