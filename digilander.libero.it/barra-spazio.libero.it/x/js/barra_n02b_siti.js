
if (typeof(bsl1_init) != "undefined") {
	bsl1_init=1;
} else {
	bsl1_init=0;
}

var bsl1_init2;
var bsl1_sup=0;
var bsl1_ie=((document.all)&&(!window.opera));
var bsl1_srv="sito";

if (document.getElementById) bsl1_sup=1;

var rs_DLR2=0;

function dglr_RS_CHK9b() {
var a_t=0, a_f=0;
var m_f_m=.40;
var x=0,y=0;
var p=this.window;
var pp=p.parent, v;
while (pp!=p) {
	if ((document.getElementById)&&(!document.all)) { eval("try {v=pp.innerWidth} catch (v) {pp=p}") } 
	else { if (typeof(pp.document)!="object") pp=p } 
	if (pp!=p) {p=pp; pp=p.parent}
}
if (p.innerWidth) {
	a_t=p.innerWidth*p.innerHeight;
	a_f=window.innerWidth*window.innerHeight;
} else if (p.document) if (p.document.body) {
	if (p.document.body.offsetWidth) {
		a_t=p.document.body.offsetWidth*p.document.body.offsetHeight;
		if (window.document.body) {
			a_f=window.document.body.offsetWidth*window.document.body.offsetHeight;
		}
	} else return 1;
} else return 1;
if (!a_t) return 1;
var h_f=a_f/a_t;
if (h_f>m_f_m) return 1;
return 0;
}

if (!window.top) rs_DLR2=1;
else if (!window.top.frames) rs_DLR2=1;
else if ((window==window.top)&&(window.top.frames.length==0)) rs_DLR2=1;
else if ((window!=window.top)||(window.top.frames.length>0)) {
	rs_DLR2=dglr_RS_CHK9b();
	if (document.body) if (document.body.innerHTML) {
		var d=document.body.innerHTML.toLowerCase();
		if (window.frames.length>=1) {
			if ((rs_DLR2==1)&&(d.indexOf("<iframe")>=0)) rs_DLR2=1;
			else rs_DLR2=0;
			}
	}
} else rs_DLR2=1;

if (window.location.pathname.indexOf("/_ad/")==0) rs_DLR2=0;

if ((window.location.pathname.indexOf("/index")==0)||(window.location.pathname=="/")) rs_DLR2=1;

if (window.location.pathname.indexOf("/_ppricerca/")==0) rs_DLR2=0;

if ((rs_DLR2==1)&&(bsl1_sup)) {
	if (bsl1_init == 0) {
		document.write("<style type=\"text/css\">\n@import url(\"http://barra-spazio.libero.it/x/css/barra_n02.css\");\n</style>");
		document.write("<style type=\"text/css\">\n#vb2keys div#vb2kvideo { display: none; }\n</style>");
	}
} else {
	document.write("<style type=\"text/css\">\n#vb2main, #bsl1-spc { display: none; }\n</style>");
}


function n_width() {
	if (self.innerHeight) return(self.innerWidth);
	else if (document.documentElement && document.documentElement.clientHeight) return(document.documentElement.clientWidth);
	else if (document.body) return(document.body.clientWidth);
	return 0;
}

function bsl1_wd() {
	var d = n_width();
	if (d!=bsl1_oldd) {
		a = document.getElementById('vb2main');
		a.style.width = d+"px";
		bsl1_oldd = d;
	}
	setTimeout("bsl1_wd()", 250);
}

function bsl1_remote(ur) { 
	if (document.getElementById) {
		var iddo = document.getElementById('vb2main');
	  	var element = document.createElement('script');
		element.setAttribute('type','text/javascript'); 
		element.setAttribute('src',ur); 
		iddo.appendChild(element);
	}
}

function bsl1_ok(gu) {
	var o = document.getElementById('bsl1-lbuff');
	if (o) o.innerHTML = gu;
}

function bsl1_boot() {
	if (typeof(bsl1_init2) == "undefined") {
		if (bsl1_sup==1) {
		  	var t = new Date();
			bsl1_remote('http://barra-spazio.libero.it/bar3.php?n='+bsl1_nk+'&u='+escape(this.location)+'&t='+t.getTime());
		}
		bsl1_init2 = 1;
	}
}

function bsl1_boot2() {
	var tp;
	if (bsl1_init == 0) {
	
		if (!document.body) document.write("<body>");
		
		tp = document.body.marginTop;
		if (typeof(tp)=="undefined") tp=8;
		else tp=parseInt(tp);
		
		bsl1_oldd = n_width();
		if (bsl1_oldd>0) {
			if (bsl1_sup) {
				if (bsl1_ie) {
					document.write("<style>\n#vb2main { width: "+bsl1_oldd+"px; }\n</style>\n");
					setTimeout("bsl1_wd()", 500);
				}				
			}
		}

	}
}


