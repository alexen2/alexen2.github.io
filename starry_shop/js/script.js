$(function() {
	let questions = $('.accordion__question');
	let answers = $('.accordion__answer');

	questions.on('click', function() {
		let cross = $(this).find('.accordion__icon');
		let currentAnswer = $(this).next();

		//answers.not(currentAnswer).slideUp(500);
		currentAnswer.slideToggle(500);

		//questions.not(this).find('.accordion__icon').removeClass('accordion__icon--open');
		cross.toggleClass('accordion__icon--open');	

		//questions.not(this).removeClass('accordion__question--active');
		$(this).toggleClass('accordion__question--active');
	});
});


jQuery(document).ready(function() {
	jQuery("#hamburger").click(function () {
		jQuery(".header__menu-mobile").toggleClass('header__menu-mobile--show');
		setTimeout(function(){
		  jQuery('body').toggleClass('overflow-hidden');
		}, 100);
	});

	jQuery("#hamburger_open").click(function () {
		jQuery(".header__menu-mobile").toggleClass('header__menu-mobile--show');
		setTimeout(function(){
		  jQuery('body').toggleClass('overflow-hidden');
		}, 100);
	});

	jQuery(window).resize(function() {		
		if (jQuery(window).width() > 991 ) {			
			jQuery('.header__menu-mobile').removeClass('header__menu-mobile--show');
			jQuery('body').removeClass('overflow-hidden');
		}
	});

	$(window).scroll(function(){
		var $this = $(this),
			 	st = $this.scrollTop();

		if(st > 1){
			$('.wrapper').addClass('scrolled');
		}else{
			$('.wrapper').removeClass('scrolled');
		}
	});	
});
/*var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");      	
    }, false);
  });
}*/
$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('input__input--filled');
  } else {
      $this.addClass('input__input--filled');
  }
});
let productPageSlider = $('.product-page__slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

$('.product-page__colors a').on('click', function(e) {
	e.preventDefault();
	$('.product-page__colors a').removeClass('product-page__color-active');
	$(this).addClass('product-page__color-active');
	productPageSlider.slick('slickGoTo', $(this).attr('data-product-color'));
});

$('.buy-btn').on('click', function(e) {
  e.preventDefault();
  $('.buy-modal').removeClass('buy-modal--open');
  $(this).closest('.buy-form').find('.buy-modal').addClass('buy-modal--open');
});
$('.buy-modal a').on('click', function(e) {
  e.preventDefault();
  $('.buy-modal').removeClass('buy-modal--open');
});

$(function($){
  $(document).mouseup(function (e){
    let div = $('.buy-modal');
    let user_bag = $('.buy-btn'); 
    if (!div.is(e.target) && div.has(e.target).length === 0) { 
      if(!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
        div.removeClass('buy-modal--open');
      }
    }
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
$('.slider-top').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-top__arrow-left"></div>',
  nextArrow: '<div class="slider-top__arrow-right"></div>'
});
$('.slider-testimonial').slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: '<div class="slider-testimonial__arrow-left"></div>',
  nextArrow: '<div class="slider-testimonial__arrow-right"></div>',
  slidesToShow: 3,
  lidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2        
      }
    },
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(function() {
	let tabsLink = $('.tabs__menu a');

	tabsLink.on('click', function(e) {
		e.preventDefault();			
		chanchgTab($(this).attr('href'));
	});

	function chanchgTab(tabName) {
		let tab = $('.tabs__body li');
		
		tab.removeClass('tabs__body-active');
		$(tabName).addClass('tabs__body-active');

		tabsLink.removeClass('tabs__menu-active');
		$('.tabs__menu a[href="'+tabName+'"]').addClass('tabs__menu-active');
	}
});