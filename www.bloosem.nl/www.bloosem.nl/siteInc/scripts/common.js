// JavaScript Document

addLoadListener(rollover);

function rollover() {
	var aRollovers = document.getElementsByTagName("img");	
	for(var i=0; i<aRollovers.length; i++) {		
		if(aRollovers[i].className=='rollover' || aRollovers[i].className.indexOf('rollover')!=-1) {
			if(aRollovers[i].src.indexOf('Over.') == -1) {
				attachEventListener(aRollovers[i], "mouseover", mymouseover, false);
				attachEventListener(aRollovers[i], "mouseout", mymouseout, false);
			}
		}		
	}
	
	var aRollovers = document.getElementsByTagName("input");	
	for(var i=0; i<aRollovers.length; i++) {
		if(aRollovers[i].className=='rollover' || aRollovers[i].className.indexOf('rollover')!=-1) {
			if(aRollovers[i].src.indexOf('Over.') == -1) {
				attachEventListener(aRollovers[i], "mouseover", mymouseover, false);
				attachEventListener(aRollovers[i], "mouseout", mymouseout, false);
			}
		}		
	}
}

function mymouseover() {
	ext = this.src.substring(this.src.lastIndexOf('.'), this.src.length);
	if(this.src.indexOf('Over' + ext) == -1) {
		this.src = this.src.replace(ext, 'Over'+ext);
	}
}

function mymouseout() {
	ext = this.src.substring(this.src.lastIndexOf('.'), this.src.length);
	if(this.src.indexOf('Over' + ext) != -1) {
		this.src = this.src.replace('Over'+ext, ext);
	}
}