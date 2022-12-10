$(document).ready(function() {
    $(".post-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),

    });
});