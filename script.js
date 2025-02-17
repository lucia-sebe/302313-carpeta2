document.addEventListener('DOMContentLoaded', function() {
  const fotos = document.querySelectorAll('.catalogo .foto');

  fotos.forEach(foto => {
      foto.addEventListener('click', function() {
          // Alterna la clase 'voltear' en el mismo elemento
          this.classList.toggle('voltear');
      });
  });

  const navLinks = document.querySelectorAll('.nav-link');

  const actualUrl = window.location.href;

  navLinks.forEach(link => {
      if (link.href === actualUrl) {
          link.classList.add('activado');
      }
  });
});
