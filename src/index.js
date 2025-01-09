const iconMenu = document.getElementById("icon-menu");
const iconMenuClose = document.getElementById("icon-menu-close");
const overlay = document.getElementById("overlay");
const menuMobile = document.getElementById("menu-mobile");

iconMenu.addEventListener("click", () => {
  iconMenu.classList.add("hidden");
  iconMenuClose.classList.remove("hidden");
  overlay.classList.remove("hidden");
  menuMobile.style.width = "68%";
});

iconMenuClose.addEventListener("click", () => {
  iconMenu.classList.remove("hidden");
  iconMenuClose.classList.add("hidden");
  overlay.classList.add("hidden");
  menuMobile.style.width = "0";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    iconMenu.classList.remove("hidden");
    iconMenuClose.classList.add("hidden");
    overlay.classList.add("hidden");
    menuMobile.style.width = "0";
  }
});
