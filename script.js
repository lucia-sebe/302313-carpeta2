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
      if (link.href === actualUrl || (link.pathname.split('/').pop() === 'index.html' && actualUrl.split('/').pop() === '')) {
          link.classList.add('activado');
      }
  });

  const imageAssets = [
    './imagenes/foto1.webp',
    './imagenes/foto2.webp',
    './imagenes/foto3.webp',
    './imagenes/foto4.webp',
    './imagenes/catalogo.webp',
    './imagenes/linkedin.svg',
    './imagenes/behance.svg',
    './imagenes/gmail.svg',
    './imagenes/rotar_celular.png',
    './imagenes/vans_afiche1.webp',
    './imagenes/vans_afiche1_mu.webp',
    './imagenes/vans_afiche2.webp',
    './imagenes/vans_afiche2_mu.webp',
    './imagenes/vans_afiche3.webp',
    './imagenes/vans_afiche3_mu.webp',
    './imagenes/pizza-top.svg',
    './imagenes/pizza-top-original.png',
    './videos/el_cuento_uruguayo.gif',
    './videos/dictadura_del_diseno.gif',
    './videos/totem_cervezas.gif',
    './videos/en_bici.gif'
  ];

  imageAssets.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  const videoAssets = [
    './videos/plantas.mp4'
  ];

  videoAssets.forEach(src => {
    const video = document.createElement('video');
    video.src = src;
    video.preload = 'auto';
  });
});
