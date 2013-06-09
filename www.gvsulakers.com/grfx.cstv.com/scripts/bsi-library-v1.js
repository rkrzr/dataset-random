var arrayIndex = 0;//don't change
var frmIndex = 0;//don't change
var last = 0;//don't change
var arrayLengthIndex = 0;//don't change

////////////////// BEGIN TELL HEIGHT ////////////////////

function tellHeight() {
	videoIconCheck();
	document.getElementById('mini0').className="miniOn";	
	var layerHeights = new Array;
	function createLayerHeights() {
		for ( frmIndex;  layerHeights.length <  layerHeightsLength; frmIndex++ )	{
			layerHeights[frmIndex] = document.getElementById('frm'+frmIndex).offsetHeight;
		}	
	}
	var i = framePanels-1;
	createLayerHeights();
	if (layerHeights[layerHeights.length-1] >= 0) {
		function compare(a,b) {
		return b - a;
	}
	layerHeights.sort(compare);
	document.getElementById('relativeFrame').style.height =  layerHeights[0] + "px";
	clearInterval(mwcBoxAdjust);
	rotate_timer = setInterval("toggleFlip()",bsiRotationTime);
		do {
			document.getElementById("mini"+i).style.visibility="visible";
		} while(i--);
	}
}

////////////////// END TELL HEIGHT ////////////////////

if(!document.layers) {
var layerHeights=[document.getElementById('frm0')];
} else {
oLayer = window.document.relativeFrame;
var layerHeights=[oLayer.document.frm0.clip.height,oLayer.document.frm1.clip.height,oLayer.document.frm2.clip.height,oLayer.document.frm3.clip.height];
}
layerHeights.sort()
var divAreaWidth=375;
var divAreaHeight = layerHeights[layerHeights.length-1];
if (document.layers) {
document.writeln('<img src="http://grfx.cstv.com/graphics/spacer.gif" width="'+divAreaWidth+'" height="'+divAreaHeight+'" border="0" alt="" />');
}//uncomment line below for png bsi



if ( pngLogic == true ) {
	document.getElementById('pngBsi').style.backgroundImage = "url(" + firstPhoto + ")";
} else {
	//document.getElementById('frame_photo').src = bsiPhotosArray[0];
	document.getElementById('frame_photo').src = firstPhoto;
}


var getMyDivCount = document.getElementById("relativeFrame").getElementsByTagName("div");
var panels_i = getMyDivCount.length-1;
var getMyPanelCount=0;
do {
	if(getMyDivCount[panels_i].id.indexOf("frm") != -1){
	getMyPanelCount++;
}
} while(panels_i--);
var framePanels=getMyPanelCount;  // set you base panel number here
var oasPrimeToggle = 0;
var oasPrimeToggleState = 0;
var currActiveFrame = 0;
var rotate_timer;

/////////////begin icon check//////////////
var miniIndex = 0;
function videoIconCheck(){
	mediaTypeCheck();
	checkBuyNow();
	for ( miniIndex ; miniIndex < miniCount ; miniIndex++) {
		if (bsiCompleteArray[miniIndex].mediaType == "video") {
			document.getElementById("vid"+miniIndex).style.display ="block";
			
		} else {
			document.getElementById("vid"+miniIndex).style.display ="none";
		}
	}
}
/////////////end icon check////////////////

///////////////////BEGIN  HMTL BUY BUTTON///////////////////

