import './style.scss'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Імпорт самого Swiper
import Swiper from 'swiper';
// Імпорт необхідних модулів (навігація та пагінація)
import { Navigation, Pagination } from 'swiper/modules';

// Імпорт стилів Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Ініціалізація вашого слайдера "Upcoming tours"
const swiper = new Swiper('.main-tours-slider', {
  modules: [Navigation, Pagination],
  
  // Налаштування згідно з вашим описом:
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  
  // Кількість карток на екрані
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
});