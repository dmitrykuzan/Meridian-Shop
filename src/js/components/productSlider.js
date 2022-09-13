
export const productSlider = () => {

let productSlider = new Swiper(".product__slider", {
  spaceBetween: 30,
  pagination: {
    el: ".product__pagination-mobile",
  },
  navigation: {
    nextEl: ".product__pagination-next",
    prevEl: ".product__pagination-prev",
  },
  thumbs: {
    navigation: {
      nextEl: ".product__pagination-next",
      prevEl: ".product__pagination-prev",
    },
      swiper: {
        spaceBetween: 20,
        slidesPerView: 5,
          el: '.product__pagination-slider',
        }
  },
});
}