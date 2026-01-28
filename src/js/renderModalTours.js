import { data } from "./dataForUpcomingTours";
import { openModal } from "./toggleModal";

const modalUpcomingTours = document.querySelector("#modal-upcoming-tours");
const allMoreDetailsBtns = document.querySelectorAll(".item_btn");
const modalUpcomingList = document.querySelector(
  ".modal__upcoming__tours-list",
);
const wrapperModalTours = document.querySelector(".wrapper-modal-tours");

function renderModalContent(tour) {
  return tour.days
    .map(({ image, activities, title }) => {
      const { mobile, mobile2x, tablet, tablet2x, desktop, desktop2x } = image;
      const imageVars = `
        --img-mob: url('${mobile}'); --img-mob2x: url('${mobile2x}');
        --img-tab: url('${tablet}'); --img-tab2x: url('${tablet2x}');
        --img-desk: url('${desktop}'); --img-desk2x: url('${desktop2x}');
      `;

      const activitiesHtml = activities
        .map((act) => `<li class="activities__tours-item">${act}</li>`)
        .join("");

      return `
      <li class="modal__upcoming__tours-item">
        <div data-background="${imageVars}" class="wraper__tour-item lazy-bg">
          <h2 class="title-modal-tours">${title}</h2>
          <ul class="activities__tours">${activitiesHtml}</ul>
        </div>
        <div class="wrapper-dateils">
          <p class="tours-price-modal">UAH 7,499/person</p>
          <button class="btn-dateils-modal" type="button">BOOK A TOUR</button>
        </div>
      </li>
    `;
    })
    .join("");
}

function renderPagination(count) {
  let dotsHtml = "";
  for (let i = 0; i < count; i++) {
    dotsHtml += `<li><button class="pagination-dot ${i === 0 ? "active" : ""}" data-index="${i}"></button></li>`;
  }
  return `<ul class="modal-pagination-container">${dotsHtml}</ul>`;
}

allMoreDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tourId = Number(btn.dataset.id);
    const selectedTour = data.find((item) => item.id === tourId);

    if (selectedTour) {
      modalUpcomingList.innerHTML = renderModalContent(selectedTour);
      initLazyBackgrounds();

      const paginationHtml = renderPagination(selectedTour.days.length);
      const oldPagination = wrapperModalTours.querySelector(
        ".modal-pagination-container",
      );
      if (oldPagination) oldPagination.remove();

      wrapperModalTours.insertAdjacentHTML("beforeend", paginationHtml);

      openModal(modalUpcomingTours);
      initPaginationLogic();
    }
  });
});

function initPaginationLogic() {
  const dots = document.querySelectorAll(".pagination-dot");
  modalUpcomingList.onscroll = () => {
    const width = modalUpcomingList.offsetWidth;
    const index = Math.round(modalUpcomingList.scrollLeft / width);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index);
      const width = modalUpcomingList.offsetWidth;
      modalUpcomingList.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    });
  });
}

function initLazyBackgrounds() {
  const lazyBlocks = document.querySelectorAll(".lazy-bg");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const block = entry.target;
        block.setAttribute("style", block.dataset.background);
        block.classList.remove("lazy-bg");
        observer.unobserve(block);
      }
    });
  });

  lazyBlocks.forEach((block) => observer.observe(block));
}
