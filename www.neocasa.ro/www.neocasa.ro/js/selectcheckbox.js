// JavaScript Document

var SelectCheckbox = Class.create();
SelectCheckbox.prototype = {
	initialize: function(myselect,options)
	{
		this.myselect = myselect;
		this.total_options = myselect.length;
		this.width_1 = (options.width_1 || 0);
		this.width_2 = (options.width_2 || 0);
		this.height_lines = (options.height_lines || 0);
		this.line_height = (options.line_height || 17);
		this.type = (options.type || "hover");
		this.options_height = this.height_lines*this.line_height;
		this.optgruoup = '';
		this.blur_it = 1;
		this.bodyblur=0;
		this.draw();
	},
	draw: function()
	{
		this.parent_all = this.myselect.parentNode;

		//creeaza combobox-ul hiddenul care va tine valorile trimise
		this.myselect.setAttribute("style","display:none");
		
		//creeaza div-ul vizual cu optiunea aleasa: e nevoie de 3 divuri pentru a afisa backgroundul
		this.div_actual_1 = document.createElement("DIV");
		this.div_actual_1.className = "select_div_actual_1";
		this.parent_all.appendChild(this.div_actual_1);
		this.div_actual_2 = document.createElement("DIV");
		this.div_actual_2.className = "select_div_actual_2";
		this.div_actual_1.appendChild(this.div_actual_2);
		this.div_actual = document.createElement("DIV");
		this.div_actual.setAttribute("id",this.myselect.name+"_div_actual");
		this.div_actual.className = "select_div_actual";
		this.div_actual_2.appendChild(this.div_actual);
		this.div_actual_text = document.createElement("DIV");
		this.div_actual_text.className = "text_select";
		this.div_actual_text.setAttribute("id",this.myselect.name+"_div_actual_text");
		this.div_actual.appendChild(this.div_actual_text);
		
		if(this.myselect.id=='filterClassic_TIP_IMOBIL_FILTER'){
			var alege = "Alege tip";
			var nooffer = "Toate";
			var zone = " imobile selectate";
		} else{
			var alege = "Alege zona";
			var nooffer = "Nu exista oferte";
			var zone = " Zone selectate";			
		}		
		this.div_actual_text.appendChild(document.createTextNode(alege));
		
		//creeaza catcherul de evenimente
		this.eventcatcher = document.createElement("INPUT");
		this.eventcatcher.setAttribute("type","text");
		this.eventcatcher.className = "select_eventcatcher";
		this.parent_all.appendChild(this.eventcatcher);
		
		
		if(this.type=="hover"){
			Event.observe(this.div_actual,"mouseover",function(){
				this.open_options();
				this.eventcatcher.focus();
			}.bind(this));
			Event.observe(this.div_actual,"mouseout",function(evt){
				this.close_options();
			}.bind(this));
		} else if(this.type=="click"){
			Event.observe(this.div_actual,"click",function(){
				this.bodyblur=0;
				this.open_options();
				this.eventcatcher.focus();
				setTimeout("selcb.bodyblur=1;",10);	
			}.bind(this));
			Event.observe(this.eventcatcher,"blur",function(evt){
				if(this.blur_it==1)
					this.close_options();					
			}.bind(this));
			Event.observe(document.body,"click",function(evt){
				if(this.bodyblur==1){
					this.bodyblur=0;
					this.close_options();					
				}
			}.bind(this));
		}
		Event.observe(this.div_actual,"keyup",function(evt){
			this.navigate(evt);
		}.bind(this));
		
		//insereaza un clear:both inainte de optiuni
		this.my_clear = document.createElement("DIV");
		this.my_clear.className = "clear";
		this.parent_all.appendChild(this.my_clear);
		
		
		//creeaza div-ul cu optiunile selectului
		this.options = document.createElement("DIV");
		this.options.setAttribute("id",this.myselect.name+"_options");
		this.options.className = "select_options selectcb_options";
		this.options.style.display = "none";
		this.div_actual.appendChild(this.options);
		
		//elimina bugul de blur() de pe eventcatcher
		Event.observe(this.options,"mousedown",function(){
			this.blur_it=0;
			this.bodyblur=0;
		}.bind(this));
		Event.observe(this.options,"mouseup",function(){
			setTimeout("selcb.bodyblur=1;",0);
			this.blur_it=1;
		}.bind(this));
		Event.observe(this.options,"scroll",function(){
			this.blur_it=1;
			this.eventcatcher.focus();			
		}.bind(this));
		
		//adaugarea dimensiunii pe orizontala daca are si selectul
		if(this.width_1!=0)
		{
			this.div_actual.style.width = this.width_1;
			this.div_actual_text.style.width = this.width_1;
		}
		if(this.width_2!=0)
		{
			this.options.style.width = this.width_2;
		}
		//adaugare scroll pe verticala
		if(this.height_lines!=0 && this.myselect.length>this.height_lines)
		{
			this.options.style.height = this.options_height+"px";
			this.options.style.overflow = "auto";
			this.options.style.width = parseInt(this.width_2)+20+"px";
		}
		
		//afisam opgroupurile
		for(i=0;i<this.myselect.length;i++)
		{
			if(this.myselect[i].parentNode.tagName=="OPTGROUP" && this.optgroup!=this.myselect[i].parentNode.label)
			{
				this.optgroup=this.myselect[i].parentNode.label;
				this.option_label = document.createElement("DIV");
				this.option_label.className = "select_option_label";
				this.option_label.appendChild(document.createTextNode(this.myselect[i].parentNode.label));
				this.options.appendChild(this.option_label);				
			}
			new SelectCheckboxOption(this.myselect[i],this.myselect,i,this);
		}
		//cautam elementul selectat si il afisam
		//if(this.myselect.options[i].selected == true)
		//{
		//	this.act_option(this.myselect.options[i],1);
		//}
		
		//this.myselect.options[0].selected = false;
		//eliminam vechiul element <select>
		//this.parent_all.removeChild(this.myselect);
	},
	navigate:function(evt)
	{
		if(evt.keyCode=="38" || evt.keyCode=="40" || evt.keyCode=="13" || evt.keyCode=="27")
		{
			maxim = this.total_options;
			curent = -1;
			for(i=0;i<this.total_options;i++)
			{
				if($(this.myselect.name+"_my_option_"+i).className=="select_my_option hover" && curent==-1)
				{
					curent = i;
					$(this.myselect.name+"_my_option_"+i).className="select_my_option";
					break;
				}
			}
			if(curent == -1)
			{
				for(i=0;i<this.total_options;i++)
				{
					if($(this.myselect.name+"_my_option_"+i).className=="select_my_option act")
					{
						curent = i;
						break;
					}
				}
			}
			if(maxim==0) return;
			if(evt.keyCode=="40")
			{
				prev_i = curent+1;
				if(prev_i==maxim) prev_i = 0;
				my_i = prev_i;
			}
			else if(evt.keyCode=="38")
			{
				next_i = curent-1;
				if(next_i<0) next_i = maxim-1;
				my_i = next_i;
			}
			else if(evt.keyCode=="13")
			{
				my_i = curent;
				this.act_option(my_i,0);
				return;
			}
			else if(evt.keyCode=="27")
			{
				this.close_options();
				return;
			}
			if($(this.myselect.name+"_my_option_"+my_i).className!="select_my_option act")
			{
				$(this.myselect.name+"_my_option_"+my_i).className="select_my_option hover";
				poz_option = $(this.myselect.name+"_my_option_"+my_i).offsetTop;
				if(parseInt(poz_option)>(parseInt(this.options.scrollTop)+this.options_height-this.line_height))
					this.options.scrollTop = (parseInt(poz_option)+this.line_height-this.options_height);
				else if(parseInt(poz_option)<parseInt(this.options.scrollTop))
					this.options.scrollTop = parseInt(poz_option);
			}
			return;
		}
	},
	open_options:function()
	{
		this.options.style.display = "";
		if($F('filterClassic_TIP_IMOBIL_WORD_NEOCASA')=="industrial" || $F('filterClassic_TIP_IMOBIL_WORD_NEOCASA')=="terenuri") $('filterClassic[TIP_IMOBIL_FILTER][]_options').style.display = "none";
		if($('filterClassic[ZONA][]_options').innerHTML=='') {
			$('filterClassic[ZONA][]_options').style.display = 'none';
		}		
	},
	close_options:function()
	{
		//alert(this.total_options);
		try{
		for(i=0;i<this.total_options;i++)
		{
			if($(this.myselect.name+"_my_option_"+i).className=="select_my_option hover")
			{
				$(this.myselect.name+"_my_option_"+i).className="select_my_option";
				break;
			}
		}
		} catch(e){ }
		this.options.style.display = "none";
	},
	act_option:function(my_i,ondefault)
	{	
		if($(this.myselect.name+"_my_option_"+my_i).className=="select_my_option act"){
			$(this.myselect.name+"_my_option_"+my_i).className="select_my_option";
			$(this.myselect.name+"_my_option_"+my_i).getElementsByTagName('input')[0].checked=false;
			$(this.myselect).options[my_i].selected = false;
		} else {
			$(this.myselect.name+"_my_option_"+my_i).className="select_my_option act";
			$(this.myselect.name+"_my_option_"+my_i).getElementsByTagName('input')[0].checked=true;
			$(this.myselect).options[my_i].selected = true;
		}
		
		this.setActualText();
		
		if(this.myselect.onchange!=undefined && this.myselect.onchange!="" && ondefault==0)
		{
			this.myselect.onchange.call();
		}
	},
	get_value:function(){
		return $(this.myselect.name+"_hidden_input").value;
	},
	setActualText:function(){
		var tot=0;
		var str="";
		$(this.myselect.name+"_div_actual_text").innerHTML = "";
		for(var i=0;i<this.myselect.length;i++){
			if($(this.myselect).options[i].selected){
				tot++;
				str += $(this.myselect).options[i].text+', ';
			}
		}
		str = str.substr(0,str.length-2);
		if(this.myselect.id=='filterClassic_TIP_IMOBIL_FILTER'){
			var alege = "Alege tip";
			var nooffer = "Toate";
			var zone = " imobile selectate";
		} else{
			var alege = "Alege zona";
			var nooffer = "Nu exista oferte";
			var zone = " Zone selectate";			
		}
		if(tot==0){
			if(this.myselect.length>=1)
				$(this.myselect.name+"_div_actual_text").innerHTML = alege;
			else
				$(this.myselect.name+"_div_actual_text").innerHTML = nooffer;
		}
		else if(tot>2){
			$(this.myselect.name+"_div_actual_text").innerHTML = tot + zone; 
		}
		else {
			$(this.myselect.name+"_div_actual_text").innerHTML = str;
		}
	},
	redraw:function(){
		this.options.innerHTML = '';
			
		//adaugarea dimensiunii pe orizontala daca are si selectul
		if(this.width_1!=0)
		{
			this.div_actual.style.width = this.width_1;
			this.div_actual_text.style.width = this.width_1;
		}
		if(this.width_2!=0)
		{
			this.options.style.width = this.width_2;
		}
		//afisam opgroupurile
		var u = 0;
		for(i=0;i<this.myselect.length;i++)
		{
			if(this.myselect[i].parentNode.tagName=="OPTGROUP" && this.optgroup!=this.myselect[i].parentNode.label)
			{
				this.optgroup=this.myselect[i].parentNode.label;
				this.option_label = document.createElement("DIV");
				this.option_label.className = "select_option_label";
				this.option_label.appendChild(document.createTextNode(this.myselect[i].parentNode.label));
				this.options.appendChild(this.option_label);			
				u++;
			}
			new SelectCheckboxOption(this.myselect[i],this.myselect,i,this);
		}
		
		//adaugare scroll pe verticala
		if(this.height_lines!=0 && this.myselect.length>this.height_lines)
		{
			this.options.style.height = this.options_height+"px";
			this.options.style.overflow = "auto";
			this.options.style.width = parseInt(this.width_2)+"px";
		} else {
			if(this.myselect.id=='filterClassic_TIP_IMOBIL_FILTER') {
				this.options.style.height = ((this.myselect.length-1)*this.line_height+2)+"px";
				//alert(this.myselect.length);				
			}
			else this.options.style.height = (this.myselect.length+u+1)*this.line_height+"px";
		}
		
		this.setActualText();
		$('filterClassic[TIP_IMOBIL_FILTER][]_my_option_0').style.display = 'none';		
	}
}

