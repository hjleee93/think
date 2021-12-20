'use strict';

$(function () {

    //sitemap
    $(".sitemap>button").click(function () {
        $(".sitemap-wrap").slideToggle();
        $("body").css("overflow", "hidden");
        $(".sitemap-close").click(function () {
            $(".sitemap-wrap").slideUp();
            $("body").css("overflow", "auto");
        })
    })

    //Top

    $(".top-button button").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    });

    //header main


    //header__sub
    $(".sub").parents('body').find('.header').addClass('header--sub');

    //header member
    $(".member").parents('body').find('.header').addClass('header--member');

    $(".member").parents('body').find('.header').removeClass('header--sub');

    $(".header--member").children().find(".logo__inner a img").attr("src", "../../inc/resource/image/login-logo.png");


    //header notice
    var swiperbooks = new Swiper(".gnb .notice .swiper-container", {
        slidesPerView: 'auto',
        //spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: ".notice .swiper-button-next",
            prevEl: ".notice .swiper-button-prev",
        },
        //loopedSlides: 7,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,
    
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

    });

    //footer banner
    var swiperbooks = new Swiper(".slide-banner .swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerView: 7,
        loop: true,
        //loopedSlides: 7,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,
        // navigation: {
        //     nextEl: ".trip-list__arrow .swiper-button-next",
        //     prevEl: ".trip-list__arrow .swiper-button-prev",
        // },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

    });





})







//Tweenmax를 이용한 header  

/*
$(function () {
    gnbSubMenu();

});


function gnbSubMenu() {
    var gnb = $(".gnb");
    var gnbChild = $(".gnb > div");
    var gnbTitle = gnb.find('a');

    gnbChild.on({
        mouseover: function () {
            $(this).addClass('on')
        },
        mouseleave: function () {
            $(this).removeClass('on');
        }
    });
    gnbTitle.mouseover(function () {
        headerOpen();
    });
    $('.gnb').mouseleave(function () {
        headerClose();
        $('body').css('overflow', 'initail')
    });

    function headerOpen() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
        TweenMax.killAll();
        TweenMax.to($(".gnb"), .5, {
            height: 440,
            ease: 'easeOutExpo'
        });
        $(".gnb").addClass("on");
    }

    function headerClose() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
        TweenMax.killAll();
        TweenMax.to($(".gnb"), .5, {
            height: 110,
            ease: 'easeOutExpo',
            onComplete: function () {
                $(".gnb").removeClass("on");
            }
        });
        $('.overlay').removeClass('on');
        $(".gnb-hover-bar").removeClass("on");
    }



    



}

*/