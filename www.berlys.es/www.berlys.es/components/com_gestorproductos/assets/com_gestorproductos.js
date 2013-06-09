/*$(document).ready(function(){	
	$(".ocultainfo").click(function() {
	      alert('yuju!');
	});
});
*/

function activarPaginacionAjax(path, modelo, idFamilia){
	$('.pagenav').click(function() {
		$("#resultados_filtro_productos").html('');
		$("#resultados_filtro_productos").addClass('loading_productos');
		var url=this.href;
		var paramsUrl=url.split('?');
		paramsUrl=paramsUrl[1];

		url=path+"/index.php?option=com_gestorproductos&task=ajaxmoverpagina&format=raw&modelo="+modelo+"&"+paramsUrl;
		if(idFamilia>0){
			url+="&id="+idFamilia;
		}
		//alert(url);
		$("#resultados_filtro_productos").load(url,{noncache: new Date().getTime()},function(data){
			$("#resultados_filtro_productos").removeClass('loading_productos');
			$("#resultados_filtro_productos").html(data);
		}).error(function(jqXHR, textStatus, errorThrown) { $("#resultados_filtro_productos").removeClass('loading_productos'); alert("Error: "+errorThrown); });        
		return false;
	});
}

function checkTodasSubfamilias(id, obj){
	$('#ul_familias_'+id+' li input.check_familia').each(function(){
		if(obj.checked){
			$(this).attr('checked', 'checked');
		}else{
			$(this).removeAttr('checked');
		}
    });
}

function comprobarSeleccionRamaDistinta(){
	var aux="";
	var ok=true;
	$(".check_familia:checked").each(function() {
		var id=$(this).parent().parent().attr("id");
		//alert(id);
		id=id.split("ul_familias_");
		id=id[1];
		if(aux.length==0){
			aux=id;
		}else{
			if(aux!=id){
				ok=false;
				return false;
			}
		}
	});
	return ok;
}

function desplegaArticulosProd(url){
	var capa="#div_articulos_producto";
	$(capa).html('');
	$(capa).addClass('loading_productos');
	$(capa).load(url,
		{noncache: new Date().getTime()},
		function(data){
			var callback = function(){};
			
			$(capa).removeClass('loading_productos');
			$(capa).html(data);
			$(capa).toggle();			
			
			var alt = $(capa).height()+100;
			$('.whitebox').animate({'height': alt+'px', 'bottom': '80px'},{duration: 'slow',  easing: 'easeOutBounce', complete: callback}  );
			$('.whitebox').addClass("conborde");
			$('.ocultainfo').toggle();
			$('.desplinfo').toggle();
		}
	).error(function(jqXHR, textStatus, errorThrown) { $(capa).removeClass('loading_productos'); alert("Error: "+errorThrown); });        
	return false;
}

function ocultaArticulosPro(){
	var capa="#div_articulos_producto";
	
	$('.whitebox').removeClass("conborde");
	$(capa).toggle();
	//$('.prod_superior').animate({'bottom': '0'});
	$('.whitebox').animate({'height':'100px', 'bottom': "80px"});
	//$('.imagenproducto').animate({'opacity': '100'});
	$('.ocultainfo').toggle();
	$('.desplinfo').toggle();	
}


/**
 * Funci�n que devuelve el id de familia de la rama en la que haya, al menos
 * uno, checbox marcado.
 * @return int
 */
function getIdUnicaRamaConChecked(){
	var id='';
	$(".check_familia:checked").each(function() {
		id=$(this).parent().parent().attr("id");
		//alert(id);
		id=id.split("ul_familias_");
		id=id[1];
		return id;
	});
	return id;
}


function getTamaniosFamilia2(url, idPadre, stringIdsTamanios){
	var ids='';
	var i=0;
	var aux=new Array();
	
	var totalInputsRama=$("#ul_familias_"+idPadre+" li input.check_familia").length;
		
	$("#ul_familias_"+idPadre+" li input.check_familia:checked").each(function() {
		aux[i]=$(this).val();
		i++;
	});
	
	var t=aux.length;
	for(i=0;i<t;i++){
		ids+=aux[i];
		if(i<(t-1)){
			ids+=',';
		}
	}
	url+='&familias='+ids;
	
	if(totalInputsRama>t){
		$('#todas_familias_'+idPadre).removeAttr('checked');
	}else{
		$('#todas_familias_'+idPadre).attr('checked', 'checked');
	}
	
	$("#div_tamanios_"+idPadre).html('');
	$("#div_tamanios_"+idPadre).addClass('loading_productos');
	$("#div_tamanios_"+idPadre).load(url,{noncache: new Date().getTime()},function(data){
		$("#div_tamanios_"+idPadre).removeClass('loading_productos');
		$("#div_tamanios_"+idPadre).html(data);
		if(stringIdsTamanios!=null){
			marcarChecksTamanios(stringIdsTamanios, idPadre);
		}
	}).error(function(jqXHR, textStatus, errorThrown) { $("#div_tamanios_"+idPadre).removeClass('loading_productos'); alert("Error: "+errorThrown); });        
}