/////////////////checkBuyNow()///////////
function checkBuyNow() {
    //converted entirely to the HTML button
    //old checkBuyNow code is below
    
    if (typeof buyNowExpandDelay == 'undefined') {
        buyNowExpandDelay = 1700;
    }
    
    if (document.getElementById("buy-me-photo-button-bsi")) { 
        
        // clear the timer when we reload
        if (typeof buyNowTimer !== 'undefined') { clearTimeout(buyNowTimer); }
        
        if (!document.getElementById("buy-me-photo-button-html")) {
        
           bsiBuyPhotoDiv = document.createElement("div");
           bsiBuyPhotoDiv.setAttribute("id", "buy-me-photo-button-html");
           bsiBuyPhotoAnchor = document.createElement("a");
           bsiBuyPhotoAnchor.setAttribute("id", "buy-me-photo-button-link");
           bsiBuyPhotoAnchor.innerHTML= "Buy this Photo";
           bsiBuyPhotoDiv.appendChild(bsiBuyPhotoAnchor);
       
           document.getElementById('buy-me-photo-button-bsi').appendChild(bsiBuyPhotoDiv);
      
           bsiBuyPhotoAnchor.style.position = "absolute";
           bsiBuyPhotoAnchor.style.display = "block";
           bsiBuyPhotoAnchor.style.textIndent = "-9999px";
           bsiBuyPhotoAnchor.style.width = "89px";
           bsiBuyPhotoAnchor.style.height = "46px";
           bsiBuyPhotoAnchor.style.zIndex = 400;
       
           bsiBuyPhotoAnchor.style.background = "url('" + buy_photo_button_off + "') no-repeat top " + buy_photo_button_side + "";
       
        }

        if (bsiCompleteArray[arrayIndex].buyNowFlag === "1") {
        
            // ### PHOTO PROVIDER ###
        
            if (buyMePhotoSource === 'fotomoto') {
                bsiBuyPhotoAnchor.setAttribute("href", "#");
                document.getElementById("buy-me-photo-button-link").onclick = function() { FOTOMOTO.API.showWindow(FOTOMOTO.API.BUY, bsiCompleteArray[arrayIndex].buyNowUrl); return false; }
            } else { 
                // replayphoto
                bsiBuyPhotoAnchor.setAttribute("href", bsiCompleteArray[arrayIndex].buyNowUrl.replace(/%26/g, "&"));
                bsiBuyPhotoAnchor.setAttribute("target", "_blank");
            }
            
            //default to open, then close
            mouseoverBuyPhotoLink();
            buyNowTimer = setTimeout(function(){ 
                mouseoutBuyPhotoLink();
            }, buyNowExpandDelay);
        
            document.getElementById("buy-me-photo-button-link").onmouseover = function() { mouseoverBuyPhotoLink(); }
            document.getElementById("buy-me-photo-button-link").onmouseout = function() { mouseoutBuyPhotoLink(); }
            document.getElementById("buy-me-photo-button-bsi").style.display = "block";
        } else {  
            document.getElementById("buy-me-photo-button-bsi").style.display = "none"; 
        }
        
    }
  
}

function mouseoverBuyPhotoLink() {
    bsiBuyPhotoAnchor = document.getElementById("buy-me-photo-button-link");
    bsiBuyPhotoAnchor.style.background = "url('" + buy_photo_button_on + "') no-repeat top " + buy_photo_button_side + "";    
}
function mouseoutBuyPhotoLink() {
    bsiBuyPhotoAnchor = document.getElementById("buy-me-photo-button-link");
    bsiBuyPhotoAnchor.style.background = "url('" + buy_photo_button_off + "') no-repeat top " + buy_photo_button_side + "";    
}

///////////////////end checkBuyNow()///////////////////





////////// THESE FUNCTIONS USED TO COMMUNICATE WITH THE FLASH PLAYER ////////////////
var flvPlayerLoaded = false;
function videoPlayerReady() {	//flash will call this when it's loaded
	flvPlayerLoaded = true;
}

var videoCounter = 0; //hack
function loadVideoPlayer() {  //makes sure the player has loaded before telling it to call a video
	if (typeof OS != "undefined" && OS == "mobile") { 
		loadBSISinglePlayer();
	} else { 
		if (flvPlayerLoaded) {
			sendToVideoPlayer();
		} else {          //keep checking until player loads
			videoCounter++;//hack
			if (videoCounter >= 10) { flvPlayerLoaded = true; }//hack
			var t = setTimeout("loadVideoPlayer()", 50);
		}
	}
}

function killVideoPlayer() {  //makes sure the player has loaded before telling it to call a video
	videoCounter = 0;
	if (typeof OS != "undefined" && OS == "mobile") { 
		document.getElementById("flvVideoPlayer-iframe").src = "";
		//var e = document.getElementById("flvVideoPlayer");
		//e.src = ""; //e.parentNode.removeChild(e);
	}
	if (flvPlayerLoaded) {
		document.getElementsByName(vidPlyrID)[0].tellVideoToStop();
	}
}

function sendToVideoPlayer() {
	//alert(bsiCompleteArray[arrayIndex].photoSource);
    document.getElementsByName(vidPlyrID)[0].sendVideoToPlay(bsiCompleteArray[arrayIndex].photoSource);
}

