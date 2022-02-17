
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 35,
  autoplay: {
    delay: 2500,
  },

  //pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {

    200: {
      slidesPerView: 1,
    },

    650: {
      slidesPerView: 2,
    },

    1290: {
      slidesPerView: 3,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
