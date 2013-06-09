
/* - ++resource++jquery.ticketing.js - */
// http://www.bih.at/portal_javascripts/++resource++jquery.ticketing.js?original=1
(function(jq){jq(document).ready(function(){jq("p.print").show();jq("p.print").click(function(){window.print();return false});jq("a.agbticketing").click(function(){Popup=window.open(this.href,'AGBs','height=500,width=618,resizable=yes,scrollbars=yes');Popup.focus();return false});jq("li#helpticketing a").click(function(){Popup=window.open(this.href,'Help','height=400,width=618,resizable=yes,scrollbars=yes');Popup.focus();return false});jq("select[name='zahlart']").children().each(
function(){if(jq(this).attr('value')==3||jq(this).attr('value')==4||jq(this).attr('value')==6||jq(this).attr('value')==7)
jq(this).remove()});jq("html[lang='en'] option[value='1']:contains('Kreditkarte')").html("Credit card");jq("html[lang='en'] span:contains('Kreditkarte')").html("Credit card")})})(jQuery);
