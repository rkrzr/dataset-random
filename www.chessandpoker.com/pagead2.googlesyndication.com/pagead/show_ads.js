(function(){var f=!0,g=null,h=!1,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},l=function(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return l.apply(g,arguments)};var m=(new Date).getTime();var n=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,da=function(a,b){if(!a)return b;var c=a.match(ca);return c?c[0]:b};var ea=n("0.15"),fa=n("1.0"),ga=n("1.0"),ha=n("0.005"),ia=n("0.01"),ja=/^true$/.test("true")?f:h;var p=function(){return"r20130523"},ka=/^true$/.test("false")?f:h,la=/^true$/.test("false")?f:h;var ma=function(){return da("","pagead2.googlesyndication.com")};var na=/&/g,oa=/</g,pa=/>/g,qa=/\"/g,ta={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},r={"'":"\\'"};var ua=window,u,va=g,w=document.getElementsByTagName("script");w&&w.length&&(va=w[w.length-1].parentNode);u=va;ma();var wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(g,a[c],c,a)},x=function(a){return!!a&&"function"==typeof a&&!!a.call},xa=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])};function ya(a,b){za(a,"load",b)}
var za=function(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,d||h),f):a.attachEvent?(a.attachEvent("on"+b,c),f):h},Aa=function(a,b,c,d){c=l(d,c);return za(a,b,c,void 0)?c:g},Ba=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,h):a.detachEvent&&a.detachEvent("on"+b,c)},y=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return g},Ca=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return h}};var Da=g,Ea=function(){if(!Da){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,Ca(a))b=a;else break;Da=b}return Da};var z,A=function(a){this.c=[];this.b=a||window;this.a=0;this.d=g},Fa=function(a,b){this.l=a;this.win=b};A.prototype.p=function(a,b){0==this.a&&0==this.c.length&&(!b||b==window)?(this.a=2,this.f(new Fa(a,window))):this.g(a,b)};A.prototype.g=function(a,b){this.c.push(new Fa(a,b||this.b));Ga(this)};A.prototype.q=function(a){this.a=1;a&&(this.d=this.b.setTimeout(l(this.e,this),a))};A.prototype.e=function(){1==this.a&&(this.d!=g&&(this.b.clearTimeout(this.d),this.d=g),this.a=0);Ga(this)};
A.prototype.r=function(){return f};A.prototype.nq=A.prototype.p;A.prototype.nqa=A.prototype.g;A.prototype.al=A.prototype.q;A.prototype.rl=A.prototype.e;A.prototype.sz=A.prototype.r;var Ga=function(a){a.b.setTimeout(l(a.o,a),0)};A.prototype.o=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;a.win.setTimeout(l(this.f,this,a),0);Ga(this)}};A.prototype.f=function(a){this.a=0;a.l()};
var Ha=function(a){try{return a.sz()}catch(b){return h}},Ia=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Ha(a)&&x(a.nq)&&x(a.nqa)&&x(a.al)&&x(a.rl)},Ja=function(){if(z&&Ha(z))return z;var a=Ea(),b=a.google_jobrunner;return Ia(b)?z=b:a.google_jobrunner=z=new A(a)},Ka=function(a,b){Ja().nq(a,b)},La=function(a,b){Ja().nqa(a,b)};var Ma=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\./i,Na=/Android|Opera/;var Oa=function(a,b,c){c||(c=la?"https":"http");return[c,"://",a,b].join("")};var Pa=function(){},Ra=function(a,b,c){switch(typeof b){case "string":Qa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==g){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",k=0;k<d;k++)c.push(e),Ra(a,b[k],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(k=b[e],"function"!=typeof k&&(c.push(d),Qa(e,c),c.push(":"),Ra(a,k,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Sa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Qa=function(a,b){b.push('"');b.push(a.replace(Ta,function(a){if(a in Sa)return Sa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Sa[a]=e+b.toString(16)}));b.push('"')};var B="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_num_slots_to_rotate google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_sui google_skip google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Ua=function(){var a=C;a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];wa(a,function(a,d){if(a!=g){var e;try{var k=[];Ra(new Pa,a,k);e=k.join("")}catch(s){}e&&xa(b,d,"=",e,";")}});return b.join("")};var Va=/\.((google(|groups|mail|images|print))|gmail)\./,Wa=function(){var a=D,b=Va.test(a.location.host);return!(!a.postMessage||!a.localStorage||!a.JSON||b)};var Xa=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{}});this.m=a.google_iframe_oncopy},Ya;var F="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){w.location.replace(h)}}";
/[&<>\"]/.test(F)&&(-1!=F.indexOf("&")&&(F=F.replace(na,"&amp;")),-1!=F.indexOf("<")&&(F=F.replace(oa,"&lt;")),-1!=F.indexOf(">")&&(F=F.replace(pa,"&gt;")),-1!=F.indexOf('"')&&(F=F.replace(qa,"&quot;")));Ya=F;Xa.prototype.set=function(a,b){this.m.handlers[a]=b;this.b.addEventListener&&!/MSIE/.test(navigator.userAgent)&&this.b.addEventListener("load",l(this.n,this,a),h)};Xa.prototype.n=function(a){a=this.b.document.getElementById(a);var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};var Za=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},$a=function(){var a="script";return["<",a,' src="',Oa(ma(),["/pagead/js/",p(),"/r20130206/show_ads_impl.js"].join(""),""),'"></',a,">"].join("")},ab=function(a,b,c,d){return function(){var e=h;d&&Ja().al(3E4);try{if(Ca(a.document.getElementById(b).contentWindow)){var k=a.document.getElementById(b).contentWindow,
s=k.document;if(!s.body||!s.body.firstChild)s.open(),k.google_async_iframe_close=f,s.write(c)}else{var T=a.document.getElementById(b).contentWindow,ra;k=c;k=String(k);if(k.quote)ra=k.quote();else{for(var s=['"'],U=0;U<k.length;U++){var V=k.charAt(U),bb=V.charCodeAt(0),cc=s,dc=U+1,sa;if(!(sa=ta[V])){var E;if(31<bb&&127>bb)E=V;else{var t=V;if(t in r)E=r[t];else if(t in ta)E=r[t]=ta[t];else{var q=t,v=t.charCodeAt(0);if(31<v&&127>v)q=t;else{if(256>v){if(q="\\x",16>v||256<v)q+="0"}else q="\\u",4096>v&&
(q+="0");q+=v.toString(16).toUpperCase()}E=r[t]=q}}sa=E}cc[dc]=sa}s.push('"');ra=s.join("")}T.location.replace("javascript:"+ra)}e=f}catch(pc){T=Ea().google_jobrunner,Ia(T)&&T.rl()}e&&(new Xa(a)).set(b,ab(a,b,c,h))}},cb=function(){var a=["<iframe"];wa(G,function(b,c){a.push(" "+c+'="'+(b==g?"":b)+'"')});a.push("></iframe>");return a.join("")},fb=function(a,b){var c=db,d=b?'"':"",e=d+"0"+d;a.width=d+eb+d;a.height=d+c+d;a.frameborder=e;a.marginwidth=e;a.marginheight=e;a.vspace=e;a.hspace=e;a.allowtransparency=
d+"true"+d;a.scrolling=d+"no"+d},gb=Math.floor(1E6*Math.random()),hb=function(a){for(var b=a.data.split("\n"),c={},d=0;d<b.length;d++){var e=b[d].indexOf("=");-1!=e&&(c[b[d].substr(0,e)]=b[d].substr(e+1))}b=c[3];if(c[1]==gb&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=
0}};var ib=function(a,b,c){this.x=a;this.y=b;this.z=c},jb=function(a,b,c){this.beta=a;this.gamma=b;this.alpha=c},lb=function(){var a=H,b=kb;this.deviceAccelerationWithGravity=this.deviceAccelerationWithoutGravity=g;this.deviceMotionEventCallbacks=[];this.deviceOrientation=g;this.deviceOrientationEventCallbacks=[];this.isDeviceOrientationEventListenerRegistered=this.isDeviceMotionEventListenerRegistered=this.didDeviceOrientationCallbacksTimeoutExpire=this.didDeviceMotionCallbacksTimeoutExpire=h;this.registeredMozOrientationEventListener=
this.registeredDeviceOrientationEventListener=this.registeredDeviceMotionEventListener=g;this.sensorsExperiment=b;this.stopTimeStamp=this.startTimeStamp=g;this.win=a},I=function(a){this.a=a;this.a.win.DeviceOrientationEvent?(this.a.registeredDeviceOrientationEventListener=Aa(this.a.win,"deviceorientation",this,this.j),this.a.isDeviceOrientationEventListenerRegistered=f):this.a.win.OrientationEvent&&(this.a.registeredMozOrientationEventListener=Aa(this.a.win,"MozOrientation",this,this.k),this.a.isDeviceOrientationEventListenerRegistered=
f);this.a.win.DeviceMotionEvent&&(this.a.registeredDeviceMotionEventListener=Aa(this.a.win,"devicemotion",this,this.i),this.a.isDeviceMotionEventListenerRegistered=f)};
I.prototype.i=function(a){a.acceleration&&(this.a.deviceAccelerationWithoutGravity=new ib(a.acceleration.x,a.acceleration.y,a.acceleration.z));a.accelerationIncludingGravity&&(this.a.deviceAccelerationWithGravity=new ib(a.accelerationIncludingGravity.x,a.accelerationIncludingGravity.y,a.accelerationIncludingGravity.z));mb(this.a.deviceMotionEventCallbacks);Ba(this.a.win,"devicemotion",this.a.registeredDeviceMotionEventListener)};
I.prototype.j=function(a){this.a.deviceOrientation=new jb(a.beta,a.gamma,a.alpha);mb(this.a.deviceOrientationEventCallbacks);Ba(this.a.win,"deviceorientation",this.a.registeredDeviceOrientationEventListener)};I.prototype.k=function(a){this.a.deviceOrientation=new jb(-90*a.y,90*a.x,g);mb(this.a.deviceOrientationEventCallbacks);Ba(this.a.win,"MozOrientation",this.a.registeredMozOrientationEventListener)};var mb=function(a){for(var b=0;b<a.length;++b)a[b]();a.length=0};(function(a){"google_onload_fired"in a||(a.google_onload_fired=h,ya(a,function(){a.google_onload_fired=f}))})(window);
if(!window.google_top_experiment){var nb=window;if(2!==(nb.top==nb?0:Ca(nb.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var ob;try{ob=top.frames.google_top_static_frame?f:h}catch(pb){ob=h}if(ob){if(window.google_top_experiment=y(["jp_c","jp_zl"],ea)||"jp_wfpmr","jp_zl"===window.google_top_experiment||"jp_wfpmr"===window.google_top_experiment){za(window,"message",hb);window.google_top_js_status=3;var qb={0:"google_loc_request",1:gb},rb=[],sb;for(sb in qb)rb.push(sb+"="+qb[sb]);
top.postMessage(rb.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}var tb=h;if(navigator&&navigator.userAgent)var ub=navigator.userAgent,tb=0!=ub.indexOf("Opera")&&-1!=ub.indexOf("WebKit")&&-1!=ub.indexOf("Mobile");
if(tb){var H=window;if(!/Android/.test(H.navigator.userAgent)&&!(0!=Za(H)||H.google_sensors)){var kb,vb=g,wb=H;wb.google_top_experiment&&"jp_c"!=wb.google_top_experiment||(vb=y(["ds_c","ds_zl","ds_wfea"],ia));if(kb=vb)H.google_sensors=new lb,"ds_c"!=kb&&new I(H.google_sensors)}}var xb;
if(window.google_enable_async===h)xb=0;else{var yb;var zb=navigator.userAgent;Ma.test(zb)?yb=h:(void 0===window.google_async_for_oa_experiment&&(Na.test(navigator.userAgent)&&!Ma.test(navigator.userAgent))&&(window.google_async_for_oa_experiment=y(["C","E"],ha)),yb=Na.test(zb)?"E"===window.google_async_for_oa_experiment:f);xb=yb&&!window.google_container_id&&(!window.google_ad_output||"html"==window.google_ad_output)}
if(xb){var Ab=window;Ab.google_unique_id?++Ab.google_unique_id:Ab.google_unique_id=1;for(var D=window,C,Bb={},Cb=0,Db=B.length;Cb<Db;Cb++){var Eb=B[Cb];D[Eb]!=g&&(Bb[Eb]=D[Eb])}C=Bb;C.google_loader_used="sa";for(var Fb=0,Gb=B.length;Fb<Gb;Fb++)D[B[Fb]]=g;var eb=C.google_ad_width,db=C.google_ad_height,J={};fb(J,f);J.onload='"'+Ya+'"';for(var K,Hb=C,Ib=D.document,L=J.id,Jb=0;!L||Ib.getElementById(L);)L="aswift_"+Jb++;J.id=L;J.name=L;var Kb=Hb.google_ad_width,Lb=Hb.google_ad_height,M=["<iframe"],N;for(N in J)J.hasOwnProperty(N)&&
xa(M,N+"="+J[N]);M.push('style="left:0;position:absolute;top:0;"');M.push("></iframe>");var Mb="border:none;height:"+Lb+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+Kb+"px";Ib.write(['<ins style="display:inline-table;',Mb,'"><ins id="',J.id+"_anchor",'" style="display:block;',Mb,'">',M.join(" "),"</ins></ins>"].join(""));K=J.id;var Nb=Ua(),O=C,Ob=O.google_ad_output,P=O.google_ad_format;if(!P&&("html"==Ob||Ob==g))P=O.google_ad_width+"x"+O.google_ad_height;P=P&&(!O.google_ad_slot||
O.google_override_format)?P.toLowerCase():"";O.google_ad_format=P;var Q,R=C||ua,Pb=[R.google_ad_slot,R.google_ad_format,R.google_ad_type,R.google_ad_width,R.google_ad_height];if(u){var Qb;if(u){for(var Rb=[],Sb=0,S=u;S&&25>Sb;S=S.parentNode,++Sb)Rb.push(9!=S.nodeType&&S.id||"");Qb=Rb.join()}else Qb="";Qb&&Pb.push(Qb)}var Tb=0;if(Pb){var Ub=Pb.join(":"),Vb=Ub.length;if(0==Vb)Tb=0;else{for(var W=305419896,Wb=0;Wb<Vb;Wb++)W^=(W<<5)+(W>>2)+Ub.charCodeAt(Wb)&4294967295;Tb=0<W?W:4294967296+W}}Q=Tb.toString();
e:{var X=C,Y=D.google_async_slots;Y||(Y=D.google_async_slots={});var Z=String(Za(D));if(Z in Y&&(Z+="b",Z in Y))break e;Y[Z]={sent:h,w:X.google_ad_width||"",h:X.google_ad_height||"",adk:Q,type:X.google_ad_type||"",slot:X.google_ad_slot||"",fmt:X.google_ad_format||"",cli:X.google_ad_client||"",saw:[]}}var $;Wa()&&void 0===D.google_ad_handling_experiment&&(D.google_ad_handling_experiment=y(ka&&"dev"!=p()||ja?["PC"]:["XN","PC"],ka&&"dev"!=p()?ga:fa));$=D.google_ad_handling_experiment?String(D.google_ad_handling_experiment):
g;var Xb;var Yb=C;if(Wa()&&1==D.google_unique_id&&"XN"!=$){var Zb="zrt_ads_frame"+D.google_unique_id,$b,ac=Yb.google_page_url;if(!ac){var bc;o:{var ec=D.document,fc=eb||D.google_ad_width,gc=db||D.google_ad_height;if(D.top==D)bc=h;else{var hc=ec.documentElement;if(fc&&gc){var ic=1,jc=1;D.innerHeight?(ic=D.innerWidth,jc=D.innerHeight):hc&&hc.clientHeight?(ic=hc.clientWidth,jc=hc.clientHeight):ec.body&&(ic=ec.body.clientWidth,jc=ec.body.clientHeight);if(jc>2*gc||ic>2*fc){bc=h;break o}}bc=f}}ac=bc?D.document.referrer:
D.document.URL}$b=encodeURIComponent(ac);var kc=g;"PC"==$&&(kc="K-"+($b+"/"+Q+"/"+D.google_unique_id));var G={};fb(G,h);G.style="display:none";var lc=kc;G.id=Zb;G.name=Zb;G.src=Oa(da("","googleads.g.doubleclick.net"),["/pagead/html/",p(),"/r20130206/zrt_lookup.html",lc?"#"+encodeURIComponent(lc):""].join(""));Xb=cb()}else Xb=g;var mc=(new Date).getTime(),nc=D.google_top_experiment,oc=D.google_async_for_oa_experiment,
qc=["<!doctype html><html><body>",Xb,"<script>",Nb,"google_show_ads_impl=true;google_unique_id=",D.google_unique_id,';google_async_iframe_id="',K,'";google_ad_unit_key="',Q,'";google_start_time=',m,";",nc?'google_top_experiment="'+nc+'";':"",$?'google_ad_handling_experiment="'+$+'";':"",oc?'google_async_for_oa_experiment="'+oc+'";':"","google_bpp=",mc>m?mc-m:1,";\x3c/script>",$a(),"</body></html>"].join("");(D.document.getElementById(K)?Ka:La)(ab(D,K,qc,f))}else window.google_loader_used="sb",window.google_start_time=
m,document.write($a());})();
