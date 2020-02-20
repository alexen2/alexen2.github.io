$('.header__btn').click(function() {
  if($('body .header__btn--opened').length) {
    $('.header__mobile').fadeOut(500);
  } else {
    $('.header__mobile').fadeIn(500);
  }
  $('.header__btn').toggleClass('header__btn--opened');
});


$(window).scroll(function(){
  let $this = $(this),
       st = $this.scrollTop();

  if(st > 285){
    $('body').addClass('scrolled');
  }else{
    $('body').removeClass('scrolled');
  }

  headerTopIndicator();
});

function headerTopIndicator() {
  let windowScrollTop = $(window).scrollTop();
  let docHeight = $(document).height();
  let winHeight = $(window).height();
  let scrollPercent = (windowScrollTop / (docHeight - winHeight)) * 100;

  $('.header__top').css('width', scrollPercent + '%')
}
$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('cool-input__input_filled');
  } else {
      $this.addClass('cool-input__input_filled');
  }
});
$('.input--phone .input__input').mask('+7 (000) 000-0000');
$(function(){
	$('.menu a').on('click', function(e){
		e.preventDefault();

		if($('.header__btn--opened').length) {
			$('.header__mobile').fadeOut(500);
			$('.header__btn').toggleClass('header__btn--opened');
		}		
		
		let linkId = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(linkId).offset().top - 200 }, 1500);
	});	
});
$('.modal-link').on('click', function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 0.50
  });
});
$('.select__select').selectize({
  create: true,
  sortField: 'text'
});

$('.select__select input').prop("readonly", true);
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