const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const topBtn = document.getElementById("top-btn");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
    topBtn.style.display = "block";
  } else {
    navbar.classList.remove("navbar-fixed");
    topBtn.style.display = "none";
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();

// initialize window to top
const toTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}