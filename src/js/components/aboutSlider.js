export const aboutSlider = () => {
  let aboutSlider = new Swiper(".about__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".about__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".about__arrow--next",
      prevEl: ".about__arrow--prev",
    }
  });
}