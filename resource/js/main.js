

$(function () {

    //Design Travel 특전관
    var swiperbooks = new Swiper(".trip-list__swiper .swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        //loopedSlides: 7,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
            nextEl: ".trip-list__arrow .swiper-button-next",
            prevEl: ".trip-list__arrow .swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

    });

    //이달의 추천 특가 호텔
    var thisMonth = new Swiper(".section3-slide.swiper-container", {
        spaceBetween: 30,
        slidesPerView: 4,
        loop: true,
        navigation: {
            nextEl: ".section3 .swiper-button-next",
            prevEl: ".section3 .swiper-button-prev",
        },
        pagination: {
            el: ".section3 .swiper-pagination",
            clickable: true,
          },

    });

    //테마 여행관
    var theme = new Swiper(".section4 .swiper-container", {
        //spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".section4 .swiper-button-next",
            prevEl: ".section4 .swiper-button-prev",
        },
        pagination: {
            el: ".section4 .swiper-pagination",
            clickable: true,
          },

    });









})
