const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
let count = 1;

hamburguer.addEventListener("click", () => {
   hamburguer.classList.toggle('active');
   navMenu.classList.toggle('active');
   header.classList.toggle('active');
});
setInterval(function () {
   nextImage();
}, 5000)
function nextImage() {
   count++;
   if (count > 3) {
      count = 1;
   }
   document.getElementById("radio" + count).checked = true;
}
