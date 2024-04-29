






















/*BOTON DESPLEGABLE RESPONSIVE*/
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const closeBtn = document.getElementById("closeBtn");

  dropdownButton.addEventListener("click", function () {
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  });

  closeBtn.addEventListener("click", function () {
    dropdownMenu.style.display = "none";
  });
});










/*CARRUSEL DESLIZABLEEE*/
const carousel = document.getElementById('carrusel222');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1; // Puedes ajustar el multiplicador para cambiar la sensibilidad
    carousel.scrollLeft = scrollLeft - walk;
});