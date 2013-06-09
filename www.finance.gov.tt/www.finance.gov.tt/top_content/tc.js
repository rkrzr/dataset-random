// JavaScript Document
$(document).ready(function(){
	$("a[href$='pdf']").each(function(index) {
		pdfLabel = $(this).html();
		pdfLink = $(this).attr('href');
		pdfOnClick = "_gaq.push(['_trackEvent', 'PDF', '" + pdfLabel + "', '" + pdfLink + "']);";
		$(this).attr("onClick", pdfOnClick);
	});

});
 
 
 
