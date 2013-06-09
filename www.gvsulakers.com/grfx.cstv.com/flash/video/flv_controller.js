if (typeof OS == 'undefined') {
	var OS;	
}
if (typeof vidPlayerSettings == 'undefined') {
	var vidPlayerSettings = [];
}
if (typeof vidPlyrID == 'undefined') {
	vidPlyrID = "flvVideoPlayer";//+ Math.floor(Math.random()*10000000);
} else {
	vidPlyrID = vidPlyrID;// + Math.floor(Math.random()*10000000);
}
vidPlayerSettings[vidPlyrID] = { w: vidPlyrWidth, h: vidPlyrHeight };	

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {      
	OS = "mobile";
	document.write(' \
		<div id="'+vidPlyrID+'"> \
		<iframe style="width:'+vidPlayerSettings[vidPlyrID].w+'px; height:'+vidPlayerSettings[vidPlyrID].h+'px;" frameborder="0" height="'+vidPlayerSettings[vidPlyrID].h+'" width="'+vidPlayerSettings[vidPlyrID].w+'" scrolling="no" seamless id="'+vidPlyrID+'-iframe"></iframe> \
		</div>');
	vidPlyrDefault = ' ';	
	var _bsiCurrentVideo = "";	

}else{

	OS = "browser"; 

	vidPlyrVars += "&cache=1p4&cacheAn=6";      //cache on the actual video player
	var vidCntrlCache = "?1i9";     //cache on this swf
	var vidCntrlSWF = "http://grfx.cstv.com/flash/video/flv_controller_v3_1.swf" + vidCntrlCache;
	if (typeof vid_partner != "undefined") {
		if (vid_partner.slice(0,3) == "afl") {
			vidCntrlSWF = "http://grfx.cstv.com/flash/video/afl/afl_controller_v4.swf" + vidCntrlCache;
		}
	}
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if ( plugin ) {
		plugin = parseInt(plugin.description.substring(plugin.description.indexOf(".")-2)) >= 10 || parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= vidPlyrVersion;
	}
	else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
		 && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
		document.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');
		document.write('on error resume next \n');
		document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+vidPlyrVersion+'")))\n');
		document.write('</SCR'+'IPT\> \n');
	}
	if ( plugin ) {
		/*
		vidPlyrPortalCode =' <OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
		vidPlyrPortalCode +=' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+vidPlyrVersion+',0,0,0" ';
		vidPlyrPortalCode +=' ID='+vidPlyrID+' WIDTH='+vidPlyrWidth+' HEIGHT='+vidPlyrHeight+'>';
		vidPlyrPortalCode +=' <PARAM NAME=movie VALUE="'+vidCntrlSWF+'"> <PARAM NAME=menu VALUE=false> <PARAM NAME=quality VALUE=high> <PARAM NAME=scale VALUE='+vidPlyrScale+'> <PARAM NAME=salign VALUE=LT> <PARAM NAME=wmode VALUE='+vidPlyrWmode+'> <PARAM NAME=bgcolor VALUE=#'+vidPlyrBkgCol+'> <PARAM NAME=FlashVars VALUE='+vidPlyrVars+'> <PARAM NAME=AllowScriptAccess VALUE=always> <param name=allowFullScreen value=true> '; 
		vidPlyrPortalCode +=' <EMBED name="'+vidPlyrID+'" src="'+vidCntrlSWF+'" menu=false quality=high scale='+vidPlyrScale+' salign=LT wmode='+vidPlyrWmode+' bgcolor=#'+vidPlyrBkgCol+' swLiveConnect=FALSE WIDTH='+vidPlyrWidth+' HEIGHT='+vidPlyrHeight+' FlashVars='+vidPlyrVars;
		vidPlyrPortalCode +=' AllowScriptAccess=always allowFullScreen=true TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED></OBJECT>';
		*/
		vidPlyrPortalCode = ' \
			<object type="application/x-shockwave-flash" name="'+vidPlyrID+'" src="'+vidCntrlSWF+'" data="'+vidCntrlSWF+'" menu="false" quality="high" scale="'+vidPlyrScale+'" salign="LT" wmode="'+vidPlyrWmode+'" bgcolor="'+vidPlyrBkgCol+'" swliveconnect="FALSE" width="'+vidPlyrWidth+'" height="'+vidPlyrHeight+'" flashvars="'+vidPlyrVars+'" allowscriptaccess="always" allowfullscreen="true"  id="'+vidPlyrID+'">  \
			<param name="name" value="'+vidPlyrID+'"> \
			<param name="src" value="'+vidCntrlSWF+'"> \
			<param name="menu" value="false"> \
			<param name="quality" value="high"> \
			<param name="scale" value="'+vidPlyrScale+'"> \
			<param name="salign" value="LT"> \
			<param name="wmode" value="'+vidPlyrWmode+'"> \
			<param name="bgcolor" value="'+vidPlyrBkgCol+'"> \
			<param name="swLiveConnect" value="FALSE"> \
			<param name="width" value="'+vidPlyrWidth+'"> \
			<param name="height" value="'+vidPlyrHeight+'"> \
			<param name="FlashVars" value="'+vidPlyrVars+'"> \
			<param name="AllowScriptAccess" value="always"> \
			<param name="allowFullScreen" value="true"> \
			</object>';
		document.write(vidPlyrPortalCode);
	} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)) {
		document.write(vidPlyrDefault);
	}
}
_bsiCurrentVideo = "";
_bsiIndexForVideo = null;
function loadBSISinglePlayer(w, h) {
	var bsivideo = bsiCompleteArray[arrayIndex].photoSource;


	/*
	if (_bsiIndexForVideo == arrayIndex) {
		return;
	} else {
		_bsiIndexForVideo = arrayIndex;
	}
	*/

	if (_bsiCurrentVideo == bsivideo) { return; }

	_bsiCurrentVideo = bsivideo;
	
	var req = new XMLHttpRequest();
	req.open('GET', 'http://'+ window.location.hostname + '/data/xml/bsi_video/' + bsivideo + '.xml' + '?cache=' + new Date().getTime(), true);
	req.send();
	req.onreadystatechange = function() {
		if(req.readyState != 4) {             
			return;
		}
		if(req.status == 200) {
			var xml = req.responseXML;
			var media_id = xml.getElementsByTagName("Item")[0].getAttribute("cstvMediaId");
			var imgUrl = xml.getElementsByTagName("Item")[0].getAttribute("imageUrl");
			var vidTitle = xml.getElementsByTagName("Item")[0].getAttribute("title");
			document.getElementById(vidPlyrID+'-iframe').src="http://grfx.cstv.com/scripts/video/single-player/v1/?width="+ vidPlayerSettings[vidPlyrID].w + "&height=" +vidPlayerSettings[vidPlyrID].h + "&school=" + vid_partner+"&title="+encodeURIComponent(vidTitle)+"&media="+media_id+"&img="+imgUrl + "&cb=" + (new Date().getTime() + "").slice(0,-5);
			
			setTimeout(function(){
				_bsiCurrentVideo = 0;
			}, 2000);
		}
	}	
	window.addEventListener("message", bsiPostMessage, false);
}
function bsiPostMessage(e) {
	//if (e.data == "bsiStop" && e.origin == "http://onlyfans.cstv.com") {		
	//if (typeof console!='undefined') { console.log(e.data);	}
	try {
		clearInterval(rotate_timer);
	} catch(e) {
		setTimeout(function(){
			clearInterval(rotate_timer);
		}, 1000);
	}    	
	//}
}
(function(){
	if (OS=="mobile") {
		var iframeURL = "http://grfx.cstv.com/scripts/video/single-player/v1/?width="+ vidPlayerSettings[vidPlyrID].w + "&height=" +vidPlayerSettings[vidPlyrID].h + "&school=" + vid_partner,
			haveHlsURL = (typeof vid_url_hls != "undefined" && vid_url_hls.length>1) ? true : false,
			haveVidURL = (typeof vid_url != "undefined" && vid_url.length>1) ? true : false,
			haveImgURL = (typeof img_url != "undefined" && img_url.length>1) ? true : false,
			mediaReg,
			media_id,
			imgUrl,
			vidTitle;

			vidTitle = "Watch Video";

		// hls url provided
		if (haveHlsURL) { 

			iframeURL += "&vidurl="+encodeURIComponent(vid_url_hls)+"&title=" + encodeURIComponent(vidTitle) + "&media=&img="+img_url;
		
		} else {

			imgUrl = (haveImgURL) ? img_url : "http://grfx.cstv.com/graphics/spacer.gif";
			mediaReg = new RegExp(/mediaID=([0-9]+)/i);
			media_id = vidPlyrVars.match(mediaReg);
			media_id = (media_id != null) ? media_id[1] : false;

			if (media_id) {
				iframeURL += "&title="+encodeURIComponent(vidTitle)+"&media="+media_id+"&img="+imgUrl;
			} else if (haveVidURL) {
				//BSI doesn't provide a vid_url		
				iframeURL += "&title=&media=&img="+imgUrl+"&error=videofilenotavailable"; 
			}

		}

		document.getElementById(vidPlyrID+'-iframe').src = iframeURL + "&cb=" + (new Date().getTime() + "").slice(0,-5);

	/*

	// hls url provided
	if (typeof vid_url_hls != "undefined" && vid_url_hls.length>=0) {
		document.getElementById(vidPlyrID+'-iframe').src="http://onlyfans.cstv.com/scripts/video/single-player/v1/index.html?vidurl="+vid_url_hls+"&width="+ vidPlayerSettings[vidPlyrID].w  + "&height=" +vidPlayerSettings[vidPlyrID].h + "&school=" + vid_partner + "&title=Watch Video&media=&img="+img_url;
	}
	// no hls url or hls url is empty, vid_url is provided
	if (typeof vid_url != "undefined" && vid_url != "" && (typeof vid_url_hls == "undefined" || vid_url_hls == "")) {
		mediaReg = new RegExp(/mediaID=([0-9]+)/i);
		media_id = vidPlyrVars.match(mediaReg);
		media_id =(media_id != null) ? media_id[1] : null;
		imgUrl = "http://grfx.cstv.com/graphics/spacer.gif";
		vidTitle = "Watch Video";
		if (media_id != null) {
			document.getElementById(vidPlyrID+'-iframe').src="http://onlyfans.cstv.com/scripts/video/single-player/v1/index.html?width="+ vidPlayerSettings[vidPlyrID].w + "&height=" +vidPlayerSettings[vidPlyrID].h + "&school=" + vid_partner+"&title="+encodeURIComponent(vidTitle)+"&media="+media_id+"&img="+imgUrl;
		} else {
			document.getElementById(vidPlyrID+'-iframe').src="http://onlyfans.cstv.com/scripts/video/single-player/v1/index.html?width="+ vidPlayerSettings[vidPlyrID].w + "&height=" +vidPlayerSettings[vidPlyrID].h + "&school=" + vid_partner+"&title=&media=&img="+imgUrl;
		}
	}
	*/
	} 
})();
vidPlyrVars ="";
vid_url_hls = "";
img_url ="";