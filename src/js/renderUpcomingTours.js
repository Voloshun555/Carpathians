import {data} from './dataForUpcomingTours'


document
  .querySelector(".list-upcoming")
  .insertAdjacentHTML("beforeend", renderUpcomingToursList(data));
function renderUpcomingToursList(data) {
  return data
    .map(
      ({ mobile, mobile2x, tablet, tablet2x, desk, desk2x, title, text }) => {
        return `
        <li class="item_upcoming">
          <picture>
           <!-- Desktop screens -->
            <source 
              media="(min-width: 1440px)" 
              srcset="${desk} 1x, ${desk2x} 2x"
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
            <p class="item_upcoming-text">${text}</p>
            <button class="item_btn">MORE DETAILS</button>
          </div>
        </li>
      `;
      }
    )
    .join("");
}
