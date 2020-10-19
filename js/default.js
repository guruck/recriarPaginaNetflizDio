$('.owl-carousel').owlCarousel({
  loop: true, //tela infinita
  margin: 10,
  nav: false, //navegação
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
