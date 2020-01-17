$(document).ready(function() {	

	const tssTitle = document.querySelector('.block-2nd .h2');
	const tssLi1 = document.querySelector('.block-2nd li:nth-child(1)');
	const tssLi2 = document.querySelector('.block-2nd li:nth-child(2)');
	const tssLi3 = document.querySelector('.block-2nd li:nth-child(3)');
	const tssBtn = document.querySelector('.block-2nd .btn');

	const twoNdImg = document.querySelector('#block-2nd__img');
	const twoNdKey1 = document.querySelector('#block-2nd__img-key-1');
	const twoNdKey2 = document.querySelector('#block-2nd__img-key-2');
	const twoNdPaper1 = document.querySelector('#block-2nd__img-paper-1');
	const twoNdPaper2 = document.querySelectorAll('.block-2nd__img-paper-2');
	const twoNdBtn = document.querySelector('#block-2nd__img-btn');
	const twoNdCheck = document.querySelector('#block-2nd__img_Fill-2');
	const twoNdShadow = document.querySelectorAll('.block-2nd__img-shadow');
	const twoNdCircle = document.querySelector('#block-2nd__img-oval');
	const twoNdLine1 = document.querySelector('#block-2nd__img-line-1');
	const twoNdLine2 = document.querySelector('#block-2nd__img-line-2');

	function twoNdAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(tssTitle, 0.35, {
				y: -40,
				opacity: 1
			})
			.to(tssLi1, 0.25, {
				y: -40,
				opacity: 1
			})
			.to(tssLi2, 0.25, {
				y: -40,
				opacity: 1
			})
			.to(tssLi3, 0.25, {
				y: -40,
				opacity: 1
			})
			.to(tssBtn, 0.25, {
				y: -40,
				opacity: 1
			});

		return tl;
	}

	function twoNdImgAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(twoNdImg, 0.35, {
				opacity: 1
			})
			.to(twoNdKey1, 0.4, {
				delay: 0.3,
				x: 25,
				y: 360,
				opacity: 1
			})
			.to(twoNdKey2, 0.4, {
				delay: -0.4,
				x: 14,
				y: 303,
				opacity: 1
			})
			.to(twoNdCheck, 0.1, {
				delay: 0,
				opacity: 1
			})
			.to(twoNdBtn, 0.1, {
				//delay: -0.1,
				opacity: 1
			})
			.to(twoNdPaper1, 0.01, {
				x: -20,
				y: 60,
				scaleX: 0.5,
				scaleY: 0
			})
			.to(twoNdPaper1, 0.2, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			})
			.to(twoNdLine1, 0.1, {
				delay: 0.2,
				fill: '#10C281'
			})
			.to(twoNdLine2, 0.1, {
				delay: -0.1,
				fill: '#10C281'
			})
			.to(twoNdCircle, 0.1, {
				delay: -0.1,
				fill: '#10C281'
			})
			.to(twoNdPaper2, 0.01, {	
				scaleX: 0.5,
				scaleY: 0.5
			})
			.to(twoNdPaper2, 0.2, {
				delay: 0.2,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			})
			.to(twoNdPaper2, 0.2, {
				delay: 0.2,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			});

		return tl;
	}
	
	const twoNdTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(twoNdAnimation(), 0);

	const twoNdController = new ScrollMagic.Controller();
	const twoNdScroll = new ScrollMagic.Scene({
		triggerElement: '.block-2nd',
		reverse: false
	})
		.setTween(twoNdTimeline)
		.addTo(twoNdController);

	const twoNdImgTimeline = gsap.timeline({force3D: true, defaults: { ease: Power1.easeOut } })
		.add(twoNdImgAnimation(), 1)

	const twoNdImgController = new ScrollMagic.Controller();
	const twoNdImgScroll = new ScrollMagic.Scene({
		triggerElement: '.block-2nd',
		reverse: false,
		triggerHook: 0.7
	})
		.setTween(twoNdImgTimeline)
		//.addIndicators()
		.addTo(twoNdImgController);
});
$(document).ready(function() {	

	const exchageTitle = document.querySelector('.block-exchage .h2');
	const exchageText = document.querySelector('.block-exchage .info-block__text');
	const exchageBtn = document.querySelector('.block-exchage .btn');
	const exchageImg = document.querySelector('.block-exchage__img');

	const exchageCurrencyBTN = document.querySelectorAll('#exchagePhoneBtn');

	const exchageCurrencyRUBL = document.querySelectorAll('#exchageCurrencyRUBL');	
	const exchageCurrencyRUBLmin = document.querySelectorAll('#exchageCurrencyRUBLmin');	
	const exchageCurrencyBIT = document.querySelectorAll('#exchageCurrencyBIT');	
	const exchageCurrencyBITmin = document.querySelectorAll('#exchageCurrencyBITmin');

	const exchageCurrencyS = document.querySelectorAll('#exchageCurrencyS');	
	const exchageCurrencySmin = document.querySelectorAll('#exchageCurrencySmin');	
	const exchageCurrencyBNB = document.querySelectorAll('#exchageCurrencyBNB');	
	const exchageCurrencyBNBmin = document.querySelectorAll('#exchageCurrencyBNBmin');

	const exchageCurrencyRU = document.querySelectorAll('#exchageCurrencyRU');	
	const exchageCurrencyRUmin = document.querySelectorAll('#exchageCurrencyRUmin');	
	const exchageCurrencyETH = document.querySelectorAll('#exchageCurrencyETH');	
	const exchageCurrencyETHmin = document.querySelectorAll('#exchageCurrencyETHmin');

	function exchageAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(exchageTitle, 0.35, {
				y: -40,
				opacity: 1
			})
			.to(exchageImg, 0.35, {
				y: -40,
				opacity: 1
			})
			.to(exchageText, 0.25, {
				delay: -0.35,
				y: -40,
				opacity: 1
			})
			.to(exchageBtn, 0.25, {
				y: -40,
				opacity: 1
			})
			;

		return tl;
	}

	function exchageCurrencyAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })			
			.to(exchageCurrencyBTN, 0.15, {
				x: 10,
				y: 5,
				scaleX: 0.85,
				scaleY: 0.85
			})
			.to(exchageCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(exchageCurrencyRUBLmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(exchageCurrencyRUBLmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyBITmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(exchageCurrencyBITmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyRUBLmin, 0.01, {
				y: 0
			})
			.to(exchageCurrencyBITmin, 0.01, {
				y: 0
			})
			.to(exchageCurrencyBTN, 0.15, {
				delay: 3.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(exchageCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(exchageCurrencyRUBLmin, 1, {				
				y: -120,
				opacity: 1
			})
			.to(exchageCurrencyRUBLmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyBITmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(exchageCurrencyBITmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyRUBL, 0.2, {
				delay: 1,
				opacity: 0
			})
			.to(exchageCurrencyBIT, 0.2, {
				delay: -0.1,
				opacity: 0
			})



			.to(exchageCurrencyS, 0.2, {
				delay: 1,
				opacity: 1
			})
			.to(exchageCurrencyBNB, 0.2, {
				delay: -0.1,
				opacity: 1
			})
			.to(exchageCurrencyBTN, 0.15, {
				delay: 2.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(exchageCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(exchageCurrencySmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(exchageCurrencySmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyBNBmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(exchageCurrencyBNBmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencySmin, 0.01, {
				y: 0
			})
			.to(exchageCurrencyBNBmin, 0.01, {
				y: 0
			})
			.to(exchageCurrencyBTN, 0.15, {
				delay: 3.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(exchageCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(exchageCurrencySmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(exchageCurrencySmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyBNBmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(exchageCurrencyBNBmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyS, 0.2, {
				delay: 1,
				opacity: 0
			})
			.to(exchageCurrencyBNB, 0.2, {
				delay: -0.1,
				opacity: 0
			})



			.to(exchageCurrencyETH, 0.2, {
				delay: 1,
				opacity: 1
			})
			.to(exchageCurrencyRU, 0.2, {
				delay: -0.1,
				opacity: 1
			})
			.to(exchageCurrencyBTN, 0.15, {
				delay: 2.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(exchageCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(exchageCurrencyETHmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(exchageCurrencyETHmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyRUmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(exchageCurrencyRUmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyETHmin, 0.01, {
				y: 0
			})
			.to(exchageCurrencyRUmin, 0.01, {
				y: 0
			})
			.to(exchageCurrencyBTN, 0.15, {
				delay: 3.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(exchageCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(exchageCurrencyETHmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(exchageCurrencyETHmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyRUmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(exchageCurrencyRUmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(exchageCurrencyETH, 0.2, {
				delay: 1,
				opacity: 0
			})
			.to(exchageCurrencyRU, 0.2, {
				delay: -0.1,
				opacity: 0
			})



			.to(exchageCurrencyRUBL, 0.2, {
				delay: 1,
				opacity: 1
			})
			.to(exchageCurrencyBIT, 0.2, {
				delay: -0.1,
				opacity: 1
			});;

		return tl;
	}
	
	const exchageTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(exchageAnimation(), 0);

	const exchageController = new ScrollMagic.Controller();
	const exchageScroll = new ScrollMagic.Scene({
		triggerElement: '.block-exchage',
		reverse: false
	})
		.setTween(exchageTimeline)
		.addTo(exchageController);

	const exchageCurrencyTimeline = gsap.timeline({ repeat: -1, defaults: { ease: Power1.easeOut } })
		.add(exchageCurrencyAnimation(), 2)
		.repeatDelay(1);

	const exchageCurrencyController = new ScrollMagic.Controller();
	const exchageCurrencyScroll = new ScrollMagic.Scene({
		triggerElement: '.block-exchage',
		reverse: false
	})
		.setTween(exchageCurrencyTimeline)
		.addTo(exchageCurrencyController);
});
$(document).ready(function() {
	const tssTitle = document.querySelector('.block-tss .h2');
	const tssLi1 = document.querySelector('.block-tss li:nth-child(1)');
	const tssLi2 = document.querySelector('.block-tss li:nth-child(2)');
	const tssLi3 = document.querySelector('.block-tss li:nth-child(3)');
	const tssBtn = document.querySelector('.block-tss .btn');
	const blockTssImg = document.querySelector('.block-tss__img');

	const blockTssKey1 = document.querySelector('#block-tss__img-key1');
	const blockTssKey2 = document.querySelector('#block-tss__img-key2');
	const blockTssKey2v2 = document.querySelector('#block-tss__img-key2-v2');
	const blockTssKey3 = document.querySelector('#block-tss__img-key3');
	const blockTssKey3v2 = document.querySelector('#block-tss__img-key3-v2');

	function tssAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(blockTssKey1, 0.01, {
				x: 0,
				y: -250
			})
			.to(blockTssKey2, 0.01, {
				x: 0,
				y: -400
			})
			.to(blockTssKey3, 0.01, {
				x: 0,
				y: -620
			})
			.to(tssTitle, 0.35, {
				y: -40,
				opacity: 1
			})
			.to(tssLi1, 0.25, {
				delay: -0.2,
				y: -40,
				opacity: 1
			})
			.to(tssLi2, 0.25, {
				y: -40,
				opacity: 1
			})
			.to(tssLi3, 0.25, {
				y: -40,
				opacity: 1
			})
			.to(tssBtn, 0.25, {
				y: -40,
				opacity: 1
			})
			;

		return tl;
	}

	function tssImgAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })			
			.to(blockTssImg, 0.5, {
				opacity: 1
			})			
			.to(blockTssKey1, 0.2, {
				y: 0,
				opacity: 1
			})
			.to(blockTssKey2, 0.2, {
				delay: -0.2,
				y: 0,
				opacity: 1
			})
			.to(blockTssKey3, 0.15, {
				delay: -0.2,
				y: 0,
				opacity: 1
			});

		return tl;
	}

	function tssImgAnimation2() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(blockTssKey2v2, 0.01, {			
				opacity: 1
			})
			.to(blockTssKey3v2, 0.01, {
				opacity: 1
			})
			.to(blockTssKey2, 0.01, {				
				opacity: 0
			})
			.to(blockTssKey3, 0.01, {
				opacity: 0
			})
			.to(blockTssKey2v2, 0.2, {
				y: 450,
				opacity: 0
			})
			.to(blockTssKey3v2, 0.2, {
				delay: -0.2,
				y: 250,
				opacity: 0
			})
			.to(blockTssKey2, 0.01, {	
				delay: 3,			
				opacity: 1
			})
			.to(blockTssKey3, 0.01, {
				opacity: 1
			});

		return tl;
	}


	const tssTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(tssAnimation(), 0)

	const tssController = new ScrollMagic.Controller();
	const tssScroll = new ScrollMagic.Scene({
		triggerElement: '.block-tss',
		reverse: false
	})
		.setTween(tssTimeline)
		.addTo(tssController);

	const tssImgTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(tssImgAnimation(), 0.5)

	const tssImgController = new ScrollMagic.Controller();
	const tssImgScroll = new ScrollMagic.Scene({
		triggerElement: '.block-tss',
		reverse: false
	})
		.setTween(tssImgTimeline)
		//.addIndicators()
		.addTo(tssImgController);

	const tssImgTimeline2 = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(tssImgAnimation2(), 0.1)

	const tssImgController2 = new ScrollMagic.Controller();
	const tssImgScroll2 = new ScrollMagic.Scene({
		triggerElement: '.screen--block-2nd',
		reverse: false,
		triggerHook: 0.8
	})
		.setTween(tssImgTimeline2)
		//.addIndicators()
		.addTo(tssImgController2);
});
function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<div class="get-started__item"><div><img src="images/get-started__icon--' + state.element.value.toLowerCase() + '.svg" class="get-started__icon" /></div> <div>' + state.text + '</div></div>'
  );
  return $state;
};

$(document).ready(function() {
  $(".get-started__select select").select2({
  	minimumResultsForSearch: Infinity,
	  templateResult: formatState,
	  templateSelection: formatState
	});
	$(".get-started__select").fadeTo(0, 1);
});

$(document).ready(function(){
  $('.get-started input').mask('(000) 000-00-00');
});
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
var hamburgersBody = document.querySelector("body");
var hamburgersMenu = document.querySelector(".header__menu");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
      hamburgersBody.classList.toggle("overflow-hidden");
      hamburgersMenu.classList.toggle("header__menu--open");
    }, false);
  });
}
$(function(){
	$('.menu a').on('click', function(e){
		if($('.header__menu--open').length) {
			$('.header__menu').toggleClass('header__menu--open');
			$('.hamburger').toggleClass('is-active');
			$('body').toggleClass('overflow-hidden');
		}

		if(!$('.top-in').length) {
			let linkId = $(this).attr('href').replace('/', '');
		  $('html,body').stop().animate({ scrollTop: $(linkId).offset().top - 200 }, 1500);
		  e.preventDefault();
		}
	});	
});

function getHash() {
	let hash = window.location.hash.replace('#', '');
	
	if (hash != '') {
		return hash;
	} else {
		return null;
	}
}

$(document).ready(function() {
  if (getHash() != null) {
    checkForScrolling();
  }
});

function checkForScrolling() {
  let elem = $('#' + getHash());

  if (elem.length > 0) {
    $('html,body').stop().animate({ scrollTop: $(elem).offset().top - 200 }, 1500);
  }
}

window.addEventListener('load', function () {
	const topBG = document.querySelector('.top__bg');
	const header = document.querySelector('.header');
	const topArrBottom = document.querySelector('.top__arr-bottom');
	const topTitle = document.querySelector('.top .h1');
	const topLead = document.querySelector('.top .lead');
	const topGetStarted = document.querySelector('.top .get-started');
	const topGetStartedBtn = document.querySelector('.top .get-started .btn');
	const topAppsLinkImgs = document.querySelectorAll('.top .apps-link img');
	const topAppsLinkImg1 = document.querySelector('.top .apps-link__item:first-child img');
	const topAppsLinkImg2 = document.querySelector('.top .apps-link__item:last-child img');
	const topAppsMobImg = document.querySelector('.top__mob');

	const topSVG__key = document.querySelector('#top__img-key');
	const topSVG__blocks = document.querySelectorAll('.top__img-rec');
	const topSVG__platform = document.querySelectorAll('#top__img-platform');
	const topSVG__phone = document.querySelectorAll('#top__img-phone-block');
	const topSVG__key1 = document.querySelector('#top__img-key1');
	const topSVG__key2 = document.querySelector('#top__img-key2');
	const topSVG__key3 = document.querySelector('#top__img-key3');
	const topSVG__key4 = document.querySelector('#top__img-key4');	
	const topSVG__block_in = document.querySelectorAll('.top__img-block-in');	
	const topCurrencyBTN = document.querySelectorAll('#top__img-btn');

	const topCurrencyRUBL = document.querySelectorAll('#topCurrencyRUBL');	
	const topCurrencyRUBLmin = document.querySelectorAll('#topCurrencyRUBLmin');	
	const topCurrencyBIT = document.querySelectorAll('#topCurrencyBIT');	
	const topCurrencyBITmin = document.querySelectorAll('#topCurrencyBITmin');

	const topCurrencyS = document.querySelectorAll('#topCurrencyS');	
	const topCurrencySmin = document.querySelectorAll('#topCurrencySmin');	
	const topCurrencyBNB = document.querySelectorAll('#topCurrencyBNB');	
	const topCurrencyBNBmin = document.querySelectorAll('#topCurrencyBNBmin');

	const topCurrencyRU = document.querySelectorAll('#topCurrencyRU');	
	const topCurrencyRUmin = document.querySelectorAll('#topCurrencyRUmin');	
	const topCurrencyETH = document.querySelectorAll('#topCurrencyETH');	
	const topCurrencyETHmin = document.querySelectorAll('#topCurrencyETHmin');

	//('html, body').animate({scrollTop: 0}, 8);

	let keyWidth = 80;

	/*function resizedw(){
		location.reload();
	}*/
	function resizeTop(){
		if($(window).width() >= 768) {
			keyWidth = 100;
		} else if($(window).width() >= 768) {
			keyWidth = 155;
		}
	}

	resizeTop();

	/*let doit;

	window.onresize = function(){
	  clearTimeout(doit);
	  doit = setTimeout(resizedw, 300);
	};*/

	function topBGAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(topBG, 0.35, {
				x: 600,
				y: 910
			})
			.to(header, 0.01, {
				delay: -0.1,
				opacity: 1
			})
			.to(topArrBottom, 0.01, {
				delay: -0.01,
				opacity: 1
			})
			.to(topTitle, 0.35, {
				delay: 0.15,
				y: -40,
				opacity: 1,
				ease: Power1.easeOut
			})
			.to(topLead, 0.35, {
				y: -40,
				opacity: 1,
				ease: Power1.easeOut
			})
			.to(topSVG__key, 0.3, {
				delay: -0.15,
				opacity: 1
			})
			.to(topSVG__blocks, 0.3, {
				delay: -0.1,
				opacity: 1
			})
			.to(topSVG__phone, 0.01, {
				y: 300
			})
			.to(topSVG__phone, 0.3, {
				y: 0,
				opacity: 0.5
			})
			.to(topSVG__phone, 0.1, {
				opacity: 1
			})
			.to(topSVG__platform, 0.01, {
				x: 200,
				y: 120,
				scaleX: 0,
				scaleY: 0
			})
			.to(topSVG__platform, 0.4, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				ease: Back.easeOut
			})
			.to(topGetStarted, 0.2, {
				delay: -1.2,
				opacity: 1
			})
			.to(topGetStartedBtn, 0.01, {
				delay: -1.2,
				scaleX: 0,
				x: -100				
			})
			.to(topGetStartedBtn, 0.25, {
				delay: -1.2,
				scaleX: 1,
				x: 0,				
				opacity: 1
			})
			.to(topAppsLinkImgs, 0.01, {
				delay: -0.5,
				scaleX: 0,
				scaleY: 0
			})
			.to(topAppsLinkImg1, 0.2, {
				delay: -0.5,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			})
			.to(topAppsLinkImg2, 0.2, {
				delay: -0.5,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			})
			.to(topAppsMobImg, 0.3, {
				delay: -1.7,
				opacity: 1
			});

		return tl;
	}

	function topKeyAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(topSVG__key, 0.1, {				
				y: -30,
				ease: Power1.easeOut
			})
			.to(topSVG__key, 0.3, {
				y: 180,
			})
			.to(topSVG__key2, 0.01, {
				delay: -0.05,
				opacity: 0
			})
			.to(topSVG__key1, 0.3, {
				delay: -0.05,				
				x: 120,
				y: 200,				
				scaleX: 0.01,
				opacity: 0
			})
			.to(topSVG__key3, 0.3, {
				delay: -0.3,
				x: 120,
				y: 230,				
				scaleX: 0.3,
				opacity: 0
			})
			.to(topSVG__key4, 0.3, {
				delay: -0.3,
				x: 120,				
				y: 230,				
				scaleX: 0.3,
				opacity: 0
			});

		return tl;
	}

	function topKeyAnimation_2() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(topSVG__key3, 0.4, {
				x: 195,
				y: 1720,
				opacity: 0.5
			})
			.to(topSVG__key4, 0.4, {
				delay: -0.4,
				x: 150,
				y: 1630,
				scaleX: 0.54,
				scaleY: 0.54,
				opacity: 0.5
			})	
			.to(topSVG__key3, 0.01, {
				opacity: 0
			})
			.to(topSVG__key4, 0.01, {
				opacity: 0
			})
			.to(twoNdKey1, 0.01, {
				delay: -0.01,
				opacity: 1
			})
			.to(twoNdKey2, 0.01, {
				delay: -0.02,
				opacity: 1
			})
			.to(twoNdImg, 0.5, {
				delay: -0.8,
				opacity: 1
			})
			.to(twoNdCheck, 0.1, {
				delay: 0,
				opacity: 1
			})
			.to(twoNdBtn, 0.1, {
				//delay: -0.1,
				opacity: 1
			})
			.to(twoNdPaper1, 0.01, {
				x: -20,
				y: 60,
				scaleX: 0.5,
				scaleY: 0
			})
			.to(twoNdPaper1, 0.2, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			})
			.to(twoNdLine1, 0.1, {
				delay: 0.2,
				fill: '#10C281'
			})
			.to(twoNdLine2, 0.1, {
				delay: -0.1,
				fill: '#10C281'
			})
			.to(twoNdCircle, 0.1, {
				delay: -0.1,
				fill: '#10C281'
			})
			.to(twoNdPaper2, 0.01, {	
				scaleX: 0.5,
				scaleY: 0.5
			})
			.to(twoNdPaper2, 0.2, {
				delay: 0.2,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			})
			.to(twoNdPaper2, 0.2, {
				delay: 0.2,
				scaleX: 1,
				scaleY: 1,
				opacity: 1
			});

		return tl;
	}

	function topCurrencyAnimation() {
		let tl = gsap.timeline({ defaults: { ease: Power0.easeNone } })
			.to(topCurrencyBTN, 0.15, {
				x: 10,
				y: 5,
				scaleX: 0.85,
				scaleY: 0.85
			})
			.to(topCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(topCurrencyRUBLmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(topCurrencyRUBLmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyBITmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(topCurrencyBITmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyRUBLmin, 0.01, {
				y: 0
			})
			.to(topCurrencyBITmin, 0.01, {
				y: 0
			})
			.to(topCurrencyBTN, 0.15, {
				delay: 3.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(topCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(topCurrencyRUBLmin, 1, {				
				y: -120,
				opacity: 1
			})
			.to(topCurrencyRUBLmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyBITmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(topCurrencyBITmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyRUBL, 0.2, {
				delay: 1,
				opacity: 0
			})
			.to(topCurrencyBIT, 0.2, {
				delay: -0.1,
				opacity: 0
			})



			.to(topCurrencyS, 0.2, {
				delay: 1,
				opacity: 1
			})
			.to(topCurrencyBNB, 0.2, {
				delay: -0.1,
				opacity: 1
			})
			.to(topCurrencyBTN, 0.15, {
				delay: 2.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(topCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(topCurrencySmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(topCurrencySmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyBNBmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(topCurrencyBNBmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencySmin, 0.01, {
				y: 0
			})
			.to(topCurrencyBNBmin, 0.01, {
				y: 0
			})
			.to(topCurrencyBTN, 0.15, {
				delay: 3.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(topCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(topCurrencySmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(topCurrencySmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyBNBmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(topCurrencyBNBmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyS, 0.2, {
				delay: 1,
				opacity: 0
			})
			.to(topCurrencyBNB, 0.2, {
				delay: -0.1,
				opacity: 0
			})



			.to(topCurrencyETH, 0.2, {
				delay: 1,
				opacity: 1
			})
			.to(topCurrencyRU, 0.2, {
				delay: -0.1,
				opacity: 1
			})
			.to(topCurrencyBTN, 0.15, {
				delay: 2.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(topCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(topCurrencyETHmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(topCurrencyETHmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyRUmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(topCurrencyRUmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyETHmin, 0.01, {
				y: 0
			})
			.to(topCurrencyRUmin, 0.01, {
				y: 0
			})
			.to(topCurrencyBTN, 0.15, {
				delay: 3.5,
				x: 10,
				y: 5,
				scaleX: 0.8,
				scaleY: 0.8
			})
			.to(topCurrencyBTN, 0.15, {
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1
			})
			.to(topCurrencyETHmin, 1, {
				y: -120,
				opacity: 1
			})
			.to(topCurrencyETHmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyRUmin, 1, {
				delay: -0.6,
				y: 120,
				opacity: 1
			})
			.to(topCurrencyRUmin, 0.4, {
				delay: -0.4,
				opacity: 0
			})
			.to(topCurrencyETH, 0.2, {
				delay: 1,
				opacity: 0
			})
			.to(topCurrencyRU, 0.2, {
				delay: -0.1,
				opacity: 0
			})



			.to(topCurrencyRUBL, 0.2, {
				delay: 1,
				opacity: 1
			})
			.to(topCurrencyBIT, 0.2, {
				delay: -0.1,
				opacity: 1
			});

		return tl;
	}

	const topTimeline = gsap.timeline({ paused:true, defaults: { ease: Power1.easeOut } })
		.add(topBGAnimation(), 0);
	
	let topKeyTrigger = '.top__arr-bottom';

	if($(window).width() >= 992 && $(window).width() <= 1200) {
		topKeyTrigger = '.screen--block-tss';
	}
	if($(window).width() >= 1921) {
		topKeyTrigger = '.screen--block-tss';
	}

	const topKeyTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(topKeyAnimation(), 0);

	const topKeyController = new ScrollMagic.Controller();
	const topKeyScroll = new ScrollMagic.Scene({
		triggerElement: topKeyTrigger,
		triggerHook: 0.68
	})
		.setTween(topKeyTimeline)
		//.addIndicators()
		.addTo(topKeyController);	

	const topCurrencyTimeline = gsap.timeline({ repeat: -1, defaults: { ease: Power1.easeOut } })
		.add(topCurrencyAnimation(), 4)
		.repeatDelay(1);

	/*let topKeyTrigger_2 = '.screen--block-2nd';

	const topKeyTimeline_2 = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.add(topKeyAnimation_2(), 0);

	const topKeyController_2 = new ScrollMagic.Controller();
	const topKeyScroll_2 = new ScrollMagic.Scene({
		triggerElement: topKeyTrigger_2
	})
		.setTween(topKeyTimeline_2)
		.addTo(topKeyController_2);	*/

	topTimeline.play();

	$('.top__arr-bottom').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#block-tss').offset().top - 200 }, 1500);
	});		
});
window.addEventListener('load', function() {
	const walletCard1 = document.querySelector('#wallet_card_1');
	const walletCard2 = document.querySelector('#wallet_card_2');
	const walletCard3 = document.querySelector('#wallet_card_3');
	const walletCard4 = document.querySelector('#wallet_card_4');


	function walletCardAnimation(first, card, numberY) {

		let tl = gsap.timeline({ defaults: { ease: Power1.easeIn } })
			.to(card, 1, {			
				top: 170,
				ease: Power1.easeInOut
			})
			.to(card, 0.5, {
				delay: -0.5,					
				ease: Power1.easeIn
			})
			.to(card, 0.01, {
				top: 0,
				opacity: 0,
				onComplete: walletSortCards,
				onCompleteParams: [first, card]
			})
			.to(card, 0.3, {
				opacity: 1,
				ease: Power1.easeIn			
			});

		return tl;
	}

	function walletMoveCardsAnimation(card1, card2, card3,) {
		let tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
			.to(card1, 0.35, {		
				top: 120
			})
			.to(card2, 0.35, {	
				delay: -0.25,	
				top: 80
			})
			.to(card3, 0.35, {	
				delay: -0.25,	
				top: 40
			});

		return tl;
	}

	function walletSortCards(first, newFirst) {
		let parentElement = document.querySelector('.wallet__cards');

		parentElement.insertBefore(newFirst, first);
	}

	if($('.wallet').length) {
		let walletTimeline = gsap.timeline({ repeat: -1, defaults: { ease: Power1.easeOut } })	
		.add(walletCardAnimation(walletCard4, walletCard1), 0)
		.add(walletMoveCardsAnimation(walletCard2, walletCard3, walletCard4), 0.6)

		.add(walletCardAnimation(walletCard1, walletCard2), 3)
		.add(walletMoveCardsAnimation(walletCard3, walletCard4, walletCard1), 3.6)

		.add(walletCardAnimation(walletCard2, walletCard3), 6)
		.add(walletMoveCardsAnimation(walletCard4, walletCard1, walletCard2), 6.6)

		.add(walletCardAnimation(walletCard3, walletCard4), 9)
		.add(walletMoveCardsAnimation(walletCard1, walletCard2, walletCard3), 9.6)

		.repeatDelay(3);


		const walletController = new ScrollMagic.Controller();
		const walletScroll = new ScrollMagic.Scene({
			triggerElement: '.wallet',
		})
			.setTween(walletTimeline)
			.addTo(walletController);
	}
}, false);