export const mainSlider = () => {
  const sliderSwiper = document.querySelector('.ready__slider');
  const sliderWrapper = document.querySelector('.ready__slider-wrapper');
  const sliderSlide = document.querySelectorAll('.ready__slide');

  if(sliderSwiper) {
    if(window.innerWidth > 767) {
      let mainSlider = new Swiper(".ready__slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".ready__button--next",
          prevEl: ".ready__button--prev",
        },
        breakpoints: {
          1200: {
              spaceBetween: 30,
              slidesPerView: 3,
          },
          1700: {
            spaceBetween: 50,
            slidesPerView: 4,
          }
        },
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