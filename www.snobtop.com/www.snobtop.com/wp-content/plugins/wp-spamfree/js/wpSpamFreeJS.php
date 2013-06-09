
// WP-SpamFree 1.5.6 JS Code :: BEGIN

// Cookie Handler :: BEGIN 
function GetCookie( name ) { 
	var start = document.cookie.indexOf( name + '=' ); 
	var len = start + name.length + 1; 
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) { 
		return null; 
	} 
	if ( start == -1 ) return null; 
	var end = document.cookie.indexOf( ';', len ); 
	if ( end == -1 ) end = document.cookie.length; 
	return unescape( document.cookie.substring( len, end ) ); 
}  
	
function SetCookie( name, value, expires, path, domain, secure ) { 
	var today = new Date(); 
	today.setTime( today.getTime() ); 
	if ( expires ) { 
		expires = expires * 1000 * 60 * 60 * 24; 
	} 
	var expires_date = new Date( today.getTime() + (expires) ); 
	
	document.cookie = name+'='+escape( value ) + 
		( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString() 
		( ( path ) ? ';path=' + path : '' ) + 
		( ( domain ) ? ';domain=' + domain : '' ) + 
		( ( secure ) ? ';secure' : '' ); 
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = date.toGMTString();
    } else { 
        var expires = '';
    }
    
    document.cookie = name + '=' + value + ';' + expires + '; path=/; domain=.snobtop.com';
    
}
	
function DeleteCookie( name, path, domain ) { 
	if ( GetCookie( name ) ) document.cookie = name + '=' + 
			( ( path ) ? ';path=' + path : '') + 
			( ( domain ) ? ';domain=' + domain : '' ) + 
			';expires=Thu, 01-Jan-1970 00:00:01 GMT'; 
} 
// Cookie Handler :: END  

function commentValidation() { 
	createCookie('GpscAqFawfBofFyy','jhwFoqzBgFDeCnkk','1');
//	DeleteCookie('GpscAqFawfBofFyy', '/', '.snobtop.com');
}  

commentValidation(); 
//document.cookie = 'name=David' ;  

// WP-SpamFree 1.5.6 JS Code :: END 
