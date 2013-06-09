function meniu(a,b) {
	for(i=1;i<=b;i++)
	{
		document.getElementById("meniu_line_"+i).className="hidden_line";
		document.getElementById("meniu_img_"+i).src="/images/icon_gray_shadow.png";
		document.getElementById("meniu_buton_"+i).className="item";
	}
	document.getElementById("meniu_line_"+a).className="line";
	document.getElementById("meniu_img_"+a).src="/images/icon_red_shadow.png";
	document.getElementById("meniu_buton_"+a).className="item activ";
}

function popup(url){
	newwindow=window.open(url,'name','height=200,width=350,top=250,left=300,resizable=no');
}

//pentru formulare

//ROMANA
var tip_imobil = {"tip_1":"nr_cam","tip_2":"sup_utila","tip_34":"nr_cam","tip_5":"sup_utila","tip_6":"sup_utila","tip_7":"sup_utila"};

function disable_all(){
	var i, id;
	for(i in tip_imobil){
		//alert($(tip_imobil[i]));
		id = eval("tip_imobil."+i);
		$(id).style.display="none";
	}
}

function enable_filter_special(id){
	$(id).style.display="block";
}

function change_filter_special(id){
	disable_all();
	id = eval("tip_imobil."+"tip_"+id);
	enable_filter_special(id);
}

function check_form_cautare(){
    var err="";
    if (!$('filterClassic_TIP_IMOBIL_WORD_NEOCASA').value > " ") err += " - Tipul imobilului\n";
    if (!$('filterClassic_TIP_TRANZ').value > " ") err += " - Tipul tranzactiei\n";
/*    if (!$('filterEQ[ORAS]').value > " ") err += " - Orasul\n";	*/
	if (err >" "){
        alert("Nu ati selectat urmatoarele campuri : \n"+err);
        return false;
    }
/*	if($('filterMIN[SUPR_UTILA]').value=="suprafata min") $('filterMIN[SUPR_UTILA]').disabled=true;
	if($('filterMAX[SUPR_UTILA]').value=="suprafata max") $('filterMAX[SUPR_UTILA]').disabled=true;
	if($('filterMIN[SUPR_TEREN]').value=="suprafata min") $('filterMIN[SUPR_TEREN]').disabled=true;
	if($('filterMAX[SUPR_TEREN]').value=="suprafata max") $('filterMAX[SUPR_TEREN]').disabled=true;	
	if($('filterClassic[PRET_MIN]').value=="pret min") $('filterClassic[PRET_MIN]').disabled=true;
	if($('filterClassic[PRET_MAX]').value=="pret max") $('filterClassic[PRET_MAX]').disabled=true;*/
    return true;
}

function populate(){
	retrieve();
}

function isInt(x){
   var y=parseInt(x);
   if (isNaN(y)) return false;
   return x==y && x.toString()==y.toString();
} 


function retrieve(){
	var url='/oferte/index.php?screen=zone';
	url +="&filterClassic[TIP_IMOBIL_WORD_NEOCASA]="+$('filterClassic_TIP_IMOBIL_WORD_NEOCASA').options[$('filterClassic_TIP_IMOBIL_WORD_NEOCASA').selectedIndex].value;
	if($('filterClassic_TIP_IMOBIL_FILTER').selectedIndex>0) 
		url +="&filterClassic[TIP_IMOBIL_FILTER]="+$('filterClassic_TIP_IMOBIL_FILTER').options[$('filterClassic_TIP_IMOBIL_FILTER').selectedIndex].value;	
	if($('filterClassic_TIP_TRANZ_1').checked) url +="&tip_tranz="+$('filterClassic_TIP_TRANZ_1').value;
	else if($('filterClassic_TIP_TRANZ_2').checked) url +="&tip_tranz="+$('filterClassic_TIP_TRANZ_2').value;	
	var reg = new Ajax.Request(url,{method:'get',evalScripts:true,onSuccess:doPopulate});
}

function doPopulate(transport,json){
	var t;
	var json;
	var new_str="";
	var i=0;
	if(transport.responseText>' '){
		t=transport.responseText;
		json=t.evalJSON();
		for(b in json){
			temp = json[b];
			new_str+="<opt"+"group label=\""+b+"\">";
			for(c in json[b]){
				if(isInt(c)){
					var selected="";				
					if(zona_selectata>' ' && zona_selectata==temp[c]){
						selected="selected";
					}					
					new_str+="<opt"+"ion "+selected+">"+temp[c]+"</opt"+"ion>";
	//				$('filterEQ[ZONA]').options[i] = new Option(temp[c],temp[c]);
					i++;
				}
			}
			new_str+="</opt"+"group>";
		}
	} 
	if(i==0) new_str="<select class='select_normal'><option>Nu exista oferte</option></select>";
    else new_str="<select name='filterEQ[ZONA]' id='filterClassic_ZONA' class='select_normal'><option value=''>"+i+" zone alese</option>"+new_str+"</select>";		
	$('zona_select').innerHTML=new_str;
}

//ENGLEZA
function populate_eng(){
	retrieve_eng();
}

