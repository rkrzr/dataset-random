<!--
ndate=new Date();
ye=ndate.getYear();
if (navigator.appName == "Netscape" || navigator.appName == "Opera") {
   if (ye >= 100) {
      ye = ye + 1900
      if (ye < 10) {
         ye = "0" + ye
      }
   }
}
document.write("2007-");
document.write(""+ye+"");
//-->