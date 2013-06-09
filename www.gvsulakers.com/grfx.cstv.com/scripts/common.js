// DF1.1 :: domFunction 
// *****************************************************
// DOM scripting by brothercake -- http://www.brothercake.com/
// GNU Lesser General Public License -- http://www.gnu.org/licenses/lgpl.html
//******************************************************

function domFunction(f, a) {
	
	var n = 0;
	var t = setInterval(function() {
		
		var c = true;
		n++;
	
		if(typeof document.getElementsByTagName != 'undefined' && (document.getElementsByTagName('body')[0] != null || document.body != null)) {
			
			c = false;
			
			if(typeof a == 'object') {
				for(var i in a) {
					if 
					(
						(a[i] == 'id' && document.getElementById(i) == null)
						||
						(a[i] == 'tag' && document.getElementsByTagName(i).length < 1)
					) 
					{ 
						c = true;
						break; 
					}
				}
			}

			if(!c) { f(); clearInterval(t); }
		}
		
		if(n >= 60) {
			clearInterval(t);
		}
		
	}, 250);
};

