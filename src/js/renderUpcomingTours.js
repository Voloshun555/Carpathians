import { data } from "./dataForUpcomingTours";

document
  .querySelector(".list-upcoming")
  .insertAdjacentHTML("beforeend", renderUpcomingToursList(data));
function renderUpcomingToursList(data) {
  return data
    .map(({ title, price, images }) => {
      const { mobile, mobile2x, tablet, tablet2x, desktop, desktop2x } = images;
      return `
        <li class="item_upcoming">
          <picture>
           <!-- Desktop screens -->
            <source 
              media="(min-width: 1440px)" 
              srcset="${desktop} 1x, ${desktop2x} 2x"
            >
            <!-- Tablet screens -->
            <source 
              media="(min-width: 768px)" 
              srcset="${tablet} 1x, ${tablet2x} 2x"
            >
            <!-- Mobile screens -->
            <source 
              media="(max-width: 767px)" 
              srcset="${mobile} 1x, ${mobile2x} 2x"
            >
            <!-- fallback -->
            <img 
              src="${mobile}" 
              alt="${title}" 
              class="item_img"
            />
          </picture>
          <div class="content_item_wraper">
            <h3 class="item_upcoming-title">${title}</h3>
            <p class="item_upcoming-text">${price}</p>
            <button id="moreDetails" class="item_btn">MORE DETAILS</button>
          </div>
        </li>
      `;
    })
    .join("");
}
