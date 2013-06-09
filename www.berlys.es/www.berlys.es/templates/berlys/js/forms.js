function form_registro(){

	 
	 //Formulario de registro
	 $('#jform_usertype').change(function(){
		 if($(this).val() == 9){
			$('#jform_profile_address1').css({ display: "none"  });
			$('#jform_profile_address1').removeClass('required');
			$('#jform_profile_address1').attr('value', '');
			$('#jform_profile_address1-lbl').css({ display: "none"  });
			$('#jform_profile_address1-lbl .optional').css({ display: "none"  });
			$('#jform_profile_website').css({ display: "none"  });
			$('#jform_profile_website').attr('value', '');
			$('#jform_profile_website-lbl').css({ display: "none"  });
			$('#jform_profile_website-lbl .optional').css({ display: "none"  });
			$('#jform_profile_cod_cliente').css({ display: "none"  });
			$('#jform_profile_cod_cliente').attr('value', '');
			$('#jform_profile_cod_cliente').removeClass('required');
			$('#jform_profile_cod_cliente-lbl').css({ display: "none"  });
		 }
		 
		 else{
			 if($(this).val() == 10){
				$('#jform_profile_address1').css({ display: "block"  });
				$('#jform_profile_address1').addClass('required');
				$('#jform_profile_address1').attr('value', '');
				$('#jform_profile_address1-lbl').css({ display: "block"  });
				$('#jform_profile_address1-lbl').html('Raz&oacute;n social<span class="star">&nbsp;*</span>');
				$('#jform_profile_website').css({ display: "block"  });
				$('#jform_profile_website-lbl').css({ display: "block"  });
				$('#jform_profile_cod_cliente').css({ display: "block"  });
				$('#jform_profile_cod_cliente').addClass('required');
				$('#jform_profile_cod_cliente-lbl').css({ display: "block"  });
				$('#jform_profile_cod_cliente-lbl').html('C&oacute;digo de cliente<span class="star">&nbsp;*</span>');
			 }
			 else
			 {
				$('#jform_profile_address1').css({ display: "block"  });
				$('#jform_profile_address1').addClass('required');
				$('#jform_profile_address1').attr('value', '');
				$('#jform_profile_address1-lbl').css({ display: "block"  });
				$('#jform_profile_address1-lbl').html('Medio de comunicaci&oacute;n<span class="star">&nbsp;*</span>');
				$('#jform_profile_website').css({ display: "none"  });
				$('#jform_profile_website').attr('value', '');
				$('#jform_profile_website-lbl').css({ display: "none"  }); 
				$('#jform_profile_cod_cliente').css({ display: "none"  });
				$('#jform_profile_cod_cliente').attr('value', '');
				$('#jform_profile_cod_cliente').removeClass('required');
				$('#jform_profile_cod_cliente-lbl').css({ display: "none"  });
			 } 
		 }
		 $('#jform_name-lbl').css({ display: "block"  });
		 $('#jform_name').css({ display: "block"  });
		 $('#jform_username-lbl').css({ display: "block"  });
		 $('#jform_username').css({ display: "block"  });
		 $('#jform_password1-lbl').css({ display: "block"  });
		 $('#jform_password1').css({ display: "block"  });
		 $('#jform_password2-lbl').css({ display: "block"  });
		 $('#jform_password2').css({ display: "block"  });
		 $('#jform_email1-lbl').css({ display: "block"  });
		 $('#jform_email1').css({ display: "block"  });
		 $('#jform_email2-lbl').css({ display: "block"  });
		 $('#jform_email2').css({ display: "block"  });
		 $('#jform_profile_address2-lbl').css({ display: "block"  });
		 $('#jform_profile_address2').css({ display: "block"  });
		 $('#jform_profile_city-lbl').css({ display: "block"  });
		 $('#jform_profile_city').css({ display: "block"  });
		 $('#jform_profile_region-lbl').css({ display: "block"  });
		 $('#jform_profile_region').css({ display: "block"  });
		 $('#jform_profile_country-lbl').css({ display: "block"  });
		 $('#jform_profile_country').css({ display: "block"  });
		 $('#jform_profile_postal_code-lbl').css({ display: "block"  });
		 $('#jform_profile_postal_code').css({ display: "block"  });
		 $('#jform_profile_phone-lbl').css({ display: "block"  });
		 $('#jform_profile_phone').css({ display: "block"  });
		 $('#jform_profile_tos-lbl').css({ display: "block"  });
		 $('#jform_profile_tos').css({ display: "block"  });
		 $('#member-registration div').css({ display: "block"  });
		 return false;
		 }); 
	
}