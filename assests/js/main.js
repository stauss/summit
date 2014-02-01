$(document).ready(function() {
	






	// when the window is scrolled
	$(window).bind('scroll', function(e) {

		// scroll function
		scrollFn();
		
	});


	cancelZoom();




	$(window).resize(function() {
		var newWidth =  $('.postWrap').width(),
		    stickyHeader = $('.stickyArticleNav .centerStickyNav');
		stickyHeader.css('width', newWidth);
	});




});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#images').css('top', (0 - (scrollPosition * -.1)) + 'px');
}



function scrollFn() {

		var scrollPos = $(window).scrollTop(),   // Scroll from top position
		    windowH = $(window).height(),      // Check Window height on scroll
		    windowW = $(window).width(),      // Check Window height on scroll
		    overlay = $('#indexHero > div'),   // cache the ovelay div for ref
		    blogPostNav = $('#singlePostArticleNav');
	
		// if the height of the window - 100 is less than the scroll from the top then fade in
		if( windowH - 428 < scrollPos ){
			overlay.addClass('transOverlay'); // add the active class
		} else {
			overlay.removeClass('transOverlay'); // remove the active class
		}

		if(windowW >= 755) {
			// blog article sticky nav
			if(scrollPos > 520){
				blogPostNav.addClass('stickyShow');
				blogPostNav.removeClass('stickyHide');
			} 
			else if(blogPostNav.hasClass('stickyShow')){
				blogPostNav.addClass('stickyHide');
				blogPostNav.removeClass('stickyShow');
			}
		}


		//console.log(postWrapW);
		    // console.log(windowH + "height");
}





//---------------------------------------------------------------------------| Cancel Zoom on Mobile Inputs
function cancelZoom() {
    var d = document,
        viewport,
        content,
        maxScale = ',maximum-scale=',
        maxScaleRegex = /,*maximum\-scale\=\d*\.*\d*/;
 
    // this should be a focusable DOM Element
    if(!this.addEventListener || !d.querySelector) {
        return;
    }
 
    viewport = d.querySelector('meta[name="viewport"]');
    content = viewport.content;
 
    function changeViewport(event)
    {
        // http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
        viewport.content = content + (event.type == 'blur' ? (content.match(maxScaleRegex, '') ? '' : maxScale + 10) : maxScale + 1);
    }
 
    // We could use DOMFocusIn here, but it's deprecated.
    this.addEventListener('focus', changeViewport, true);
    this.addEventListener('blur', changeViewport, false);
}
 
// jQuery-plugin
(function($)
{
    $.fn.cancelZoom = function()
    {
        return this.each(cancelZoom);
    };
 
    // Usage:
    $('input:text,select,textarea').cancelZoom();
})(jQuery);
//---------------------------------------------------------------------------| Cancel Zoom on Mobile Inputs












