(function(e){function f(n,r,i){typeof n!="object"&&(n={});if(i){if(typeof n.isMenu!="boolean"){var s=i.children();n.isMenu=s.length==1&&s.is(r.panelNodetype)}return n}typeof n.onClick!="object"&&(n.onClick={});if(typeof n.onClick.setLocationHref!="undefined"){e[t].deprecated("onClick.setLocationHref option","!onClick.preventDefault");typeof n.onClick.setLocationHref=="boolean"&&(n.onClick.preventDefault=!n.onClick.setLocationHref)}n=e.extend(!0,{},e[t].defaults,n);if(e[t].useOverflowScrollingFallback()){switch(n.position){case"top":case"right":case"bottom":e[t].debug('position: "'+n.position+'" not supported when using the overflowScrolling-fallback.');n.position="left"}switch(n.zposition){case"front":case"next":e[t].debug('z-position: "'+n.zposition+'" not supported when using the overflowScrolling-fallback.');n.zposition="back"}}return n}function l(n){typeof n!="object"&&(n={});if(typeof n.panelNodeType!="undefined"){e[t].deprecated("panelNodeType configuration option","panelNodetype");n.panelNodetype=n.panelNodeType}n=e.extend(!0,{},e[t].configuration,n);typeof n.pageSelector!="string"&&(n.pageSelector="> "+n.pageNodetype);return n}function c(){r.$wndw=e(window);r.$html=e("html");r.$body=e("body");r.$allMenus=e();e.each([i,o,s],function(e,t){t.add=function(e){e=e.split(" ");for(var n in e)t[e[n]]=t.mm(e[n])}});i.mm=function(e){return"mm-"+e};i.add("menu ismenu panel list subtitle selected label spacer current highest hidden page blocker modal background opened opening subopened subopen fullsubopen subclose nooverflowscrolling");i.umm=function(e){e.slice(0,3)=="mm-"&&(e=e.slice(3));return e};o.mm=function(e){return"mm-"+e};o.add("parent style scrollTop offetLeft");s.mm=function(e){return e+".mm"};s.add("toggle open opening opened close closing closed update setPage setSelected transitionend webkitTransitionEnd touchstart touchend mousedown mouseup click keydown keyup resize");e[t]._c=i;e[t]._d=o;e[t]._e=s;e[t].glbl=r;e[t].useOverflowScrollingFallback(a)}function h(t,n){if(t.hasClass(i.current))return!1;var r=e("."+i.panel,n),s=r.filter("."+i.current);r.removeClass(i.highest).removeClass(i.current).not(t).not(s).addClass(i.hidden);if(t.hasClass(i.opened))s.addClass(i.highest).removeClass(i.opened).removeClass(i.subopened);else{t.addClass(i.highest);s.addClass(i.subopened)}t.removeClass(i.hidden).removeClass(i.subopened).addClass(i.current).addClass(i.opened);return"open"}function p(){r.$scrollTopNode||(r.$html.scrollTop()!=0?r.$scrollTopNode=r.$html:r.$body.scrollTop()!=0&&(r.$scrollTopNode=r.$body));return r.$scrollTopNode?r.$scrollTopNode.scrollTop():0}function d(e,t,n){var r=!1,i=function(){r||t.call(e[0]);r=!0};e.one(s.transitionend,i);e.one(s.webkitTransitionEnd,i);setTimeout(i,n*1.1)}var t="mmenu",n="4.1.9";if(e[t])return;var r={$wndw:null,$html:null,$body:null,$page:null,$blck:null,$allMenus:null,$scrollTopNode:null},i={},s={},o={},u=0;e[t]=function(e,t,n){r.$allMenus=r.$allMenus.add(e);this.$menu=e;this.opts=t;this.conf=n;this.serialnr=u++;this._init();return this};e[t].prototype={open:function(){this._openSetup();this._openFinish();return"open"},_openSetup:function(){var e=p();this.$menu.addClass(i.current);r.$allMenus.not(this.$menu).trigger(s.close);r.$page.data(o.style,r.$page.attr("style")||"").data(o.scrollTop,e).data(o.offetLeft,r.$page.offset().left);var t=0;r.$wndw.off(s.resize).on(s.resize,function(e,n){if(n||r.$html.hasClass(i.opened)){var s=r.$wndw.width();if(s!=t){t=s;r.$page.width(s-r.$page.data(o.offetLeft))}}}).trigger(s.resize,[!0]);this.conf.preventTabbing&&r.$wndw.off(s.keydown).on(s.keydown,function(e){if(e.keyCode==9){e.preventDefault();return!1}});this.opts.modal&&r.$html.addClass(i.modal);this.opts.moveBackground&&r.$html.addClass(i.background);this.opts.position!="left"&&r.$html.addClass(i.mm(this.opts.position));this.opts.zposition!="back"&&r.$html.addClass(i.mm(this.opts.zposition));this.opts.classes&&r.$html.addClass(this.opts.classes);r.$html.addClass(i.opened);this.$menu.addClass(i.opened);r.$page.scrollTop(e);this.$menu.scrollTop(0)},_openFinish:function(){var e=this;d(r.$page,function(){e.$menu.trigger(s.opened)},this.conf.transitionDuration);r.$html.addClass(i.opening);this.$menu.trigger(s.opening);window.scrollTo(0,1)},close:function(){var e=this;d(r.$page,function(){e.$menu.removeClass(i.current).removeClass(i.opened);r.$html.removeClass(i.opened).removeClass(i.modal).removeClass(i.background).removeClass(i.mm(e.opts.position)).removeClass(i.mm(e.opts.zposition));e.opts.classes&&r.$html.removeClass(e.opts.classes);r.$wndw.off(s.resize).off(s.keydown);r.$page.attr("style",r.$page.data(o.style));r.$scrollTopNode&&r.$scrollTopNode.scrollTop(r.$page.data(o.scrollTop));e.$menu.trigger(s.closed)},this.conf.transitionDuration);r.$html.removeClass(i.opening);this.$menu.trigger(s.closing);return"close"},_init:function(){this.opts=f(this.opts,this.conf,this.$menu);this.direction=this.opts.slidingSubmenus?"horizontal":"vertical";this._initPage(r.$page);this._initMenu();this._initBlocker();this._initPanles();this._initLinks();this._initOpenClose();this._bindCustomEvents();if(e[t].addons)for(var n=0;n<e[t].addons.length;n++)typeof this["_addon_"+e[t].addons[n]]=="function"&&this["_addon_"+e[t].addons[n]]()},_bindCustomEvents:function(){var t=this;this.$menu.off(s.open+" "+s.close+" "+s.setPage+" "+s.update).on(s.open+" "+s.close+" "+s.setPage+" "+s.update,function(e){e.stopPropagation()});this.$menu.on(s.open,function(n){if(e(this).hasClass(i.current)){n.stopImmediatePropagation();return!1}return t.open()}).on(s.close,function(n){if(!e(this).hasClass(i.current)){n.stopImmediatePropagation();return!1}return t.close()}).on(s.setPage,function(e,n){t._initPage(n);t._initOpenClose()});var n=this.$menu.find(this.opts.isMenu&&this.direction!="horizontal"?"ul, ol":"."+i.panel);n.off(s.toggle+" "+s.open+" "+s.close).on(s.toggle+" "+s.open+" "+s.close,function(e){e.stopPropagation()});this.direction=="horizontal"?n.on(s.open,function(n){return h(e(this),t.$menu)}):n.on(s.toggle,function(t){var n=e(this);return n.triggerHandler(n.parent().hasClass(i.opened)?s.close:s.open)}).on(s.open,function(t){e(this).parent().addClass(i.opened);return"open"}).on(s.close,function(t){e(this).parent().removeClass(i.opened);return"close"})},_initBlocker:function(){var t=this;r.$blck||(r.$blck=e('<div id="'+i.blocker+'" />').css("opacity",0).appendTo(r.$body));r.$blck.off(s.touchstart).on(s.touchstart,function(e){e.preventDefault();e.stopPropagation();r.$blck.trigger(s.mousedown)}).on(s.mousedown,function(e){e.preventDefault();r.$html.hasClass(i.modal)||t.$menu.trigger(s.close)})},_initPage:function(n){if(!n){n=e(this.conf.pageSelector,r.$body);if(n.length>1){e[t].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf.pageNodetype+">.");n=n.wrapAll("<"+this.conf.pageNodetype+" />").parent()}}n.addClass(i.page);r.$page=n},_initMenu:function(){var t=this;if(this.conf.clone){this.$menu=this.$menu.clone(!0);this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})}this.$menu.contents().each(function(){e(this)[0].nodeType==3&&e(this).remove()});this.$menu.prependTo("body").addClass(i.menu);this.$menu.addClass(i.mm(this.direction));this.opts.classes&&this.$menu.addClass(this.opts.classes);this.opts.isMenu&&this.$menu.addClass(i.ismenu);this.opts.position!="left"&&this.$menu.addClass(i.mm(this.opts.position));this.opts.zposition!="back"&&this.$menu.addClass(i.mm(this.opts.zposition))},_initPanles:function(){var t=this;this.__refactorClass(e("."+this.conf.listClass,this.$menu),"list");this.opts.isMenu&&e("ul, ol",this.$menu).not(".mm-nolist").addClass(i.list);var n=e("."+i.list+" > li",this.$menu);this.__refactorClass(n.filter("."+this.conf.selectedClass),"selected");this.__refactorClass(n.filter("."+this.conf.labelClass),"label");this.__refactorClass(n.filter("."+this.conf.spacerClass),"spacer");n.off(s.setSelected).on(s.setSelected,function(t,r){t.stopPropagation();n.removeClass(i.selected);typeof r!="boolean"&&(r=!0);r&&e(this).addClass(i.selected)});this.__refactorClass(e("."+this.conf.panelClass,this.$menu),"panel");this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("."+i.list).children().children().filter(this.conf.panelNodetype)).addClass(i.panel);var r=e("."+i.panel,this.$menu);r.each(function(n){var r=e(this),s=r.attr("id")||i.mm("m"+t.serialnr+"-p"+n);r.attr("id",s)});r.find("."+i.panel).each(function(n){var r=e(this),s=r.is("ul, ol")?r:r.find("ul ,ol").first(),u=r.parent(),a=u.find("> a, > span"),f=u.closest("."+i.panel);r.data(o.parent,u);if(u.parent().is("."+i.list)){var l=e('<a class="'+i.subopen+'" href="#'+r.attr("id")+'" />').insertBefore(a);a.is("a")||l.addClass(i.fullsubopen);t.direction=="horizontal"&&s.prepend('<li class="'+i.subtitle+'"><a class="'+i.subclose+'" href="#'+f.attr("id")+'">'+a.text()+"</a></li>")}});var u=this.direction=="horizontal"?s.open:s.toggle;r.each(function(n){var r=e(this),i=r.attr("id");e('a[href="#'+i+'"]',t.$menu).off(s.click).on(s.click,function(e){e.preventDefault();r.trigger(u)})});if(this.direction=="horizontal"){var a=e("."+i.list+" > li."+i.selected,this.$menu);a.add(a.parents("li")).parents("li").removeClass(i.selected).end().each(function(){var t=e(this),n=t.find("> ."+i.panel);if(n.length){t.parents("."+i.panel).addClass(i.subopened);n.addClass(i.opened)}}).closest("."+i.panel).addClass(i.opened).parents("."+i.panel).addClass(i.subopened)}else e("li."+i.selected,this.$menu).addClass(i.opened).parents("."+i.selected).removeClass(i.selected);var f=r.filter("."+i.opened);f.length||(f=r.first());f.addClass(i.opened).last().addClass(i.current);this.direction=="horizontal"&&r.find("."+i.panel).appendTo(this.$menu)},_initLinks:function(){var t=this;e("."+i.list+" > li > a",this.$menu).not("."+i.subopen).not("."+i.subclose).not('[rel="external"]').not('[target="_blank"]').off(s.click).on(s.click,function(n){var o=e(this),u=o.attr("href");t.__valueOrFn(t.opts.onClick.setSelected,o)&&o.parent().trigger(s.setSelected);var a=t.__valueOrFn(t.opts.onClick.preventDefault,o,u.slice(0,1)=="#");a&&n.preventDefault();t.__valueOrFn(t.opts.onClick.blockUI,o,!a)&&r.$html.addClass(i.blocking);t.__valueOrFn(t.opts.onClick.close,o,a)&&t.$menu.triggerHandler(s.close)})},_initOpenClose:function(){var t=this,n=this.$menu.attr("id");if(n&&n.length){this.conf.clone&&(n=i.umm(n));e('a[href="#'+n+'"]').off(s.click).on(s.click,function(e){e.preventDefault();t.$menu.trigger(s.open)})}var n=r.$page.attr("id");n&&n.length&&e('a[href="#'+n+'"]').off(s.click).on(s.click,function(e){e.preventDefault();t.$menu.trigger(s.close)})},__valueOrFn:function(e,t,n){return typeof e=="function"?e.call(t[0]):typeof e=="undefined"&&typeof n!="undefined"?n:e},__refactorClass:function(e,t){e.removeClass(this.conf[t+"Class"]).addClass(i[t])}};e.fn[t]=function(n,i){r.$wndw||c();n=f(n,i);i=l(i);return this.each(function(){var r=e(this);if(r.data(t))return;r.data(t,new e[t](r,n,i))})};e[t].version=n;e[t].defaults={position:"left",zposition:"back",moveBackground:!0,slidingSubmenus:!0,modal:!1,classes:"",onClick:{setSelected:!0}};e[t].configuration={preventTabbing:!0,panelClass:"Panel",listClass:"List",selectedClass:"Selected",labelClass:"Label",spacerClass:"Spacer",pageNodetype:"div",panelNodetype:"ul, ol, div",transitionDuration:400};(function(){var n=window.document,r=window.navigator.userAgent,i=document.createElement("div").style,s="ontouchstart"in n,o="WebkitOverflowScrolling"in n.documentElement.style,u=function(){return r.indexOf("Android")>=0?2.4>parseFloat(r.slice(r.indexOf("Android")+8)):!1}();e[t].support={touch:s,oldAndroidBrowser:u,overflowscrolling:function(){return s?o?!0:u?!1:!0:!0}()}})();e[t].useOverflowScrollingFallback=function(e){if(r.$html){typeof e=="boolean"&&r.$html[e?"addClass":"removeClass"](i.nooverflowscrolling);return r.$html.hasClass(i.nooverflowscrolling)}a=e;return e};e[t].debug=function(e){};e[t].deprecated=function(e,t){typeof console!="undefined"&&typeof console.warn!="undefined"&&console.warn("MMENU: "+e+" is deprecated, use "+t+" instead.")};var a=!e[t].support.overflowscrolling})(jQuery);