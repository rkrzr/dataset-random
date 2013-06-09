Object.extend(Element, {
	getWidth: function(element) {
	   	element = $(element);
	   	return element.offsetWidth; 
	},
	setWidth: function(element,w) {
	   	element = $(element);
    	element.style.width = w +"px";
	},
	setHeight: function(element,h) {
   		element = $(element);
    	element.style.height = h +"px";
	},
	setTop: function(element,t) {
	   	element = $(element);
    	element.style.top = t +"px";
	},
	setSrc: function(element,src) {
    	element = $(element);
    	element.src = src; 
	},
	setHref: function(element,href) {
    	element = $(element);
    	element.href = href; 
	},
	setInnerHTML: function(element,content) {
		element = $(element);
		element.innerHTML = content;
	}
});

var	overlayDuration = 0.2;	// shadow fade in/out duration
var overlayOpacity = 0.8;	// controls transparency of shadow overlay


var Lightdiv = Class.create();

//
//  Configurationl
//
LightdivOptions = Object.extend({
    fileLoadingImage:        '/plugins/lgt/images/loading.gif',     
    fileBottomNavCloseImage: '/plugins/lgt/images/closelabel.gif',

    overlayOpacity: 0.8,   // controls transparency of shadow overlay

    animate: true,         // toggles resizing animations
    resizeSpeed: 7,        // controls the speed of the image resizing animations (1=slowest and 10=fastest)

    borderSize: 10,         //if you adjust the padding in the CSS, you will need to update this variable

	// When grouping images this is used to write: Image # of #.
	// Change it for non-english localization
	labelImage: "Imaginea",
	labelOf: "din"
}, window.LightdivOptions || {});

Lightdiv.prototype = {
	    initialize: function() {    

	        this.keyboardAction = this.keyboardAction.bindAsEventListener(this);
			this.load_ajax=true;

        var objBody = $$('body')[0];

		objBody.appendChild(Builder.node('div',{id:'popup_overlay'}));
	
/*        objBody.appendChild(Builder.node('div',{id:'popup_lightbox'}, [
            Builder.node('div',{id:'popup_outerContainer'}, 
                Builder.node('div',{id:'popup_Container'}, [
                    Builder.node('div',{id:'popup_lightboxImage'}), 
                    Builder.node('div',{id:'popup_loading'}, 
                        Builder.node('a',{id:'popup_loadingLink', href: '#' }, 
                            Builder.node('img', {src: LightdivOptions.fileLoadingImage})
                        )
                    )
                ])
            )
        ]));*/

        objBody.appendChild(Builder.node('div',{id:'popup_lightbox'}, [
            Builder.node('div',{id:'popup_outerContainer'}, 
                Builder.node('div',{id:'popup_Container'}, [
                    Builder.node('div',{id:'popup_lightboxImage'})
                ])
            )
        ]));
	$('popup_overlay').hide().observe('click', (function() { this.end_overlay(); }).bind(this));
//	$('popup_lightbox').hide();//.observe('click', (function() { this.end_overlay(); }).bind(this));

		},
		
    getPageSize: function() {
	        
	     var xScroll, yScroll;
		
		if (window.innerHeight && window.scrollMaxY) {	
			xScroll = window.innerWidth + window.scrollMaxX;
			yScroll = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
			xScroll = document.body.scrollWidth;
			yScroll = document.body.scrollHeight;
		} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
			xScroll = document.body.offsetWidth;
			yScroll = document.body.offsetHeight;
		}
		
		var windowWidth, windowHeight;
		
		if (self.innerHeight) {	// all except Explorer
			if(document.documentElement.clientWidth){
				windowWidth = document.documentElement.clientWidth; 
			} else {
				windowWidth = self.innerWidth;
			}
			windowHeight = self.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		} else if (document.body) { // other Explorers
			windowWidth = document.body.clientWidth;
			windowHeight = document.body.clientHeight;
		}	
		
		// for small pages with total height less then height of the viewport
		if(yScroll < windowHeight){
			pageHeight = windowHeight;
		} else { 
			pageHeight = yScroll;
		}
	
		// for small pages with total width less then width of the viewport
		if(xScroll < windowWidth){	
			pageWidth = xScroll;		
		} else {
			pageWidth = windowWidth;
		}

		return [pageWidth,pageHeight];
	}
	,

	showSelectBoxes:function (){
		var selects = document.getElementsByTagName("select");
		for (i = 0; i != selects.length; i++) {
			selects[i].style.visibility = "visible";
		}
	},

// ---------------------------------------------------

	hideSelectBoxes:function(){
		var selects = document.getElementsByTagName("select");
		for (i = 0; i != selects.length; i++) {
			selects[i].style.visibility = "hidden";
		}
	},

	// ---------------------------------------------------
	
	showFlash: function (){
		var flashObjects = document.getElementsByTagName("object");
		for (i = 0; i < flashObjects.length; i++) {
			flashObjects[i].style.visibility = "visible";
		}
	
		var flashEmbeds = document.getElementsByTagName("embed");
		for (i = 0; i < flashEmbeds.length; i++) {
			flashEmbeds[i].style.visibility = "visible";
		}
	},

