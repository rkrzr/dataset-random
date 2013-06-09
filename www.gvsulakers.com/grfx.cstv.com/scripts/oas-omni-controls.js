/*
created by david parnell
copyright College Sports Online, Inc.
no part of this application may be used, duplicated or accessed without permission
*/
var NS4 = (document.layers) ? true : false;
var IE5 = (document.all) ? true : false;
var myTimer = new Array();
var is_newer = parseInt(navigator.appVersion);
var timerid=0;

document.writeln('<script language="javascript" src="http://grfx.cstv.com/scripts/madSession.js"></script>');
document.writeln('<script language="javascript" src="http://grfx.cstv.com/scripts/postprocad.js"></script>');
document.writeln('<script language="javascript" src="http://grfx.cstv.com/scripts/smarterphone.js"></script>');
// now calls http://grfx.cstv.com/scripts/mantaray.js from ncaa/library/scripts/cookieCheck.js for Madison for NCAA
//document.writeln('<script language="javascript" src="http://ocp.ncaa.com/adFunctions.js?site=188"></script>');
//document.writeln('<script language="javascript" src="http://i.i.com.com/cnwk.1d/Ads/common/manta/adFunctions-sports.js"></script>');
function browser(objName,objParent){
if(document.getElementById && !document.all){
tObj = document.getElementById(objName);
}else if (document.all){
tObj =  eval("document.all."+objName);
}else{
tObj = (objParent) ? document.layers[objParent].document.layers[objName] : document.layers[objName] ;
}
return tObj;

/*
if(document.layers){tObj = (objParent) ? eval("document."+objParent+".document."+objName) : eval("document."+objName);}
else{tObj = (document.all) ? eval("document.all."+objName) : eval("document.getElementById('"+objName+"')");}
return tObj;
*/

} // END FUNC
function imgWriter(imgname,wide,hi,alt){
imgObj = "<img src=\"http://grfx.cstv.com/"+imgname+"\" width="+wide+" height="+hi+" alt=\""+alt+"\" border=0>";
return imgObj;
}

function showObj(objName,objPar) {
(objPar)? eleObj = browser(objName,objPar) : eleObj = browser(objName);
(NS4)? eleObj.visibility = 'visible' : eleObj.style.visibility = 'visible';
} // END FUNC
function hideObj(objName,objPar) {
(objPar)? eleObj = browser(objName,objPar) : eleObj = browser(objName);
//alert(eleObj);
(NS4)? eleObj.visibility = 'hidden' : eleObj.style.visibility = 'hidden';
} // END FUNC
function eleX(objName,objParent){
eleObj = browser(objName);
if(!document.layers){
objX = eleObj.offsetLeft;
eleParent = eleObj.offsetParent;
while (eleParent != null){
objX += eleParent.offsetLeft;
eleParent = eleParent.offsetParent;
}
}else{objX = parseInt(eleObj.pageX);}
return objX;
} // END FUNC
function eleY(objName,objParent){
eleObj = browser(objName);
if(!document.layers){
objY = eleObj.offsetTop;
eleParent = eleObj.offsetParent;
while (eleParent != null){
objY += eleParent.offsetTop;
eleParent = eleParent.offsetParent;
}
}else{objY = parseInt(eleObj.pageY);}
return objY;
} // END FUNC
function origin(objName,keyEle,originLeft,originDown,originPar) {
	originObj = browser(objName); // the layer to be moved
	originKey = browser(keyEle); // the layer to Key On
	if(document.all) {//**** IE CASE *******
	originisLeft = (eleX(keyEle)+originLeft);
	originisTop = (eleY(keyEle)+originDown);
	}else{
	originisLeft = (document.layers) ? parseInt(originKey.pageX + originLeft): (originPar) ?  parseInt(originKey.offsetLeft) : parseInt(originKey.offsetLeft + originLeft);// + originLeft
	originisTop = (document.layers) ? parseInt(originKey.pageY + originDown): parseInt(originKey.offsetTop + originDown);
	}// END ELSE
	moveObj(objName,(originisLeft),originisTop);
} // END FUNC
function Timeout(objNumber,delayTime,timerObj) {
	//alert(objNumber+"\n"+delayTime+"\n"+timerObj);
	activeObj = objNumber;
	myTimer[timerObj] = setTimeout("hideObj(activeObj)",delayTime);
}// END FUNC
function Timeclr(timerObj) {
	//alert(timerObj);
	clearTimeout(myTimer[timerObj]);	
}// END FUNC
function moveKeyedObj(objName,keyEle,objLeft,objTop,objParent) {
	eleObj = browser(objName,objParent); // the layer to be moved
	eX = eleX(keyEle);
	eY = eleY(keyEle);
	moveObj(objName,(eX+objLeft),(eY+objTop));
} // END FUNC
function moveObj(objName,leftOffset,topOffset,state) {
	eleObj = browser(objName);
	if(NS4) {
	eleObj.moveToAbsolute(leftOffset,topOffset);
	}
	else {
	eleObj.style.top = topOffset + "px";
	eleObj.style.left = leftOffset + "px";
	}
}

// START clicktrack code
//<img id="track_chicklet" style="display:none;" src="http://grfx.cstv.com/graphics/spacer.gif">
//<img id="track_chicklet_page" style="display:none;" src="http://grfx.cstv.com/graphics/spacer.gif">

