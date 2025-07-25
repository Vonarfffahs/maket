"use strict";

import { closeBurgerModal } from "./burgerMenu.js";

const navLinks = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;

navLinks.forEach((link) => {
  const navLinkPathname = new URL(link.href).pathname;

  if (navLinkPathname === windowPathname) {
    link.parentElement.classList.add("active");
  }

  link.addEventListener("click", closeBurgerModal());
});
