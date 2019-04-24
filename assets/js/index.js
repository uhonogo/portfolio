(function ($) {

	'use strict';

	// hide/show the current color mode icons
	$(window).bind("load", function() {
		var dark_body = $("body").hasClass('dark_mode');
		var light_body = $("body").hasClass('light_mode');

		if ( dark_body === true ) {
			$('.dark_mod_icons').remove();
		} else if ( dark_body === false ) {
			$('.light_mod_icons').remove();
		};
	});

	$(document).ready( function() {

		var message_block = $('.message_block.header');
		var i = 0;
		var active_count = 1;
		
		// get sections for animation
		var sections_id = {
			names: $('.main_content section').each( function () {
				var section_name = $(this).attr('id');
			})
		};

		for( i = 0; i < sections_id.names.length; i++ ) {
			var section_name = sections_id.names[i].id;
			scrolling( section_name, i );

		};

		function scrolling( sectionName, id ) {
			$( window ).scroll(function() {

				var section_height  = sections_id.names[id].offsetHeight;

				var top_distance	= $( '#' + sectionName ).offset().top;
				var bottom_distance = $( '#' + sectionName ).offset().top + section_height;

				var w_height = $(window).height() / 2;	// Windows height
				var scroll   = $(window).scrollTop() + w_height ; // Scroll top distance

				var scrollTop_distance	= top_distance - scroll;
				var scrollBottom_distance = bottom_distance - scroll;
				// console.log(scrollBottom_distance);
				
				if ( scrollTop_distance <= 0 ) {
					$('.message_block.' + sectionName).show();
					$('.message_block.' + sectionName).addClass('active');
					$('.message_block').removeClass('bb');
					$('#' + id).addClass('bb');
				} else {
					$('.message_block.' + sectionName).removeClass('active');
				};
			});
		};

		$( window ).scroll(function () {
			var w_height = 640 - $(window).height() / 2;// Windows height
			var scroll   = $(window).scrollTop(); // Scroll top distance
			
			if ( scroll >= w_height ) {
				message_block.removeClass('first_active');
			} else if ( scroll < w_height ) {
				message_block.addClass('first_active');
			};
		});

		$('.menu_button').click( function () {
			$(this).toggleClass('clicked');
			$('.menu_block').toggleClass('show');
			$('.fullSize').toggleClass('show')
		});

		$('.nav-item').click( function () {
			$('.menu_button').toggleClass('clicked');
			$('.menu_block').toggleClass('show');
			$('.fullSize').toggleClass('show')
		});
	});
	$(document).ready(function() {
		/**
		* Smooth scrolling to page anchor on click
		**/
		$("a[href*='#']:not([href='#'])").click(function() {
			if (
				location.hostname == this.hostname
				&& this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
			) {
				var anchor = $(this.hash);
				anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
				if ( anchor.length ) {
					$("html, body").animate( { scrollTop: anchor.offset().top }, 300);
				}
			}
		});
	});
})(jQuery);