function barrer_ok() { }

function barrer(br,lnk) {
	var mu = document.getElementById("vb2k"+br);

	var base = br;
	if (br=='sito') base = "Sito";
	else if (br=='blog') base = "Blog";
	else if (br=='profilo') base = "Profilo";
	else if (br=='foto') base = "Foto";
	else if (br=='amici') base = "Amici";
	else if (br=='video') return;
		
	if (lnk=='') {
		mu.innerHTML = base;
	} else {
		if (bsl1_srv == br) {
			mu.className="vb2now";
		}

		mu.innerHTML = "<a href=\""+lnk+"\" target=\"_top\" onclick=\"return(bsl1_altclick(this,'"+br+"','_top'))\">"+base+"</a>";
	}
}

var bsl1_to = 0;

function bsl1_alt(n) {
	var mu = document.getElementById("bsl1-altm");
	if (mu) {
		if (n==0) {
			mu.style.display='none';
		} else {
			mu.style.display='block';
		}
	}
}

function bsl1_altresto(n) {
	if (n==1) {
		if (bsl1_to) clearTimeout(bsl1_to);
	} else bsl1_to = setTimeout("bsl1_alt(0)",500);
}

function bsl1_autolink(a) {
	if (!document.getElementById) return;
	var mu = document.getElementById('bsl1-invia');
	if (mu) mu.innerHTML = "<a href=\""+a+"\"  onclick=\"mkzoom('about:blank',450,450);return(bsl1_altclick(this,'Invia','nnwin'))\" oncontextmenu=\"return false;\">Invia ad un amico</a>";

}

function bsl1_autolink2(a) {
	document.write("<a href=\""+a+escape(this.location)+"\" target=\"segnabusi\" onclick=\"window.open('about:blank','segnabusi','width=390,height=460,toolbar=no,location=no,status=yes,menubar=no'); return(bsl1_altclick(this,'Abuso','segnabusi'))\">");
}

function bsl1_autolink3() {
	var tl = bsl1_nk;

	if (tl.length > 13) tl = bsl1_nk.substring(0,11) + '...';
	 
	document.write(tl);
}

function bsl1_autolink4() {
	document.write("<a href=\"http://spazio.libero.it/"+bsl1_nk+"/amici_popup.php\" target=\"amici\" onclick=\"window.open('about:blank','amici','width=500,height=300,toolbar=no,location=no,status=yes,menubar=no'); return(bsl1_altclick(this,'invita','amici'));\" id=\"vb2kaggiungi\" title=\"Aggiungi amico\">");
}
function bsl1_autolink4c() {
	document.write("<a href=\"http://spazio.libero.it/"+bsl1_nk+"/amici_popup.php\" target=\"amici\" onclick=\"window.open('about:blank','amici','width=500,height=300,toolbar=no,location=no,status=yes,menubar=no'); return(bsl1_altclick(this,'invita','amici'));\">");
}
function bsl1_autolink4b() {
	document.write("<a href=\"http://digiland.libero.it/msg/inviamsg.php?quale="+bsl1_nk+"\" id=\"vb2kcontatta\" target=\"_top\" onclick=\"return(bsl1_altclick(this,'contatta','_top'))\" title=\"Contatta\">");
}
function bsl1_autolink4d() {
	document.write("<a href=\"http://digiland.libero.it/msg/inviamsg.php?quale="+bsl1_nk+"\" target=\"_top\">");
}

function bsl1_autolink5() {
	document.write("<a href=\"http://digiland.libero.it/msg/listaamici.php?aggiungi="+bsl1_nk+"\" target=\"_top\" onclick=\"return(bsl1_altclick(this,'preferiti','_top'))\">");	
}

function bsl1_autolink6() {
	document.write("<a href=\"http://digiland.libero.it/msg/listanera.php?aggiungi="+bsl1_nk+"\" target=\"_top\"  onclick=\"return(bsl1_altclick(this,'listanera','_top'))\">");	
}


nn_win=false;

function mkzoom(l,w,h,s) {
  var sc;
  if(!w) w=490;
  if(!h) h=250;

  if(!s) {
  	s=0;
  	sc="yes";
  } else sc="no";

  if (nn_win) if (nn_win.close) nn_win.close();
  nn_win=0;

  var d = new Date();
  var t = d.getTime();

  //if (dgl.mac) d=t;
  //else d='';

  if (l=='about:blank')  nn_win = window.open('about:blank',"nnwin","width="+w+",height="+h+",status=no,toolbar=no,resizable=no,scrollbars="+sc+",top=120,left=150");
  else nn_win = window.open(l.href,"nnwin","width="+w+",height="+h+",status=no,toolbar=no,resizable=no,scrollbars="+sc+",top=120,left=150");

  if (nn_win.focus) nn_win.focus();
}

