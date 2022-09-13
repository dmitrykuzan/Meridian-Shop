export const furnitureSlider = () => {
  let furnitureSlider = new Swiper(".furniture__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".furniture__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".furniture__arrow--next",
      prevEl: ".furniture__arrow--prev",
    }
  });
}