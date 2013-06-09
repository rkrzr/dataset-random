$(document).ready(function(){
	$("#cabecera .menu li").hoverIntent({
	     over: makeTall, // function = onMouseOver callback (REQUIRED)    
	     timeout: 100, // number = milliseconds delay before onMouseOut    
	     out: makeShort // function = onMouseOut callback (REQUIRED) 
	});
	
	//links externos
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++){
		var anchor = anchors[i];
		if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external")
			anchor.target="_blank";
	}
		
	/*$("#imagenes_ul").jPaginate({
		count : 20,
	    start : 1,
	    display : 20,
	    border : false,
	    border_color : '#CCC',
	    text_color : '#949494',
	    background_color : 'none',
	    border_hover_color : 'none',
	    text_hover_color : '#FFF',
	    background_hover_color : 'none',
	    rotate : false,
	    images : false,
	    mouse : 'press'	
	});
	
	$('.imagen_seleccionada').click(function() {
		$('#img_sel').val($(this).attr("id"));
		$.fancybox.close();
		$('#imag_inline,#imag_inline2').css({ display: "none"});
		$('#img_seleccionada,#cambiar_img').css({ display: "block"});
		$("#img_seleccionada").attr("src","../../material/imgplantillas/posters/"+$(this).attr("id"));
	});
	
	$('.imagen_seleccionada2').click(function() {
		$('#img_sel').val($(this).attr("id").substring(6, 50));
		$.fancybox.close();
		$('#imag_inline,#imag_inline2').css({ display: "none"});
		$('#img_seleccionada,#cambiar_img2').css({ display: "block"});
		$("#img_seleccionada").attr("src","../../images/com_gestorproductos/"+$(this).attr("id"));
	});*/
	
	
	
	$('#cambiar_img').click(function() {
		$('#imag_inline2').css({ display: "inline"});
		$('#img_sel').attr("value", "");
		$('#cambiar_img,#cambiar_img2,#img_seleccionada').css({ display: "none"});
		$('#imagendiv span').css({ display: "none"});
		return false;
	});
	
	$('#cambiar_img2').click(function() {
		$('#imag_inline').css({ display: "inline"});
		$('#img_sel').attr("value", "");
		$('#cambiar_img,#cambiar_img2,#img_seleccionada').css({ display: "none"});
		$('#imagendiv span').css({ display: "none"});
		return false;
	});
	
	
	//botón volver
	$('#volver').attr("href","javascript:history.go(-1)");
	
	//Historia
	$("#fechas").paginate({
		count : 17,
	    start : 1,
	    display : 13,
	    border : false,
	    border_color : '#CCC',
	    text_color : '#949494',
	    background_color : 'none',
	    border_hover_color : 'none',
	    text_hover_color : '#FFF',
	    background_hover_color : 'none',
	    rotate : false,
	    images : false,
	    mouse : 'press'	
	});
	$(".category-module .submenu ul li img,.map .menu .bocadillo img,.menu-submenu-merchan .imagen_izq_borde, .menu-submenu-merchan .imagen_der_borde, .menu-submenu-merchan .imagen_sup_izq_borde, .menu-submenu-merchan .imagen_sup_der_borde, .menu-submenu-merchan .borde_inf, .menu-submenu-merchan .borde_izq, .menu-submenu-merchan .borde_dcha, .menu-submenu-merchan .borde_sup").remove();
	
	//Slider
	$('#slider1').bxSlider();
	$('#contenido .destacados').bxSlider2();
	//$('#contenido .destacados').bxSlider2({ mode: 'fade', captions: true, auto: true, controls: false }); });
	
	$(".row-separator").html('.');
	
	$('.plantilla_poster,.plantilla').click(function() {
		/*$('#paso1').css({ visibility: "hidden"});
		$('#paso2').css({ display: "none"});*/
		$('#paso3').css({ display: "block"});
	});
	
	
	//Pestañas de material comercial-----------------------------------------------------
	$('.tab_poster').click(function() {
		 $('.tab_porta, .tab_predef').removeClass('activo');
		 $('.tab_poster').addClass('activo');
		 $('#generar,#formulariodiv,.plantilla,#imag_inline,#cambiar_img,#cambiar_img2,#img_seleccionada,.plantilla_predef').css({ display: "none"});
		 $('.plantilla li input').prop('checked', false);
		 $('.plantilla li label').removeClass('current');
		 $('.uds,.plantilla_poster,#paso2').css({ display: "block"});
		 $('#paso1').css({ visibility: "visible"});
		 $('#imag_inline2').css({ display: "inline-block"});
		 $('.plantilla_dcha').removeClass('porta');
		 $('#portaprecio label, #portaprecio input').removeClass('error');
		 $('#imagendiv label').html('');
		 $('#portaprecio').addClass('poster');
		 $('#img_sel').attr("value", "");
		 
		 
		 return false;
	});
	 
	$('.tab_porta').click(function() {
		 $('.tab_poster, .tab_predef').removeClass('activo');
		 $('.tab_porta').addClass('activo');
		 $('.plantilla li input').prop('checked', false);
		 $('.plantilla li label').removeClass('current');
		 $('#formulariodiv,#generar,.uds,.plantilla_poster,#imag_inline2,#cambiar_img,#cambiar_img2,#img_seleccionada,.plantilla_predef').css({ display: "none"});
		 $('.plantilla,#paso2').css({ display: "block"});
		 $('#paso1').css({ visibility: "visible"});
		 $('#imag_inline').css({ display: "inline-block"});
		 $('#generar2').css({ display: "none"});
		 $('.plantilla_dcha').addClass('porta');
		 $('#portaprecio label, #portaprecio input').removeClass('error');
		 $('#imagendiv label').html('');
		 $('#portaprecio').removeClass('poster');
		 $('#img_sel').attr("value", "");
		 return false;
	});
	
	$('.tab_predef').click(function() {
		 $('.tab_poster, .tab_porta').removeClass('activo');
		 $('.tab_predef').addClass('activo');
		 $('.plantilla li input').prop('checked', false);
		 $('.plantilla li label').removeClass('current');
		 $('#formulariodiv,#generar,.uds,.plantilla_poster,#imag_inline2,#cambiar_img,#cambiar_img2,#img_seleccionada,.plantilla,#imag_inline').css({ display: "none"});
		 $('.plantilla_predef,#paso2').css({ display: "block"});
		 $('#paso1').css({ visibility: "visible"});
		 $('.plantilla_dcha').addClass('porta');
		 $('#portaprecio').removeClass('poster');
		 return false;
	});
	
	$('.platilla li, .plantilla_poster li, #portaprecio ul li').click(function() {
		$('.plantilla_izda label, .plantilla_izda input').removeClass('error');
		$('#imagendiv label').html('');
	});
	//--------------------------------------------------------------------------------------
	 
	$(".plantilla input").each(function(i)
	{ 
		 $('#'+this.id).click(function(){
			 $('.plantilla li label').removeClass('current');
			 if ($('#'+this.id).is(":checked")){
				 $('label[for='+this.id+']').addClass('current');
			 }
		 });
	});
	
	$(".plantilla_poster input").each(function(i)
	{ 
		 $('#'+this.id).click(function(){
			 $('.plantilla_poster li label').removeClass('current');
			 if ($('#'+this.id).is(":checked")){
				 $('label[for='+this.id+']').addClass('current');
			 }
		 });
	});
	
	
	
	
	/*$("body").delegate("p", "click", function(){
		  alert( $(this).text() );
	});*/
	
	/*$("a.anios").click(function() {
	      mostrar_anio("a"+$(this).val());
	});*/
	
	/*$("a.anios").live("click",function() {
	      var link= "a"+$(this).attr("id") ;
	      mostrar_anio(link);
	      //alert(link);
	});*/
	
	$(".anios").live("click",function() {
	      var link= $(this).attr("id");
	      var link2 = link.substr(0,link.length);
	      mostrar_anio("a"+link2);
	});
	
	/*$('.anios').each(function() {
		$(this).attr({onClick: "mostrar_anio('a"+$(this).text()+"');"});
	});*/
	
	
	
	
	$(".jPag-last").live("click", function() {
		var link= $(".jPag-current").text();
	    var link2 = link.substr(0,link.length);
	    mostrar_anio("a"+link2);
	});
	$(".jPag-first").live("click", function() {
		var link= $(".jPag-current").text();
	    var link2 = link.substr(0,link.length);
	    mostrar_anio("a"+link2);
	});
	$("div#a1994").css({ display: "block"});
	rotarImg($(".anio94"),1);
	      
	//movimiento anclas
	$('.submenu a[href*=#]').click(function() {
		animar=1;
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    		&& location.hostname == this.hostname) {
	            var $target = $(this.hash);
	            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	            if ($target.length) {
	            	var targetOffset = $target.offset().top;
                	$('html,body').animate({scrollTop: targetOffset-135}, 1000,function(){
                		 animar=0; 
                	});
                    return false;
             }
        }
	});  
 
	/*$('.top').click(function() {
		animar=1;
    	$('html,body').animate({scrollTop: 0}, 1000,function(){
    	$("#category").css("top","0");
    	alturanterior=$(window).scrollTop(); 
    	_n=Math.round(($(window).scrollTop()-_pos)/alt); 
    	if(_n>1) _n=1; 
    		animar=0; 
    	});
    	return false;
 	});  */
	     	 
	$('.arriba').click(function() {
		animar=1;
		$('html,body').animate({scrollTop: 0}, 1000,function(){
        $("#category").css("top","178");
        alturanterior=$(window).scrollTop(); 
        _n=Math.round(($(window).scrollTop()-_pos)/alt); 
        if(_n>1) _n=1; 
        	animar=0; 
        });
        return false;
	}); 
	 
	$("#pagination a").attr('href', '#');
	$(".map").css({ display: "none"}); 
	$(".-map").click(function () {
	    $(".map").slideToggle(400);
	    $('html, body').animate({
	           scrollTop: $(document).height()
	       },
	       500);
	});
	puntos_mapa();
	form_registro();
	
	if($("#category").length>0){
		var _n = 1;
		var top = 138;
		var alt = $("#category").height();
		var _pos = $("#category").offset().top-200;
		var alturanterior=_pos;
	}
});



