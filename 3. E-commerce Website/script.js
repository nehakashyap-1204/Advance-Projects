const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.querySelector("#nav-search");
navSearch.addEventListener("click", () => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-img img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".deals-card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".about-img", {
  ...scrollRevealOption,
  origin: "top",
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
