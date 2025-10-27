const hamburgerBtn = document.querySelector("#hamburger-btn");
const navMenu = document.querySelector("#nav-menu");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});
