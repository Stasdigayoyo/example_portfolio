const humburger = document.querySelector(".humburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

humburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const count = document.querySelectorAll(".skills__ratings-count"),
  lines = document.querySelectorAll(".skills__ratings-line span");

count.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
