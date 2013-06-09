$.fn.Button=function(sel)
{
	var closed=true,
		th=this;
	$(sel).hide();
	$(this).removeClass('selected').click(function(){
		$(sel).toggle("fast");
		$(this).toggleClass("selected");
		closed=!closed;
		return false;
	});
	$(document).click(function(e){
		if(closed)
			return;
		var target=e.target||e.srcElement;
		while(target)
		{
			var ret=false;
			$(sel).each(function(){
				if(ret=target==this)
					return false;
			});
			if(ret)
				return;
			target=target.parentNode;
		}
		$(sel).hide('fast');
		$(th).removeClass('selected');
		closed=true;
	});
	return this;
}

$.fn.UlMenu=function()
{
	$.each(this,function(){
	$("li.submenu",this).hide();
		$("li:has(.sublnk)",this).click(function(){
			$(this).toggleClass("selected").next("li.submenu").slideToggle(300).css("display",function(){
					if($(this).css("display")=="list-item")
				return "block";
			});
		});
	});
return this;
}

$(function() {

	$( "#logindialog" ).dialog({
		autoOpen: false,
		width: 300
	});

	$('#loginlink').click(function(){
		$('#logindialog').dialog('open');
		return false;
	});
});

$(document).ready(function(){
	var tabContainers = $('#tabbs .tabcont');
		tabContainers.hide().filter(':first').show();
								
		$('#tabbs .tabmenu a').click(function () {
			tabContainers.hide();
			tabContainers.filter(this.hash).show();
			$('#tabbs .tabmenu a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		}).filter(':first').click();
});