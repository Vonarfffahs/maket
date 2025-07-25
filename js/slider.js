"use strict";

const windowPathname = window.location.pathname;

// Glide.js library for slider
if (windowPathname == "/index.html" || windowPathname === "/") {
  const config = {
    type: "carousel",
    perView: 3,
    breakpoints: {
      768: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };
  new Glide(".glide", config).mount();
}
