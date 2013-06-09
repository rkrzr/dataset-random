function view_Pic(val,dir,alt,text) { 
	   pic = val;
	   path_to = dir;
	   alt_text = alt;
	   pic_text = text;
	   picWin = window.open('pic.html', 'Pictures', 'width=100,height=100,resizable,scrollbars=yes');
}

function view_Page(page) { 
	   pageWin = window.open(page, 'PopUpPage', 'width=780,height=500,resizable,scrollbars=yes');
}

function view_Staff(page,name) { 
	   page = page+"?name="+name;
	   pageWin = window.open(page, 'PopUpPage', 'width=780,height=500,resizable,scrollbars=yes');	   
}