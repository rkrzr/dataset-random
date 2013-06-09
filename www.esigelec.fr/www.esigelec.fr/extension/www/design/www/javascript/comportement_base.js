// unobtrusive javascript

$(document).ready(function(){
	// Tabs Examples
	//$("#tabs").tabs();

	// Accordion Examples
	//$("#accordion").accordion();

	// Colorbox Examples
	$("a[rel='galerie']").colorbox({transition:"elastic", contentCurrent:"{current} / {total}"});

	$('ul.sous_menu:not(:has(li))').hide();
	$('ul.sous_menu > li:not(:has(".current")) > ul').hide();
	$('ul.sous_menu > li:has("ul:has(li)")').children("a:not('.ouvrable')").click(function(){
	   sous_menu=$(this).siblings("ul");
	   $('ul.sous_menu > li > ul').not($(sous_menu)).not($(this).parents('ul:first')).not($(sous_menu).children().children('ul.sous_menu')).slideUp();
	   $(sous_menu).slideDown();
	   return false;
	});



}); // end dom ready