function clickTrack(tag, url) {
	document.getElementById("track_chicklet").src = "http://secure-us.imrworldwide.com/cgi-bin/m?ci=us-cstvclicks&cg=chicklets&si=http://" + document.domain + "_" + tag + "&rnd=" + Math.random();
	document.getElementById("track_chicklet_page").src = "http://secure-us.imrworldwide.com/cgi-bin/m?ci=us-cstvclicks&cg=chicklets-pages&si=" + location.href + "&rnd=" + Math.random();
	window.open(url, '_blank');
}

// END clicktrack code

// code added to generate "chiclet" URLs for social network sharing.

var title_share = document.title;
var desc_share = (document.getElementsByTagName("meta")["description"]) ?
	document.getElementsByTagName("meta")["description"].content : "&nbsp;" ;

var facebook_url = "http://www.facebook.com/share.php?u=" + location.href;
var digg_url = "http://digg.com/submit?url=" + location.href + "&title=" + title_share + "&bodytext=" + desc_share;
var delicious_url = "http://delicious.com/save?v=5&noui&jump=close&title=" + title_share +  "&url=" + location.href;
var twitter_url = "http://twitter.com/home?status=" + location.href
var yahoo_url = "http://bookmarks.yahoo.com/myresults/bookmarklet?t=" + title_share +  "&u=" + location.href;
var google_url = "http://www.google.com/bookmarks/mark?op=add&bkmk=" + location.href
	+  "&title=" + title_share + "&annotation=" + desc_share;
var myspace_url = "http://www.myspace.com/Modules/PostTo/Pages/?u=" + location.href + "&t=" + title_share;
var stumbleupon_url = "http://www.stumbleupon.com/submit?title=" + title_share + "&url=" + location.href;


function shareLink(share_link) {
	//location.href = share_link;
	this.href = share_link;
	window.open(this.href, "");
}

function imgLink(name) {
	var img_tag = '<img src="http://grfx.cstv.com/graphics/share-09-' + name + '.jpg" alt="' + name + '" />';
	return img_tag;
}

function spanName(name) {
	var span_name = name;
	span_name = span_name.charAt(0).toUpperCase() + span_name.substring(1);
	if(span_name == 'Myspace') {
		span_name = 'MySpace';
	}
	return span_name;
}

function storyNavDiv(schoolcode) {

    var share_count = 0;
    var newDiv = '<img id="track_chicklet" style="display:none;" src="http://grfx.cstv.com/graphics/spacer.gif">';
    newDiv += '<img id="track_chicklet_page" style="display:none;" src="http://grfx.cstv.com/graphics/spacer.gif">';
    newDiv += '<ul id="shareNav"> <li id="shareNav-01"><a href="#"><span class="text-hidden">Share</span><!--[if gt IE 6]><!--></a><!--<![endif]--> <!--[if lt IE 7]><table><tr><td><![endif]--> <ul>';

    //	alert(newDiv);
    if(delicious=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_delicious\', \'' + delicious_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-delicious.gif" alt="delicious" /><span>Delicious</span></a></li>';
    }
    if(digg=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_digg\', \'' + digg_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-digg.gif" alt="digg" /><span>Digg</span></a></li>';
    }
    if(facebook=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_facebook\', \'' + facebook_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-facebook.gif" alt="facebook" /><span>Facebook</span></a></li>';
    }
    if(google=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_google\', \'' + google_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-google.gif" alt="google" /><span>Google</span></a></li>';
    }
    if(myspace=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_myspace\', \'' + myspace_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-myspace.gif" alt="myspace" /><span>MySpace</span></a></li>';
    }
    if(twitter=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_twitter\', \'' + twitter_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-twitter.gif" alt="twitter" /><span>Twitter</span></a></li>';
    }
    if(yahoo=='yes') {
        share_count++;
        newDiv += '<li><a href="#" onclick=\"javascript:clickTrack(\'chicklets_yahoo\', \'' + yahoo_url + '\');\">';
        newDiv += '<img src="http://grfx.cstv.com/graphics/logo-yahoo.gif" alt="yahoo" /><span>Yahoo</span></a></li>';
    }
    //  two columns needed when there's more than 8. Per Oscar
    //	newDiv += '            </ul>';
    //	newDiv += '            <ul class="right">';
    newDiv += ' </ul> <!--[if lt IE 7]></td></tr></table></a><![endif]--> </li> </ul>';

    //alert ("facebook:"+facebook+" digg:"+digg+" delicious:"+delicious+" twitter:"+twitter+" myspace:"+myspace+" google:"+google+" yahoo:"+yahoo);
    //alert(newDiv);
    //alert(share_count);
    if(share_count > 0) {
        return newDiv;
    } else {
        return '';
    }
}

// Buy now button
function buyMePhotoTellHeight() {
	document.getElementById('buy-me-photo').style.position = "relative";
	document.getElementById('buy-me-photo').style.display = "block";
	document.getElementById('buy-me-photo-button').style.position = "absolute";
	document.getElementById('buy-me-photo-button').style.top = buyMePhotoHeight-61 + "px";//adjust top positioning here
	document.getElementById('buy-me-photo-button').style.left = buyMePhotoWidth-89 + "px";//adjust left positioning here
	
}/* end function buyMePhotoTellHeight() */


