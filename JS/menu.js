
  
  
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

  
  
  
  function toggleInfo(item) {
    var details = item.querySelector('.details');
    var allItems = document.querySelectorAll('.item');

    // Si el elemento actual ya está abierto, lo cerramos y salimos de la función
    if (item.classList.contains('clicked')) {
        details.classList.add('hidden');
        item.classList.remove('clicked');
        item.querySelector('img').style.transform = 'scale(1)';
        return;
    }

    // Oculta todas las secciones de detalles y elimina la clase 'clicked' de todos los elementos
    allItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('clicked')) {
            otherItem.querySelector('.details').classList.add('hidden');
            otherItem.classList.remove('clicked');
            otherItem.querySelector('img').style.transform = 'scale(1)';
        }
    });

    // Muestra los detalles del elemento clicado
    details.classList.remove('hidden');
    item.classList.add('clicked');
    // Ajusta el tamaño de la imagen del elemento clicado
    var clickedImage = item.querySelector('img');
    clickedImage.style.transform = 'scale(1.1)';
}







    // Función para cambiar la clase activa en las secciones
    function setActiveSection() {
      var sections = document.querySelectorAll('.section');
      sections.forEach(function(section) {
          var rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              section.classList.add('active');
          } else {
              section.classList.remove('active');
          }
      });
  }

  // Llama a setActiveSection al cargar y al hacer scroll
  window.addEventListener('load', setActiveSection);
  window.addEventListener('scroll', setActiveSection);