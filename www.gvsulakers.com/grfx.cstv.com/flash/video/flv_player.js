vidVars += "&cache=1q6&cacheAn=6";			//cache on the actual video player
var vidCntrlCache = "?1j1";			//cache on this swf
var vidCntrlSWF = "http://grfx.cstv.com/flash/video/flv_controller_v3_1.swf" + vidCntrlCache;
if (typeof vid_partner != "undefined") {
	if (vid_partner.slice(0,3) == "afl") {
		vidCntrlSWF = "http://grfx.cstv.com/flash/video/afl/afl_controller_v4.swf" + vidCntrlCache;
	}
}
if (typeof vidPlyrID == "undefined") { vidPlyrID = "vidlist"; }

var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
	plugin = parseInt(plugin.description.substring(plugin.description.indexOf(".")-2)) >= 10;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
   && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
	document.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+vidVersion+'")))\n');
	document.write('</SCR'+'IPT\> \n');
}
if ( plugin ) {
	/*
	vidPortalCode =' <OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
	vidPortalCode +=' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+vidVersion+',0,0,0" ';
	vidPortalCode +=' ID='+vidPlyrID+' WIDTH='+vidWidth+' HEIGHT='+vidHeight+'>';
	vidPortalCode +=' <PARAM NAME=movie VALUE="'+vidCntrlSWF+'"> <PARAM NAME=menu VALUE=false> <PARAM NAME=quality VALUE=high> <PARAM NAME=scale VALUE='+vidScale+'> <PARAM NAME=salign VALUE=LT> <PARAM NAME=wmode VALUE='+vidWmode+'> <PARAM NAME=bgcolor VALUE=#'+vidBkgCol+'> <PARAM NAME=FlashVars VALUE='+vidVars+'> <PARAM NAME=AllowScriptAccess VALUE=always> <param name=allowFullScreen value=true> '; 
	vidPortalCode +=' <EMBED name="'+vidPlyrID+'" src="'+vidCntrlSWF+'" menu=false quality=high scale='+vidScale+' salign=LT wmode='+vidWmode+' bgcolor=#'+vidBkgCol+' swLiveConnect=FALSE WIDTH='+vidWidth+' HEIGHT='+vidHeight+' FlashVars='+vidVars;
	vidPortalCode +=' AllowScriptAccess=always allowFullScreen=true TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED></OBJECT>';
	*/
	vidPortalCode = ' \
	<object type="application/x-shockwave-flash" name="'+vidPlyrID+'" src="'+vidCntrlSWF+'" data="'+vidCntrlSWF+'" menu="false" quality="high" scale="'+vidScale+'" salign="LT" wmode="'+vidWmode+'" bgcolor="'+vidBkgCol+'" swliveconnect="FALSE" width="'+vidWidth+'" height="'+vidHeight+'" flashvars="'+vidVars+'" allowscriptaccess="always" allowfullscreen="true"  id="'+vidPlyrID+'">  \
	<param name="name" value="'+vidPlyrID+'"> \
	<param name="src" value="'+vidCntrlSWF+'"> \
	<param name="menu" value="false"> \
	<param name="quality" value="high"> \
	<param name="scale" value="'+vidScale+'"> \
	<param name="salign" value="LT"> \
	<param name="wmode" value="'+vidWmode+'"> \
	<param name="bgcolor" value="'+vidBkgCol+'"> \
	<param name="swLiveConnect" value="FALSE"> \
	<param name="width" value="'+vidWidth+'"> \
	<param name="height" value="'+vidHeight+'"> \
	<param name="FlashVars" value="'+vidVars+'"> \
	<param name="AllowScriptAccess" value="always"> \
	<param name="allowFullScreen" value="true"> \
	</object>';
	document.write(vidPortalCode);
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
	document.write(vidDefault);
}
