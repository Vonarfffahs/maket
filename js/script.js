"use strict";

// Navigation header
const burgerMenuBtn = document.getElementById("burger-menu");
const offScreenMenu = document.getElementById("offscreen-menu");
const offScreenHide = document.getElementById("offscreen-hide");
const bodyElem = document.querySelector("body");
const navItems = document.querySelectorAll(".nav-items");
const navLinks = document.querySelectorAll(".nav-link");
const windowPathName = window.location.pathname;

burgerMenuBtn.addEventListener("click", () => {
  if (burgerMenuBtn.classList.contains("active")) {
    burgerMenuBtn.classList.remove("active");

    offScreenMenu.style.transform = "translateX(100%)";
    offScreenHide.style.display = "none";
    bodyElem.style.overflowY = "auto";
  } else {
    burgerMenuBtn.classList.add("active");

    offScreenMenu.style.transform = "translateX(0px)";
    offScreenHide.style.display = "block";
    bodyElem.style.overflowY = "hidden";
  }
});

offScreenHide.addEventListener("click", (e) => {
  e.target.style.display = "none";

  burgerMenuBtn.classList.remove("active");
  offScreenMenu.style.transform = "translateX(100%)";
  bodyElem.style.overflowY = "auto";
});

navLinks.forEach((navLinkElem) => {
  const navLinkPathName = new URL(navLinkElem.href).pathname;

  if (
    navLinkPathName === windowPathName ||
    (windowPathName == "/index.html" && navLinkPathName === "/")
  ) {
    navLinkElem.parentElement.classList.add("active");
  }
});

// Glide.js library for slider
if (windowPathName == "/index.html" || windowPathName === "/") {
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