function onVideoPlayStart(value) {
    clearInterval(rotate_timer);
}
/////////////////////////////// END FLASH FUNCTIONS //////////////////////////////////

///////////////////END HTML BUY BUTTON///////////////////



function goToStory() {
	parent.window.location = bsiCompleteArray[currActiveFrame].storySource;
}//end func
function toggleFlip(currFrame,lastFrame) {
	rotate(oasPrimeToggle);
	last=oasPrimeToggle;
	oasPrimeToggleState++;  // if you want toggle to start at Zero, place this statement below:  toggle = toggleState%5;
	oasPrimeToggle = oasPrimeToggleState%framePanels;
}

/* end toggleFlip

function progressCarousel() {
	$('#carousel_ul').css({'left' : '-122px'});
}

*/

function rotate(currFrame) {
	currActiveFrame = currFrame;
	arrayIndex = currFrame;
	mediaTypeCheck();	
	checkBuyNow();
	var i = framePanels-1;
	if(!document.layers) {
		do {
			document.getElementById('frm'+i).style.visibility="hidden";
			document.getElementById("mini"+i).className="";
		} while(i--);
		document.getElementById('frm'+currFrame).style.visibility="visible";
		document.getElementById("mini"+currFrame).className="miniOn";
		//comment line below and uncomment following line for png bsi
		if ( pngLogic == false ) {
			document.getElementById('frame_photo').src = bsiCompleteArray[currFrame].photoSource;
		} 
		if ( pngLogic == true ) {
			document.getElementById('pngBsi').style.backgroundImage = 'url('+bsiCompleteArray[currFrame].photoSource+')';
		}
		
	}
last=currFrame;

/*
if ( carouselLogic == true ) { 
progressCarousel(); 
}
*/

}

//end func

function rotateToPanel(panel) {
	mediaTypeCheck();
	oasPrimeToggle=panel;
	oasPrimeToggleState=panel;
	clearInterval(rotate_timer);
	if ( controlsLogic == true ) {
		changeImage(1);
	}
	rotate(oasPrimeToggle);
}//end func

///////////////////////////////controls//////////////////////////////////////
function rotateBack(){
	clearInterval(rotate_timer);
	if(last==0){last = framePanels-1;}else{last--;}
	changeImage(1);
	rotate(last);
}//end func

////////////////////////////controls/////////////////////////////////////////
function rotateForward(){
clearInterval(rotate_timer);
if(last==framePanels-1){last = 0;}else{last++;}
changeImage(1);
rotate(last);
}//end func


///////////////////////////controls//////////////////////////////////////////
function rotatePlay(){
if(last==framePanels-1){oasPrimeToggle = 0;}
rotate_timer = setInterval("toggleFlip()",bsiRotationTime);
}//end func

//////////////////////////////controls///////////////////////////////////////
function bsiImgOn(imageName) {
	num = imageName.split("e");
	document[imageName].src = pr_onimages[num[1]].src;  
}

function bsiImgOff(imageName) {  
	num = imageName.split("e");
	document[imageName].src = pr_offimages[num[1]].src;
}

oasToggle = 0;
oasToggleState = 0;

function changeImage(state) {
	oasToggleState++;  // if you want oasToggle to start at Zero, place this statement below:  oasToggle = oasToggleState%5;
	if(state){
	oasToggleState = state;
	toggle=last;
	toggleState=last;
}
oasToggle = oasToggleState%2;
document['playOrstop'].src = ButtonGroups[oasToggle][0].src;//Number one needs to become oasToggle
if(oasToggle==0){
rotatePlay()
}else{
clearTimeout(rotate_timer)
}

}

///////////////////// display minis /////////////////////
var bsiAddMinis = getMyPanelCount-1;
do {
	document.getElementById("mini"+bsiAddMinis).style.display="block";
} while(bsiAddMinis--);
/////////////////////end display minis /////////////////////
///////////////////////////////////////// INITIALIZE /////////////////////////////////////////
if (!document.layers) {
	mwcBoxAdjust = setInterval("tellHeight()",500);
} else {
	rotate_timer = setInterval("toggleFlip()",bsiRotationTime);
  }
///////////////////////////////////////// INITIALIZE /////////////////////////////////////////

