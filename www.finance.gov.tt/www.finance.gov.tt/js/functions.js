// Quicklinks
$(document).ready(function(){
	$("#quicklinks").accordion({ header: 'h2' });
			
	$(".vm_overlay").click(function(){
		// Set VM Content
		vm_content_url = $(this).attr('href');
		set_content(vm_content_url);	
		// Display Lightbox
		show_overlay();
		
		return false;
	});
	

	
	$("#vm_overlay").click(function(){
		$("#vm_overlay, #vm_lightbox").css("display","none");
		
	});

});

function set_content(url){
	$.get(url, function(data) {
		$('#vm_lightbox').html(data);
	});

}



