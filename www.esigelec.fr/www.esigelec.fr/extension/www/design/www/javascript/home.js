function afficheOnglet(elem){
	if($(elem).next().length>0){
		$(elem).fadeIn('slow', function(){
			afficheOnglet($(elem).next())
		});
	}else{
		$(elem).fadeIn('slow');
	}
}

$(document).ready(function(){
	$("#header #onglets li").hide();
	afficheOnglet($("#header #onglets li:first"));

	if($("#wrap-video").length>0){
		$(".grand").colorbox({inline:true, href:"#video_grand"});

		so.addParam('allowfullscreen','true');
		so.addParam('allowscriptaccess','always');
		so.addParam('wmode','opaque');
		so.addVariable('backcolor','FFFFFF');
		so.addVariable('plugins','http://www.adobe.com/ap/products/flashplayer/');
		so.addVariable('controlbar','none');
		so.write('mediaspace');

		so2.addParam('allowfullscreen','true');
		so2.addParam('allowscriptaccess','always');
		so2.addParam('wmode','opaque');
		so2.addVariable('backcolor','FFFFFF');
		so2.addVariable('plugins','http://www.adobe.com/ap/products/flashplayer/');
		so2.addVariable('controlbar','none');
		so2.write('video_grand');
	}
});

