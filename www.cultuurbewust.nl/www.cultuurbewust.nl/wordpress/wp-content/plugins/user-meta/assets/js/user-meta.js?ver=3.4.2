
function umNewField( element ){ 
    newID = parseInt( jQuery("#last_id").val() ) + 1;
    arg = 'id=' + newID + '&field_type=' + jQuery(element).attr('field_type');
    pfAjaxCall( element, 'um_add_field', arg, function(data){
        jQuery("#um_fields_container").append( data );        
        jQuery("#last_id").val( newID );
    });
}

function umNewForm( element ){    
    newID = parseInt( jQuery("#form_count").val() ) + 1;
    pfAjaxCall( element, 'um_add_form', 'id='+newID, function(data){
        jQuery("#um_fields_container").append( data );        
        jQuery("#form_count").val( newID );
        
        jQuery('.um_dropme').sortable({
            connectWith: '.um_dropme',
            cursor: 'pointer'
        }).droppable({
            accept: '.button',
            activeClass: 'um_highlight'
        });                 
    });
}

function umUpdateField( element ){    
    if( !jQuery(element).validationEngine("validate") ) return;
    
    bindElement = jQuery(".pf_save_button");
    bindElement.parent().children(".pf_ajax_result").remove();
    arg = jQuery( element ).serialize();
    pfAjaxCall( bindElement, 'um_update_field', arg, function(data){
        bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");        
    });
}

function umUpdateForms( element ){    
    if( !jQuery(element).validationEngine("validate") ) return;
    
    jQuery(".um_selected_fields").each(function(index){
        var length = jQuery(this).children(".button").size();
        n = index + 1;
        jQuery("#field_count_" + n).val( length ); 
        
    });

    bindElement = jQuery(".pf_save_button");
    bindElement.parent().children(".pf_ajax_result").remove();
    arg = jQuery( element ).serialize();
    pfAjaxCall( bindElement, 'um_update_forms', arg, function(data){
        bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");
    });
}

function umAuthorizePro( element ){
    if( !jQuery(element).validationEngine("validate") ) return;
    
    arg = jQuery( element ).serialize();
    bindElement = jQuery( "#authorize_pro" );
    pfAjaxCall( bindElement, 'um_update_settings', arg, function(data){
        bindElement.parent().children(".pf_ajax_result").remove();
        bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");
    });    
}

function umUpdateSettings( element ){      
    bindElement = jQuery("#update_settings");
    
    jQuery(".um_selected_fields").each(function(index){
        var length = jQuery(this).children(".button").size();
        n = index + 1;
        jQuery("#field_count_" + n).val( length ); 
        
    });    
    
    arg = jQuery( element ).serialize();
    pfAjaxCall( bindElement, 'um_update_settings', arg, function(data){
        bindElement.parent().children(".pf_ajax_result").remove();
        bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");
    });
}

function umChangeField( element, fieldID){   
    arg = jQuery( "#field_" + fieldID + " *" ).serialize();
    pfAjaxCall( element, "um_change_field", arg, function(data){
        jQuery(element).parents(".meta-box-sortables").replaceWith(data);
    });
}

function umChangeFieldTitle( element ){
    title = jQuery(element).val();
    if( !title ){ title = 'Untitled Field'; }
    jQuery(element).parents(".postbox").children("h3").children(".um_admin_field_title").text(title);
}

function umChangeFormTitle( element ){
    title = jQuery(element).val();
    if( !title ){ title = 'Untitled Form'; }
    jQuery(element).parents(".postbox").children("h3").text(title);
}

function umInsertUser( element ){
    if( !jQuery(element).validationEngine("validate") ) return;
    
    bindElement = jQuery("#insert_user");
    bindElement.parent().children(".pf_ajax_result").remove();
    arg = jQuery( element ).serialize();
    pfAjaxCall( bindElement, 'um_insert_user', arg, function(data){
        if( jQuery(data).attr('action_type') == 'registration' )
            jQuery(element).replaceWith(data);
        else
            bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");        
    });    
}

function umPageNavi( pageID, isNext ){
    var haveError = false;
    
    if( isNext ){
        checkingPage = parseInt(pageID) - 1;
        jQuery("#um_page_segment_" + checkingPage + " .um_input").each(function(index){
            id = jQuery(this).attr("id");
            error = jQuery("#um_user_form").validationEngine( "validateField", "#" + id );
            if( error )
                haveError = true;
        });
        
        // Checking every um_unique class for error. (validateField not working for ajax)
        jQuery("#um_page_segment_" + checkingPage + " .um_unique").each(function(index){
            id = jQuery(this).attr("id");
            value = jQuery(this).attr("value");
        	jQuery.ajax({
        		type: "post",
                url: ajaxurl,
                //dataType: "json",
                async: false,
                data: "action=um_validate_unique_field&customCheck=ok&fieldId="+id+"&fieldValue=" + value,
        		success: function( data ){
                    if( data == "error" )
                        haveError = data;
        		}
        	});  
        });               
    }
    
    if( haveError ) return false;
    
    jQuery(".um_page_segment").hide();
    jQuery("#um_page_segment_" + pageID ).fadeIn('slow');
}

