"use strict";

// Glide.js library for slider
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
