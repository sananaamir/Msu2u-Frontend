"use strict";angular.module("msu2uAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/directory",{templateUrl:"views/directory.html",controller:"DirectorycontrollerCtrl"}).when("/maps",{templateUrl:"views/maps.html",controller:""}).when("/wfma",{templateUrl:"views/wfma.html",controller:"WfmacontrollerCtrl"}).when("/news",{templateUrl:"views/news.html",controller:"NewscontrollerCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("msu2uAppApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("msu2uAppApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("msu2uAppApp").controller("DirectorycontrollerCtrl",["$scope","$http","$templateCache",function(a,b,c){a.fetch=function(){a.code="null",a.response="null",b({method:"GET",url:"https://secure.mwsu.edu/api-2/public/staff",cache:c}).success(function(b,c){a.status=c,a.data=b}).error(function(b,c){a.data=b||"Request failed",a.status=c})},a.fetch()}]),angular.module("msu2uAppApp").controller("WfmacontrollerCtrl",["$scope","$http","$templateCache",function(a,b,c){a.fetch=function(){a.code="null",a.response="null",b({method:"GET",url:"http://cs.mwsu.edu/msu2u-api/v1/wfma",cache:c}).success(function(b,c){a.status=c,a.data=b}).error(function(b,c){a.data=b||"Request failed",a.status=c})},a.fetch()}]),angular.module("msu2uAppApp").controller("NewscontrollerCtrl",["$scope","$http","$templateCache",function(a,b,c){a.fetch=function(){a.code="null",a.response="null",b({method:"GET",url:"http://cs.mwsu.edu/msu2u-api/v1/news",cache:c}).success(function(b,c){a.status=c,a.data=b}).error(function(b,c){a.data=b||"Request failed",a.status=c})},a.fetch()}]),function(a){!function(b,c,d,e){d.swipebox=function(f,g){var h={useCSS:!0,hideBarsDelay:3e3},i=this,j=d(f),f=f,k=f.selector,l=d(k),m=c.createTouch!==e||"ontouchstart"in b||"onmsgesturechange"in b||navigator.msMaxTouchPoints,n=!!b.SVGSVGElement,o='<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>';i.settings={},i.init=function(){i.settings=d.extend({},h,g),l.click(function(a){a.preventDefault(),a.stopPropagation(),index=j.index(d(this)),p.target=d(a.target),p.init(index)})};var p={init:function(a){this.target.trigger("swipebox-start"),this.build(),this.openSlide(a),this.openImg(a),this.preloadImg(a+1),this.preloadImg(a-1)},build:function(){var a=this;if(d("body").append(o),a.doCssTrans()&&(d("#swipebox-slider").css({"-webkit-transition":"left 0.4s ease","-moz-transition":"left 0.4s ease","-o-transition":"left 0.4s ease","-khtml-transition":"left 0.4s ease",transition:"left 0.4s ease"}),d("#swipebox-overlay").css({"-webkit-transition":"opacity 1s ease","-moz-transition":"opacity 1s ease","-o-transition":"opacity 1s ease","-khtml-transition":"opacity 1s ease",transition:"opacity 1s ease"}),d("#swipebox-action, #swipebox-caption").css({"-webkit-transition":"0.5s","-moz-transition":"0.5s","-o-transition":"0.5s","-khtml-transition":"0.5s",transition:"0.5s"})),n){var c=d("#swipebox-action #swipebox-close").css("background-image");c=c.replace("png","svg"),d("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({"background-image":c})}j.each(function(){d("#swipebox-slider").append('<div class="slide"></div>')}),a.setDim(),a.actions(),a.keyboard(),a.gesture(),a.animBars(),d(b).resize(function(){a.setDim()}).resize()},setDim:function(){var a={width:d(b).width(),height:b.innerHeight?b.innerHeight:d(b).height()};d("#swipebox-overlay").css(a)},supportTransition:function(){for(var a="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" "),b=0;b<a.length;b++)if(c.createElement("div").style[a[b]]!==e)return a[b];return!1},doCssTrans:function(){return i.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){if(m){var a=this,b=null,c=10,e={},f={},g=d("#swipebox-caption, #swipebox-action");g.addClass("visible-bars"),a.setTimeout(),d("body").bind("touchstart",function(a){return d(this).addClass("touching"),f=a.originalEvent.targetTouches[0],e.pageX=a.originalEvent.targetTouches[0].pageX,d(".touching").bind("touchmove",function(a){a.preventDefault(),a.stopPropagation(),f=a.originalEvent.targetTouches[0]}),!1}).bind("touchend",function(h){h.preventDefault(),h.stopPropagation(),b=f.pageX-e.pageX,b>=c?a.getPrev():-c>=b?a.getNext():g.hasClass("visible-bars")?(a.clearTimeout(),a.hideBars()):(a.showBars(),a.setTimeout()),d(".touching").off("touchmove").removeClass("touching")})}},setTimeout:function(){if(i.settings.hideBarsDelay>0){var a=this;a.clearTimeout(),a.timeout=b.setTimeout(function(){a.hideBars()},i.settings.hideBarsDelay)}},clearTimeout:function(){b.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var a=d("#swipebox-caption, #swipebox-action");this.doCssTrans()?a.addClass("visible-bars"):(d("#swipebox-caption").animate({top:0},500),d("#swipebox-action").animate({bottom:0},500),setTimeout(function(){a.addClass("visible-bars")},1e3))},hideBars:function(){var a=d("#swipebox-caption, #swipebox-action");this.doCssTrans()?a.removeClass("visible-bars"):(d("#swipebox-caption").animate({top:"-50px"},500),d("#swipebox-action").animate({bottom:"-50px"},500),setTimeout(function(){a.removeClass("visible-bars")},1e3))},animBars:function(){var a=this,b=d("#swipebox-caption, #swipebox-action");b.addClass("visible-bars"),a.setTimeout(),d("#swipebox-slider").click(function(){b.hasClass("visible-bars")||(a.showBars(),a.setTimeout())}),d("#swipebox-action").hover(function(){a.showBars(),b.addClass("force-visible-bars"),a.clearTimeout()},function(){b.removeClass("force-visible-bars"),a.setTimeout()})},keyboard:function(){var a=this;d(b).bind("keyup",function(b){b.preventDefault(),b.stopPropagation(),37==b.keyCode?a.getPrev():39==b.keyCode?a.getNext():27==b.keyCode&&a.closeSlide()})},actions:function(){var b=this;j.length<2?d("#swipebox-prev, #swipebox-next").hide():(d("#swipebox-prev").bind("click touchend",function(a){a.preventDefault(),a.stopPropagation(),b.getPrev(),b.setTimeout()}),d("#swipebox-next").bind("click touchend",function(a){a.preventDefault(),a.stopPropagation(),b.getNext(),b.setTimeout()})),d("#swipebox-close").bind("click touchend",function(){b.closeSlide(),a(".gallery").delay(1).show(0),a(".portfolio-wide").delay(1).show(0)})},setSlide:function(a,b){b=b||!1;var c=d("#swipebox-slider");this.doCssTrans()?c.css({left:100*-a+"%"}):c.animate({left:100*-a+"%"}),d("#swipebox-slider .slide").removeClass("current"),d("#swipebox-slider .slide").eq(a).addClass("current"),this.setTitle(a),b&&c.fadeIn(),d("#swipebox-prev, #swipebox-next").removeClass("disabled"),0==a?d("#swipebox-prev").addClass("disabled"):a==j.length-1&&d("#swipebox-next").addClass("disabled")},openSlide:function(a){d("html").addClass("swipebox"),d(b).trigger("resize"),this.setSlide(a,!0)},preloadImg:function(a){var b=this;setTimeout(function(){b.openImg(a)},1e3)},openImg:function(a){var b=this;return 0>a||a>=j.length?!1:void b.loadImg(j.eq(a).attr("href"),function(){d("#swipebox-slider .slide").eq(a).html(this)})},setTitle:function(a){d("#swipebox-caption").empty(),j.eq(a).attr("title")&&d("#swipebox-caption").append(j.eq(a).attr("title"))},loadImg:function(a,b){var c=d("<img>").on("load",function(){b.call(c)});c.attr("src",a)},getNext:function(){var a=this;index=d("#swipebox-slider .slide").index(d("#swipebox-slider .slide.current")),index+1<j.length?(index++,a.setSlide(index),a.preloadImg(index+1)):(d("#swipebox-slider").addClass("rightSpring"),setTimeout(function(){d("#swipebox-slider").removeClass("rightSpring")},500))},getPrev:function(){var a=this;index=d("#swipebox-slider .slide").index(d("#swipebox-slider .slide.current")),index>0?(index--,a.setSlide(index),a.preloadImg(index-1)):(d("#swipebox-slider").addClass("leftSpring"),setTimeout(function(){d("#swipebox-slider").removeClass("leftSpring")},500))},closeSlide:function(){var a=this;d(b).trigger("resize"),d("html").removeClass("swipebox"),a.destroy()},destroy:function(){var a=this;d(b).unbind("keyup"),d("body").unbind("touchstart"),d("body").unbind("touchmove"),d("body").unbind("touchend"),d("#swipebox-slider").unbind(),d("#swipebox-overlay").remove(),j.removeData("_swipebox"),a.target.trigger("swipebox-destroy")}};i.init()},d.fn.swipebox=function(a){if(!d.data(this,"_swipebox")){var b=new d.swipebox(this,a);this.data("_swipebox",b)}}}(window,document,jQuery)}(jQuery),function(a){var b={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};a.scrollIt=function(c){var d=a.extend(b,c),e=0,f=a("[data-scroll-index]:last").attr("data-scroll-index"),g=function(b){if(!(0>b||b>f)){var c=a("[data-scroll-index="+b+"]").offset().top+d.topOffset+1;a("html,body").animate({scrollTop:c},d.scrollTime,d.easing)}},h=function(b){var c=a(b.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||a(b.target).closest("[data-scroll-goto]").attr("data-scroll-goto");g(parseInt(c))},i=function(b){var c=b.which;return!a("html,body").is(":animated")||c!=d.upKey&&c!=d.downKey?c==d.upKey&&e>0?(g(parseInt(e)-1),!1):c==d.downKey&&f>e?(g(parseInt(e)+1),!1):!0:!1},j=function(b){d.onPageChange&&b&&e!=b&&d.onPageChange(b),e=b,a("[data-scroll-nav]").removeClass(d.activeClass),a("[data-scroll-nav="+b+"]").addClass(d.activeClass)},k=function(){var b=a(window).scrollTop(),c=a("[data-scroll-index]").filter(function(c,e){return b>=a(e).offset().top+d.topOffset&&b<a(e).offset().top+d.topOffset+a(e).outerHeight()}),e=c.first().attr("data-scroll-index");j(e)};a(window).on("scroll",k).scroll(),a(window).on("keydown",i),a("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(a){a.preventDefault(),h(a)})}}(jQuery),function(){(function(a,b){var c=c||function(c){var d={dragger:null,disable:"none",addBodyClasses:!0,hyperextensible:!1,resistance:.5,flickThreshold:50,transitionSpeed:.35,easing:"ease-in-out",maxPosition:266,minPosition:-266,tapToClose:!0,touchToDrag:!1,slideIntent:40,minDragDistance:5e3},e={simpleStates:{opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},f={},g={hasTouch:null===b.ontouchstart,eventType:function(a){var b={down:g.hasTouch?"touchstart":"mousedown",move:g.hasTouch?"touchmove":"mousemove",up:g.hasTouch?"touchend":"mouseup",out:g.hasTouch?"touchcancel":"mouseout"};return b[a]},page:function(a,b){return g.hasTouch&&b.touches.length&&b.touches[0]?b.touches[0]["page"+a]:b["page"+a]},klass:{has:function(a,b){return-1!==a.className.indexOf(b)},add:function(a,b){!g.klass.has(a,b)&&d.addBodyClasses&&(a.className+=" "+b)},remove:function(a,b){d.addBodyClasses&&(a.className=a.className.replace(b,"").replace(/^\s+|\s+$/g,""))}},dispatchEvent:function(a){return"function"==typeof f[a]?f[a].call():void 0},vendor:function(){var a,c=b.createElement("div"),d="webkit Moz O ms".split(" ");for(a in d)if("undefined"!=typeof c.style[d[a]+"Transition"])return d[a]},transitionCallback:function(){return"Moz"===e.vendor||"ms"===e.vendor?"transitionend":e.vendor+"TransitionEnd"},canTransform:function(){return"undefined"!=typeof d.element.style[e.vendor+"Transform"]},deepExtend:function(a,b){var c;for(c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},g.deepExtend(a[c],b[c])):a[c]=b[c];return a},angleOfDrag:function(a,b){var c,d;return d=Math.atan2(-(e.startDragY-b),e.startDragX-a),0>d&&(d+=2*Math.PI),c=Math.floor(d*(180/Math.PI)-180),0>c&&c>-180&&(c=360-Math.abs(c)),Math.abs(c)},events:{addEvent:function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0},removeEvent:function(a,b,c){return a.addEventListener?a.removeEventListener(b,c,!1):a.attachEvent?a.detachEvent("on"+b,c):void 0},prevent:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}},parentUntil:function(a,b){for(var c="string"==typeof b;a.parentNode;){if(c&&a.getAttribute&&a.getAttribute(b))return a;if(!c&&a===b)return a;a=a.parentNode}return null}},h={translate:{get:{matrix:function(b){if(g.canTransform()){var c=a.getComputedStyle(d.element)[e.vendor+"Transform"].match(/\((.*)\)/),f=8;return c?(c=c[1].split(","),16===c.length&&(b+=f),parseInt(c[b],10)):0}return parseInt(d.element.style.left,10)}},easeCallback:function(){d.element.style[e.vendor+"Transition"]="",e.translation=h.translate.get.matrix(4),e.easing=!1,clearInterval(e.animatingInterval),0===e.easingTo&&(g.klass.remove(b.body,"snapjs-right"),g.klass.remove(b.body,"snapjs-left")),g.dispatchEvent("animated"),g.events.removeEvent(d.element,g.transitionCallback(),h.translate.easeCallback)},easeTo:function(a){g.canTransform()?(e.easing=!0,e.easingTo=a,d.element.style[e.vendor+"Transition"]="all "+d.transitionSpeed+"s "+d.easing,e.animatingInterval=setInterval(function(){g.dispatchEvent("animating")},1),g.events.addEvent(d.element,g.transitionCallback(),h.translate.easeCallback),h.translate.x(a)):(e.translation=a,h.translate.x(a)),0===a&&(d.element.style[e.vendor+"Transform"]="")},x:function(c){if(!("left"===d.disable&&c>0||"right"===d.disable&&0>c))if(d.hyperextensible||(c===d.maxPosition||c>d.maxPosition?c=d.maxPosition:(c===d.minPosition||c<d.minPosition)&&(c=d.minPosition)),c=parseInt(c,10),isNaN(c)&&(c=0),g.canTransform()){var f="translate3d("+c+"px, 0,0)";d.element.style[e.vendor+"Transform"]=f}else d.element.style.width=(a.innerWidth||b.documentElement.clientWidth)+"px",d.element.style.left=c+"px",d.element.style.right=""}},drag:{listen:function(){e.translation=0,e.easing=!1,g.events.addEvent(d.element,g.eventType("down"),h.drag.startDrag),g.events.addEvent(d.element,g.eventType("move"),h.drag.dragging),g.events.addEvent(d.element,g.eventType("up"),h.drag.endDrag)},stopListening:function(){g.events.removeEvent(d.element,g.eventType("down"),h.drag.startDrag),g.events.removeEvent(d.element,g.eventType("move"),h.drag.dragging),g.events.removeEvent(d.element,g.eventType("up"),h.drag.endDrag)},startDrag:function(a){var b=a.target?a.target:a.srcElement,c=g.parentUntil(b,"data-snap-ignore");if(c)return void g.dispatchEvent("ignore");if(d.dragger){var f=g.parentUntil(b,d.dragger);if(!f&&e.translation!==d.minPosition&&e.translation!==d.maxPosition)return}g.dispatchEvent("start"),d.element.style[e.vendor+"Transition"]="",e.isDragging=!0,e.hasIntent=null,e.intentChecked=!1,e.startDragX=g.page("X",a),e.startDragY=g.page("Y",a),e.dragWatchers={current:0,last:0,hold:0,state:""},e.simpleStates={opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},dragging:function(a){if(e.isDragging&&d.touchToDrag){var c,f=g.page("X",a),i=g.page("Y",a),j=e.translation,k=h.translate.get.matrix(4),l=f-e.startDragX,m=k>0,n=l;if(e.intentChecked&&!e.hasIntent)return;if(d.addBodyClasses&&(k>0?(g.klass.add(b.body,"snapjs-left"),g.klass.remove(b.body,"snapjs-right")):0>k&&(g.klass.add(b.body,"snapjs-right"),g.klass.remove(b.body,"snapjs-left"))),e.hasIntent===!1||null===e.hasIntent){var o=g.angleOfDrag(f,i),p=o>=0&&o<=d.slideIntent||360>=o&&o>360-d.slideIntent,q=o>=180&&o<=180+d.slideIntent||180>=o&&o>=180-d.slideIntent;e.hasIntent=q||p?!0:!1,e.intentChecked=!0}if(d.minDragDistance>=Math.abs(f-e.startDragX)||e.hasIntent===!1)return;g.events.prevent(a),g.dispatchEvent("drag"),e.dragWatchers.current=f,e.dragWatchers.last>f?("left"!==e.dragWatchers.state&&(e.dragWatchers.state="left",e.dragWatchers.hold=f),e.dragWatchers.last=f):e.dragWatchers.last<f&&("right"!==e.dragWatchers.state&&(e.dragWatchers.state="right",e.dragWatchers.hold=f),e.dragWatchers.last=f),m?(d.maxPosition<k&&(c=(k-d.maxPosition)*d.resistance,n=l-c),e.simpleStates={opening:"left",towards:e.dragWatchers.state,hyperExtending:d.maxPosition<k,halfway:k>d.maxPosition/2,flick:Math.abs(e.dragWatchers.current-e.dragWatchers.hold)>d.flickThreshold,translation:{absolute:k,relative:l,sinceDirectionChange:e.dragWatchers.current-e.dragWatchers.hold,percentage:k/d.maxPosition*100}}):(d.minPosition>k&&(c=(k-d.minPosition)*d.resistance,n=l-c),e.simpleStates={opening:"right",towards:e.dragWatchers.state,hyperExtending:d.minPosition>k,halfway:k<d.minPosition/2,flick:Math.abs(e.dragWatchers.current-e.dragWatchers.hold)>d.flickThreshold,translation:{absolute:k,relative:l,sinceDirectionChange:e.dragWatchers.current-e.dragWatchers.hold,percentage:k/d.minPosition*100}}),h.translate.x(n+j)}},endDrag:function(a){if(e.isDragging){g.dispatchEvent("end");var b=h.translate.get.matrix(4);if(0===e.dragWatchers.current&&0!==b&&d.tapToClose)return g.dispatchEvent("close"),g.events.prevent(a),h.translate.easeTo(0),e.isDragging=!1,void(e.startDragX=0);"left"===e.simpleStates.opening?e.simpleStates.halfway||e.simpleStates.hyperExtending||e.simpleStates.flick?e.simpleStates.flick&&"left"===e.simpleStates.towards?h.translate.easeTo(0):(e.simpleStates.flick&&"right"===e.simpleStates.towards||e.simpleStates.halfway||e.simpleStates.hyperExtending)&&h.translate.easeTo(d.maxPosition):h.translate.easeTo(0):"right"===e.simpleStates.opening&&(e.simpleStates.halfway||e.simpleStates.hyperExtending||e.simpleStates.flick?e.simpleStates.flick&&"right"===e.simpleStates.towards?h.translate.easeTo(0):(e.simpleStates.flick&&"left"===e.simpleStates.towards||e.simpleStates.halfway||e.simpleStates.hyperExtending)&&h.translate.easeTo(d.minPosition):h.translate.easeTo(0)),e.isDragging=!1,e.startDragX=g.page("X",a)}}}},i=function(a){a.element&&(g.deepExtend(d,a),e.vendor=g.vendor(),h.drag.listen())};this.open=function(a){g.dispatchEvent("open"),g.klass.remove(b.body,"snapjs-expand-left"),g.klass.remove(b.body,"snapjs-expand-right"),"left"===a?(e.simpleStates.opening="left",e.simpleStates.towards="right",g.klass.add(b.body,"snapjs-left"),g.klass.remove(b.body,"snapjs-right"),h.translate.easeTo(d.maxPosition)):"right"===a&&(e.simpleStates.opening="right",e.simpleStates.towards="left",g.klass.remove(b.body,"snapjs-left"),g.klass.add(b.body,"snapjs-right"),h.translate.easeTo(d.minPosition))},this.close=function(){g.dispatchEvent("close"),h.translate.easeTo(0)},this.expand=function(c){var d=a.innerWidth||b.documentElement.clientWidth;"left"===c?(g.dispatchEvent("expandLeft"),g.klass.add(b.body,"snapjs-expand-left"),g.klass.remove(b.body,"snapjs-expand-right")):(g.dispatchEvent("expandRight"),g.klass.add(b.body,"snapjs-expand-right"),g.klass.remove(b.body,"snapjs-expand-left"),d*=-1),h.translate.easeTo(d)},this.on=function(a,b){return f[a]=b,this},this.off=function(a){f[a]&&(f[a]=!1)},this.enable=function(){g.dispatchEvent("enable"),h.drag.listen()},this.disable=function(){g.dispatchEvent("disable"),h.drag.stopListening()},this.settings=function(a){g.deepExtend(d,a)},this.state=function(){var a,b=h.translate.get.matrix(4);return a=b===d.maxPosition?"left":b===d.minPosition?"right":"closed",{state:a,info:e.simpleStates}},i(c)};"undefined"!=typeof module&&module.exports&&(module.exports=c),"undefined"==typeof ender&&(this.Snap=c),"function"==typeof define&&define.amd&&define("snap",[],function(){return c})}).call(this,window,document)}(jQuery),function(){(function(){!function(a){return a.countdown=function(b,c){var d,e=this;return this.el=b,this.$el=a(b),this.$el.data("countdown",this),this.init=function(){return e.options=a.extend({},a.countdown.defaultOptions,c),e.options.refresh&&(e.interval=setInterval(function(){return e.render()},e.options.refresh)),e.render(),e},d=function(b){var c,d;return b=Date.parse(a.isPlainObject(e.options.date)?e.options.date:new Date(e.options.date)),d=(b-Date.parse(new Date))/1e3,0>=d&&(d=0,e.interval&&e.stop(),e.options.onEnd.apply(e)),c={years:0,days:0,hours:0,min:0,sec:0,millisec:0},d>=31557600&&(c.years=Math.floor(d/31557600),d-=365.25*c.years*86400),d>=86400&&(c.days=Math.floor(d/86400),d-=86400*c.days),d>=3600&&(c.hours=Math.floor(d/3600),d-=3600*c.hours),d>=60&&(c.min=Math.floor(d/60),d-=60*c.min),c.sec=d,c},this.leadingZeros=function(a,b){for(null==b&&(b=2),a=String(a);a.length<b;)a="0"+a;return a},this.update=function(a){return e.options.date=a,e},this.render=function(){return e.options.render.apply(e,[d(e.options.date)]),e},this.stop=function(){return e.interval&&clearInterval(e.interval),e.interval=null,e},this.start=function(b){return null==b&&(b=e.options.refresh||a.countdown.defaultOptions.refresh),e.interval&&clearInterval(e.interval),e.render(),e.options.refresh=b,e.interval=setInterval(function(){return e.render()},e.options.refresh),e},this.init()},a.countdown.defaultOptions={date:"June 7, 2087 15:03:25",refresh:1e3,onEnd:a.noop,render:function(b){return a(this.el).html(""+b.years+" years, "+b.days+" days, "+this.leadingZeros(b.hours)+" hours, "+this.leadingZeros(b.min)+" min and "+this.leadingZeros(b.sec)+" sec")}},void(a.fn.countdown=function(b){return a.each(this,function(c,d){var e;return e=a(d),e.data("countdown")?void 0:e.data("countdown",new a.countdown(d,b))})})}(jQuery)}).call(this)}(jQuery),function(){!function(){function a(c,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=c,this.tapDelay=d.tapDelay||200,!a.notNeeded(c)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h);b&&(c.addEventListener("mouseover",this.onMouse,!0),c.addEventListener("mousedown",this.onMouse,!0),c.addEventListener("mouseup",this.onMouse,!0)),c.addEventListener("click",this.onClick,!0),c.addEventListener("touchstart",this.onTouchStart,!1),c.addEventListener("touchmove",this.onTouchMove,!1),c.addEventListener("touchend",this.onTouchEnd,!1),c.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(c.removeEventListener=function(a,b,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(c,a,b.hijacked||b,d):e.call(c,a,b,d)},c.addEventListener=function(a,b,d){var e=Node.prototype.addEventListener;"click"===a?e.call(c,a,b.hijacked||(b.hijacked=function(a){a.propagationStopped||b(a)}),d):e.call(c,a,b,d)}),"function"==typeof c.onclick&&(f=c.onclick,c.addEventListener("click",function(a){f(a)},!1),c.onclick=null)}}var b=navigator.userAgent.indexOf("Android")>0,c=/iP(ad|hone|od)/.test(navigator.userAgent),d=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),e=c&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),f=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(c&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!b;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return b&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;c&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,e,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),e=a.targetTouches[0],c){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!d){if(e.identifier&&e.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=e.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=e.pageX,this.touchStartY=e.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},a.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var f,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,e&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(f=this.findControl(k)){if(this.focus(k),b)return!1;k=f}}else if(this.needsFocus(k))return a.timeStamp-g>100||c&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),c&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return c&&!d&&(i=k.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;b&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var c,d,e;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!b)return!0;if(c=document.querySelector("meta[name=viewport]")){if(-1!==c.content.indexOf("user-scalable=no"))return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(f&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(c=document.querySelector("meta[name=viewport]")))){if(-1!==c.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction?!0:!1},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}()}(jQuery),function(){var a=(jQuery.noConflict(),"false");jQuery(document).ready(function(b){function c(c){a="true";var d=b("#"+c).serialize();b.post(b("#"+c).attr("action"),d,function(){b("#"+c).hide(),b("#formSuccessMessageWrap").fadeIn(500)})}function d(d,e){b(".formValidationError").hide(),b(".fieldHasError").removeClass("fieldHasError"),b("#"+d+" .requiredField").each(function(f){if(""==b(this).val()||"Name"==b(this).val()||"Email"==b(this).val()||"Message"==b(this).val()||b(this).val()==b(this).attr("data-dummy"))return b(this).val(b(this).attr("data-dummy")),b(this).focus(),b(this).addClass("fieldHasError"),b("#"+b(this).attr("id")+"Error").fadeIn(300),!1;if(b(this).hasClass("requiredEmailField")){var g=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,h="#"+b(this).attr("id");if(!g.test(b(h).val()))return b(h).focus(),b(h).addClass("fieldHasError"),b(h+"Error2").fadeIn(300),!1}"false"==a&&f==b("#"+d+" .requiredField").length-1&&c(d,e)})}b("#formSuccessMessageWrap").hide(0),b(".formValidationError").fadeOut(0),b('input[type="text"], input[type="password"], textarea').focus(function(){b(this).val()==b(this).attr("data-dummy")&&b(this).val("")}),b("input, textarea").blur(function(){""==b(this).val()&&b(this).val(b(this).attr("data-dummy"))}),b("#contactSubmitButton").click(function(){return d(b(this).attr("data-formId")),!1})})}(jQuery),function(a){a(window).load(function(){a("#status").fadeOut(),a("#preloader").delay(400).fadeOut("slow")}),a(document).ready(function(){a(".share").slideToggle(200),a(".share-link").click(function(){return a(this).parent().parent().find(".share").slideToggle(200),!1}),a(".swipebox").click(function(){a(".gallery").hide(0),a(".portfolio-wide").hide(0)}),a(".open-left").click(function(){return a(".show-left-sidebar").toggleClass("show-left-sidebar-ball"),a(".show-right-sidebar").toggleClass("show-right-sidebar-ball"),"left"===b.state().state?b.close():b.open("left"),!1}),a("#content").click(function(){a(".show-left-sidebar").removeClass("show-left-sidebar-ball"),a(".show-right-sidebar").removeClass("show-right-sidebar-ball")}),a(".sidebar-close, .homepage-slider, .featured-slider, .swipebox").click(function(){b.close(),a(".show-left-sidebar").removeClass("show-left-sidebar-ball"),a(".show-right-sidebar").removeClass("show-right-sidebar-ball")});var b=new Snap({element:document.getElementById("content")});a(".sidebar-form .contactTextarea, .sidebar-form .contactField").click(function(){a(".sidebar-form #contactSubmitButton").addClass("show-sidebar-form-button")});var c="June 7, 2015 15:03:25";a(".countdown").countdown({date:c,render:function(b){a(this.el).html("<div class='countdown-box box-years'><div class='countdown-years'>"+this.leadingZeros(b.years,2)+"</div><span>years</span></div><div class='countdown-box box-days'><div class='countdown-days'>"+this.leadingZeros(b.days,2)+"</div><span>days</span></div><div class='countdown-box box-hours'><div class='countdown-hours'>"+this.leadingZeros(b.hours,2)+"</div><span>hours</span></div><div class='countdown-box box-minutes'><div class='countdown-minutes'>"+this.leadingZeros(b.min,2)+"</div><span>min</span></div><div class='countdown-box box-seconds'><div class='countdown-seconds'>"+this.leadingZeros(b.sec,2)+"</div><span>sec</span></div>")}}),a(".switch-1").click(function(){a(this).toggleClass("switch-1-on")}),a(".switch-2").click(function(){a(this).toggleClass("switch-2-on")
}),a(".switch-3").click(function(){a(this).toggleClass("switch-3-on")}),a(".switch, .switch-icon").click(function(){a(this).parent().find(".switch-box-content").slideToggle(200),a(this).parent().find(".switch-box-subtitle").slideToggle(200)}),a(".footer-up").click(function(){return a("#content").animate({scrollTop:0},800,"easeInOutQuad"),!1}),a(".adaptive-one-activate").click(function(){return a(".portfolio-adaptive").removeClass("adaptive-three"),a(".portfolio-adaptive").removeClass("adaptive-two"),a(".portfolio-adaptive").addClass("adaptive-one"),a(this).addClass("active-adaptive-style"),a(".adaptive-two-activate, .adaptive-three-activate").removeClass("active-adaptive-style"),!1}),a(".adaptive-two-activate").click(function(){return a(".portfolio-adaptive").removeClass("adaptive-three"),a(".portfolio-adaptive").addClass("adaptive-two"),a(".portfolio-adaptive").removeClass("adaptive-one"),a(this).addClass("active-adaptive-style"),a(".adaptive-three-activate, .adaptive-one-activate").removeClass("active-adaptive-style"),!1}),a(".adaptive-three-activate").click(function(){return a(".portfolio-adaptive").addClass("adaptive-three"),a(".portfolio-adaptive").removeClass("adaptive-two"),a(".portfolio-adaptive").removeClass("adaptive-one"),a(this).addClass("active-adaptive-style"),a(".adaptive-two-activate, .adaptive-one-activate").removeClass("active-adaptive-style"),!1}),a(".open-sharebox").click(function(){a(".sharebox-wrapper").fadeIn(200)}),a(".close-sharebox").click(function(){a(".sharebox-wrapper").fadeOut(200)}),a(".open-loginbox").click(function(){a(".loginbox-wrapper").fadeIn(200)}),a(".close-loginbox").click(function(){a(".loginbox-wrapper").fadeOut(200)}),a(".checkbox-one").click(function(){return a(this).toggleClass("checkbox-one-checked"),!1}),a(".checkbox-two").click(function(){return a(this).toggleClass("checkbox-two-checked"),!1}),a(".checkbox-three").click(function(){return a(this).toggleClass("checkbox-three-checked"),!1}),a(".radio-one").click(function(){return a(this).toggleClass("radio-one-checked"),!1}),a(".radio-two").click(function(){return a(this).toggleClass("radio-two-checked"),!1}),a(".tap-dismiss-notification").click(function(){return a(this).slideUp(200),!1}),a(".close-big-notification").click(function(){return a(this).parent().slideUp(200),!1}),a(".notification-top").addClass("show-notification-top"),a(".hide-top-notification").click(function(){a(".notification-top").removeClass("show-notification-top")}),a(".tab-but-1").click(function(){return a(".tab-but").removeClass("tab-active"),a(".tab-but-1").addClass("tab-active"),a(".tab-content").slideUp(200),a(".tab-content-1").slideDown(200),!1}),a(".tab-but-2").click(function(){return a(".tab-but").removeClass("tab-active"),a(".tab-but-2").addClass("tab-active"),a(".tab-content").slideUp(200),a(".tab-content-2").slideDown(200),!1}),a(".tab-but-3").click(function(){return a(".tab-but").removeClass("tab-active"),a(".tab-but-3").addClass("tab-active"),a(".tab-content").slideUp(200),a(".tab-content-3").slideDown(200),!1}),a(".tab-but-4").click(function(){return a(".tab-but").removeClass("tab-active"),a(".tab-but-4").addClass("tab-active"),a(".tab-content").slideUp(200),a(".tab-content-4").slideDown(200),!1}),a(".tab-but-5").click(function(){return a(".tab-but").removeClass("tab-active"),a(".tab-but-5").addClass("tab-active"),a(".tab-content").slideUp(200),a(".tab-content-5").slideDown(200),!1}),a(".deploy-toggle-1").click(function(){return a(this).parent().find(".toggle-content").slideToggle(200),a(this).toggleClass("toggle-1-active"),!1}),a(".deploy-toggle-2").click(function(){return a(this).parent().find(".toggle-content").slideToggle(200),a(this).toggleClass("toggle-2-active"),!1}),a(".deploy-toggle-3").click(function(){return a(this).parent().find(".toggle-content").slideToggle(200),a(this).find("em strong").toggleClass("toggle-3-active-ball"),a(this).find("em").toggleClass("toggle-3-active-background"),!1}),a(".submenu-nav-deploy").click(function(){return a(this).toggleClass("submenu-nav-deploy-active"),a(this).parent().find(".submenu-nav-items").slideToggle(200),!1}),a(".sliding-door-top").click(function(){return a(this).animate({left:"101%"},500,"easeInOutExpo"),!1}),a(".sliding-door-bottom a em").click(function(){return a(this).parent().parent().parent().find(".sliding-door-top").animate({left:"0px"},500,"easeOutBounce"),!1});var d=navigator.userAgent.toLowerCase().indexOf("iphone"),e=navigator.userAgent.toLowerCase().indexOf("ipad"),f=navigator.userAgent.toLowerCase().indexOf("ipod"),g=navigator.userAgent.toLowerCase().indexOf("android");d>-1&&(a(".ipod-detected").hide(),a(".ipad-detected").hide(),a(".iphone-detected").show(),a(".android-detected").hide()),e>-1&&(a(".ipod-detected").hide(),a(".ipad-detected").show(),a(".iphone-detected").hide(),a(".android-detected").hide()),f>-1&&(a(".ipod-detected").show(),a(".ipad-detected").hide(),a(".iphone-detected").hide(),a(".android-detected").hide()),g>-1&&(a(".ipod-detected").hide(),a(".ipad-detected").hide(),a(".iphone-detected").hide(),a(".android-detected").show()),function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){for(d=a.target;!f.test(d.nodeName);)d=d.parentNode;"href"in d&&(d.href.indexOf("http")||d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}}(document,window.navigator,"standalone")})}(jQuery);