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
