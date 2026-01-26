function initSlider(list, nextBtn, prevBtn, items, gap = 20) {
  function getItemWidth() {
    if (items.length === 0) return 0;
    return items[0].getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    const scrollLeft = list.scrollLeft;
    const maxScrollLeft = list.scrollWidth - list.clientWidth;

    prevBtn.disabled = scrollLeft <= 0;
    nextBtn.disabled = scrollLeft >= maxScrollLeft - 1;
  }

  nextBtn.addEventListener("click", () => {
    list.scrollBy({
      left: getItemWidth(),
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    list.scrollBy({
      left: -getItemWidth(),
      behavior: "smooth",
    });
  });

  list.addEventListener("scroll", updateButtons);

  updateButtons();
}

function enableDragScroll(selector) {
  const slider = document.querySelector(selector);
  if (!slider) return;
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.scrollBehavior = 'auto';
    slider.style.scrollSnapType = 'none';
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.scrollSnapType = 'x mandatory';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.scrollSnapType = 'x mandatory';
    slider.style.scrollBehavior = 'smooth';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; 
    slider.scrollLeft = scrollLeft - walk;
  });
}

enableDragScroll('.list-upcoming');
enableDragScroll('.modal__upcoming__tours-list');
enableDragScroll('.list__gallery');


initSlider(
  document.querySelector(".list__gallery"),
  document.querySelector("#nextGallery"),
  document.querySelector("#prevGallery"),
  document.querySelectorAll(".item__gallery"),
);

initSlider(
  document.querySelector(".list-upcoming"),
  document.querySelector("#nextUpcoming"),
  document.querySelector("#prevUpcoming"),
  document.querySelectorAll(".item_upcoming"),
);
