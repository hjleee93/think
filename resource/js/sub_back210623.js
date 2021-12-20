$(function () {
	$('.select .dropdown').on('show.bs.dropdown', function () {

	})

	// 가격순, 인기순
	$('.content-tit ul li').click(function () {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
	})

	//자유여행 상세 이미지
	var swiper_2 = new Swiper('.swiper-container.detail-img', {
		loop: true,
		pagination: {
			el: ".swiper-pagination.detail-img",
			type: "fraction",
		},
	});

	//전체일정보기
	$('.panel-heading').click(function () {
		$(this).children().find('.click-plus').toggleClass('on');
		$(this).parents('li').children().find('.panel-body__all').slideToggle();
	})

	$(".expand").click(function () {
		$(this).toggleClass('on');
		if ($(this).hasClass("on")) {
			$('.expand').contents()[0].textContent = "전체 일정 접기";
		} else {
			$('.expand').contents()[0].textContent = "전체 일정 보기";
		}
		if ($(this).data("closedAll")) {
			$(".panel-body__all").slideDown();
			$(".panel-heading").addClass("on");
			$('.click-plus').addClass('on');
		} else {
			$(".collapse").collapse("hide");
			$(".panel-body__all").slideUp();
			$(".panel-heading").removeClass("on");
			$('.click-plus').removeClass('on');
		}
		// save last state
		$(this).data("closedAll", !$(this).data("closedAll"));

	});

	// init with all closed
	$(".expand").data("closedAll", true);


	$('.panel-heading').on('hide.bs.collapse', function () {
		$(this).addClass("dkdkdkdkdk")
	})


	//tab-menu
	$('ul.slidee.tab li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.slidee.tab li').removeClass('current');
		$('.tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})

	//slideup-menu
	$('.slideup-content').hide();
	$('.slideup').click(function () {
		$('.slideup-content').slideToggle();
		$('.slideup-content').toggleClass('on');
		if ($('.slideup-content').hasClass('on')) {
			$('.content').css('position', 'relative');
		} else {
			//$('.content').css('position','unset');
		}
	})

	//selec box
	const body = document.querySelector('body');
	const select = document.querySelector(`[data-role="selectBox"]`);
	const values = select.querySelector(`[date-value="optValue"]`);
	const option = select.querySelector('ul');
	const selectCustiom = document.querySelector('.select-custom');
	const opts = option.querySelectorAll('li');

	/* 셀렉트영역 클릭 시 옵션 숨기기, 보이기 */
	function selects(e) {
		e.stopPropagation();
		//option.setAttribute('style', `top:${select.offsetHeight}px`)
		if (option.classList.contains('hide')) {
			option.classList.remove('hide');
			option.classList.add('show');
			selectCustiom.classList.add('on');		
		} else {
			option.classList.add('hide');
			option.classList.remove('show');
			selectCustiom.classList.remove('on');	
		}
		selectOpt();
	}

	/* 옵션선택 */
	function selectOpt() {
		opts.forEach(opt => {
			const innerValue = opt.innerHTML;

			function changeValue() {
				values.innerHTML = innerValue;
			}
			opt.addEventListener('click', changeValue)
		});
	}

	/* 렌더링 시 옵션의 첫번째 항목 기본 선택 */
	function selectFirst() {
		const firstValue = opts[0].innerHTML;
		values.innerHTML = `${firstValue}`
	}

	/* 옵션밖의 영역(=바디) 클릭 시 옵션 숨김 */
	function hideSelect() {
		if (option.classList.contains('show')) {
			option.classList.add('hide');
			option.classList.remove('show');	
			selectCustiom.classList.remove('on');
		}
	}

	selectFirst();
	select.addEventListener('click', selects);
	body.addEventListener('click', hideSelect);


	// $('.select-custom').click(function(){
	// 	$(this).toggleClass('on');
	// })




})
