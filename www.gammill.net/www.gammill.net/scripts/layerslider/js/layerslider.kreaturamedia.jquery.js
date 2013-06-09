(function($) {

	$.fn.layerSlider = function( options ){

		// initializing

		if( (typeof(options)).match('object|undefined') ){
			return this.each(function(i){
				(new $.layerSlider(this, options));
			});
		}else{
			return this.each(function(i){

				// prev, next, start, stop, change functions

				var lsData = $(this).data('LayerSlider');
				if( lsData ){
					if( !lsData.g.isAnimating ){
						if( typeof(options) == 'number' ){
							if( options > 0 && options < lsData.g.layersNum + 1 && options != lsData.g.curLayerIndex ){
								lsData.change(options);
							}								
						}else{
							switch(options){
								case 'prev':
									lsData.prev();
									break;
								case 'next':
									lsData.next();
									break;
								case 'start':
									if( !lsData.g.autoSlideshow ){
										lsData.start();
									}							
									break;
							}
						}
					}
					if( lsData.g.autoSlideshow && options == 'stop' ){
						lsData.stop();
					}
				}
			});
		}
	};

	$.layerSlider = function(el, options) {

		var ls = this;
		ls.$el = $(el).addClass('ls-container');
		ls.$el.data('LayerSlider', ls);

		ls.init = function(){

			// setting options (user settings) and global (not modificable) parameters
			
			ls.o = $.extend({},$.layerSlider.options, options);
			ls.g = $.extend({},$.layerSlider.global);

			// storing unique settings of layers and sublayers into object.data

			$(el).find('.ls-layer, *[class^="ls-s"]').each(function(){

				if( $(this).attr('style') ){
					var style = $(this).attr('style').toLowerCase().split(';');
					for(x=0;x<style.length;x++){
						param = style[x].split(':');
						if( param[0].indexOf('easing') != -1 ){
							param[1] = ls.ieEasing( param[1] );
						}
						$(this).data( $.trim(param[0]), $.trim(param[1]) );
					}
				}
			});

			// setting variables

			ls.g.layersNum = $(el).find('.ls-layer').length;
			ls.o.firstLayer = ls.o.firstLayer < ls.g.layersNum + 1? ls.o.firstLayer : 1;
			ls.o.firstLayer = ls.o.firstLayer < 1 ? 1 : ls.o.firstLayer;
			ls.g.curLayerIndex = ls.o.firstLayer;
			ls.g.curLayer = $(el).find('.ls-layer:eq('+(ls.g.curLayerIndex-1)+')');

			ls.g.sliderWidth = $(el).width();
			ls.g.sliderHeight = $(el).height();

			// moving all layers to .ls-inner container

			$(el).find('.ls-layer').wrapAll('<div class="ls-inner"></div>');

			// adding styles

			if( $(el).css('position') == 'static' ){
				$(el).css('position','relative');
			}

			$(el).find('.ls-inner, .ls-layer').css({
				width : ls.g.sliderWidth,
				height : ls.g.sliderHeight,
				overflow : 'hidden'
			});

			$(el).find('.ls-inner').css({
				position : 'relative'
			});

			$(el).find('.ls-layer').css({
				position : 'absolute'
			});

			$(el).find('.ls-bg').css({
				marginLeft : - ( ls.g.sliderWidth / 2 )+'px',
				marginTop : - ( ls.g.sliderHeight / 2 )+'px'
			});

			// creating navigation

			if( ls.o.navPrevNext ){

				$('<a class="ls-nav-prev" href="#" />').click(function(e){
					e.preventDefault();
					$(el).layerSlider('prev');
				}).appendTo($(el));

				$('<a class="ls-nav-next" href="#" />').click(function(e){
					e.preventDefault();
					$(el).layerSlider('next');
				}).appendTo($(el));					
			}

			if( ls.o.navStartStop || ls.o.navButtons ){
				
				$('<div class="ls-bottom-nav-wrapper" />').appendTo( $(el) );

				if( ls.o.navButtons ){
					
					$('<span class="ls-bottom-slidebuttons" />').appendTo( $(el).find('.ls-bottom-nav-wrapper') );

					for(x=1;x<ls.g.layersNum+1;x++){

						$('<a href="#"></a>').appendTo( $(el).find('.ls-bottom-slidebuttons') ).click(function(e){
							e.preventDefault();
							$(el).layerSlider( ($(this).index() + 1) );
						});
					}
					$(el).find('.ls-bottom-slidebuttons a:eq('+(ls.o.firstLayer-1)+')').addClass('ls-nav-active');
				}

				if( ls.o.navStartStop ){
					
					$('<a class="ls-nav-start" href="#" />').click(function(e){
						e.preventDefault();
						$(el).layerSlider('start');
					}).prependTo( $(el).find('.ls-bottom-nav-wrapper') );

					$('<a class="ls-nav-stop" href="#" />').click(function(e){
						e.preventDefault();
						$(el).layerSlider('stop');
					}).appendTo( $(el).find('.ls-bottom-nav-wrapper') );
				}else{

					$('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo( $(el).find('.ls-bottom-nav-wrapper') );
					$('<span class="ls-nav-sides ls-nav-sideright" />').appendTo( $(el).find('.ls-bottom-nav-wrapper') );						
				}
			}

			// adding keyboard navigation if turned on

			if( ls.o.keybNav ){
				
				$('body').bind('keydown',function(e){ 
					if( !ls.g.isAnimating ){
						if( e.which == 37 ){
							ls.prev();
						}else if( e.which == 39 ){
							ls.next();							
						}
					}
				});
			}

			// applying skin
			
			$(el).addClass('ls-'+ls.o.skin);
			var skinStyle = ls.o.skinsPath+ls.o.skin+'/skin.css';

				if (document.createStyleSheet){
					document.createStyleSheet(skinStyle);
				}else{
			    	$('<link rel="stylesheet" href="'+skinStyle+'" type="text/css" />').appendTo( $('head') );
				}				
			
			
			// if autostart is true, begin to slide

			ls.imgPreload(ls.g.curLayer,function(){
				ls.g.curLayer.fadeIn(1000).addClass('ls-active');
				if( ls.o.autoStart ){
					ls.start();
				}
			});
		};

		ls.start = function(){
			
			if( ls.g.autoSlideshow ){
				if( ls.g.prevNext == 'prev' && ls.o.twoWaySlideshow ){
					ls.prev();
				}else{
					ls.next();
				}
			}else{
				ls.g.autoSlideshow = true;
				ls.timer();
			}
		};
		
		ls.timer = function(){
			
			var delaytime = $(el).find('.ls-active').data('slidedelay') ? parseInt( $(el).find('.ls-active').data('slidedelay') ) : ls.o.slideDelay;

			clearTimeout( ls.g.slideTimer );
			ls.g.slideTimer = window.setTimeout(function(){
				ls.start();
			}, delaytime );
		};

		ls.stop = function(){

			clearTimeout( ls.g.slideTimer );
			ls.g.autoSlideshow = false;
		};

		// because of an ie7 bug, we have to override the strings

		ls.ieEasing = function( e ){

			return e.replace('in','In').replace('out','Out').replace('quad','Quad').replace('quart','Quart').replace('cubic','Cubic').replace('quint','Quint').replace('sine','Sine').replace('expo','Expo').replace('circ','Circ').replace('elastic','Elastic').replace('back','Back').replace('bounce','Bounce');
		};

		// calculating prev layer

		ls.prev = function(){

			var prev = ls.g.curLayerIndex < 2 ? ls.g.layersNum : ls.g.curLayerIndex - 1;
			ls.g.prevNext = 'prev';
			ls.change(prev);
		};

		// calculating next layer

		ls.next = function(){

			var next = ls.g.curLayerIndex < ls.g.layersNum ? ls.g.curLayerIndex + 1 : 1;
			ls.g.prevNext = 'next';
			ls.change(next);
		};

		ls.change = function(num){

			clearTimeout( ls.g.slideTimer );
			ls.g.nextLayerIndex = num;
			ls.g.nextLayer = $(el).find('.ls-layer:eq('+(ls.g.nextLayerIndex-1)+')');
			ls.imgPreload(ls.g.nextLayer,function(){
				ls.animate();
			});
		};

		ls.imgPreload = function(layer,callback){

			if( ls.o.imgPreload ){
				
				var preImages = [];
				var preloaded = 0;
				layer.find('img').each(function(){
					preImages.push($(this).attr('src'));
				});
				layer.find('*').each(function(){
					if($(this).css('background-image') != 'none'){
						var bgi = $(this).css('background-image');
						bgi = bgi.match(/url\((.*)\)/)[1].replace(/"/gi, '');
						preImages.push(bgi);
					}
				});
				for(x=0;x<preImages.length;x++){
					$('<img>').load(function(){
						if( ++preloaded == preImages.length ){
							callback();
						}
					}).attr('src',preImages[x]);
				}
			}else{
				callback();
			}
		};

		ls.animate = function(){
			
			// changing variables

			ls.g.isAnimating = true;

			// setting position and styling of current and next layers

			var curLayerLeft = curLayerRight = curLayerTop = curLayerBottom = nextLayerLeft = nextLayerRight = nextLayerTop = nextLayerBottom = layerMarginLeft = layerMarginRight = layerMarginTop = layerMarginBottom = 'auto';
			var curLayerWidth = nextLayerWidth = ls.g.sliderWidth;
			var curLayerHeight = nextLayerHeight = ls.g.sliderHeight;

			// calculating direction

			var prevOrNext = ls.g.prevNext == 'prev' ? ls.g.curLayer : ls.g.nextLayer;
			var chooseDirection = prevOrNext.data('slidedirection') ? prevOrNext.data('slidedirection') : ls.o.slideDirection;

			// setting the direction of sliding

			var slideDirection = ls.g.slideDirections[ls.g.prevNext][chooseDirection];

			if( slideDirection == 'left' || slideDirection == 'right' ){
				curLayerWidth = curLayerTop = nextLayerWidth = nextLayerTop = 0;
				layerMarginTop = 0;				
			}
			if( slideDirection == 'top' || slideDirection == 'bottom' ){
				curLayerHeight = curLayerLeft = nextLayerHeight = nextLayerLeft = 0;
				layerMarginLeft = 0;
			}

			switch(slideDirection){
				case 'left':
					curLayerRight = nextLayerLeft = 0;
					layerMarginLeft = -ls.g.sliderWidth;
					break;
				case 'right':
					curLayerLeft = nextLayerRight = 0;
					layerMarginLeft = ls.g.sliderWidth;
					break;
				case 'top':
					curLayerBottom = nextLayerTop = 0;
					layerMarginTop = -ls.g.sliderHeight;
					break;
				case 'bottom':
					curLayerTop = nextLayerBottom = 0;
					layerMarginTop = ls.g.sliderHeight;
					break;
			}

			// setting start positions and styles of layers

			ls.g.curLayer.css({
				left : curLayerLeft,
				right : curLayerRight,
				top : curLayerTop,
				bottom : curLayerBottom			
			});
			ls.g.nextLayer.css({
				width : nextLayerWidth,
				height : nextLayerHeight,
				left : nextLayerLeft,
				right : nextLayerRight,
				top : nextLayerTop,
				bottom : nextLayerBottom,
				display : 'block'
			});

			// animating next layer

				// override global parameters with unique if need

				var nextDelay = ls.g.nextLayer.data('delayin') ? parseInt(ls.g.nextLayer.data('delayin')) : ls.o.delayIn;
				var nextTime = ls.g.nextLayer.data('durationin') ? parseInt(ls.g.nextLayer.data('durationin')) : ls.o.durationIn;
				var nextEasing = ls.g.nextLayer.data('easingin') ? ls.g.nextLayer.data('easingin') : ls.o.easingIn;

				ls.g.nextLayer.delay( nextDelay ).animate({
					width : ls.g.sliderWidth,
					height : ls.g.sliderHeight
				}, nextTime, nextEasing);

			// animating sublayers of next layer

			ls.g.nextLayer.find(' > *[class^="ls-s"]').each(function(){

				// override global parameters with unique if need
				
				var nextSubParMod = ls.g.nextLayer.data('parallaxin') ? parseInt(ls.g.nextLayer.data('parallaxin')) : ls.o.parallaxIn;
				var nextSubPar = parseInt( $(this).attr('class').split('ls-s')[1] ) * nextSubParMod;

				$(this).css({
					marginLeft : layerMarginLeft * nextSubPar,
					marginTop : layerMarginTop * nextSubPar
				});

				var nextSubDelay = $(this).data('delayin') ? parseInt($(this).data('delayin')) : ls.o.delayIn;
				var nextSubTime = $(this).data('durationin') ? parseInt($(this).data('durationin')) : ls.o.durationIn;
				var nextSubEasing = $(this).data('easingin') ? $(this).data('easingin') : ls.o.easingIn;

				$(this).stop().delay( nextSubDelay ).animate({
					marginLeft : 0,
					marginTop : 0
				}, nextSubTime, nextSubEasing);
				
			});

			// animating sublayers of current layer

			ls.g.curLayer.find(' > *[class^="ls-s"]').each(function(){

				var curSubParMod = ls.g.curLayer.data('parallaxout') ? parseInt(ls.g.curLayer.data('parallaxout')) : ls.o.parallaxOut;
				var curSubPar = parseInt( $(this).attr('class').split('ls-s')[1] ) * curSubParMod;
				
				var curSubDelay = $(this).data('delayout') ? parseInt($(this).data('delayout')) : ls.o.delayOut;
				var curSubTime = $(this).data('durationout') ? parseInt($(this).data('durationout')) : ls.o.durationOut;
				var curSubEasing = $(this).data('easingout') ? $(this).data('easingout') : ls.o.easingOut;

				$(this).stop().delay( curSubDelay ).animate({
					marginLeft : -layerMarginLeft * curSubPar,
					marginTop : -layerMarginTop * curSubPar
				}, curSubTime, curSubEasing);
			});	

			// animating current layer

				var curDelay = $(this).data('delayout') ? parseInt($(this).data('delayout')) : ls.o.delayOut;
				var curTime = $(this).data('durationout') ? parseInt($(this).data('durationout')) : ls.o.durationOut;
				var curEasing = $(this).data('easingout') ? $(this).data('easingout') : ls.o.easingOut;

				ls.g.curLayer.delay( curDelay ).animate({
					width : curLayerWidth,
					height : curLayerHeight
				}, curTime, curEasing,function(){

					// setting current layer

					ls.g.curLayer = ls.g.nextLayer;
					ls.g.curLayerIndex = ls.g.nextLayerIndex;

					// changing some css classes

					$(el).find('.ls-layer').removeClass('ls-active');
					$(el).find('.ls-layer:eq(' + ( ls.g.curLayerIndex - 1 ) + ')').addClass('ls-active');
					$(el).find('.ls-bottom-slidebuttons a').removeClass('ls-nav-active');
					$(el).find('.ls-bottom-slidebuttons a:eq('+( ls.g.curLayerIndex - 1 )+')').addClass('ls-nav-active');
				
					// changing variables

					ls.g.isAnimating = false;

					// setting timer if needed

					if( ls.g.autoSlideshow ){

						ls.timer();
					}
				});
		}

		// initializing
		ls.init();
	};

	$.layerSlider.options = {
		
		// user settings (can be modified)
		
		autoStart		: true,						// If true, slideshow will automatically start after loading the page.
		firstLayer		: 1,						// LayerSlider will begin with this layer.
		twoWaySlideshow	: false,					// If true, slideshow will go backwards if you click the prev button.
		keybNav			: true,						// Keyboard navigation. You can navigate with the left and right arrow keys.
		imgPreload		: true,						// Image preload. Preloads all images and background-images of the next layer.
		navPrevNext		: true,						// If false, Prev and Next buttons will be invisible.
		navStartStop	: true,						// If false, Start and Stop buttons will be invisible.
		navButtons		: true,						// If false, slide buttons will be invisible.
		skin			: 'defaultskin',			// You can change the skin of the Slider.
		skinsPath		: '/layerslider/skins/',	// You can change the default path of the skins folder. Note, that you must use the slash at the end of the path.

		// The following global settings can be override separately by each layers or sublayers local settings (see the documentation for more information).
		
		slideDirection	: 'right',					// Slide direction. New layers sliding FROM(!) this direction.
		slideDelay		: 4000,						// Time before the next slide will be loading.
		parallaxIn		: .45,						// Modifies the parallax-effect of the slide-in animation.
		parallaxOut		: .45,						// Modifies the parallax-effect of the slide-out animation.
		durationIn		: 1500,						// Duration of the slide-in animation.
		durationOut		: 1500,						// Duration of the slide-out animation.
		easingIn		: 'easeInOutQuint',			// Easing (type of transition) of the slide-in animation.
		easingOut		: 'easeInOutQuint',			// Easing (type of transition) of the slide-out animation.
		delayIn			: 0,						// Delay time of the slide-in animation.
		delayOut		: 0							// Delay time of the slide-out animation.
	};

	$.layerSlider.global = {
		
		// global parameters (Do not change these settings!)

		version			: '1.0.20111126',
		
		autoSlideshow	: false,
		isAnimating		: false,
		layersNum		: null,
		prevNext		: 'next',
		slideTimer		: null,
		sliderWidth		: null,
		sliderHeight	: null,
		slideDirections	: {
							prev : {
								left	: 'right',
								right	: 'left',
								top		: 'bottom',
								bottom	: 'top'
							},
							next : {
								left	: 'left',
								right	: 'right',
								top		: 'top',
								bottom	: 'bottom'
							}
		}
	};

})(jQuery);