var bsl1_nk = window.location.toString();
var bsl1_nk2 = bsl1_nk.indexOf(".libero.it");

if (bsl1_nk2 != -1) {
	bsl1_nk3 = bsl1_nk.indexOf("/",bsl1_nk2);
	bsl1_nk = bsl1_nk.substring(bsl1_nk3+1);
	bsl1_nk2 = bsl1_nk.indexOf("/");
	if (bsl1_nk2 != -1) {
		bsl1_nk = bsl1_nk.substring(0,bsl1_nk2);
	}

} else {
	bsl1_nk="";
}

if (bsl1_sup) {
	if ((rs_DLR2==1)&&(bsl1_sup)&&(bsl1_init==0)) {
		bsl1_boot2();
	}
}

if ((bsl1_init!=0)&&(rs_DLR2==1)) document.write("<div style=\"display: none;\">");
else document.write("<div>");



function bsl1_altclick(lk,c,target) {

	if ((c == 'Crea')||(c == 'Invia')||(c == 'Abuso')||(c == 'succ')) c = c + '_' + bsl1_srv;

	if (target) ckSrv(lk,'DGL','barra',c,target);
	else ckSrv(lk,'DGL','barra',c,"_top");
	
	return false;
}

// FLW: CLICKSERVER
// V3.0-070822
var ckSrvUrl="";
var ckTarget="";
function clickServer(url,a,b,c) {
	if(url.indexOf("://")<0) return goCkSrv('http://'+url,a,b,c,null);
	return goCkSrv(url,a,b,c,null);
}
function ckSrv(lnk,a,b,c,target) {
	if(lnk.href !== undefined) {
		urlHref=lnk.href;
		if(target == null && lnk.target !== undefined && lnk.target !== "") {
			target=lnk.target;
		}
	} else urlHref=lnk;
	return goCkSrv(urlHref,a,b,c,target);
}
function goCkSrv(url,a,b,c,target) {
	ckSrvUrl=url;
	ckTarget=self;
	if(url.indexOf("://")<0) {
		b=document.getElementsByTagName("BASE");
		if(b[0]) url=b[0].href+url;
		else {
			pathname = window.location.pathname;
			pathname = pathname.substring(0, pathname.lastIndexOf('/')+1 );
			if(pathname.charAt(0)=='/') url=window.location.protocol+'//'+window.location.host+'/'+url;
			else url=window.location.protocol+"//"+window.location.host+pathname+url;
		}
	}
	if (url.substring(0,7) == "http://") { url = url.substring(7); }
	else if (url.substring(0,8) == "https://") { url = url.substring(8); }
	dt=new Date();
	nloc="http://clickserver.libero.it/ck/"+dt.getTime()+"/"+escape(a)+"/"+escape(b)+"/"+escape(c)+"/_f_/"+escape(location.host+location.pathname)+"/_t_/"+url;
	if(target===undefined) return nloc;
	if(target!==null && target.toLowerCase()!='_top' && target.toLowerCase()!='_parent') {
		x=new Image();
		x.src=nloc;
		w=window.open(ckSrvUrl, target);
	} else {
		w=self;
		cnt=0;
		if(target!==null) {
			if(target.toLowerCase()=='_parent') {
				w=w.parent;
			} else {
				while(w.parent !== w && ++cnt<10) w=w.parent;
			}
		}
		ckTarget=w;
		x=new Image();
		x.onload=ckGo;
		x.onerror=ckGo;
		x.src=nloc;
		window.setTimeout("ckTarget.document.location='"+ckSrvUrl+"';",2000);
	}
	return false;
}
function ckGo() { ckTarget.document.location=ckSrvUrl; }


var vb2x_stat = new Array();
var vb2x_time = new Array();

vb2x_stat['vb2l1']=0;
vb2x_stat['vb2l2']=0;
vb2x_time['vb2l1']=0;
vb2x_time['vb2l2']=0;

function vb2x_hideshow(id,m) {
	var dr=0;
	if (!document.getElementById) return false;
	var i = document.getElementById(id);
	if (m==-1) {
		if (vb2x_stat[id] == 1) dr = 0;
		else  dr = 1;
	} else dr = m;
	vb2x_stat[id] = dr;
	if (i) {
		if (dr==0) i.style.display = 'none';
		else i.style.display = 'block';
	}
	vb2x_timer(id, 1);
}
function vb2x_timer(id, m) {
	if (m==0) {
		vb2x_time[id] = setTimeout("vb2x_hideshow('"+id+"',0)",500);
	} else {
		if (vb2x_time[id]) clearTimeout(vb2x_time[id]);
	}
}

function vb2x_setgold() {
	if (!document.getElementById) return false;
	var i = document.getElementById("vb2gold1c");
	i.style.display = "block";
}
