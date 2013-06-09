$(document).ready(function() {

	var source = $("#template-navigation").html();
	var template = Handlebars.compile(source);
	var data = $.getJSON('http://iceditor.com/api/navigation/bbcgf?callback=?',    
            function(data){  
            	console.dir(data);
                $("#navigation-holder").html(template({ page : data }));  
    });
    
 
});