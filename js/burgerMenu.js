"use strict";

const menuContainer = document.querySelector(".modal-container");
const burgerMenuBtn = document.getElementById("burger-menu");
const offScreenHide = document.getElementById("offscreen-hide");
const bodyElem = document.querySelector("body");

const closeBurgerModal = () => {
  menuContainer.classList.remove("active");
  bodyElem.style.overflowY = "auto";
};

burgerMenuBtn.addEventListener("click", () => {
  if (menuContainer.classList.contains("active")) {
    closeBurgerModal();
  } else {
    menuContainer.classList.add("active");
    bodyElem.style.overflowY = "hidden";
  }
});

offScreenHide.addEventListener("click", (e) => {
  closeBurgerModal();
});

export { closeBurgerModal };
