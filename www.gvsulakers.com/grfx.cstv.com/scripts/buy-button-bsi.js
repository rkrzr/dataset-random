// ====== PHOTO PROVIDER =====================
if (typeof fm_store_id !== 'undefined') {
    var buyMePhotoSource = "fotomoto";
    document.writeln("<script type='text/javascript' src='http://widget.fotomoto.com/stores/script/" + fm_store_id + ".js?aid=" + fm_affiliate_id + "&api=true;'></script>");    
}
else if(buyMePhotoSource =='replay'){
    var buyMePhotoSource = ""; 
    document.getElementById('buy-me-photo-button-bsi').style.visibility = "hidden";
}
else { 
    var buyMePhotoSource = ""; 
    document.getElementById('buy-me-photo-button-bsi').style.visibility = "hidden";
}
// ====== END PHOTO PROVIDER =================



// ====== DEFAULT/CUSTOM BUY NOW BUTTONS (don't remove) =======
if (typeof custom_buyphoto_side === 'undefined') {
    var buy_photo_button_side = "right"; 
} else { var buy_photo_button_side = custom_buyphoto_side;  } 

if (typeof custom_buyphoto_off === 'undefined' || custom_buyphoto_off === "") { 
    if (buyMePhotoSource === "fotomoto") { 
        var buy_photo_button_off = "http://grfx.cstv.com/graphics/buysharephoto-off.png"; 
    } else {
        var buy_photo_button_off = "http://grfx.cstv.com/graphics/buythisphoto-off.png"; 
    }
} else { var buy_photo_button_off = custom_buyphoto_off; }

if (typeof custom_buyphoto_on === 'undefined' || custom_buyphoto_on === "") {
    if (buyMePhotoSource === "fotomoto") { 
        var buy_photo_button_on = "http://grfx.cstv.com/graphics/buysharephoto-on.png"; 
    } else {
        var buy_photo_button_on = "http://grfx.cstv.com/graphics/buythisphoto-on.png"; 
    } 
} else { var buy_photo_button_on = custom_buyphoto_on; }
// ====== END CUSTOM BUY NOW BUTTONS ==================

function enablePhotoBuyNow(bsiCompleteArray){
var buyMePhotoURL;
for(i=0; i<bsiCompleteArray.length; i++){
if(bsiCompleteArray[i].buyNowFlag == '1'){ 
buyMePhotoURL=bsiCompleteArray[i].buyNowUrl;
if(
        buyMePhotoURL.match('printroom') ||
        buyMePhotoURL.match('airforcephotostore') ||
        buyMePhotoURL.match('alabamabirminghamphotostore') ||
        buyMePhotoURL.match('auburnphotostore') ||
        buyMePhotoURL.match('bostoncollegephotostore') ||
        buyMePhotoURL.match('cincinnatiphotostore') ||
        buyMePhotoURL.match('floridastatephotostore') ||
        buyMePhotoURL.match('georgiaphotostore') ||
        buyMePhotoURL.match('illinoisphotostore') ||
        buyMePhotoURL.match('indianaphotostore') ||
        buyMePhotoURL.match('marquettephotostore') ||
        buyMePhotoURL.match('pennstatephotostore') ||
        buyMePhotoURL.match('newmexicophotostore') ||
        buyMePhotoURL.match('uconnphotostore') ||
        buyMePhotoURL.match('utahphotostore') ||
        buyMePhotoURL.match('vanderbiltphotostore') 
){
    var buyMePhotoSource = ""; 
    document.getElementById('buy-me-photo-button-bsi').style.visibility = "visible";
}
else{
    document.getElementById('buy-me-photo-button-bsi').style.visibility = "hidden";
}
} //if
} //for loop
}
var bsiCompleteArray = new Array();
setTimeout(function(){enablePhotoBuyNow(bsiCompleteArray)},1000);
