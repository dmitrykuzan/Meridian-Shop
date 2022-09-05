"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { burger, mobileCheck, searchToggle, dynamicAdaptive } from "./functions/";

// Components
import { mainSlider } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  searchToggle();
  burger();
  dynamicAdaptive();
  mainSlider();
});
