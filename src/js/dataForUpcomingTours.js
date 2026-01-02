import bukovelMobile from "../assets/images/Upcoming-tours/bukovelMobile.jpg";
// import bukovelMobile2x from "./assets/images/Upcoming-tours/bukovelMobile@2x.jpg";
// import carpathionsMobile2x from "./assets/images/Upcoming-tours/carpathionsMobile2x";
import carpathionsMobile from "../assets/images/Upcoming-tours/carpathionsMobile.jpg";
import hoverlaMobile from "../assets/images/Upcoming-tours/hoverlaMobile.jpg";
// import hoverlaMobile2x from "./assets/images/Upcoming-tours/hoverlaMobile2x";

export const data = [
  {
    id: 1,
    img: bukovelMobile,
    title: "Ski tour to Bukovel",
    text: "From UAH 7,499/person",
  },
  {
    id: 2,
    img: carpathionsMobile,
    title: "Week in Carpathians",
    text: "From UAH 9,999/person",
  },
  {
    id: 3,
    img: hoverlaMobile,
    title: "Ascent to Hoverla",
    text: "From UAH 4,499/person",
  },
];

document
  .querySelector(".list-upcoming")
  .insertAdjacentHTML("beforeend", renderUpcomingToursList(data));
function renderUpcomingToursList(data) {
  return data
    .map(({ id, img, title, text }) => {
      return `
  <li class="">
  <img src='${img}'></img>
  <h3> ${title} </h3>
  <p>${text}</p>
  </li>
  `;
    })
    .join("");
}
