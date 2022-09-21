"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  burger,
  mobileCheck,
  searchToggle,
  dynamicAdaptive,
  accordion,
  tabs,
  dropDown,
  timer,
  rangeSlider,
  mobileFilter,
} from "./functions/";

// Components
import {
  mainSlider,
  furnitureSlider,
  popularSlider,
  productSlider,
  cart,
} from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  searchToggle();
  burger();
  dynamicAdaptive();
  mainSlider();
  furnitureSlider();
  accordion(".faq__body", "faq__question", ".faq__wrapper", "active");
  popularSlider();
  productSlider();
  tabs(".product__tabs", ".product__tabs-btn", ".product__tabs-info", "active");
  dropDown(".collection__navbar", "collection__btn-dropdown", ".collection__navbar-dropdown", "active");
  timer();
  rangeSlider();
  mobileFilter();
  cart();
});
