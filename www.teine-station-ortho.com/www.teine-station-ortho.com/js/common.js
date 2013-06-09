//index.html 「アクティブ化…」警告表示回避
function RunFlash()
{
    document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="560" height="378">\n');
    document.write('<param name="movie" value="swf/top.swf" />\n');
    document.write('<param name="quality" value="best" />\n');
    document.write('<param name="wmode" value="transparent" />\n');
    document.write('<embed src="swf/top.swf" quality="best" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="560" height="378"></embed>\n');
    document.write('</object>\n');
}

function RunFlash2()
{
    document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="560" height="378">\n');
    document.write('<param name="movie" value="swf/top2.swf" />\n');
    document.write('<param name="quality" value="best" />\n');
    document.write('<param name="wmode" value="transparent" />\n');
    document.write('<embed src="swf/top2.swf" quality="best" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="560" height="378"></embed>\n');
    document.write('</object>\n');
}
//////////////////////////////////////////////////////////////////
//
//						▼ロールオーバー
//////////////////////////////////////////////////////////////////


function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'roll') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_f2'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_f2'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

try{
	window.addEventListener("load",initRollovers,false);
}catch(e){
	window.attachEvent("onload",initRollovers);
}
//////////////////////////////////////////////////////////////////

//						▼ニュースアイコン
//////////////////////////////////////////////////////////////////

function daycount(tgtdy){
	ymd = tgtdy.split("/");
	today = (new Date()).getTime();
	tgday = (new Date(ymd[0],ymd[1]-1,ymd[2])).getTime();
	btday = Math.floor((tgday-today)/(24*60*60*1000));
	return btday + 1;
}

function newmark(tgtdy,deldy){
	//document.write("" + tgtdy + "");
	limday = -daycount(tgtdy);
	if(deldy >= limday){
		//document.write("<em></em>");
		document.write("<img src='img/top/new.gif' border='0' alt='NEW'>");
		}
	else{
		document.write("<img src='img/top/old.gif' border='0' alt=''>");
	}
}

function newmark2(tgtdy,deldy){
	//document.write("" + tgtdy + "");
	limday = -daycount(tgtdy);
	if(deldy >= limday){
		//document.write("<em></em>");
		document.write("<img src='../img/top/new.gif' border='0' alt='NEW'>");
		}
	else{
		document.write("<img src='../img/top/old.gif' border='0' alt=''>");
	}
}

function newmark3(tgtdy,deldy){
	//document.write("" + tgtdy + "");
	limday = -daycount(tgtdy);
	if(deldy >= limday){
		//document.write("<em></em>");
		document.write("<img src='../../../img/top/new.gif' border='0' alt='NEW'>");
		}
	else{
		document.write("<img src='../../../img/top/old.gif' border='0' alt=''>");
	}
}