function umFileUploader( uploadScript ){
    jQuery(".um_file_uploader_field").each(function(index){
        var fieldID = jQuery(this).attr("id");
        allowedExtensions = jQuery(this).attr("extension");
        maxSize = jQuery(this).attr("maxsize")
        if( !allowedExtensions )
            allowedExtensions = "jpg,jpeg,png,gif";
        if( !maxSize )
            maxSize = 1 * 1024 * 1024;            
        
        var uploader = new qq.FileUploader({
            // pass the dom node (ex. $(selector)[0] for jQuery users)
            element: document.getElementById(fieldID),
            // path to server-side upload script
            action: uploadScript,
            params: {"field_name":jQuery(this).attr("name"), field_id:fieldID, "pf_nonce":pf_nonce },
            allowedExtensions: allowedExtensions.split(","),
            sizeLimit: maxSize,
            onComplete: function(id, fileName, responseJSON){
                if( !responseJSON.success ) return;
                //console.log(responseJSON);
                handle = jQuery('#'+fieldID);
                arg = 'field_name=' + responseJSON.field_name + '&filepath=' + responseJSON.filepath + '&field_id=' + fieldID;

                // Check if it is used by User Import Upload
                if( responseJSON.field_name == 'csv_upload_user_import' ){
                    arg = arg + '&step=one';
                    pfAjaxCall( handle, 'um_user_import', arg, function(data){
                        //jQuery('#'+fieldID+'_result').empty().append( data );   
                        jQuery(handle).parents(".meta-box-sortables").replaceWith(data);    
                    });                    
                }else{
                    pfAjaxCall( handle, 'um_show_uploaded_file', arg, function(data){
                        jQuery('#'+fieldID+'_result').empty().append( data );       
                    });                    
                }                
                
                

            }
        });         
    });
}


function umShowImage(element){
    url = jQuery(element).val();
    if(!url){
        jQuery(element).parents(".um_field_container").children(".um_field_result").empty();
        return;
    }
    
    arg = 'showimage=true&imageurl=' + url;
    pfAjaxCall( element, 'um_show_uploaded_file', arg, function(data){
        jQuery(element).parents(".um_field_container").children(".um_field_result").empty().append(data);     
    });
}
  
  
function umRemoveFile( element ){
    if( confirm("Confirm to remove? ") ){
        fieldName = jQuery(element).attr("name");
        jQuery(element).parents(".um_field_result").empty().append("<input type='hidden' name='"+fieldName+"' value='' />");         
    }   
}    

function umUpgradeFromPrevious(element){
    arg = 'typess=xx';
    pfAjaxCall( element, 'um_common_request', arg, function(data){
        jQuery(element).parents(".error").remove();    
    }); 
}

function umLogin( element ){
    //if( !jQuery(element).validationEngine("validate") ) return;
        
    arg = jQuery( element ).serialize();
    bindElement = jQuery(element);
    bindElement.parent().children(".pf_ajax_result").remove();
    pfAjaxCall( bindElement, 'um_login', arg, function(data){
        if( jQuery(data).attr('status') == 'success' ){
            jQuery(element).replaceWith(data);
            redirection = jQuery(data).attr('redirect_to');
            if( redirection )
                window.location.href = redirection;
        }
        else
            bindElement.after("<div class='pf_ajax_result'>"+data+"</div>");
    });      
}

function umLogout( element ){
    arg = 'action_type=logout';
    
    pfAjaxCall( element, 'um_login', arg, function(data){
        //alert(data);
        //jQuery("#" + jQuery() )
        jQuery(element).after(data);
        //jQuery(element).parents(".error").remove();    
    });    
}

// Get Pro Message in admin section
function umGetProMessage( element ){
    alert( user_meta.get_pro_link );
}

// Toggle custom field in Admin Import Page
function umToggleCustomField( element ){
    if( jQuery(element).val() == 'custom_field' )
        jQuery(element).parent().children(".um_custom_field").fadeIn();
    else
        jQuery(element).parent().children(".um_custom_field").fadeOut();
}

var umAjaxRequest;

function umUserImportDialog( element ){
    jQuery( "#import_user_dialog" ).html( '<center>' + user_meta.please_wait + '</center>' );
    jQuery( "#dialog:ui-dialog" ).dialog( "destroy" );
	jQuery( "#import_user_dialog" ).dialog({
		modal: true,
        beforeClose: function(event, ui) {
            umAjaxRequest.abort();
            jQuery(".pf_loading").remove();
        },
		buttons: {
			Cancel: function() {
				jQuery( this ).dialog( "close" );
			}
		}
	});   
    umUserImport( element, 0, 1 );  
}

function umUserImport( element, file_pointer, init ){
    arg = jQuery( element ).serialize();    
    arg = arg + '&step=import&file_pointer=' + file_pointer;
    if( init ) arg = arg + '&init=1';
    pfAjaxCall( element, 'um_user_import', arg, function(data){
        jQuery( "#import_user_dialog" ).html( data );
        if( jQuery(data).attr('do_loop') == 'do_loop' ){
            umUserImport( element, jQuery(data).attr('file_pointer') );
        } 
    });
}

function copyFormData( element ){
    data = jQuery(element).parents();  
    //console.log(data);
}