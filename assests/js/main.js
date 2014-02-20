$(document).ready(function() {
	




    var mMenuWrap = $('.menuWrap'),
        mTrigger = $('#mobileMenuTrig');

    mTrigger.on('click', function(){
        mMenuWrap.addClass('showMenu');
    });



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





// need to specify the size and only make work on mobile

//==========================================================================================================| Services Client Hovers

	// this is for the client hover states on the about page
	var liClient = $('.servicesListClientName li'),
	    liOriginalTxt = $('.servicesClientTextInner');



	// Mouse Enter --------------------------------------------------------
	liClient.mouseenter(function(){

		// hide the original text
		liOriginalTxt.addClass('hidden');

		// fine the el that is hovered | Grab the data attr | Drill down into that obj and grab the string itself
		var dataString = $(this).data().clientLink;

		// get the id of the stored data obj and remove the hidden
		$('#' + dataString).removeClass('hidden'); 

	});
	// --------------------------------------------------------------------



	// Mouse Off -----------------------------------------------------------
	liClient.mouseleave(function(){

		// show the original text
		liOriginalTxt.removeClass('hidden');

		// fine the el that is hovered | Grab the data attr | Drill down into that obj and grab the string itself
		var dataString = $(this).data().clientLink;

		// get the id of the stored data obj and hide
		$('#' + dataString).addClass('hidden');

	});
	// --------------------------------------------------------------------

//==========================================================================================================| Services Client Hovers !!! 





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





















































/*!
 *
 *  Copyright (c) David Bushell | http://dbushell.com/
 *
 */
(function(window, document, undefined)
{

    // helper functions

    var trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    };

    var hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };

    var addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };

    var removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };

    var hasParent = function(el, id)
    {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while((el = el.parentNode));
        }
        return false;
    };

    // normalize vendor prefixes

    var doc = document.documentElement;

    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function() {
            var props = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();

    window.App = (function()
    {

        var _init = false, app = { };

        var inner = document.getElementById('inner-wrap'),

            nav_open = false,

            nav_class = 'js-nav';


        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var closeNavEnd = function(e)
            {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };

            app.closeNav =function()
            {
                if (nav_open) {
                    // close navigation after transition or immediately
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }
                removeClass(doc, nav_class);
            };

            app.openNav = function()
            {
                if (nav_open) {
                    return;
                }
                addClass(doc, nav_class);
                nav_open = true;
            };

            app.toggleNav = function(e)
            {
                if (nav_open && hasClass(doc, nav_class)) {
                    app.closeNav();
                } else {
                    app.openNav();
                }
                if (e) {
                    e.preventDefault();
                }
            };

            // open nav with main "nav" button
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);

            // close nav with main "close" button
            document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);

            // close nav by touching the partial off-screen content
            document.addEventListener('click', function(e)
            {
                if (nav_open && !hasParent(e.target, 'nav')) {
                    e.preventDefault();
                    app.closeNav();
                }
            },
            true);

            addClass(doc, 'js-ready');

        };

        return app;

    })();

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', window.App.init, false);
    }

})(window, window.document);







