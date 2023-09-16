const meun = document.querySelector(".nav");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const list = document.querySelectorAll(".nav__link");

function toggleMenu() {
  meun.classList.toggle("show");
open.classList.toggle("notShowMenu");
close.classList.toggle("notShowMenu");
}
const icon = [open,close];
icon.forEach((el) => el.addEventListener("click", toggleMenu)
);