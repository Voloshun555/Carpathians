import { data } from "./dataForUpcomingTours";
import { openModal } from "./toggleModal";

const modalUpcomingTours = document.querySelector("#modal-upcoming-tours");
const allMoreDetailsBtns = document.querySelectorAll(".item_btn");
const modalUpcomingList = document.querySelector(
  ".modal__upcoming__tours-list",
);
const wrapperModalToers = document.querySelector(".wrapper-modal-tours");

function renderModalContent(tour) {
  return tour.days
    .map(({ image, activities, title }) => {
      const activitiesHtml = activities
        .map((act) => `<li class="activities__tours-item"> ${act}</li>`)
        .join("");

      return `
      <li class="modal__upcoming__tours-item" >
      <div style="background-image: url('${image.mobile}')" class="wraper__tour-item"  >
      <h2 class="title-modal-tours">${title}</h2>
      <ul class="activities__tours">${activitiesHtml}</ul>
      </div>
        <div class="wrapper-dateils">
          <p class="tours-price-modal">UAH 7,499/person</p>
          <button class="btn-dateils-modal">BOOK A TOUR</button>
      </div>
      </li>
    `;
    })
    .join("");
}

function renderPagination(count) {
  let dotsHtml = "";
  for (let i = 0; i < count; i++) {
    dotsHtml += `<li class="pagination-dot ${i === 0 ? "active" : ""}" ></li>`;
  }
  return `<ul class="modal-pagination-container">${dotsHtml}</ul>`;
}

allMoreDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tourId = Number(btn.dataset.id);
    const selectedTour = data.find((item) => item.id === tourId);

    if (selectedTour) {
      modalUpcomingList.innerHTML = renderModalContent(selectedTour);
      const paginationHtml = renderPagination(selectedTour.days.length);
      const oldPagination = wrapperModalToers.querySelector('.modal-pagination-container');
      if (oldPagination) oldPagination.remove();
      wrapperModalToers.insertAdjacentHTML('beforeend', paginationHtml);

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
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  dots.forEach((dot) => {
    dot.onclick = () => {
      const index = dot.dataset.index;
      const width = modalUpcomingList.offsetWidth;
      modalUpcomingList.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    };
  });
}
