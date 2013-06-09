var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
	plugin = parseInt(plugin.description.substring(plugin.description.indexOf(".")-2)) >= 10 || parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= auctionsVersion;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
   && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
	document.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+auctionsVersion+'")))\n');
	document.write('</SCR'+'IPT\> \n');
}
if ( plugin ) {
	auctionsPortalCode =' <OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
	auctionsPortalCode +=' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+auctionsVersion+',0,0,0" ';
	auctionsPortalCode +=' ID=cstvad WIDTH='+auctionsWidth+' HEIGHT='+auctionsHeight+'>';
	auctionsPortalCode +=' <PARAM NAME=movie VALUE="'+auctionsSWF+'"> <PARAM NAME=menu VALUE=false> <PARAM NAME=quality VALUE=high> <PARAM NAME=scale VALUE='+auctionsScale+'> <PARAM NAME=salign VALUE=LT> <PARAM NAME=wmode VALUE='+auctionsWmode+'> <PARAM NAME=bgcolor VALUE=#'+auctionsBkgCol+'> <PARAM NAME=FlashVars VALUE='+auctionsVars+'> <PARAM NAME=AllowScriptAccess VALUE=always> '; 
	auctionsPortalCode +=' <EMBED src="'+auctionsSWF+'" menu=false quality=high scale='+auctionsScale+' salign=LT wmode='+auctionsWmode+' bgcolor=#'+auctionsBkgCol+' swLiveConnect=FALSE WIDTH='+auctionsWidth+' HEIGHT='+auctionsHeight+' FlashVars='+auctionsVars;
	auctionsPortalCode +=' AllowScriptAccess=always TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED></OBJECT>';
	document.write(auctionsPortalCode);
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
	document.write(auctionsDefault);
}
