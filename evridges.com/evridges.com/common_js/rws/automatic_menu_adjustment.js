fixAllMenus();


function fixAllMenus()
{
	var all_elements = document.getElementsByTagName("*");

	for(i = 0; i < all_elements.length; i++)
	{
		var cur_id = all_elements[i].id;

		if ( cur_id == null || cur_id.length == 0 ) continue;

		if ( cur_id.toLowerCase().match("rws_menu_.*") )
		{
			var idx = cur_id.lastIndexOf('_');

			if ( idx < 0 || !cur_id.match("rws_menu_.*px") )
			{
				alert('For the menu with the id '+cur_id+' you must specify a width.  For example, rws_menu_foo_600px');
				continue;
			}

			var menu_name = cur_id.substring(9,idx);
			var width  = parseInt(cur_id.substring(idx+1));


			var tab_el = document.getElementById('rws_tab_'+menu_name);
			if ( tab_el == null )
			{
				alert('Found menu element with id '+cur_id+' but no matching tab named rws_tab_'+menu_name);
				continue;
			}

			fixMenu('rws_tab_'+menu_name,cur_id,width);
		}
	}
}


function fixMenu(tab_id, element_id,desired_width)
{
	var tab_left_x = getXShift(tab_id);
	var container_width = getELWidth('category_wrapper');

	var el = document.getElementById(element_id);
	if ( el == null ) return;


	if ( tab_left_x + desired_width > container_width )
	{
		var place_x = tab_left_x + desired_width-container_width;
		place_x *= -1;
		place_x -= 1; // just to clean up border...


		el.style.left = place_x+'px';
	}

	el.style.width = desired_width+'px';


	return void(0);
}



function getXShift(id2)
{
	var el2 = document.getElementById(id2);
	if ( el2 == null ) return 0;

	return el2.offsetLeft;
}



function getELWidth(id)
{
	var el = document.getElementById(id);

	if ( el == null ) return 0;

	return el.offsetWidth;
}

/******************************************************************************





hoverInent used to be included as a seperate file, it was combined with this file
to simply the code and speed page loads





********************************************************************************/

/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($) {
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
})(jQuery);

/******************************************************************************





The below code used to be in menuSlide.js.  It has been included here to speed
page loads...





********************************************************************************/

$(document).ready(function() 
{



$('.category_tab > li')
		.hoverIntent(function() {
			$(this).children('.submenu').slideDown('fast');},
		 function() {
			$(this).children('.submenu').slideUp('fast');}
		);
		
});