$('document').ready(function(){

    // Expandable
    $('.sys_expandable li h3').wrapInner('<a href="#na"></a>');
    //When page loads...
    $('.sys_expandable div.sys_section').hide();
    //$('.sys_expandable li:eq(0)').addClass('active').show(); //Activate first tab
    //$('.sys_expandable .sys_section:eq(0)').show(); //Show first tab content
    //OnClick
    $('.sys_expandable li h3 a').click(function(){
        
        if( $(this).parent().parent().hasClass('active') ){
            $(this).parent().parent().removeClass('active').find('div.sys_section').slideUp(200);        
        } else {
            $(this).parent().parent().addClass('active').find('div.sys_section').slideDown(200);
        }

    });

}); // end doc ready
