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
});

const personagens = new Swiper("#personagens", {
  speed: 800,
  slidesPerView: 6,
  // autoplay: {
  //   delay: 8000,
  // },
  spaceBetween: 10,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
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

console.log(Fancybox);
