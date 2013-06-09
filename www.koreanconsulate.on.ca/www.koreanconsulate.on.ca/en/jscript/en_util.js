		function openVisa() { 
		window.open('/crss/visa.php?ln=en','_blank','width=400,height=450,top=200,left=200'); 
		//팝업창의 주소, 같은 도메인에 있어야 한다. 
		};

		function openpop2(w,h,dest,x,y) { 
			var mywidth = w;
			var myheight = h;
			var myx = x;
			var myy = y;
			centerX = (screen.width - mywidth)/2;
			centerY = (screen.height - myheight)/2;
			neww = window.open(dest,'_blank','width='+mywidth+',height='+myheight+',left='+myx+',top='+myy); 
	};

		
		function pcheck(){
			pss = document.getElementById("pselect").value;	
			if (pss== 'o'){
				alert("Redirect page to Website of Embassy of the Republic of Korea in Ottawa");
				location.href ="http://can-ottawa.mofat.go.kr/eng/am/can-ottawa/mission/locations/index.jsp";
			}else if (pss== 't'){
				location.href ="http://www.koreanconsulate.on.ca/en/?mnu=a01b01";
			}else if (pss== 'm'){
				alert("Redirect page to Website of Korean Consulate General in Montreal");
				location.href ="http://can-montreal.mofat.go.kr/eng/am/can-montreal/main/index.jsp";
			}else if (pss== 'v'){
				alert("Redirect page to Website of Korean Consulate General in Vancouver");
				location.href ="http://can-vancouver.mofat.go.kr/eng/am/can-vancouver/mission/locations/index.jsp";
			}
		};

		function chkregion(){
			pcd = document.getElementById("pcode").value;
			if (pcd.charAt(0) =='L' || pcd.charAt(0) =='M'|| pcd.charAt(0) =='N'|| pcd.charAt(0) =='P' || pcd.charAt(0) =='R' || pcd.charAt(0) =='l'|| pcd.charAt(0) =='m'|| pcd.charAt(0) =='n'|| pcd.charAt(0) =='p' || pcd.charAt(0) =='r'  ){
				location.href ="http://www.koreanconsulate.on.ca/en/?mnu=a01b01";
			}
			if (pcd.charAt(0) =='S' || pcd.charAt(0) =='T'|| pcd.charAt(0) =='V'|| pcd.charAt(0) =='X'|| pcd.charAt(0) =='Y'|| pcd.charAt(0) =='s'|| pcd.charAt(0) =='t'|| pcd.charAt(0) =='v'|| pcd.charAt(0) =='x'|| pcd.charAt(0) =='y'){
				alert("Redirect page to Website of Korean Consulate General in Vancouver");
				location.href ="http://can-vancouver.mofat.go.kr/eng/am/can-vancouver/mission/locations/index.jsp";
			}
			if (pcd.charAt(0) =='A' || pcd.charAt(0) =='B'|| pcd.charAt(0) =='C'|| pcd.charAt(0) =='E'|| pcd.charAt(0) =='G'|| pcd.charAt(0) =='H'|| pcd.charAt(0) =='J' || pcd.charAt(0) =='a' || pcd.charAt(0) =='b'|| pcd.charAt(0) =='c'|| pcd.charAt(0) =='e'|| pcd.charAt(0) =='g'|| pcd.charAt(0) =='h'|| pcd.charAt(0) =='j'){
				alert("Redirect page to Website of Korean Consulate General in Montreal");
				location.href ="http://www.koreanconsulate.qc.ca/mkoc/e_index.jsp?sid=108311";
			}
			if (pcd.charAt(0) =='K'||pcd.charAt(0) =='k'){
				if (pcd[1] == '0' ||pcd[1] == '1' ||pcd[1] == '2' ||pcd[1] == '3' || pcd[1] == '4'  ){
					alert("Redirect page to Website of Embassy of the Republic of Korea in Ottawa");
					location.href ="http://can-ottawa.mofat.go.kr/eng/am/can-ottawa/mission/locations/index.jsp";
				}else{
					location.href = "http://www.koreanconsulate.on.ca/en/?mnu=a01b01";
				}
			}
		};

		
		var myimages=new Array() // pre loading the images
		function preloadimages(){
			for (i=0;i<preloadimages.arguments.length;i++){
				myimages[i]=new Image()
				myimages[i].src=preloadimages.arguments[i]
			}
		};

		  function openMap() { 
		   window.open('krmap.php','_blank','width=750,height=530,top=230,left=200'); 
		 } ;
		preloadimages('imgs/b-1.gif','imgs/bg_top.jpg','imgs/logo.gif','imgs/diag_back.gif','imgs/diag_left.jpg','imgs/diag_left.jpg','imgs/diag_fill.jpg','imgs/diag_bot.jpg','imgs/diag_right.jpg','imgs/copy_top.gif','imgs/copy_bot.gif','imgs/copy_bg.gif','imgs/boardtitle.gif');
			

		function popimage(imagesrc)	{
			var popimage = window.open("",'Image','scrollbars=1,status=0,toolbar=no,resizable=0,location=no,menu=no,width=10,height=10'); 
			popimage.focus(); 
			popimage.document.open(); 
			popimage.document.write("<html><head><title>Image</title></head>"); 
			popimage.document.write("<sc"+"ript>\n"); 
			popimage.document.write("function resize() {\n"); 
			popimage.document.write("pic = document.popimg;\n"); 
			popimage.document.write("if (eval(pic).height) { nHeight = eval(pic).height + 62; nWidth = eval(pic).width+29; \n"); 
			popimage.document.write("  clearTimeout();\n"); 
			popimage.document.write("  self.resizeTo(nWidth, nHeight);\n"); 
			popimage.document.write("}else setTimeOut(resize(), 100);}\n"); 
			popimage.document.write("</sc"+"ript>\n"); 
			popimage.document.write('<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#FFFFFF">\n'); 
			popimage.document.write("<img border=0 onclick='self.close()' src='"+imagesrc+"' xwidth=100 xheight=9 name=popimg onload='resize();' style='cursor:hand' alt ='Click to Close Window'></a>\n"); 
			popimage.document.write("</body></html>\n"); 
			popimage.document.close(); 
		};

		function popreg(URL) {
			day = new Date();
			id = day.getTime();
			eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=no,menubar=0,resizable=0,width=500,height=400');");
		};
		function openpop(w,h,dest) { 
			var mywidth = w;
			var myheight = h;
			centerX = (screen.width - mywidth)/2;
			centerY = (screen.height - myheight)/2;
			neww = window.open(dest,'_edupop','width='+mywidth+',height='+myheight+',left='+centerX+',top='+centerY+''); 
		};
