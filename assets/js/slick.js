$(document).ready(function() { 
    $(".post-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots:true,
        autoplaySpeed: 2000,
        nextArrow: $(".right-category "),
        prevArrow: $(".left-category "),
         
    });

    $(".post-wrapper-category").slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 2000,
        nextArrow: $(".right-category "),
        prevArrow: $(".left-category "),
         
    });

     $(".post-wrapper-category-below").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        nextArrow: $(".right-category "),
        prevArrow: $(".left-category "),
         
    });
});