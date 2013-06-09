/* BSI TABS */

function headlinesTabs(i) {
	document.getElementById("headlines").style.display = (i == "on-headlines") ? "block" : "none";
	document.getElementById("video").style.display = (i == "on-video") ? "block" : "none";
	document.getElementById("calendar").style.display = (i == "on-calendar") ? "block" : "none";
	
	document.getElementById("headlines-tab").className = i;
}

function blogTabs(i) {
	document.getElementById("blogs").style.display = (i == "on-blogs") ? "block" : "none";
	document.getElementById("aotw").style.display = (i == "on-aotw") ? "block" : "none";
	document.getElementById("magazine").style.display = (i == "on-magazine") ? "block" : "none";
	document.getElementById("photos").style.display = (i == "on-photos") ? "block" : "none";
	document.getElementById("fanpoll").style.display = (i == "on-fanpoll") ? "block" : "none";
		
	document.getElementById("blog-tab").className = i;
}

function commerceTabs(i) {
	document.getElementById("onlinestore").style.display = (i == "on-onlinestore") ? "block" : "none";
	document.getElementById("auctions").style.display = (i == "on-auctions") ? "block" : "none";

	document.getElementById("commerce-tab").className = i;
}

function socialTabs(i) {
	document.getElementById("socialfacebook").style.display = (i == "on-socialfacebook") ? "block" : "none";
	document.getElementById("socialtwitter").style.display = (i == "on-socialtwitter") ? "block" : "none";
	document.getElementById("socialgame").style.display = (i == "on-socialgame") ? "block" : "none";
	document.getElementById("socialvideos").style.display = (i == "on-socialvideos") ? "block" : "none";
	document.getElementById("socialaudio").style.display = (i == "on-socialaudio") ? "block" : "none";
	document.getElementById("socialnewsletter").style.display = (i == "on-socialnewsletter") ? "block" : "none";

	document.getElementById("topsocial-tab").className = i;
}

var browserName=navigator.appName; 
function resetVideoBSI() {
	if (browserName=="Microsoft Internet Explorer") {
	} else {
	flvPlayerLoaded=false;
	mediaTypeCheck();
	rotate_timer = setInterval('toggleFlip()',bsiRotationTime);
	checkBuyNow();
	}
}
function clearVideoBSI() {
	if (browserName=="Microsoft Internet Explorer") {
	} else {
	clearInterval(rotate_timer);
	}
}
