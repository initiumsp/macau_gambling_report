//all.js
(function ($) {
var tl;
	$.fn.scrollHandler = function(options){
		var settings = $.extend({}, options);
		var sections = null;
		var progress = {};
		progress.targetScroll = 0;
		progress.headHeight = $('header').outerHeight();
		progress.screenh = screen.height;
		progress.divHeight = $(this).outerHeight();
		$(window).scroll(function() {
		  	var scrollAmount = $(this).scrollTop() - progress.headHeight ;
		  	var scrollPercent = ((scrollAmount)/(progress.divHeight - progress.screenh))*100;
			if(scrollAmount <= $('h2:first').position().top-30){
				$('.scrollWrapper h3').text('');
			}
			sections.each(function() {
				if(scrollAmount + progress.headHeight >= $(this).position().top){
					var text = $(this).data('title');
		    		$('.scrollWrapper h3').text(text);
		    		$('#header .'+$(this).attr('id')).addClass('active').siblings('.active').removeClass('active');
		    		$('#nav .'+$(this).attr('id')).addClass('active').siblings('.active').removeClass('active');
		    		return false;	
				};
			});
		    $('.scroll-bar').css('width', scrollPercent+'%' );
		});
		sections = $($(".section").get().reverse());
		var $el = $('.scroll-bar'); 
		return $el;
	}

	$(document).ready(function() {
		$('.slider').slick({
  			infinite: true,
  			fade: true
		});
		var currSlide = '';
		var header_h = $('#header').height();
		var mode=$(window).width()<768?"mobile":"desktop";
		$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var i = nextSlide + 1;
			currSlide = $('.slider').slick('getSlick').$slides[nextSlide];
			$('.slide-count').find('.counter').text(i);
			$('.slide-title').html( $(currSlide).data('title')+' <span class="slide-author">'+$(currSlide).data('author')+'</span>');
		});

		$('.slide-count').find('.total').text( $('.slider').slick('getSlick').$slides.length );
		$('.slide-count').find('.counter').text(1);
		currSlide = $('.slider').slick('getSlick').$slides[0];
		$('.slide-title').html( $(currSlide).data('title')+' <span class="slide-author">'+$(currSlide).data('author')+'</span>');
		function updateSlider(){$("#slider").slider("value",100*tl.progress())}function onUpdate(){var e=Math.floor(100*tl.progress()/15);current!=e&&($("#timeline .marker li.on").removeClass("on"),$("#timeline .marker li:eq("+e+")").addClass("on"),$("#current_yr").text($timeline.find(".marker li:eq("+e+")").addClass("on").text()),current = e),tl.reversed()&&tl.progress()<=endAt?tl.pause():tl.reversed()||tl.progress()<endAt||tl.pause(),updateSlider()}$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(e,t){tl.pause(),tl.progress(t.value/100)}});TweenMax.to("#timeline .car",.15,{y:1,yoyo:!0,repeat:-1,ease:Power1.easeInOut}),tl=new TimelineLite({onComplete:function(){var e=$(window).height()-100;$("body").hasClass("scrollable")||($("body").addClass("scrollable"),$("body").scrollHandler({}),$(window).trigger("scroll")),setTimeout(function(){var t=$(window).scrollTop();if(t<$("#intro").height()){var o="desktop"==mode?e:"#pt0";$("body").scrollTo(o,800,{onAfter:function(){$(".scrolldown").animate({opacity:1},400)},offset:{top:-146}})}},400)}});var current=0,endAt=1,$timeline=$("#timeline");"desktop"==mode?(tl.fromTo("#timeline .car",6,{x:0},{x:750,ease:Power0.easeNone,onUpdate:onUpdate,onComplete:function(){}},"start"),tl.to($timeline.find(".bar span"),6,{width:881,ease:Power0.easeNone},"start"),tl.to($timeline.find(".yr2004"),.3,{opacity:1,ease:Power2.easeInOut},.6,"2004"),tl.to($timeline.find(".yr2006"),.3,{opacity:1,ease:Power2.easeInOut},2.1-.4,"2006"),tl.to($timeline.find(".yr2007:nth-child(odd)"),.3,{opacity:1,ease:Power2.easeInOut},3.1-.7,"2007"),tl.to($timeline.find(".yr2007:nth-child(even)"),.3,{opacity:1,ease:Power2.easeInOut},2.7,"2007"),tl.to($timeline.find(".yr2009"),.3,{opacity:1,ease:Power2.easeInOut},4.1-.4,"2009"),tl.to($timeline.find(".yr2011"),.3,{opacity:1,ease:Power2.easeInOut},5.1-.4,"2011"),tl.to($timeline.find(".yr2015"),.3,{opacity:1,ease:Power2.easeInOut},6.1-.4,"2015"),tl.timeScale(1.3),tl.pause()):(tl.fromTo($timeline.find(".car"),6,{x:0},{x:300,ease:Power0.easeNone,onUpdate:onUpdate,onComplete:function(){}},"start"),tl.to($timeline.find(".bar span"),6,{width:304,ease:Power0.easeNone},"start"),tl.to($timeline.find(".building"),6,{x:-1180,ease:Power0.easeNone},"start"),tl.to($timeline.find(".yr2004"),.3,{opacity:1,ease:Power2.easeInOut},.6,"2004"),tl.to($timeline.find(".yr2006"),.3,{opacity:1,ease:Power2.easeInOut},2.1-.4,"2006"),tl.to($timeline.find(".yr2007"),.3,{opacity:1,ease:Power2.easeInOut},2.5,"2007"),tl.to($timeline.find(".yr2009"),.3,{opacity:1,ease:Power2.easeInOut},4.1-.5,"2009"),tl.to($timeline.find(".yr2011"),.3,{opacity:1,ease:Power2.easeInOut},4.6,"2011"),tl.to($timeline.find(".yr2015"),.3,{opacity:1,ease:Power2.easeInOut},6.1-.7,"2015"),tl.pause());
		$(window).load(function(){
			$('body').scrollTo(0, 800);
			if(tl) tl.resume();
			var $vid_obj = videojs(document.getElementById('video_1'), {"controls": true, "autoplay": false, "preload": "auto"}, function() {});
			$vid_obj.ready(function(){
			  var src = (mode == 'desktop')? base_path+'20151016_MacauTaxi_rough-Initium 480p.mp4' : base_path+'20151026_MacauTaxi-Initium 480p.mp4';$("#video_1 video").attr("src",src);
			});
		}).resize(function(){
			var w = $(window).width();
			if(w < 768){$('body').addClass('m').removeClass('h');}
			else{$('body').removeClass('m').addClass('h');}
			$('#intro').css('height', $(window).height() - $('#header').height());
			//$('#pt0').css('height', $(window).height()-146);
		}).trigger('resize');

		$(document).delegate('body.h #header .sections a, #nav a','click', function(e){
			e.preventDefault();
			if($('#nav').hasClass('active')){
				$('.m #header .sections a.active').trigger('click');
			}
			$('body').scrollTo($($(this).data('section')), 800, {offset: {top: header_h*-1}});
		}).delegate('body.m #header .sections a', 'click', function(e){
			e.preventDefault();
			$('#nav').toggleClass('active');
		}).delegate('.marker li', 'click', function(e){
			e.preventDefault();
			endAt = $(this).index()*16.6 / 100;
			if(endAt < tl.progress()){tl.reverse();}
			else{tl.play();}
		}).delegate('.scrolldown', 'click', function(e){
			e.preventDefault();
			$('body').scrollTo('#pt1', 800);
		});

		$('.responsive-image').responsImg({
		  breakpoints: {
		    desktop: 768
		  }
		});

	});
})(jQuery);