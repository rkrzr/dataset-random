var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var m=void 0,r=!0,s=null,t=!1,aa=encodeURIComponent,u=window,ba=Object,v=document,w=String,ca=decodeURIComponent;function da(a,b){return a.type=b}
var ea="appendChild",x="push",z="test",fa="shift",ga="exec",ha="width",A="replace",ia="getElementById",ja="concat",ka="JSON",B="indexOf",la="match",ma="readyState",C="createElement",D="setAttribute",na="getTime",oa="getElementsByTagName",pa="substr",E="length",qa="prototype",F="split",G="location",I="style",ra="removeChild",sa="call",J="getAttribute",L="charCodeAt",M="href",ta="substring",ua="action",N="apply",va="attributes",O="parentNode",wa="update",xa="height",P="join",ya="toLowerCase";var Q=u,S=v,za=Q[G],Aa=function(){},Ba=/\[native code\]/,T=function(a,b,c){return a[b]=a[b]||c},Ca=function(a){for(var b=0;b<this[E];b++)if(this[b]===a)return b;return-1},Da=function(a){a=a.sort();for(var b=[],c=m,d=0;d<a[E];d++){var e=a[d];e!=c&&b[x](e);c=e}return b},Ea=/&/g,Fa=/</g,Ga=/>/g,Ha=/"/g,Ia=/'/g,Ja=function(a){return w(a)[A](Ea,"&amp;")[A](Fa,"&lt;")[A](Ga,"&gt;")[A](Ha,"&quot;")[A](Ia,"&#39;")},U=function(){var a;if((a=ba.create)&&Ba[z](a))a=a(s);else{a={};for(var b in a)a[b]=m}return a},
V=function(a,b){return ba[qa].hasOwnProperty[sa](a,b)},Ka=function(a){if(Ba[z](ba.keys))return ba.keys(a);var b=[],c;for(c in a)V(a,c)&&b[x](c);return b},W=function(a,b){a=a||{};for(var c in a)V(a,c)&&(b[c]=a[c])},La=function(a){return function(){Q.setTimeout(a,0)}},Ma=function(a,b){if(!a)throw Error(b||"");},X=T(Q,"gapi",{});var Na=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ga](a)||b[ga](a)))try{c=ca(a[2])}catch(e){}return c},Oa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Pa=function(a){a=a[la](Oa);var b=U();b.t=a[1];b.c=a[3]?[a[3]]:[];b.i=a[5]?[a[5]]:[];return b},Qa=function(a){return a.t+(0<a.c[E]?"?"+a.c[P]("&"):"")+(0<a.i[E]?"#"+a.i[P]("&"):"")},Ra=function(a,b){var c=[];if(a)for(var d in a)if(V(a,d)&&a[d]!=s){var e=b?b(a[d]):a[d];c[x](aa(d)+"="+aa(e))}return c},
Sa=function(a,b,c,d){a=Pa(a);a.c[x][N](a.c,Ra(b,d));a.i[x][N](a.i,Ra(c,d));return Qa(a)},Ta=function(a,b){var c="";2E3<b[E]&&(c=b[ta](2E3),b=b[ta](0,2E3));var d=a[C]("div"),e=a[C]("a");e.href=b;d[ea](e);d.innerHTML=d.innerHTML;b=w(d.firstChild[M]);d[O]&&d[O][ra](d);return b+c},Ua=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var Va=function(a,b,c,d){if(Q[c+"EventListener"])Q[c+"EventListener"](a,b,t);else if(Q[d+"tachEvent"])Q[d+"tachEvent"]("on"+a,b)},Ya=function(a){var b=Wa;if("complete"!==S[ma])try{b()}catch(c){}Xa(a)},Xa=function(a){if("complete"===S[ma])a();else{var b=t,c=function(){if(!b)return b=r,a[N](this,arguments)};Q.addEventListener?(Q.addEventListener("load",c,t),Q.addEventListener("DOMContentLoaded",c,t)):Q.attachEvent&&(Q.attachEvent("onreadystatechange",function(){"complete"===S[ma]&&c[N](this,arguments)}),
Q.attachEvent("onload",c))}},Za=function(a){for(;a.firstChild;)a[ra](a.firstChild)},$a={button:r,div:r,span:r};var Y;Y=T(Q,"___jsl",U());T(Y,"I",0);T(Y,"hel",10);var ab=function(a){return!Y.dpo?Na(a,"jsh",Y.h):Y.h},bb=function(a){var b=T(Y,"sws",[]);b[x][N](b,a)},cb=function(a){var b=T(Y,"PQ",[]);Y.PQ=[];var c=b[E];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},db=function(a){return T(T(Y,"H",U()),a,U())};var eb=T(Y,"perf",U()),fb=T(eb,"g",U()),gb=T(eb,"i",U());T(eb,"r",[]);U();U();var hb=function(a,b,c){var d=eb.r;"function"===typeof d?d(a,b,c):d[x]([a,b,c])},ib=function(a,b,c){fb[a]=!b&&fb[a]||c||(new Date)[na]();hb(a)},kb=function(a,b,c){b&&0<b[E]&&(b=jb(b),c&&0<c[E]&&(b+="___"+jb(c)),28<b[E]&&(b=b[pa](0,28)+(b[E]-28)),c=b,b=T(gb,"_p",U()),T(b,c,U())[a]=(new Date)[na](),hb(a,"_p",c))},jb=function(a){return a[P]("__")[A](/\./g,"_")[A](/\-/g,"_")[A](/\,/g,"_")};var lb=U(),mb=[],Z=function(a){throw Error("Bad hint"+(a?": "+a:""));};mb[x](["jsl",function(a){for(var b in a)if(V(a,b)){var c=a[b];"object"==typeof c?Y[b]=T(Y,b,[])[ja](c):T(Y,b,c)}if(b=a.u)a=T(Y,"us",[]),a[x](b),(b=/^https:(.*)$/[ga](b))&&a[x]("http:"+b[1])}]);var nb=/^(\/[a-zA-Z0-9_\-]+)+$/,ob=/^[a-zA-Z0-9\-_\.!]+$/,pb=/^gapi\.loaded_[0-9]+$/,qb=/^[a-zA-Z0-9,._-]+$/,ub=function(a,b,c,d){var e=a[F](";"),f=lb[e[fa]()],g=s;f&&(g=f(e,b,c,d));if(!(b=!g))b=g,c=b[la](rb),d=b[la](sb),b=!(d&&1===d[E]&&tb[z](b)&&c&&1===c[E]);b&&Z(a);return g},xb=function(a,b,c,d){a=vb(a);pb[z](c)||Z("invalid_callback");b=wb(b);d=d&&d[E]?wb(d):s;var e=function(a){return aa(a)[A](/%2C/g,",")};return[aa(a.v)[A](/%2C/g,",")[A](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):
"","/rt=j/sv=1/d=1/ed=1",a.n?"/am="+e(a.n):"",a.o?"/rs="+e(a.o):"","/cb=",e(c)][P]("")},vb=function(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a[ta](1)[F]("/"),c=[];b[E];){a=b[fa]();if(!a[E]||0==a[B]("."))Z("empty/relative directory");else if(0<a[B]("=")){b.unshift(a);break}c[x](a)}a={};for(var d=0,e=b[E];d<e;++d){var f=b[d][F]("="),g=ca(f[0]),k=ca(f[1]);2!=f[E]||(!g||!k)||(a[g]=a[g]||k)}b="/"+c[P]("/");nb[z](b)||Z("invalid_prefix");c=yb(a,"k",r);d=yb(a,"am");a=yb(a,"rs");return{v:b,version:c,
n:d,o:a}},wb=function(a){for(var b=[],c=0,d=a[E];c<d;++c){var e=a[c][A](/\./g,"_")[A](/-/g,"_");qb[z](e)&&b[x](e)}return b[P](",")},yb=function(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(ob[z](a))return a;Z("invalid: "+b)}return s},tb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,sb=/\/cb=/g,rb=/\/\//g,zb=function(){var a=ab(za[M]);if(!a)throw Error("Bad hint");return a};lb.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+xb(a,b,c,d)};var Ab=decodeURI("%73cript"),Bb=function(a,b){for(var c=[],d=0;d<a[E];++d){var e=a[d];e&&0>Ca[sa](b,e)&&c[x](e)}return c},Db=function(a){"loading"!=S[ma]?Cb(a):S.write("<"+Ab+' src="'+encodeURI(a)+'"></'+Ab+">")},Cb=function(a){var b=S[C](Ab);b[D]("src",a);b.async="true";(a=S[oa](Ab)[0])?a[O].insertBefore(b,a):(S.head||S.body||S.documentElement)[ea](b)},Eb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<mb[E];d++){var e=mb[d][0],f=mb[d][1];f&&V(c,e)&&f(c[e],a,b)}},Hb=function(a,b){Gb(function(){var c;
c=b===ab(za[M])?T(X,"_",U()):U();c=T(db(b),"_",c);a(c)})},Jb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Eb(a,c);var d=a?a[F](":"):[],e=c.h||zb(),f=T(Y,"ah",U());if(!f["::"]||!d[E])Ib(d||[],c,e);else{for(var g=[],k=s;k=d[fa]();){var n=k[F]("."),n=f[k]||f[n[1]&&"ns:"+n[0]||""]||e,h=g[E]&&g[g[E]-1]||s,l=h;if(!h||h.hint!=n)l={hint:n,p:[]},g[x](l);l.p[x](k)}var p=g[E];if(1<p){var y=c.callback;y&&(c.callback=function(){0==--p&&y()})}for(;d=g[fa]();)Ib(d.p,c,d.hint)}},Ib=function(a,
b,c){a=Da(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,k=s,n=t;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=T(db(c),"r",[]).sort(),l=T(db(c),"L",[]).sort(),p=[][ja](h),y=function(a,b){if(n)return 0;Q.clearTimeout(k);l[x][N](l,q);var d=((X||{}).config||{})[wa];d?d(e):e&&T(Y,"cu",[])[x](e);if(b){kb("me0",a,p);try{Hb(b,c)}finally{kb("me1",a,p)}}return 1};0<f&&(k=Q.setTimeout(function(){n=r;g()},f));var q=Bb(a,l);if(q[E]){var q=
Bb(a,h),H=T(Y,"CP",[]),K=H[E];H[K]=function(a){if(!a)return 0;kb("ml1",q,p);var b=function(b){H[K]=s;y(q,a)&&cb(function(){d&&d();b()})},c=function(){var a=H[K+1];a&&a()};0<K&&H[K-1]?H[K]=function(){b(c)}:b(c)};if(q[E]){var R="loaded_"+Y.I++;X[R]=function(a){H[K](a);X[R]=s};a=ub(c,q,"gapi."+R,h);h[x][N](h,q);kb("ml0",q,p);b.sync||Q.___gapisync?Db(a):Cb(a)}else H[K](Aa)}else y(q)&&d&&d()};var Gb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Jb("debug_error",function(){u.___jsl.hefn(b)})}else return a()};X.load=function(a,b){return Gb(function(){return Jb(a,b)})};var Kb=function(a){var b=u.___jsl=u.___jsl||{};b[a]=b[a]||[];return b[a]},Lb=function(a){var b=u.___jsl=u.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Mb=function(a){return"object"===typeof a&&/\[native code\]/[z](a[x])},Nb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Mb(a[c])&&!Mb(b[c])?Nb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Mb(b[c])?[]:{},Nb(a[c],b[c])):a[c]=b[c])},Ob=function(a){if(a&&!/^\s+$/[z](a)){for(;0==a[L](a[E]-
1);)a=a[ta](0,a[E]-1);var b;try{b=u[ka].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},$=function(a){if(!a)return Lb();a=a[F]("/");for(var b=Lb(),c=0,d=a[E];b&&"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[E]&&b!==m?b:m},Pb=function(){Lb(r);var a=u.___gcfg,b=Kb("cu");if(a&&a!==u.___gu){var c={};Nb(c,a);b[x](c);u.___gu=
a}var a=Kb("cu"),d=v.scripts||v[oa]("script")||[],c=[],e=[];e[x][N](e,Kb("us"));for(var f=0;f<d[E];++f)for(var g=d[f],k=0;k<e[E];++k)g.src&&0==g.src[B](e[k])&&c[x](g);0==c[E]&&(0<d[E]&&d[d[E]-1].src)&&c[x](d[d[E]-1]);for(d=0;d<c[E];++d)c[d][J]("gapi_processed")||(c[d][D]("gapi_processed",r),(e=c[d])?(f=e.nodeType,e=3==f||4==f?e.nodeValue:e.textContent||e.innerText||e.innerHTML||""):e=m,(e=Ob(e))&&a[x](e));d=Kb("cd");a=0;for(c=d[E];a<c;++a)Nb(Lb(),d[a]);d=Kb("ci");a=0;for(c=d[E];a<c;++a)Nb(Lb(),d[a]);
a=0;for(c=b[E];a<c;++a)Nb(Lb(),b[a])};var Qb=function(){var a=u.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),T(Y,"ci",[])[x](a),u.__GOOGLEAPIS=m)};var Rb=u.console,Sb=function(a){Rb&&Rb.log&&Rb.log(a)};var Tb=T(Y,"rw",U()),Ub=function(a,b){var c=Tb[a];c&&c.state<b&&(c.state=b)};var Vb=function(a){var b;a[la](/^https?%3A/i)&&(b=ca(a));return Ta(v,b?b:a)},Wb=function(a){a=a||"canonical";for(var b=v[oa]("link"),c=0,d=b[E];c<d;c++){var e=b[c],f=e[J]("rel");if(f&&f[ya]()==a&&(e=e[J]("href")))if((e=Vb(e))&&e[la](/^https?:\/\/[\w\-\_\.]+/i)!=s)return e}return u[G][M]};var Xb;var Yb=function(a){var b=$("googleapis.config/sessionIndex");b==s&&(b=u.__X_GOOG_AUTHUSER);if(b==s){var c=u.google;c&&(b=c.authuser)}b==s&&(a==s&&(a=u[G][M]),b=a?Na(a,"authuser")||s:s);return b==s?s:w(b)},Zb=function(){var a=$("googleapis.config/sessionDelegate");return a==s?s:w(a)};var $b=function(){};var ac=function(){this.b=[];this.j=[];this.q=[];this.g=[];this.g[0]=128;for(var a=1;64>a;++a)this.g[a]=0;this.reset()};(function(){function a(){}a.prototype=$b[qa];ac.w=$b[qa];ac.prototype=new a})();ac[qa].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.k=this.d=0};
var bc=function(a,b,c){c||(c=0);var d=a.q;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[L](c)<<24|b[L](c+1)<<16|b[L](c+2)<<8|b[L](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],k=a.b[3],n=a.b[4],h,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),h=1518500249):(f=c^g^k,h=1859775393):60>e?(f=c&g|k&(c|g),h=2400959708):(f=c^g^k,h=3395469782),f=(b<<5|b>>>27)+f+
n+h+d[e]&4294967295,n=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+n&4294967295};ac[qa].update=function(a,b){b===m&&(b=a[E]);for(var c=b-64,d=0,e=this.j,f=this.d;d<b;){if(0==f)for(;d<=c;)bc(this,a,d),d+=64;if("string"==typeof a)for(;d<b;){if(e[f]=a[L](d),++f,++d,64==f){bc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,64==f){bc(this,e);f=0;break}}this.d=f;this.k+=b};var cc=function(){this.l=new ac};cc[qa].reset=function(){this.l.reset()};var jc=function(){var a;dc?(a=new Q.Uint32Array(1),ec.getRandomValues(a),a=Number("0."+a[0])):(a=fc,a+=parseInt(gc[pa](0,20),16),gc=hc(gc),a/=ic+Math.pow(16,20));return a},ec=Q.crypto,dc=t,kc=0,lc=0,fc=1,ic=0,gc="",mc=function(a){a=a||Q.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[na]()%1E6);fc=fc*b%ic;0<kc&&++lc==kc&&Va("mousemove",mc,"remove","de")},hc=function(a){var b=new cc;a=unescape(aa(a));for(var c=[],d=0,e=a[E];d<e;++d)c[x](a[L](d));b.l[wa](c);a=b.l;b=[];
d=8*a.k;56>a.d?a[wa](a.g,56-a.d):a[wa](a.g,64-(a.d-56));for(c=63;56<=c;c--)a.j[c]=d&255,d/=256;bc(a,a.j);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[E];c++)a+="0123456789ABCDEF".charAt(Math.floor(b[c]/16))+"0123456789ABCDEF".charAt(b[c]%16);return a},dc=!!ec&&"function"==typeof ec.getRandomValues;
dc||(ic=1E6*(screen[ha]*screen[ha]+screen[xa]),gc=hc(S.cookie+"|"+S[G]+"|"+(new Date)[na]()+"|"+Math.random()),kc=$("random/maxObserveMousemove")||0,0!=kc&&Va("mousemove",mc,"add","at"));var nc=function(){var a=Y.onl;if(!a){a=U();Y.onl=a;var b=U();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},oc=function(a,b){var c=b.onload;return"function"===typeof c?(nc().a(a,c),c):s},pc=function(a){Ma(/^\w+$/[z](a),"Unsupported id - "+a);nc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},qc=function(a){nc().r(a)};var rc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},sc={allowtransparency:r,onload:r},tc=0,uc=function(a){Ma(!a||Ua[z](a),"Illegal url for new iframe - "+a)},vc=function(a,b,c,d,e){uc(c.src);var f,g=oc(d,c),k=g?pc(d):"";try{f=a[C]('<iframe frameborder="'+Ja(w(c.frameborder))+'" scrolling="'+Ja(w(c.scrolling))+'" '+k+' name="'+Ja(w(c.name))+'"/>')}catch(n){f=a[C]("iframe"),g&&(f.onload=function(){f.onload=
s;g[sa](this)},qc(d))}for(var h in c)a=c[h],"style"===h&&"object"===typeof a?W(a,f[I]):sc[h]||f[D](h,w(a));h=e&&e.beforeNode||s;!h&&(!e||!e.dontclear)&&Za(b);b.insertBefore(f,h);f=h?h.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=r);return f};var wc=/^:[\w]+$/,xc=/:([a-zA-Z_]+):/g,yc=function(a,b){if(!Xb){var c=Yb(),d=Zb(),e;e=Yb(m);var f=Zb(),g="";e&&(g+="u/"+e+"/");f&&(g+="b/"+f+"/");e=g||s;(f=$("googleapis.config/signedIn")===t?"_/im/":"")&&(e="");Xb={socialhost:$("iframes/:socialhost:"),session_index:c||"0",session_delegate:d,session_prefix:e,im_prefix:f}}return Xb[b]||""};var zc={style:"position:absolute;top:-10000px;width:450px;margin:0px;borderStyle:none"},Ac="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),Bc=T(Y,"WI",U()),Cc=["style","data-gapiscan"],Dc=function(a){var b=m;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},Ec=function(){};var Fc,Gc,Hc,Ic,Jc,Kc=/(?:^|\s)g-((\S)*)(?:$|\s)/;Fc=T(Y,"SW",U());Gc=T(Y,"SA",U());Hc=T(Y,"SM",U());Ic=T(Y,"FW",[]);Jc=s;
var Mc=function(a,b){Lc(m,t,a,b)},Lc=function(a,b,c,d){ib("ps0",r);c=("string"===typeof c?v[ia](c):c)||S;var e;e=S.documentMode;if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Ka(Fc)[ja](Ka(Gc))[ja](Ka(Hc));for(var f=[],g=0;g<e[E];g++){var k=e[g];f[x](".g-"+k,"g\\:"+k)}e=c.querySelectorAll(f[P](","))}else e=c[oa]("*");c=U();for(f=0;f<e[E];f++){g=e[f];var n=g,k=d,h=n.nodeName[ya](),l=m;n[J]("data-gapiscan")?k=s:(0==h[B]("g:")?l=h[pa](2):(n=(n=w(n.className||n[J]("class")))&&Kc[ga](n))&&(l=n[1]),k=l&&(Fc[l]||
Gc[l]||Hc[l])&&(!k||l===k)?l:s);k&&(g[D]("data-gapiscan",r),T(c,k,[])[x](g))}if(b)for(var p in c){b=c[p];for(d=0;d<b[E];d++)b[d][D]("data-onload",r)}for(var y in c)Ic[x](y);ib("ps1",r);if((p=Ic[P](":"))||a)try{X.load(p,a)}catch(q){Sb(q);return}if(Nc(Jc||{}))for(var H in c){a=c[H];y=0;for(b=a[E];y<b;y++)a[y].removeAttribute("data-gapiscan");Oc(H)}else{d=[];for(H in c){a=c[H];y=0;for(b=a[E];y<b;y++){g=a[y];e=H;k=f=g;g=U();l=0!=k.nodeName[ya]()[B]("g:");n=0;for(h=k[va][E];n<h;n++){var K=k[va][n],R=K.name,
Fb=K.value;0<=Ca[sa](Cc,R)||(l&&0!=R[B]("data-")||"null"===Fb||"specified"in K&&!K.specified)||(l&&(R=R[pa](5)),g[R[ya]()]=Fb)}l=g;k=k[I];(n=Dc(k&&k[xa]))&&(l.height=w(n));(k=Dc(k&&k[ha]))&&(l.width=w(k));Pc(e,f,g,d,b)}}Qc(p,d)}},Rc=function(a){var b=T(X,a,{});b.go||(b.go=function(b){return Mc(b,a)},b.render=function(b,d){var e=d||{};da(e,a);var f=e.type;delete e.type;var g=("string"===typeof b?v[ia](b):b)||m;if(g){var k={},n;for(n in e)V(e,n)&&(k[n[ya]()]=e[n]);k.rd=1;e=[];Pc(f,g,k,e,0);Qc(f,e)}else Sb("string"===
"gapi."+f+".render: missing element "+typeof b?b:"")})},Sc=function(a){Fc[a]=r},Tc=function(a){Gc[a]=r},Uc=function(a){Hc[a]=r};var Oc=function(a,b){var c=T(Y,"watt",U())[a];b&&c?(c(b),(c=b.iframeNode)&&c[D]("data-gapiattached",r)):X.load(a,function(){var c=T(Y,"watt",U())[a],e=b&&b.iframeNode;!e||!c?(0,X[a].go)(e&&e[O]):(c(b),e[D]("data-gapiattached",r))})},Nc=function(){return t},Qc=function(){},Pc=function(a,b,c,d,e){switch(Vc(b,a)){case 0:a=Hc[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;Oc(a,d);break;case 1:var f;if(b[O]){var g=r;c.dontclear&&(g=t);delete c.dontclear;var k,n,h;n=h=a;"plus"==a&&c[ua]&&(h=a+
"_"+c[ua],n=a+"/"+c[ua]);(h=$("iframes/"+h+"/url"))||(h=":socialhost:/_/widget/render/"+n);n=Ta(S,h[A](xc,yc));h={};W(c,h);h.hl=$("lang")||$("gwidget/lang")||"en-US";h.origin=u[G].origin||u[G].protocol+"//"+u[G].host;h.exp=$("iframes/"+a+"/params/exp");var l=$("iframes/"+a+"/params/location");if(l)for(var p=0;p<l[E];p++){var y=l[p];h[y]=Q[G][y]}switch(a){case "plus":case "follow":l=h[M];p=c[ua]?m:"publisher";l=(l="string"==typeof l?l:m)?Vb(l):Wb(p);h.url=l;delete h[M];break;case "plusone":case "recobox":h.url=
c[M]?Vb(c[M]):Wb();l=c.db;p=$();l==s&&p&&(l=p.db,l==s&&(l=p.gwidget&&p.gwidget.db));h.db=l||m;l=c.ecp;p=$();l==s&&p&&(l=p.ecp,l==s&&(l=p.gwidget&&p.gwidget.ecp));h.ecp=l||m;delete h[M];break;case "signin":h.url=Wb()}Y.ILI&&(h.iloader="1");delete h["data-onload"];delete h.rd;h.gsrc=$("iframes/:source:");l=$("inline/css");"undefined"!==typeof l&&(0<e&&l>=e)&&(h.ic="1");l=/^#|^fr-/;e={};for(k in h)V(h,k)&&l[z](k)&&(e[k[A](l,"")]=h[k],delete h[k]);k=[][ja](Ac);(l=$("iframes/"+a+"/methods"))&&("object"===
typeof l&&Ba[z](l[x]))&&(k=k[ja](l));for(var q in c)if(V(c,q)&&/^on/[z](q)&&("plus"!=a||"onconnect"!=q))k[x](q),delete h[q];delete h.callback;e._methods=k[P](",");k=Sa(n,h,e);q={allowPost:1,attributes:zc};q.dontclear=!g;g={};g.userParams=c;g.url=k;da(g,a);c.rd?h=b:(h=v[C]("div"),b[D]("data-gapistub",r),h[I].cssText="position:absolute;width:450px;left:-10000px;",b[O].insertBefore(h,b));g.siteElement=h;h.id||(b=h,T(Bc,a,0),n="___"+a+"_"+Bc[a]++,b.id=n);b=U();b[">type"]=a;W(c,b);n=k;c=h;k=q||{};b=k[va]||
{};Ma(!k.allowPost||!b.onload,"onload is not supported by post iframe");q=b=n;wc[z](b)&&(q=$("iframes/"+q[ta](1)+"/url"),Ma(!!q,"Unknown iframe url config for - "+b));n=Ta(S,q[A](xc,yc));b=c.ownerDocument||S;h=0;do q=k.id||["I",tc++,"_",(new Date)[na]()][P]("");while(b[ia](q)&&5>++h);Ma(5>h,"Error creating iframe id");h={};e={};W(k.queryParams||{},h);W(k.fragmentParams||{},e);l=U();l.id=q;l.parent=b[G].protocol+"//"+b[G].host;p=Na(b[G][M],"id","");y=Na(b[G][M],"pfname","");(p=p?y+"/"+p:"")&&(l.pfname=
p);W(l,e);(l=Na(n,"rpctoken")||h.rpctoken||e.rpctoken)||(l=e.rpctoken=k.rpctoken||w(Math.round(1E8*jc())));k.rpctoken=l;p=b[G][M];l=U();(y=Na(p,"_bsh",Y.bsh))&&(l._bsh=y);(p=ab(p))&&(l.jsh=p);k.hintInFragment?W(l,e):W(l,h);n=Sa(n,h,e,k.paramsSerializer);e=U();W(rc,e);W(k[va],e);e.name=e.id=q;e.src=n;k.eurl=n;if((k||{}).allowPost&&2E3<n[E]){h=Pa(n);e.src="";e["data-postorigin"]=n;n=vc(b,c,e,q);-1!=navigator.userAgent[B]("WebKit")&&(f=n.contentWindow.document,f.open(),e=f[C]("div"),l={},p=q+"_inner",
l.name=p,l.src="",l.style="display:none",vc(b,e,l,p,k));e=(k=h.c[0])?k[F]("&"):[];k=[];for(l=0;l<e[E];l++)p=e[l][F]("=",2),k[x]([ca(p[0]),ca(p[1])]);h.c=[];e=Qa(h);h=b[C]("form");h.action=e;h.method="POST";h.target=q;h[I].display="none";for(q=0;q<k[E];q++)e=b[C]("input"),da(e,"hidden"),e.name=k[q][0],e.value=k[q][1],h[ea](e);c[ea](h);h.submit();h[O][ra](h);f&&f.close();f=n}else f=vc(b,c,e,q,k);g.iframeNode=f;g.id=f[J]("id");f=g.id;c=U();c.id=f;c.userParams=g.userParams;c.url=g.url;da(c,g.type);c.state=
1;Tb[f]=c;f=g}else f=s;f&&((g=f.id)&&d[x](g),Oc(a,f))}},Vc=function(a,b){if(a&&1===a.nodeType&&b)if(Hc[b]){if($a[a.nodeName[ya]()]){var c=a.innerHTML;return c&&c[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}}else{if(Gc[b])return 0;if(Fc[b])return 1}return s};T(X,"platform",{}).go=Mc;var Nc=function(a){for(var b=["_c","jsl","h"],c=0;c<b[E]&&a;c++)a=a[b[c]];b=ab(za[M]);return!a||0!=a[B]("n;")&&0!=b[B]("n;")&&a!==b},Qc=function(a,b){Wc(a,b)},Wa=function(a){Lc(a,r)},Xc=function(a,b){for(var c=b||[],d=0;d<c[E];++d)a(c[d]);for(d=0;d<c[E];d++)Rc(c[d])};mb[x](["platform",function(a,b,c){Jc=c;b&&Ic[x](b);Xc(Sc,a);Xc(Tc,c._c.annotation);Xc(Uc,c._c.bimodal);Qb();Pb();if("explicit"!=$("parsetags")){bb(a);var d;if(c&&(a=c.callback))d=La(a),delete c.callback;Ya(function(){Wa(d)})}}]);var Yc=function(a){a=(a=Tb[a])?a.oid:m;if(a){var b=S[ia](a);b&&b[O][ra](b);delete Tb[a];Yc(a)}},Ec=function(a,b,c){if(c[ha]&&c[xa]){e:{c=c||{};var d=Y.ssfn;if(d&&d(m)){if("number"===typeof Y.ucs)break e;var e=b.id;if(e){d=(d=Tb[e])?d.state:m;if(1===d||4===d)break e;Yc(e)}}if((d=a.nextSibling)&&d[J]&&d[J]("data-gapistub"))a[O][ra](d),a[I].cssText="";var d=c[ha],f=c[xa],g=a[I];g.textIndent="0";g.margin="0";g.padding="0";g.background="transparent";g.borderStyle="none";g.cssFloat="none";g.styleFloat=
"none";g.lineHeight="normal";g.fontSize="1px";g.verticalAlign="baseline";a=a[I];a.display="inline-block";g=b[I];g.position="static";g.left=0;g.top=0;g.visibility="visible";d&&(a.width=g.width=d+"px");f&&(a.height=g.height=f+"px");c.verticalAlign&&(a.verticalAlign=c.verticalAlign);e&&Ub(e,3)}b["data-csi-wdt"]=(new Date)[na]()}};var Zc=/^\{h\:'/,$c=/^!_/,ad="",Wc=function(a,b){function c(){Va("message",d,"remove","de")}function d(d){var g=d.data,k=d.origin;if(bd(g,b)){var n=e;e=t;n&&ib("rqe");cd(a,function(){n&&ib("rqd");c();for(var a=T(Y,"RPMQ",[]),b=0;b<a[E];b++)a[b]({data:g,origin:k})})}}if(!(0===b[E]||!u[ka]||!u[ka].parse)){ad=Na(za[M],"pfname","");var e=r;Va("message",d,"add","at");Jb(a,c)}},bd=function(a,b){a=w(a);if(Zc[z](a))return r;var c=t;$c[z](a)&&(c=r,a=a[pa](2));if(!/^\{/[z](a))return t;try{var d=u[ka].parse(a)}catch(e){return t}if(!d)return t;
var f=d.f;if(d.s&&f&&-1!=Ca[sa](b,f)){if("_renderstart"===d.s||d.s===ad+"/"+f+"::_renderstart")c=d.a&&d.a[c?0:1],d=S[ia](f),Ub(f,2),(f=Tb[f])&&(f.args=c),c&&d&&Ec(d[O],d,c);return r}return t},cd=function(a,b){Jb(a,b)};ib("bs0",r,u.gapi._bs);ib("bs1",r);delete u.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"plus_layer":{"isEnabled":false},"isLoggedIn":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"shortlists":{"url":"?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://apis.google.com","rbr_t":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobartray?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation?bsv"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?bsv"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?bsv\u0026usegapi\u003d1"}},"isPlusUser":false,"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"deviceType":"desktop","inline":{"css":1},"lexps":[102,103,100,71,98,96,110,108,79,105,45,17,86,81,112,61,30],"oauth-flow":{"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","persist":true,"toastCfg":"1000:3000:1000"},"report":{},"csi":{"rate":0.01},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.nl.BaMFVkhnbtg.O/m\u003d__features__/am\u003dEQ/rt\u003dj/d\u003d1/rs\u003dAItRSTMOdDX79uBznAuPzXGj-YT-Mfjn4g","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"ca5138e0d2bf3df920dbd8a8fa7daceacb9fbc87","dpo":false},"platform":["additnow","comments","commentcount","follow","identity","panoembed","plus","plusone","recobox","savetodrive","shortlists","ytsubscribe","zoomableimage","page","person","community","savetowallet","notifications","hangout"],"fp":"ca5138e0d2bf3df920dbd8a8fa7daceacb9fbc87","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});