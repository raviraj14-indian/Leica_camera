const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  console.log("open");
});
