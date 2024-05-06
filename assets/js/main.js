$(document).ready(function () {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});

const topo = new Swiper("#topo", {
  effect: "fade",
  direction: "horizontal",
  speed: 400,
  slidesPerView: 1,
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "false",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const personagens = new Swiper("#personagens", {
  speed: 800,
  // autoplay: {
  //   delay: 8000,
  // },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    380: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var rotation = scroll / 10; // Altere o valor conforme necessário para ajustar a rotação
    var translateX = scroll; // Altere o valor conforme necessário para ajustar a velocidade de movimento
    $(".martelo-thor").css({
      transform: "translateX(" + translateX + "px) rotate(" + rotation + "deg)",
    });
  });
});

$(document).ready(function () {
  // Quando clicar no ícone do menu
  $(".icon-menu-hamburguer").click(function () {
    // Mostra o menu
    $(".menu-hamburguer").show();
  });

  // Quando clicar em Fechar Menu
  $(".close-menu").click(function () {
    // Esconde o menu
    $(".menu-hamburguer").hide();
  });
});
