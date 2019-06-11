$(document).ready(function () {
   //mobile-menu

    $(document).on('click', '#header-trigger', function (event) {
        event.preventDefault();
        var menu = $('.header__menu');
        if ($(this).hasClass('js-trigger-active')) {
            $(this).removeClass('js-trigger-active');
            menu.slideUp('slow');
        } else {
            $(this).addClass('js-trigger-active');
            menu.slideDown('slow');
        }
        return false;
    });


    //scroll-menu
    $(document).on('click', '.header__menu li.go-to a', function (event) {
        event.preventDefault();
        var selector = $(this);
        menuScroll(selector);
    });

    $(document).on('click', '.footer__menu li.go-to a', function (event) {
        event.preventDefault();
        var selector = $(this);
        menuScroll(selector);
    });


    function menuScroll(selector) {
        if($(selector).hasClass('menu-active')) {
            $(selector).removeClass('menu-active')
        } else {
            $('.header__ li.go-to a').removeClass('menu-active');
            $(selector).addClass('menu-active');
        }
        var href = $(selector).attr('href');
        var target = $(href);
        if (window.innerWidth < 710) {
            var top = target.offset().top;
            $('html,body').animate({scrollTop: top}, 1000);
            return false;
        } else {
            var top = target.offset().top;
            $('html,body').animate({scrollTop: top}, 1000);
            return false;
        }
    }



    // slider-baner

    $('.baner__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false
    });


});