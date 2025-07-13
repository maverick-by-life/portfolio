import Swiper from "swiper/bundle";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0.5,
  centeredSlides: true,
  effect: "coverflow",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 50,
      direction: "vertical",
    },

    576: {
      slidesPerView: 1.7,
      spaceBetween: 10,
    },
  },
});
