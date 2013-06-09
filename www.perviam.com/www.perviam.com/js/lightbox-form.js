

function gradient(id, level)
{
	var box = document.getElementById(id);
	box.style.opacity = level;
	box.style.MozOpacity = level;
	box.style.KhtmlOpacity = level;
	box.style.filter = "alpha(opacity=" + level * 100 + ")";
	box.style.display="block";
	return;
}


function fadein(id) 
{
	var level = 0;
	while(level <= 1)
	{
		setTimeout( "gradient('" + id + "'," + level + ")", (level* 1000) + 10);
		level += 0.01;
	}
}


// Open the lightbox


function openboxform(formtitle, fadin)
{
  var box = document.getElementById('boxform'); 
  document.getElementById('shadowing').style.display='block';
  
  if(fadin)
  {
	 gradient("boxform", 0);
	 fadein("boxform");
  }
  else
  { 	
    box.style.display='block';
  }  	
}


function openboxsupport(formtitle, fadin)
{
  var box = document.getElementById('boxsupport'); 
  document.getElementById('shadowing').style.display='block';
  
  if(fadin)
  {
	 gradient("boxsupport", 0);
	 fadein("boxsupport");
  }
  else
  { 	
    box.style.display='block';
  }  	
}


// Close the lightbox

function closebox()
{
   document.getElementById('boxform').style.display='none';
   document.getElementById('boxsupport').style.display='none';
   document.getElementById('shadowing').style.display='none';
}



