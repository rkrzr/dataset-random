//var posx=0;
//var posy=0;
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function puntos_mapa(){
	//if(navigator.appName!="Netscape")
	//	var dist=445;
//	else
		//if(navigator.appName=="Netscape"){
	/*	if (navigator.appName == 'Microsoft Internet Explorer' && getInternetExplorerVersion()<"9.0") {
			//alert("IE<");
			alert($(window).width());
			var dist=245;
		}
		else{*/
			var dist=(($(window).width()-1024)/2);
		//}	
		//alert(dist);

	//	else{
			//dist=445;
	//	}
		//(window.innerWidth-964)+445;

		//alert(window.innerWidth+" . "+dist);
	$(".map_spain li span").each(function(i)
	{ 	
		$("#"+this.id).mouseover(function () {
			$(".map_info").css({ left: ""+($("#"+this.id).offset().left-dist)+"px", top:""+($("#"+this.id).offset().top-119)+"px"});
			$(".map_info").html('<p>'+ $("#"+this.id).html() +'</p>');
				if ($(".map_info").is(":hidden")){						
					$(".map_info").show();
				}
		    return false;
		});
		
		$("#"+this.id).mouseout(function () {
			$(".map_info").css({ left: ""+($("#"+this.id).offset().left-dist)+"px", top:""+($("#"+this.id).offset().top-119)+"px"});
			$(".map_info").html('<p>'+ $("#"+this.id).html() +'</p>');
				if ($(".map_info").is(":visible")){						
					$(".map_info").hide();
				}
		    return false;
		});
    });	
	
	$(".map_europe li span").each(function(i)
	{ 	
		$("#"+this.id).mouseover(function () {
			var posicionm = $("#"+this.id).offset();
			$(".map_info_eur").css({ left: ""+(posicionm.left-dist)+"px", top:""+(posicionm.top-119)+"px"});
			$(".map_info_eur").html('<p>'+ $("#"+this.id).text() +'</p>');
				if ($(".map_info_eur").is(":hidden")){						
					$(".map_info_eur").show();
				}
		    return false;
		});
		
	$("#"+this.id).mouseout(function () {
			var posicionm = $("#"+this.id).offset();
			$(".map_info_eur").css({ left: ""+(posicionm.left-dist)+"px", top:""+(posicionm.top-119)+"px"});
			$(".map_info_eur").html('<p>'+ $("#"+this.id).text() +'</p>');
				if ($(".map_info_eur").is(":visible")){						
					$(".map_info_eur").hide();
				}
		    return false;
		});
	});	
	
	//mostrar/ocultar puntos del mapa (fabricas)
	$('#ver_f').click(function() {
		  $('.fabrica').fadeToggle(50,function() {
		    $('#ver_f').html(
		      $(this).is(':visible') ? "[Ocultar]" : "[Mostrar]"
		    );
		    
		  });
		  return false; 
	});

	
	//mostrar/ocultar puntos del mapa (delegaciones)
	$('#ver_d').click(function() {
		  $('.deleg').fadeToggle(50,function() {
		    $('#ver_d').html(
		      $(this).is(':visible') ? "[Ocultar]" : "[Mostrar]"
		    );
		    
		  });
		  return false; 
	});
	
		
	//mostrar/ocultar puntos del mapa (distribuidores)
	$('#ver_di').click(function() {
		  $('.distrib').fadeToggle(50,function() {
		    $('#ver_di').html(
		      $(this).is(':visible') ? "[Ocultar]" : "[Mostrar]"
		    );
		    
		  });
		  return false; 
	});
	
//posicion de los puntos del mapa y coordenadas. España

$("#pnt3").css({ left: "256px", top:"270px"});
$('#pnt3').hover(function(){$(this).toggleClass('del_hover');});
$('#pnt1').css({ left: "310px", top:"170px"});
$('#pnt1').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt4").css({ left: "175px", top:"100px"});
$('#pnt4').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt5").css({ left: "192px", top:"160px"});	
$('#pnt5').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt6").css({ left: "145px", top:"215px"});
$('#pnt6').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt8").css({ left: "433px", top:"63px"});
$('#pnt8').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt9").css({ left: "433px", top:"70px"});
$('#pnt9').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt10").css({ left: "423px", top:"73px"});
$('#pnt10').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt11").css({ left: "423px", top:"53px"});
$('#pnt11').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt12").css({ left: "423px", top:"63px"});
$('#pnt12').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt13").css({ left: "440px", top:"100px"});
$('#pnt13').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt14").css({ left: "480px", top:"120px"});
$('#pnt14').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt15").css({ left: "523px", top:"95px"});
$('#pnt15').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt16").css({ left: "515px", top:"105px"});
$('#pnt16').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt17").css({ left: "385px", top:"30px"});
$('#pnt17').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt18").css({ left: "350px", top:"30px"});
$('#pnt18').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt19").css({ left: "310px", top:"28px"});
$('#pnt19').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt20").css({ left: "193px", top:"12px"});
$('#pnt20').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt21").css({ left: "550px", top:"192px"});
$('#pnt21').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt22").css({ left: "582px", top:"178px"});
$('#pnt22').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt23").css({ left: "540px", top:"192px"});
$('#pnt23').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt24").css({ left: "443px", top:"238px"});
$('#pnt24').hover(function(){$(this).toggleClass('fab_hover');});
$("#pnt25").css({ left: "433px", top:"238px"});
$('#pnt25').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt26").css({ left: "440px", top:"218px"});
$('#pnt26').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt27").css({ left: "440px", top:"176px"});
$('#pnt27').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt28").css({ left: "438px", top:"200px"});
$('#pnt28').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt29").css({ left: "415px", top:"270px"});
$('#pnt29').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt30").css({ left: "380px", top:"310px"});
$('#pnt30').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt31").css({ left: "310px", top:"310px"});
$('#pnt31').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt32").css({ left: "247px", top:"318px"});
$('#pnt32').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt33").css({ left: "295px", top:"250px"});
$('#pnt33').hover(function(){$(this).toggleClass('del_hover');});
/*$("#pnt34").css({ left: "235px", top:"210px"});*/
$("#pnt35").css({ left: "315px", top:"155px"});
$('#pnt35').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt36").css({ left: "323px", top:"137px"});
$('#pnt36').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt37").css({ left: "253px", top:"125px"});
$('#pnt37').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt38").css({ left: "304px", top:"104px"});
$('#pnt38').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt39").css({ left: "309px", top:"68px"});
$('#pnt39').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt40").css({ left: "354px", top:"72px"});
$('#pnt40').hover(function(){$(this).toggleClass('del_hover');});
$("#pnt41").css({ left: "164px", top:"72px"});
$('#pnt41').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt42").css({ left: "197px", top:"78px"});
$('#pnt42').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt43").css({ left: "257px", top:"18px"});
$('#pnt43').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt44").css({ left: "270px", top:"48px"});
$('#pnt44').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt45").css({ left: "360px", top:"30px"});
$('#pnt45').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt46").css({ left: "363px", top:"50px"});
$('#pnt46').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt47").css({ left: "320px", top:"310px"});
$('#pnt47').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt48").css({ left: "345px", top:"285px"});
$('#pnt48').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt49").css({ left: "360px", top:"170px"});
$('#pnt49').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt50").css({ left: "355px", top:"100px"});
$('#pnt50').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt51").css({ left: "365px", top:"205px"});
$('#pnt51').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt52").css({ left: "437px", top:"209px"});
$('#pnt52').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt53").css({ left: "407px", top:"176px"});
$('#pnt53').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt54").css({ left: "270px", top:"356px"});
$('#pnt54').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt55").css({ left: "266px", top:"15px"});
$('#pnt55').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt56").css({ left: "535px", top:"80px"});
$('#pnt56').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt57").css({ left: "330px", top:"205px"});
$('#pnt57').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt58").css({ left: "310px", top:"76px"});
$('#pnt58').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt59").css({ left: "496px", top:"220px"});
$('#pnt59').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt60").css({ left: "295px", top:"175px"});
$('#pnt60').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt61").css({ left: "490px", top:"100px"});
$('#pnt61').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt63").css({ left: "310px", top:"120px"});
$('#pnt63').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt64").css({ left: "335px", top:"120px"});
$('#pnt64').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt65").css({ left: "315px", top:"145px"});
$('#pnt65').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt66").css({ left: "490px", top:"120px"});
$('#pnt66').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt67").css({ left: "410px", top:"278px"});
$('#pnt67').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt68").css({ left: "245px", top:"210px"});
$('#pnt68').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt69").css({ left: "350px", top:"300px"});
$('#pnt69').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt70").css({ left: "350px", top:"375px"});
$('#pnt70').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt71").css({ left: "138px", top:"355px"});
$('#pnt71').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt72").css({ left: "453px", top:"80px"});
$('#pnt72').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt73").css({ left: "525px", top:"105px"});
$('#pnt73').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt74").css({ left: "496px", top:"234px"});
$('#pnt74').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt75").css({ left: "318px", top:"68px"});
$('#pnt75').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt76").css({ left: "318px", top:"203px"});
$('#pnt76').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt77").css({ left: "525px", top:"78px"});
$('#pnt77').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt78").css({ left: "335px", top:"280px"});
$('#pnt78').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt79").css({ left: "260px", top:"55px"});
$('#pnt79').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt80").css({ left: "230px", top:"48px"});
$('#pnt80').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt81").css({ left: "480px", top:"90px"});
$('#pnt81').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt82").css({ left: "301px", top:"69px"});
$('#pnt82').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt83").css({ left: "322px", top:"116px"});
$('#pnt83').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt84").css({ left: "285px", top:"170px"});
$('#pnt84').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt85").css({ left: "220px", top:"297px"});
$('#pnt85').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt86").css({ left: "232px", top:"137px"});
$('#pnt86').hover(function(){$(this).toggleClass('dis_hover');});
$("#pnt87").css({ left: "238px", top:"197px"});
$('#pnt87').hover(function(){$(this).toggleClass('dis_hover');});

	
//posicion de los puntos del mapa y coordenadas. Mundo
$("#pnt1_eu").css({ left: "130px", top:"175px"});
$('#pnt1_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt2_eu").css({ left: "144px", top:"185px"});
$('#pnt2_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt3_eu").css({ left: "509px", top:"160px"});
$('#pnt3_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt4_eu").css({ left: "290px", top:"100px"});
$('#pnt4_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt5_eu").css({ left: "300px", top:"104px"});
$('#pnt5_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt6_eu").css({ left: "315px", top:"99px"});
$('#pnt6_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt7_eu").css({ left: "289px", top:"115px"});
$('#pnt7_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt8_eu").css({ left: "273px", top:"118px"});
$('#pnt8_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt9_eu").css({ left: "264px", top:"123px"});
$('#pnt9_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt10_eu").css({ left: "280px", top:"128px"});
$('#pnt10_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt11_eu").css({ left: "280px", top:"117px"});
$('#pnt11_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt12_eu").css({ left: "300px", top:"123px"});
$('#pnt12_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt13_eu").css({ left: "295px", top:"135px"});
$('#pnt13_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt14_eu").css({ left: "290px", top:"148px"});
$('#pnt14_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt15_eu").css({ left: "280px", top:"128px"});
$('#pnt15_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt16_eu").css({ left: "154px", top:"189px"});
$('#pnt16_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt17_eu").css({ left: "300px", top:"151px"});
$('#pnt17_eu').hover(function(){$(this).toggleClass('eur_hover');});
$("#pnt18_eu").css({ left: "262px", top:"148px"});
$('#pnt18_eu').hover(function(){$(this).toggleClass('eur_hover');});
}