/**
 * Establece la propiedad checked al valor "checked" para los tama�os cuyo
 * identificador se pasa por par�metro
 * @param stringIdsTamanios Cadena de id's de tama�os separados por ",".
 * @param idPadre Identificador de la familia (padre de las familias seleccionadas) a la que pertenecen los tama�os.
 */
function marcarChecksTamanios(stringIdsTamanios, idPadre){
	var ids=stringIdsTamanios.split(",");
	var i=0;
	var t=ids.length;
	for(i=0;i<t;i++){
		$("#check_tamanio_"+idPadre+"_"+ids[i]).attr('checked','checked');
	}
}

function mostrarUlFamilia(obj,id){
	var nombreUl='ul_familias_'+id;
	toggleFamilia(nombreUl, obj);
	var checkTodos=document.getElementById('todas_familias_'+id);
	if(document.getElementById(nombreUl).style.display=='block' ||
			document.getElementById(nombreUl).style.display==''){
		$('#todas_familias_'+id).attr('checked', 'checked');
	}else{
		$('#todas_familias_'+id).removeAttr('checked');
	}
	checkTodasSubfamilias(id,checkTodos);
}

/**
 * Recorre el arbol de uls de familias de la p�gina del filtro de productos
 * para establecer clases CSS y la visibliadad de uls.
 * Si, para cada lista de checkbox de las familias est�n todos marcados, marco
 * el checkbox de Todos. 
 */
function setVisibilidadUlsFamilias(){
	$(document).ready(function(){
		$('ul.nivel_familias_0 li ul li input:checked').each(function(){
			id=$(this).parent().parent().get(0).id;
			$(this).parent().parent().parent().addClass('current-familia');
			$('#'+id).show();
		});
		$('ul.nivel_familias_0 li ul').each(function(){
			var t=$(this).children('li').children('input.check_familia').length;
			var marcados=$(this).children('li').children('input.check_familia:checked').length;
			if(marcados==t){
				$(this).children('li').children('input.checkall').attr('checked', 'checked');
			}
		});
	});
}

/**
 * Funcion que establece la visibilidad del grupo de uls perteneciente a la
 * familia cuyo id se recibe por par�metro.
 * @param id
 */
function setVisibilidadUlFamilia(id){
	$(document).ready(function(){
		var obj=$('#ul_familias_'+id).parent().children('span');
		mostrarUlFamilia(obj,id);
		$('#ul_familias_'+id+' li input').each(function(){
			$(this).attr('checked', 'checked');
		});
	});
}

function toogleCheck(check, capa_hijos){
	if(check.checked){
		$(capa_hijos).show();
	}else{
		$(capa_hijos).hide();
	}
}

/**
 * Cambia la visiblidad de un ul de familias de la p�gina del filtro de productos.
 * Tambi�n se establece una clase al span del li padre del ul donde se cambia
 * la visibilidad. 
 * @param nombre Id del ul
 * @param obj Objeto HTML de tipo input desde donde se invoca.
 */
function toggleFamilia(nombre, obj){
	$('#'+nombre).toggle();
	if(document.getElementById(nombre).style.display=='block' ||
			document.getElementById(nombre).style.display==''){
		$(obj).parent().addClass('current-familia');
	}else{
		$(obj).parent().removeClass('current-familia');
	}
}

function verFichaProducto(path, id){
	var url= path+"/index.php?option=com_gestorproductos&task=fichaproducto&format=raw&id="+id;
	jQuery(this).load(url,
		{noncache: new Date().getTime()},
		function(data){
			$.fancybox(data,{
				autoScale : false,
				width	:	1600
			});
		}
	);
	
	return false;
}