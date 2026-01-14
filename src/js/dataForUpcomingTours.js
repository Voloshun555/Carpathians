import bukovelMobile from "/images/Upcoming-tours/bukovelMobile.jpg";
import bukovelMobile2x from "/images/Upcoming-tours/bukovelMobile@2x.jpg";
import carpathionsMobile from "/images/Upcoming-tours/carpathionsMobile.jpg";
import carpathionsMobile2x from "/images/Upcoming-tours/carpathionsMobile@2x.jpg";
import hoverlaMobile from "/images/Upcoming-tours/hoverlaMobile.jpg";
import hoverlaMobile2x from "/images/Upcoming-tours/hoverlaMobile@2x.jpg";

import hoverlaTablet from "/images/Upcoming-tours/hoverlaTablet.jpg";
import hoverlaTablet2x from "/images/Upcoming-tours/hoverlaTablet@2x.jpg";
import carpathionsTablet2x from "/images/Upcoming-tours/carpathiansTablet@2x.jpg";
import carpathionsTablet from "/images/Upcoming-tours/carpathiansTablet.jpg";
import bukovelTablet from "/images/Upcoming-tours/bukovelTablet.jpg";
import bukovelTablet2x from "/images/Upcoming-tours/bukovelTablet@2x.jpg";

import hoverlaDesk from "/images/Upcoming-tours/hoverlaDesk.jpg";
import hoverlaDesk2x from "/images/Upcoming-tours/hoverlaDesk@2x.jpg";
import carpathionsDesk2x from "/images/Upcoming-tours/carpathiansDesk@2x.jpg";
import carpathionsDesk from "/images/Upcoming-tours/carpathiansDesk.jpg";
import bukovelDesk from "/images/Upcoming-tours/bukovelDesk.jpg";
import bukovelDesk2x from "/images/Upcoming-tours/bukovelDesk@2x.jpg";

export const data = [
  {
    id: 1,
    mobile: bukovelMobile,
    mobile2x: bukovelMobile2x,
    tablet: bukovelTablet,
    tablet2x: bukovelTablet2x,
    desk: hoverlaDesk,
    desk2x: hoverlaDesk2x,
    title: "Ski tour to Bukovel",
    text: "From UAH 7,499/person",
  },
  {
    id: 2,
    mobile: carpathionsMobile,
    mobile2x: carpathionsMobile2x,
    tablet: carpathionsTablet,
    tablet2x: carpathionsTablet2x,
    desk: carpathionsDesk,
    desk2x: carpathionsDesk2x,
    title: "Week in Carpathians",
    text: "From UAH 9,999/person",
  },
  {
    id: 3,
    mobile: hoverlaMobile,
    mobile2x: hoverlaMobile2x,
    tablet: hoverlaTablet,
    tablet2x: hoverlaTablet2x,
    desk: hoverlaDesk,
    desk2x: hoverlaDesk2x,
    title: "Ascent to Hoverla",
    text: "From UAH 4,499/person",
  },
];

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
