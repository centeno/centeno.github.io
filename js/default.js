jQuery(document).ready(function($) {
	$('a').prop('tabIndex', -1);

	// Initializing jQuery Nice Scroll
	$("html").niceScroll({
		cursorcolor:"#11abb0", // Set cursor color
		cursorwidth: "8", // Sety cursor width
		cursorborder: "" // Set cursor border color, default left none
	});

	// FitText Settings
	setTimeout(function() {
		$('h1.responsive-headline').fitText(1, { minFontSize: '28px', maxFontSize: '72px' });
	}, 100);

	// Smooth Scrolling
	$('.smoothscroll').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

	// Appear Animation
	new WOW().init();

	// Parallax for Header Content
	$(window).scroll(function(e){
		parallax();
	});
	function parallax() {
		var scrollPosition = $(window).scrollTop();
		$('.banner').css('margin-top', (0 - (scrollPosition * .8)) + 'px');
	}


	// Highlight the current section in the navigation bar
	var sections = $("section");
	var navigation_links = $("#m-nav a");

	sections.waypoint({
		handler: function(event, direction) {
			 var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = $('#m-nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},
		offset: '35%'
	});


	// Make sure that #header-background-image height is equal to the browser height.
	$('header').css({ 'height': $(window).height() });
	$(window).on('resize', function() {
		$('header').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});


	// On scroll blur header
	(function() {
		$(window).scroll(function() {
			var oVal;
			oVal = $(window).scrollTop() / 100;
			return $(".header-overlay").css("opacity", oVal);
		});
	}).call(this);


	// Fade In/Out Primary Navigation
	$(window).on('scroll', function() {
		var h = $('header').height();
		var y = $(window).scrollTop();
		var nav = $('#m-nav');

		if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
			nav.fadeOut('fast');
		} else {
			if (y < h*.20) {
				nav.removeClass('opaque').fadeIn('fast');
			} else {
				nav.addClass('opaque').fadeIn('fast');
			}
		}
	});

	/*
	// Modal Popup
	$('.he-view a').magnificPopup({
		type:'inline',
		fixedContentPos: false,
		removalDelay: 200,
		showCloseBtn: false,
		mainClass: 'mfp-fade'
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	// Portifolio
	(function($) {
		"use strict";
		var $container = $('.portfolio'),
			$items = $container.find('.portfolio-item'),
			portfolioLayout = 'fitRows';

		if( $container.hasClass('portfolio-centered') ) {
			portfolioLayout = 'masonry';
		}

		$container.isotope({
			filter: '*',
			animationEngine: 'best-available',
			layoutMode: portfolioLayout,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			},
			masonry: { }
		}, refreshWaypoints());

		function refreshWaypoints() {
			setTimeout(function() { }, 1000);   
		}

		$('nav.portfolio-filter ul a').on('click', function() {
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector }, refreshWaypoints());
			$('nav.portfolio-filter ul a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		function getColumnNumber() { 
			var winWidth = $(window).width(), 
			columnNumber = 1;
			if (winWidth > 1200) {
			columnNumber = 5;
			} else if (winWidth > 950) {
			columnNumber = 4;
			} else if (winWidth > 600) {
			columnNumber = 3;
			} else if (winWidth > 400) {
			columnNumber = 2;
			} else if (winWidth > 250) {
			columnNumber = 1;
			}
			return columnNumber;
		}       

		function setColumns() {
			var winWidth = $(window).width(), 
			columnNumber = getColumnNumber(), 
			itemWidth = Math.floor(winWidth / columnNumber);

			$container.find('.portfolio-item').each(function() { 
				$(this).css( { 
					width : itemWidth + 'px' 
				});
			});
		}

		function setPortfolio() { 
			setColumns();
			$container.isotope('reLayout');
		}

		$container.imagesLoaded(function () { 
			setPortfolio();
		});

		$(window).on('resize', function () { 
			setPortfolio();          
		});
	})(jQuery);
	*/
});







