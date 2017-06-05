var mainSlider = (function() {
    var $mainSlider = $('.main-slider'),
        $prevSlideBtn = $("[data-slide-prev]"),
        $nextSlideBtn = $("[data-slide-next]");

    var init = function() {
        $mainSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            dots: false,
            arrows: false,
            draggable: false,
            fade: true
        });

        events();
    };

    var events = function() {
        handleNextSlideClick();
        handlePrevSlideClick();
    };

    var handleNextSlideClick = function() {
        $nextSlideBtn.click(function(e) {
            e.preventDefault();
            $mainSlider.slick('slickNext');
        });
    };

    var handlePrevSlideClick = function() {
        $prevSlideBtn.click(function(e) {
            e.preventDefault();
            $mainSlider.slick('slickPrev');
        });
    };

    return {
        init: init
    };
})();

$(document).ready(function() {
    // Initialise main slider
    mainSlider.init();

    // Mobile nav trigger
    $("[data-toggle-mobile-nav]").click(function(e) {
        e.preventDefault();
        $("#mobile-nav").toggleClass('open');
        $(".page-overlay").toggleClass('open');
    });
});
