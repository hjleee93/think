$(function () {
	//객실 이미지
	var swiper = new Swiper(".image-swiper .swiper-container", {
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
        navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
        },
      });

	//썸네일 슬라이드
	var swiperThumbBottom = new Swiper(".thumb-swiper__bottom", {
		direction: "vertical",
		spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
		observer: true,
		observeParents: true,
      });
	var swiperThumbTop = new Swiper(".thumb-swiper__top .swiper-container", {
		spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
        thumbs: {
          swiper: swiperThumbBottom
        },
		observer: true,
		observeParents: true,
      });

	
	//img list slide
	var Swiperthumbs = new Swiper(".thumbsList", {
		//loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
		observer: true,
		observeParents: true,
	});
	var Swiperthumbs2 = new Swiper(".thumbsImg", {
	//loop: true,
	//spaceBetween: 20,
	thumbs: {
		swiper: Swiperthumbs,
	},
	observer: true,
	observeParents: true,
	});

	  

	//accordion
	$(".accordion-header .button-modify").click(function(){
		var accHeader = $(this).parent();
		$(accHeader).toggleClass("on");
		$(accHeader).parent(".accordion-box").toggleClass("on");
		$(accHeader).next().slideToggle();

	});

	$(".accordion-heading").click(function(){
		$(this).parent().toggleClass("active");
		$(this).next().slideToggle();

	});
	
	$(".accordion-header i").click(function(){
		var accHeader2 = $(this).parent();
		$(accHeader2).toggleClass("on");	
		$(accHeader2).parent(".accordion-box").toggleClass("on");
		$(accHeader2).next().slideToggle();
	});

	//tab-menu
	$('ul.tab li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.tab li').removeClass('current');
		$('.tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})

	//파일 업로드
	var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload-name').val(filename);
    });

	//남 여 클릭
	$(".button-gender button").click(function(){
		$(this).toggleClass("color-pink");
		$(this).siblings().removeClass("color-pink");
	});

	//약관 동의
	$('.agree-child').hide();
	$('.arrow-agree').click(function(){
		$(this).parents('.form-check').toggleClass('active');
		$(this).parents('.form-check').children().find('i').toggleClass('on');
		$(this).parents('.form-check').next().slideToggle();

	});

	//전체 약관 동의
	$(".check-all label").click(function(){
		var $agreeAll = $(".check-box").children(".form-check").children("input");	
		$($agreeAll).prop('checked',true);

		//클릭되었으면
        if($($agreeAll).prop("checked")){
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
            $($agreeAll).prop("checked",true);
            //클릭이 안되있으면
        }else{
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
            $($agreeAll).prop("checked",false);
        }
	});

	// 일정보기
	$('.panel-heading').click(function () {
		$(this).children().find('.click-plus').toggleClass('on');
		$(this).parents('li').children().find('.panel-body__all').slideToggle();
		$(this).next().toggleClass("on");
		
	});

	// 여행 일정보기
	$('.slide-heading').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass("on");
	});

	//전체일정보기
	// $('.panel-heading').click(function () {
	// 	$(this).children().find('.click-plus').toggleClass('on');
	// 	$(this).parents('li').children().find('.panel-body__all').slideToggle();
	// });

	$(".expand").click(function () {
		$(this).toggleClass('on');
		if ($(this).data("closedAll")) {
			$(".slide-body").slideDown();
			$(".slide-heading").addClass("on");
			$('.click-plus').addClass('on');
		} else {
			$(".collapse").collapse("hide");
			$(".slide-body").slideUp();
			$(".slide-heading").removeClass("on");
			$('.click-plus').removeClass('on');
		}
		// save last state
		$(this).data("closedAll", !$(this).data("closedAll"));

	});

	// init with all closed
	$(".expand").data("closedAll", true);


	//
	$(".like").click(function(){
		$(this).toggleClass("on");
	});

	// 필터 삭제
	$(".filter-item .delete").click(function(){
		event.stopPropagation();
		$(this).parent().remove();
	})

	//filter click
	$(".filter__down").click(function(){
		$(this).parents().find(".filter-click").toggleClass("open");
		$(this).parents().find(".filter__inner").toggleClass("open");
		$(this).parents().find(".filter-click").next().slideToggle();

		//close
		$(".button-close").click(function(){
			$(this).parents().find(".filter__inner").removeClass("open");	
			$(this).parents().find(".filter-click").removeClass("open");
			$(this).parents().find(".filter-click").next().slideUp();
			$(".button-refresh").hide();
			$(".button-refresh").prev(".filter__down").show();	
		})

		//refresh
		if($(".filter__inner").hasClass("open")){
			$(".button-refresh").show();
			$(".button-refresh").prev(".filter__down").hide();
		}else{
			
		}
			

		// $(this).parent().toggleClass("open");
		// $(this).next().slideToggle();
		// if($(".filter__inner").hasClass("open")){
		// 	$(".button-refresh").show();
		// 	$(".button-refresh").prev(".filter__down").hide();
		// }else{
		// 	$(".button-refresh").hide();
		// 	$(".button-refresh").prev(".filter__down").show();
		// }
		// $(".filter-footer").click(function(){
		// 	$(this).parents().find(".filter__inner").removeClass("open");
		// 	$(".filter-content").slideUp();
		// })
	})


	//filter button click
	$('.choice-button button').click(function(){
		$(this).toggleClass('selected');
	});

	//여행 기간별 상품 버튼 클릭
	$(".trip-night button").click(function(){
		$(this).toggleClass("on");
		$(this).siblings().removeClass("on");	
	});

	//check-point
	$(".check-point__inner>div>p").click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass("on");
	});

	//select box
	$('.select-custom ul').hide();
	$('.select-custom>span').click(function () {
		$(this).parents('.select-custom').toggleClass('on');
		$(this).toggleClass('on');
		if ($(this).hasClass('on')) {
			$(this).next('ul').slideDown();
		} else {
			$(this).next('ul').slideUp();
		}
	});


	//현지 투어 옵션 추가 > 투어 상품 상세정보 클릭시

	$('.select-tour .button-detail').on('click', '.selected-tour', function(e){
		e.preventDefault();
		var target_selector = $(this).data('target');
		$(target_selector).slideDown();
	  })


	// 열리는 이벤트를 건다.
	$('.select-tour ').on('click', '.button-detail', function(e){
		// a나 submit 버튼에 클래스를 매긴 경우 링크 이동이나 submit을 막는다.
		e.preventDefault();
		var target_selector = $(this).data('target');
		$(target_selector).slideDown();
		//$(this).removeClass('js-open-target').addClass('js-close-target');
	});
	$('.search-close').click(function(){
		$(this).parents(".selected__inner").parent().slideUp();
		$(".select-massage, .select-massage span").removeClass("on");
	});

	$(".select-massage").click(function(){
		$(this).next().slideToggle();
	});

	// 가격순, 인기순
	$('.content-tit ul li').click(function () {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
	});

	// view 더보기 버튼
	$('.button-view').click(function(){
		$(this).toggleClass("on");
		$(this).parent().parent().parent().toggleClass("on");
		$(this).parent().parent().next().slideToggle();
		//$('.thumbsSlider').slideToggle();
	});

	//button plus 클릭시
	$("button.plus").click(function(){
		$(this).addClass("on");
	});

	// 체크포인트 클릭시
	$(".check-point__inner>p").click(function(){
		$(this).next().slideToggle();
	});




	
	

		


})