function retrieve_eng(){
	var url='/oferte/index.php?screen=zone';
	url +="&filterClassic[TIP_IMOBIL_WORD_NEOCASA]="+$('filterClassic_TIP_IMOBIL_WORD_NEOCASA').options[$('filterClassic_TIP_IMOBIL_WORD_NEOCASA').selectedIndex].value;
	if($('filterClassic_TIP_IMOBIL_FILTER').selectedIndex>0) 
		url +="&filterClassic[TIP_IMOBIL_FILTER]="+$('filterClassic_TIP_IMOBIL_FILTER').options[$('filterClassic_TIP_IMOBIL_FILTER').selectedIndex].value;	
	if($('filterClassic_TIP_TRANZ_1').checked) url +="&tip_tranz="+$('filterClassic_TIP_TRANZ_1').value;
	else if($('filterClassic_TIP_TRANZ_2').checked) url +="&tip_tranz="+$('filterClassic_TIP_TRANZ_2').value;	
	var reg = new Ajax.Request(url,{method:'get',evalScripts:true,onSuccess:doPopulate_eng});
}

function doPopulate_eng(transport,json){
	var t;
	var json;
	var new_str="";
	var i=0;
	if(transport.responseText>' '){
		t=transport.responseText;
		json=t.evalJSON();
		for(b in json){
			temp = json[b];
			new_str+="<opt"+"group label=\""+b+"\">";
			for(c in json[b]){
				if(isInt(c)){
					var selected="";				
					if(zona_selectata>' ' && zona_selectata==temp[c]){
						selected="selected";
					}					
					new_str+="<opt"+"ion "+selected+">"+temp[c]+"</opt"+"ion>";
	//				$('filterEQ[ZONA]').options[i] = new Option(temp[c],temp[c]);
					i++;
				}
			}
			new_str+="</opt"+"group>";
		}
	}
	if(i==0) new_str="<select class='select_normal'><option>No offers</option></select>";
    else new_str="<select name='filterEQ[ZONA]' id='filterClassic_ZONA' class='select_normal'><option value=''>"+i+" areas selected</option>"+new_str+"</select>";		
	$('zona_select').innerHTML=new_str;	
}


/* END FORMULARE */
/* START IULIAN */
//proiect_activ = 0;
function proiecte_nav(a,b,c,d) {
	for(i=1;i<=b;i++)
	{
		//if(!document.getElementById('proiect_'+i)) continue;
		//document.getElementById('proiect_'+i).className="item";
		document.getElementById('proiect_link_'+i).style.display="none";
	}
	//proiect_activ = a;
	//document.getElementById('proiect_'+a).className="item activ";
	document.getElementById('proiect_link_'+a).style.display="inline";
//	Effect.Fade('proiect_link_'+a);
	document.getElementById('proiecte_cnt').style.backgroundImage="url(/"+img_folder+"/"+c+")";
	document.getElementById('proiecte_cnt').onclick=function() {window.location=d;return false};

}
function change_img(img,a,total){
	for(i=1;i<=total;i++)
	{
		document.getElementById("img_mic_"+i).className="img_mic";
	}
	document.getElementById("img_mic_"+a).className="img_mic activ";
	document.getElementById("img_mare").src=img;
}
var to;
function auto_change_proiecte(curent,total)
{
	proiecte_nav(curent,total,images[curent],links[curent]);
	next = curent+1;
	if(next>total) next=1;
	clearTimeout(to);
	to=setTimeout("auto_change_proiecte("+(next)+","+total+")",5000);
}
/* END IULIAN */

/* START CATALIN */
String.prototype.isURL = function () { 
	var rx = new RegExp("http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w-\\+ ./?%:&=#\\[\\]]*)?"); 
	var matches = rx.exec(this); 
	return (matches != null && this == matches[0]); 
}

function choose_pagina(){
	alert("Sal");
}

/* END CATALIN */



/* Modified to support Opera */
function bookmarksite(title,url){
if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
else if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
	elem.setAttribute('rel','sidebar');
	elem.click();
} 
else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

function add_cos(id){
	var linkCart="/oferte/cart.php?oferta_id_run="+id;
	new Ajax.Request(linkCart,{onSuccess: added});
	$('count_oferte').innerHTML = (parseInt($('count_oferte').innerHTML) + 1);
}
function added(resp)
{
	if(resp.responseText!="COD INVALID")
		alert("Oferta a fost adaugata in cos.")
	//alert(resp.responseText);
}

function add_cos_en(id){
	var linkCart="/oferte/cart.php?oferta_id_run="+id;
	new Ajax.Request(linkCart,{onSuccess: added_en});
	$('count_oferte').innerHTML = (parseInt($('count_oferte').innerHTML) + 1);
}
function added_en(resp)
{
	if(resp.responseText!="COD INVALID")
		alert("Offer has been added to the basket.")
	//alert(resp.responseText);
}

function sterge_cos(id){
	var linkCart="/oferte/cart.php?oferta_id_run="+id+"&delete=1";
	var req = new Ajax.Request(linkCart,{onSuccess: function(resp){
		alert("Oferta a fost stearsa din cos.");
		document.location = "/oferte/cos-de-oferte.html";
	}});
}

function sterge_cos_en(id){
	var linkCart="/oferte/cart.php?oferta_id_run="+id+"&delete=1";
	var req = new Ajax.Request(linkCart,{onSuccess: function(resp){
		alert("The offer has been removed from he basket.");
		document.location = "/oferte/cos-de-oferte.html";
	}});
}