// ---------------------------------------------------
	
	hideFlash:function (){
		var flashObjects = document.getElementsByTagName("object");
		for (i = 0; i < flashObjects.length; i++) {
			flashObjects[i].style.visibility = "hidden";
		}
	
		var flashEmbeds = document.getElementsByTagName("embed");
		for (i = 0; i < flashEmbeds.length; i++) {
			flashEmbeds[i].style.visibility = "hidden";
		}
	
	},

	keyboardAction: function(event) {
        var keycode = event.keyCode;
        var escapeKey;
/*        if (event.DOM_VK_ESCAPE) {  // mozilla
            escapeKey = event.DOM_VK_ESCAPE;
        } else { // ie
            escapeKey = 27;
        }

        var key = String.fromCharCode(keycode).toLowerCase();
        if (key.match(/x|o|c/) || (keycode == escapeKey)){ // close lightdiv
            this.end_overlay();
        } */
    },
	start_overlay:function(){
			this.hideSelectBoxes();
			this.hideFlash();	
			var arrayPageSize = this.getPageSize();
			$('popup_overlay').setStyle({ width: arrayPageSize[0] + 'px', height: arrayPageSize[1] + 'px' });
			new Effect.Appear('popup_overlay', { duration: overlayDuration, from: 0.0, to: overlayOpacity });
	
	
	
	},
	end_overlay: function(){
			this.showSelectBoxes();
			this.showFlash();	
			new Effect.Fade('popup_overlay', { duration: overlayDuration});
			$('popup_lightbox').hide()
	},

	show_popup: function (id,x,y,tip_imobil,special){
			this.start_overlay();
			var popUp = document.getElementById(id);
			var w=240;
			var h=100;
			x = x + document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
			y = (screen.width-767)/2;

/*			popUp.style.top = x+'px';
			popUp.style.left = y +"px";
			popUp.style.width = w + "px";
			popUp.style.height = h + "px";
			popUp.style.zIndex = "2000";
			popUp.style.visibility = "visible";
			popUp.style.overflow= "hidden";*/
			//var arrayPageSize = this.getPageSize();
/*			pageTracker._trackPageview("/zone/"+$F('oras')+"/" + $F('filterCls_TIP_IMOBIL')+"/");
		 	var zoneTracker = pageTracker._createEventTracker('Zone'); 
			zoneTracker._trackEvent('Alege zone');
*/
	        $('popup_lightbox').setStyle({ top: x + 'px', left: y + 'px' }).show();
			new Effect.Appear('popup_lightbox', { 
				duration: 2, 
				queue: 'end'
			});
			var link_zone='/index.php?section=oferte&screen=zone';
			link_zone +='&oras='+$F('f'+tip_imobil+'_oras');
			if(special==0)
			{
				link_zone +='&submit=1';
			}
			if($('search_id')) link_zone +='&search_id='+$F('search_id');
			if($('f'+tip_imobil+'_filterCls_TIP_IMOBIL')) link_zone +='&tip_imobil='+$F('f'+tip_imobil+'_filterCls_TIP_IMOBIL');
			if($('f'+tip_imobil+'_filterCls_TIP_TRANZ')) link_zone +='&tip_tranz='+$F('f'+tip_imobil+'_filterCls_TIP_TRANZ');
			
			//if(this.load_ajax==true)

					new Ajax.Updater('popup_lightboxImage',link_zone,{evalScripts:true});
			this.load_ajax=false;
	        document.observe('keydown', this.keyboardAction); 

	},
	
	show_popup2: function (url,width,y){
			//if(pageTracker) pageTracker._trackEvent('lightdiv','open',url);
			this.start_overlay();
			y = y + document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
			x = (screen.width-width)/2;

	        $('popup_lightbox').setStyle({ top: y + 'px', left: x + 'px' }).show();
			$('popup_lightbox').style.width = width+'px';
			new Effect.Appear('popup_lightbox', { 
				duration: 2, 
				queue: 'end'
			});

			new Ajax.Updater('popup_lightboxImage',url,{evalScripts:true});
	        document.observe('keydown', this.keyboardAction); 

	},	
	next_reload:function(){
		this.load_ajax=true;
	},
	hide_popup:function(){
/*		var popUp = document.getElementById("popupcontent");
		 $('popup_lightbox').hide();
		popUp.style.visibility = "hidden";
*/		this.end_overlay();
        document.stopObserving('keydown', this.keyboardAction); 
	}


}



var div_manager = '';
Event.observe(window,'load',function(){
	div_manager=new Lightdiv();
}.bind(div_manager));
