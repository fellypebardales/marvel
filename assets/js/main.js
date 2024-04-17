$(document).ready(function () {
  $(".slick-banners").slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});
