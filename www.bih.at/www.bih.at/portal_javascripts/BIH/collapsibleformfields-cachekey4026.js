
/* - collapsibleformfields.js - */
// http://www.bih.at/portal_javascripts/collapsibleformfields.js?original=1
(function($){$.fn.do_search_collapse=function(){return this.each(
function(){
function check_used(element){e=$(element);if(e.find('input[id$=_toggle]:checkbox').length>0){if(e.find('input[id$=_toggle]:checkbox:checked').length==0){return true}};if(e.find(':text[value]').length>0){return true};if(e.find('select .default_option').length>0){if(e.find('select .default_option:selected').length==0){return true}}
return false};var indicator=$(this).find('.collapser:first');var collapse=$(this).find('.collapse:first');indicator.click(function(){var container=$(this).parent();target=container.find('.collapse:first');target.slideToggle('normal');$(this).toggleClass('expanded');$(this).toggleClass('collapsed')});if(check_used(this)){indicator.addClass('expanded')} else{collapse.hide();indicator.addClass('collapsed')}})}})(jQuery);
