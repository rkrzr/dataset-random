// Functie die ervoor zorgt dat je meerdere functies tegelijk kan aanroepen bij een onload.
// addLoadListener(firstFunction);
// addLoadListener(secondFunction);
// etc etc

function addLoadListener(fn) {
	if(typeof window.addEventListener != "undefined") {
		window.addEventListener('load', fn, false);	
	}
	else if(typeof document.addEventListener != "undefined") {
		document.addEventListener("load", fn, false);
	}
	else if(typeof window.attachEvent != "undefined") {
		window.attachEvent("onload", fn);	
	}
	else {
		var oldfn = window.onload;
		if(typeof window.onload != "function") {
			window.onload = fn;
		}
		else {
			window.onload = function() {
				oldfn();
				fn();
			};
		}
	}
}

// koppeld een onclick of onmouseover aan een element (=target)
// eventType geef je zonder de 'on'
// functionref is de naam van de functie die moet worden aangeroepen. Dit is de naam zonder de ()
// capture = true: de listener wordt uitgevoerd tijdens de capture fase
// capture = false: de listener wordt uitgevoerd tijdens de bubble fase. Deze is handiger
function attachEventListener(target, eventType, functionRef, capture) {
	if(typeof target.addEventListener != "undefined") {
		target.addEventListener(eventType, functionRef, capture);
	}
	else if(typeof target.attachEvent != "undefined") {
		var functionString = eventType + functionRef;
		target["e"+functionString] = functionRef;
		
		target[functionString] = function(event) {
			if(typeof event == "undefined") {
				event = window.event;	
			}
			target["e"+functionString](event);
		};
		
		target.attachEvent("on"+eventType, target[functionString]);
	}
	else {
		eventType = "on"+eventType;
		if(typeof target[eventType] == "function") {
			var oldListener = target[eventType];
			
			target[eventType] = function() {
				oldListener();
				return functionRef();
			};
		}
		else {
			target[eventType] = functionRef;	
		}
	}
}

function detachEventListener(target, eventType, functionRef, capture) {
	if(typeof target.removeListener != "undefined") {
		target.removeEventListener(eventType, functionRef, capture);
	}
	else if(typeof target.detachEvent != "undefined") {
		var functionString = eventType + functionRef;
		target.detachEvent("on"+eventType, target[functionString]);
		target["e"+functionString] = null;
		target[functionString] = null;
	}
	else {
		target["on"+eventType] = null;
	}
}