var SelectCheckboxOption = Class.create();
SelectCheckboxOption.prototype = {
	initialize: function(myoption,myselect,current,master_reference)
	{
		this.myselect = myselect;
		this.current = current;
		this.text = myoption.text;
		this.value = myoption.value;
		this.master_reference = master_reference;
		this.draw();
	},
	draw: function()
	{
		this.my_option = document.createElement("DIV");
		this.checkb = document.createElement("INPUT");
		this.val = document.createElement("SPAN");
		this.checkb.setAttribute("type","checkbox");
		this.checkb.className = "checkbox_opt";
		this.checkb.setAttribute("id",this.myselect.name+"_cb_"+this.current);
		this.my_option.appendChild(this.checkb);
		this.val.setAttribute("id",this.myselect.name+"_val_"+this.current);
		this.val.appendChild(document.createTextNode(this.text));
		this.my_option.appendChild(this.val);
		this.my_option.className = "select_my_option";
		this.my_option.setAttribute("value",this.value);
		this.my_option.setAttribute("id",this.myselect.name+"_my_option_"+this.current);
		$(this.myselect.name+"_options").appendChild(this.my_option);
		if(this.myselect.options[i].selected==true){
			this.checkb.checked = true;
			this.my_option.className = "select_my_option act";
		}
		Event.observe(this.my_option,"click",function(){
			this.master_reference.act_option(this.current,0);
		}.bind(this));
		Event.observe(this.my_option,"mouseover",function(){
			if(this.my_option.className!="select_my_option act")
				this.my_option.className="select_my_option hover";
		}.bind(this));
		Event.observe(this.my_option,"mouseout",function(){
			if(this.my_option.className!="select_my_option act")
				this.my_option.className="select_my_option";
		}.bind(this));
	}
}