var animar=0;

function colocarMenu(pos){
	/*if(animar==0){
	$("#category").stop().animate({
		top: pos
	},100,'linear',function(){
		
	});
	}*/
}

function makeTall(){
    if($(this).find('.bocadillo').length){
        $(this).find('.bocadillo').slideDown();
    }
    $(this).addClass("hover");
}

function makeShort(){
	clearTimeout(t);
	var _id = $(this);
    _id.find('.bocadillo').slideUp();
    if(_id.find('.bocadillo:hidden')){
    	var t = setTimeout(function(){
            _id.removeClass("hover");
        },300);
    }
}  

var interval ="";

function mostrar_anio(anio){
    clearInterval(interval);
    $(".divhistoria").slideUp(500);   
    $("#"+anio).slideToggle(1000);
    var anio_ok = anio.substr(3,anio.length);	
    var num = $(".anio"+anio_ok+" img").length-1;
    $(".anio-img img").hide();
    rotarImg($(".anio"+anio_ok),num);
	
}

function rotarImg(item,num){
    var i = 0;
    $(item).find("img").fadeOut(200);
    $(item).find(".img"+i).fadeIn(1000);
    interval = setInterval(function(){
        if(i >= num){
            i = 0;
        }else{
            i++;
        }
        if( $(item).find("img").is(':not(:animated)')){
	        $(item).find("img").fadeOut(200);
	        $(item).find(".img"+i).fadeIn(1000);
        }
    },5000);
}

/**
 * Establece las variables para las rutas de imagenes para el lightbox de 
 * imagenes.
 * @param path La ruta absoluta del servidor.
 */
function setVblsLightbox(path){
	$(document).ready(function(){
		$('a.lightbox').lightBox({
			imageLoading:			path+'/components/com_gestorproductos/assets/images/lightbox-ico-loading.gif',		// (string) Path and the name of the loading icon
			imageBtnPrev:			path+'/components/com_gestorproductos/assets/images/lightbox-btn-prev.gif',			// (string) Path and the name of the prev button image
			imageBtnNext:			path+'/components/com_gestorproductos/assets/images/lightbox-btn-next.gif',			// (string) Path and the name of the next button image
			imageBtnClose:			path+'/components/com_gestorproductos/assets/images/lightbox-btn-close.gif',		// (string) Path and the name of the close btn
			imageBlank:				path+'/components/com_gestorproductos/assets/images/lightbox-blank.gif'
		});
	});
}