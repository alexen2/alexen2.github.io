
$('.card-product__slider-top').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.card-product__slider'
});
$('.card-product__slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-product__arrow-left"></div>',
  nextArrow: '<div class="slider-product__arrow-right"></div>',
  asNavFor: '.card-product__slider-top',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

let cardImg = $('.card-product__item-img img');

$('.card-product__slider-item img').on('click', function() {
  let cardImgNew = $(this).attr('src');
  cardImg.attr('src', cardImgNew);
});



	
$('.currency-select__select').selectize({
  create: true,
  sortField: 'text'
});

$('.currency-select input').prop("readonly", true);
$('.header__btn').click(function() {
  if($('body .header__btn--opened').length) {
    $('.header__mobile').hide(500);
  } else {
    $('.header__mobile').show(500);
  }

  $('.header__btn').toggleClass('header__btn--opened');
});

$('.user__bag').click(function() {
  $('.header__widget').toggleClass('header__widget--opened');
  // $('.header__widget-overlay').toggleClass('header__widget-overlay-visible');
});
// $('.header__widget-overlay').click(function() {
//   $('.header__widget').toggleClass('header__widget--opened');
//   // $('.header__widget-overlay').toggleClass('header__widget-overlay-visible');
// });

$(window).scroll(function(){
  let $this = $(this),
       st = $this.scrollTop();

  if(st > 285){
    $('body').addClass('scrolled');
  }else{
    $('body').removeClass('scrolled');
  }
});
jQuery(function($){
	$(document).mouseup(function (e){
    let div = $('.header__widget');
    let user_bag = $('.user__bag'); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
      if(!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
        div.removeClass('header__widget--opened');
      }
		}
	});
});
$('.modal-link').on('click', function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 0.50
  });
});
$('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
$('.slider-product').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-product__arrow-left"></div>',
  nextArrow: '<div class="slider-product__arrow-right"></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});
$('.slider-reviews').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-reviews__arrow-left"></div>',
  nextArrow: '<div class="slider-reviews__arrow-right"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});
$(function() {
	let hahTab = window.location.hash;	
	let tabsLink = $('.tabs-link');
	let tabsmodal = $('.tabs-modal');

	if(hahTab) {		
		let tabActive = $('.tabs-link[href="'+hahTab+'"]').attr('href');

		if(tabActive) {
			chanchgTab(tabActive);
		}
	}

	tabsLink.on('click', function(e) {
		e.preventDefault();	
		chanchgTab($(this).attr('href'));
	});

	function chanchgTab(tabName) {
		let tabs = $('.tabs__item');
		let tabsLink = $('.tabs-link');

		tabs.removeClass('tabs__item--active');
		$(tabName).addClass('tabs__item--active');

		tabsLink.removeClass('menu-tab__link--active');
		$('.tabs-link[href="'+tabName+'"]').addClass('menu-tab__link--active');
	}

	/*tabsmodal.on('click', function(e) {
		e.preventDefault();	
		chanchgTabModal($(this).attr('href'));
	});

	function chanchgTabModal() {
		$('.tabs-modal').toggleClass('menu-tab__link--active');
	}*/
});
$(function() {
	let btnScroll = $('.to-top');

	function scrollBtn() {
		let top = $(this).scrollTop();

		if ( top > 600) {
			btnScroll.fadeIn(350);
		}
		else {
			btnScroll.fadeOut(500);
		}
	};
	scrollBtn();
	
	$(document).on('scroll', scrollBtn);
	btnScroll.on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 350);
	});
});