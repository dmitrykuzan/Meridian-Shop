"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { burger, mobileCheck, searchToggle, dynamicAdaptive } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  searchToggle();
  burger();
  dynamicAdaptive();
});
