function pfToggleMetaBox( toggleIcon ){
    jQuery(toggleIcon).parents('.postbox').children('.inside').toggle();
}

function pfRemoveMetaBox( removeIcon ){
    if( confirm('Confirm to remove?') ){
        jQuery(removeIcon).parents('.postbox').parents('.meta-box-sortables').remove();
    }    
}

var umAjaxRequest;

//element: binding event
//action: wp action
//arg: more argument, serailze data
//handle: callback fucntion, which hold success data
function pfAjaxCall( element, action, arg, handle){
    if(action) data = "action=" + action;
    if(arg)    data = arg + "&action=" + action;
    if(arg && !action) data = arg;
    data = data + "&pf_nonce=" + pf_nonce + "&is_ajax=true";
    
    //if( typeof(ajaxurl) == 'undefined' ) ajaxurl = front.ajaxurl;

	umAjaxRequest = jQuery.ajax({
		type: "post",
        url: ajaxurl,
        data: data,
		beforeSend: function() { jQuery("<span class='pf_loading'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>").insertAfter(element); },
		success: function( data ){
            jQuery(".pf_loading").remove();
            handle(data);
		}
	});    
}

function pfAjaxRequest( element ){  
    bindElement = jQuery(element);
    bindElement.parent().children(".pf_ajax_result").remove();
    arg = jQuery( element ).serialize();
    pfAjaxCall( bindElement, 'pf_ajax_request', arg, function(data){
        bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");        
    });    
     
}