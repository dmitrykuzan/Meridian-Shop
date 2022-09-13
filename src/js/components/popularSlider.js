// export const popularSlider = () => {
//   function resizeScrenn() {
//     if (window.innerWidth > 857) {
//       popularSlider = new Swiper(".popular__list", {
//         slidesPerView: 1.2,
//         spaceBetween: 20,
//       });
//     }
//     if (window.innerWidth < 857) {
//       popularSlider.destroy();
//     }
//   }

//   resizeScrenn();

//   window.addEventListener("resize", () => {
//     resizeScrenn();
//   });
// };

export const popularSlider = () => {
  const sliderSwiper = document.querySelector('.popular__list');
  const sliderWrapper = document.querySelector('.popular__list-wrapper');
  const sliderSlide = document.querySelectorAll('.popular__item');

  if(sliderSwiper) {
    if(window.innerWidth <= 575) {
      let popularSlider = new Swiper(".popular__list", {
        slidesPerView: 1.5,
        spaceBetween: 20,
      });
    } else {
      sliderWrapper.classList.remove('swiper-wrapper');
      sliderSwiper.classList.remove('swiper');
      sliderSlide.forEach(slide => {
        slide.classList.remove('swiper-slide');
      })
    }
  }
}