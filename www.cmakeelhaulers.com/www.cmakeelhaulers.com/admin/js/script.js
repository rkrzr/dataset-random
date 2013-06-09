var xmlhttp=false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
// JScript gives us Conditional compilation, we can cope with old IE versions.
// and security blocked creation of the objects.
 try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
  try {
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
   xmlhttp = false;
  }
 }
@end @*/
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest();
}

function loadFragmentInToElement(fragment_url, element_id) {
    var element = document.getElementById(element_id);
    element.innerHTML = '<em>Loading ...</em>';
    xmlhttp.open("GET", fragment_url);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            element.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}

function loadFragmentInToElementPost(fragment_url, element_id, post_info) {
    var element = document.getElementById(element_id);
    element.innerHTML = '<em>Loading ...</em>';
	http.abort;
	http.open('post',  fragment_url);
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	//http.send('arg1=val1&arg2=val2&arg3=val3');
	http.send(post_info);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            element.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}

	