$(document).ready(function(){
		
	var wwidth = $(window).width();
	
	$("#main_content img").each(function(){
			iwidth = $(this).width();
			if (iwidth > wwidth)
			{
				$(this).addClass("responsive");
			}
	}
	)
});