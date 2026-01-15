const openModalHeroBtn = document.querySelector(".btn-hero");
const modalHero = document.querySelector(".modal__hero-backdrop");
const closeModalHero = document.querySelector(".btn-cross-modal");
const body = document.body;

function openModalHero() {
  modalHero.classList.remove("is-hidden");
  body.classList.add("modal-open");
}
openModalHeroBtn.addEventListener("click", openModalHero);

function closeHero() {
  modalHero.classList.add("is-hidden");
  body.classList.remove("modal-open");

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      if (!modalHero.classList.contains("is-hidden")) {
        closeHero();
      }
    }
  });
}

closeModalHero.addEventListener("click", closeHero);

modalHero.addEventListener("click", (event) => {
  if (event.target === modalHero) {
    closeHero();
  }
});
