var redirectServer = 'http://go.virgilio.it/';
//var redirectServer = 'http://fep-go-l1a.vg.virgilio.net:8080/';
var gifName = 'kpi.gif';
var dest;
var el;

function redir(){
	document.location.href = dest;
}

function clk(e, u, k){
	el = e;
	dest = u;
	var src = redirectServer + gifName + '?k=' + escape(k) + '&rand=' + Math.floor(1000000 * Math.random());
	var img = new Image();
	img.onerror = redir;
	img.onload = redir;
	img.src = src;
	return false;
}

function clknoredir(e, u, k){
	var src = redirectServer + gifName + '?k=' + escape(k) + '&rand=' + Math.floor(1000000 * Math.random());
	var img = new Image();	
	img.src = src;
}
