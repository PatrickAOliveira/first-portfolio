const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');


hamburguer.addEventListener("click", () => {
   hamburguer.classList.toggle("active");
   navMenu.classList.toggle("active");
   header.classList.toggle("active");
});