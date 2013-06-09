// obtain GEO country
var geoCountry = 'NL';

// if no CoC, default to US
var CoC = (window.brash_logo_country) ? window.brash_logo_country : 'US';

if (!geoCountry){
  geoCountry = CoC;
} else {
  if(geoCountry == 'GB'){
	geoCountry = 'UK';
  }
}

acceptedCountries = new Array('AT', 'CH', 'DE', 'JP', 'UK', 'FR', 'AU');
IamworkingWith = in_array(geoCountry, acceptedCountries) ?  geoCountry : CoC;


// Glam Logo Modules

var logoMIDArray = new Array();
logoMIDArray['BPN'] = '208150357';
logoMIDArray['BEnter'] = '208150399';
logoMIDArray['GEnter'] = '5000011510'; //get it from Annie 8/11/2010
logoMIDArray['BLife'] = '208150398';
logoMIDArray['BTech'] = '208150396';
logoMIDArray['GlamBeacon'] = '220709757';
logoMIDArray['BSSPGL'] = '208150396';

var logoURLArray = new Array();
logoURLArray['BPN'] =       'http://www.brash.com';
logoURLArray['BEnter'] =    'http://www.brash.com';
logoURLArray['GEnter'] =    'http://www.brash.com';
logoURLArray['BLife'] =     'http://www.brash.com';
logoURLArray['BTech'] =     'http://www.brash.com';
logoURLArray['DE'] = 'http://www.brash.de';
logoURLArray['JP'] = 'http://www.brash.jp';
logoURLArray['UK'] = 'http://uk.brash.com/';
logoURLArray['FR'] = 'http://www.brash.com';
logoURLArray['AU'] = 'http://www.brash.com';
logoURLArray['BSSPGL'] = 'http://www.brash.com';




// glam logo module callback function
function GlamLogoCallback(request_info)
{   
  // clickThrough
  if (IamworkingWith){
  	switch (IamworkingWith) {
  		case 'AT':
  			logoClickUrl = logoURLArray['DE'];
  			break;
  		case 'CH':
  			logoClickUrl = logoURLArray['DE'];
  			break;
  		case 'DE':
  			logoClickUrl = logoURLArray['DE'];
  			break;				
		case 'JP':
  			logoClickUrl = logoURLArray['JP'];	
  			break;	
		case 'UK':
  			logoClickUrl = logoURLArray['UK'];	
  			break;
		case 'FR':
  			logoClickUrl = logoURLArray['FR'];	
  			break;
		case 'AU':
  			logoClickUrl = logoURLArray['AU'];	
  			break;				
  		default:
  			logoClickUrl = logoURLArray[IamworkingWith];
  			break;
  	}
  } else logoClickUrl = logoURLArray[IamworkingWith];
  
   // German publishers
   logoPath = (IamworkingWith == 'DE') ? '_DE' : '';
   
   // grayscale flag 
   if(window.color_or_grayscale_flag == undefined){
		flag = '';
   } else {
		flag = window.color_or_grayscale_flag;
   }
   
   logoColor = (flag == '_gs') ? window.brash_gs_logo_color: window.brash_logo_color;
   	
   // #17091 - for US,UK,DE and JP
	if (IamworkingWith != 'FR'){ 	  
   		document.write('<a href="'+ request_info['ad_click_url'] + logoClickUrl + '" target="_blank"><img src="https://sfileserver.glam.com/app/site/images/blog/' + window.brash_logo_type + logoPath + '_' + window.brash_logo_size + '_' + logoColor + flag + '.gif" border="0"></a>');
	} else { 
		document.write('<a href="'+ request_info['ad_click_url'] + logoClickUrl + '" target="_blank"><img src="https://sfileserver.glam.com/app/site/images/blog/' + window.brash_logo_type + logoPath + '_' + window.brash_logo_size + '_' + window.brash_logo_color + '.gif" border="0"></a>');
	}

   if (geoCountry && geoCountry != 'DE') {
	// Comscore beacon
	if (!window.glam_comscore_beacon && window.GlamGetAffiliateInfo && GlamGetAffiliateInfo('cs_beacon') != 'disable' ) {
		document.write('<scr'+'ipt src="'+ (document.location.protocol == "https:" ? "https://sb" : "http://b") + '.scorecardresearch.com/beacon.js"' +'"></scr'+'ipt>');
		document.write('<scr'+'ipt src="'+ (document.location.protocol == "https:" ? "https" : "http") + '://www8.glam.com/js/widgets/glam_comscore.js"></scr'+'ipt>');
		window.glam_comscore_beacon = true;
	}      
   }

   if (window.GlamGetAffiliateInfo && GlamGetAffiliateInfo('cs_ganalytics') != 'disable' ) {
	document.write(unescape("%3Cscript src='http://www8.glam.com/js/widgets/google-analytics/ga.js' type='text/javascript'%3E%3C/script%3E"));

	document.write('<scr' + 'ipt type="text/javascript">');
	document.write('glamtracker = glam_gat._createTracker(\'UA-2024191-60\');');
	document.write('glamtracker._setNamespace(\'glam\');');
	document.write('glamtracker._setCustomVar(1,\'affiliate_id\',\''+window.glam_affiliate_id+'\',3);');
	document.write('glamtracker._setCustomVar(2,\'country\',\''+window.glam_affiliate_info['country']+'\',3);');
	document.write('glamtracker._setCustomVar(3,\'network\',\''+window.glam_affiliate_info['network']+'\',3);');	
	document.write('glamtracker._setCustomVar(4,\'vertical\',\''+window.glam_affiliate_info['vpec']+'\',3);');	
	document.write('glamtracker._setCustomVar(5,\'primary_channel\',\''+window.glam_affiliate_info['pec']+'\',3);');		
	document.write('glamtracker._trackPageview();');
	document.write('<' + '/sc' + 'ript>');
  }

}

			  
// Information required for dart targeting and callback
// 235882: brash logo for german site is not displaying
if (window.brash_logo_country && window.brash_logo_type == 'BTech' && brash_logo_country != 'FR' && brash_logo_country != 'DE')
window.brash_logo_type = 'BLife';

window.brash_module_id       = logoMIDArray[window.brash_logo_type];
window.brash_module_function = 'GlamLogoCallback';
document.write('<scr' + 
               'ipt type="text/javascript" language="JavaScript" src="'+ (document.location.protocol == "https:" ? "https" : "http") + '://www8.glam.com/js/brash_widget.js">' +
               '<' + '/sc' + 'ript>');			  
			  
			   
function in_array(string, array) {
   for (i = 0; i < array.length; i++){
	if(array[i] == string){ 
	   return true;
	}
   }
   return false;
}			   
