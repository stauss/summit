function parallax(){var e=$(window).scrollTop();$("#images").css("top",0-e*-0.1+"px")}function scrollFn(){var e=$(window).scrollTop(),t=$(window).height(),n=$(window).width(),r=$("#indexHero > div"),i=$("#singlePostArticleNav");t-428<e?r.addClass("transOverlay"):r.removeClass("transOverlay");if(n>=755)if(e>520){i.addClass("stickyShow");i.removeClass("stickyHide")}else if(i.hasClass("stickyShow")){i.addClass("stickyHide");i.removeClass("stickyShow")}}function cancelZoom(){function s(e){t.content=n+(e.type=="blur"?n.match(i,"")?"":r+10:r+1)}var e=document,t,n,r=",maximum-scale=",i=/,*maximum\-scale\=\d*\.*\d*/;if(!this.addEventListener||!e.querySelector)return;t=e.querySelector('meta[name="viewport"]');n=t.content;this.addEventListener("focus",s,!0);this.addEventListener("blur",s,!1)}$(document).ready(function(){var e=$(".menuWrap"),t=$("#mobileMenuTrig");t.on("click",function(){e.addClass("showMenu")});$(window).bind("scroll",function(e){scrollFn()});cancelZoom();$(window).resize(function(){var e=$(".postWrap").width(),t=$(".stickyArticleNav .centerStickyNav");t.css("width",e)});var n=$(".servicesListClientName li"),r=$(".servicesClientTextInner");n.mouseenter(function(){r.addClass("hidden");var e=$(this).data().clientLink;$("#"+e).removeClass("hidden")});n.mouseleave(function(){r.removeClass("hidden");var e=$(this).data().clientLink;$("#"+e).addClass("hidden")})});(function(e){e.fn.cancelZoom=function(){return this.each(cancelZoom)};e("input:text,select,textarea").cancelZoom()})(jQuery);(function(e,t,n){var r=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},i=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")!==-1},s=function(e,t){i(e,t)||(e.className=e.className===""?t:e.className+" "+t)},o=function(e,t){e.className=r((" "+e.className+" ").replace(" "+t+" "," "))},u=function(e,t){if(e)do{if(e.id===t)return!0;if(e.nodeType===9)break}while(e=e.parentNode);return!1},a=t.documentElement,f=e.Modernizr.prefixed("transform"),l=e.Modernizr.prefixed("transition"),c=function(){var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};return e.hasOwnProperty(l)?e[l]:!1}();e.App=function(){var n=!1,r={},f=t.getElementById("inner-wrap"),h=!1,p="js-nav";r.init=function(){if(n)return;n=!0;var d=function(e){e&&e.target===f&&t.removeEventListener(c,d,!1);h=!1};r.closeNav=function(){if(h){var n=c&&l?parseFloat(e.getComputedStyle(f,"")[l+"Duration"]):0;n>0?t.addEventListener(c,d,!1):d(null)}o(a,p)};r.openNav=function(){if(h)return;s(a,p);h=!0};r.toggleNav=function(e){h&&i(a,p)?r.closeNav():r.openNav();e&&e.preventDefault()};t.getElementById("nav-open-btn").addEventListener("click",r.toggleNav,!1);t.getElementById("nav-close-btn").addEventListener("click",r.toggleNav,!1);t.addEventListener("click",function(e){if(h&&!u(e.target,"nav")){e.preventDefault();r.closeNav()}},!0);s(a,"js-ready")};return r}();e.addEventListener&&e.addEventListener("DOMContentLoaded",e.App.init,!1)})(window,window.document);