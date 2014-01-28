$(document).ready(function() {
	


	// when the window is scrolled
	$(window).bind('scroll', function(e) {

		var scrollPos = $(window).scrollTop(),   // Scroll from top position
		      windowH = $(window).height(),      // Check Window height on scroll
		      overlay = $('#indexHero > div');   // cache the ovelay div for ref
	
		// if the height of the window - 100 is less than the scroll from the top then fade in
		if( windowH - 200 < scrollPos ){
			overlay.addClass('transOverlay'); // add the active class
		} else {
			overlay.removeClass('transOverlay'); // remove the active class
		}




		    // console.log(scrollPos);
		    // console.log(windowH + "height");

	});


		
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#images').css('top', (0 - (scrollPosition * -.1)) + 'px');
}