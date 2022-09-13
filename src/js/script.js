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
} from "./functions/";

// Components
import {
  mainSlider,
  furnitureSlider,
  popularSlider,
  productSlider,
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
});
