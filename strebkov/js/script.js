var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
      
			var this_but = this;

			function fixed_but() {
			  this_but.style.position = this_but.style.position === 'fixed' ? '' : 'fixed';
			  this_but.style.top = this_but.style.top === '25px' ? '' : '25px';
			}

			if(this.classList.contains("is-active")) {
				setTimeout(fixed_but, 500);
			} else {
				this_but.style.position = this_but.style.position === 'fixed' ? '' : 'fixed';
				this_but.style.top = this_but.style.top === '25px' ? '' : '25px';
			}			
    }, false);
  });
}
jQuery(document).ready(function() {
	jQuery("#hamburger").click(function () {
		jQuery(this).toggleClass('close');
		jQuery(".menu-mobile").toggleClass('menu-mobile--open');
		jQuery('body').toggleClass('overflow-hidden');
	});

	jQuery(window).resize(function() {		
		if (jQuery(window).width() > 767 ) {			
			jQuery('.menu-mobile').removeClass('menu-mobile--open');
			jQuery('body').removeClass('overflow-hidden');
		}
	});

	$(window).scroll(function(){
		var $this = $(this),
			 	st = $this.scrollTop();

		if(st > 285){
			$('.wrapper').addClass('scrolled');
		}else{
			$('.wrapper').removeClass('scrolled');
		}
	});	
});
$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('input__input--filled');
  } else {
      $this.addClass('input__input--filled');
  }
});
$('.slider-case').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(document).ready(function(){
  $('.scroll-lets-talk').click( function(){  	    
    $('html, body').animate({ scrollTop: $('.lets-talk').offset().top }, 1000);
    $('#lets_talk_input').focus();
  });
});
