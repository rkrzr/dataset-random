// ------------------------------------------------------------------------------------------
// Copyright AspDotNetStorefront.com, 1995-2010.  All Rights Reserved.
// http://www.aspdotnetstorefront.com
// For details on this license please visit  the product homepage at the URL above.
// THE ABOVE NOTICE MUST REMAIN INTACT.
// ------------------------------------------------------------------------------------------
function Trim(TRIM_VALUE){
if(TRIM_VALUE.length < 1){
return"";
}
TRIM_VALUE = RTrim(TRIM_VALUE);
TRIM_VALUE = LTrim(TRIM_VALUE);
if(TRIM_VALUE==""){
return "";
}
else{
return TRIM_VALUE;
}
} 

function RTrim(VALUE){
var w_space = String.fromCharCode(32);
var v_length = VALUE.length;
var strTemp = "";
if(v_length < 0){
return"";
}
var iTemp = v_length -1;

while(iTemp > -1){
if(VALUE.charAt(iTemp) == w_space){
}
else{
strTemp = VALUE.substring(0,iTemp +1);
break;
}
iTemp = iTemp-1;

} 
return strTemp;

} 

function LTrim(VALUE){
var w_space = String.fromCharCode(32);
if(v_length < 1){
return"";
}
var v_length = VALUE.length;
var strTemp = "";

var iTemp = 0;

while(iTemp < v_length){
if(VALUE.charAt(iTemp) == w_space){
}
else{
strTemp = VALUE.substring(iTemp,v_length);
break;
}
iTemp = iTemp + 1;
} 
return strTemp;
} 



var digits = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var whitespace = " \t\n\r";

var decimalPointDelimiter = "."

var phoneNumberDelimiters = "()- ";

var validUSPhoneChars = digits + phoneNumberDelimiters;

var validWorldPhoneChars = digits + phoneNumberDelimiters + "+";

var SSNDelimiters = "- ";

var validSSNChars = digits + SSNDelimiters;

var digitsInSocialSecurityNumber = 9;

var digitsInUSPhoneNumber = 10;

var ZIPCodeDelimiters = "-";

var ZIPCodeDelimeter = "-"

var validZIPCodeChars = digits + ZIPCodeDelimiters

var digitsInZIPCode1 = 5
var digitsInZIPCode2 = 9

var creditCardDelimiters = " "

function isOkBag (s, bag)

{   var i;
    var returnString = "";

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) return false;
    }
    return true;
}

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

function isWhiteSpace (s)
{   var i;

    if (isEmpty(s)) return true;

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }

    return true;
}

function stripCharsInBag (s, bag)

{   var i;
    var returnString = "";

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}

function stripCharsNotInBag (s, bag)

{   var i;
    var returnString = "";

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}

function stripWhitespace (s)

{   return stripCharsInBag (s, whitespace)
}

function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}

function stripInitialWhitespace (s)

{   var i = 0;

    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;
    
    return s.substring (i, s.length);
}

function isLetter (c)
{   return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) )
}

function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}

function isLetterOrDigit (c)
{   return (isLetter(c) || isDigit(c))
}



function isInteger (s)

{   var i;

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);


    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    return true;
}

function isSignedInteger (s)

{   if (isEmpty(s)) 
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedInteger.arguments.length > 1)
            secondArg = isSignedInteger.arguments[1];

        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isInteger(s.substring(startPos, s.length), secondArg))
    }
}

function isPositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) > 0) ) );
}

function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}


function isNegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) < 0) ) );
}


function isNonpositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) <= 0) ) );
}


function isFloat (s)

{   var i;
    var seenDecimalPoint = false;

    if (isEmpty(s)) 
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);

    if (s == decimalPointDelimiter) return false;


    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);

        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!isDigit(c)) return false;
    }

    return true;
}


function isSignedFloat (s)

{   if (isEmpty(s)) 
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedFloat.arguments.length > 1)
            secondArg = isSignedFloat.arguments[1];

        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isFloat(s.substring(startPos, s.length), secondArg))
    }
}


function isAlphabetic (s)

{   var i;

    if (isEmpty(s)) 
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);

        if (!isLetter(c))
        return false;
    }

    return true;
}

function isAlphanumeric (s)

{   var i;

    if (isEmpty(s)) 
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);

        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }

    return true;
}

function reformat (s)

{   var arg;
    var sPos = 0;
    var resultString = "";

    for (var i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}

function reformatZIPCode (ZIPString)
{   if (ZIPString.length == 5) return ZIPString;
    else return (reformat (ZIPString, "", 5, "-", 4));
}

function reformatUSPhone (USPhone)
{   return (reformat (USPhone, "(", 3, ") ", 3, "-", 4))
}

function reformatSSN (SSN)
{   return (reformat (SSN, "", 3, "-", 2, "-", 4))
}

function isLeapYear(argYear) {
	return ((argYear % 4 == 0) && (argYear % 100 != 0)) || (argYear % 400 == 0) 
}

function daysInMonth(argMonth, argYear) {
	switch (Number(argMonth)) {
		case 1:		// Jan
		case 3:		// Mar
		case 5:		// May
		case 7:		// Jul
		case 8:		// Aug
		case 10:		// Oct
		case 12:		// Dec
			return 31;
			break;
		
		case 4:		// Apr
		case 6:		// Jun
		case 9:		// Sep
		case 11:		// Nov
			return 30;
			break;
		
		case 2:		// Feb
			if (isLeapYear(argYear))
				return 29
			else
				return 28
			break;
		
		default:
			return 0;
	}
}

function getDateSeparator(argDate) {
	if ((argDate.indexOf('-') > 0) && (argDate.indexOf('/') > 0))
		return ' '

	if (argDate.indexOf('-') > 0)
		return '-'
	else
		if (argDate.indexOf('/') > 0)
			return '/'
		else
			return ' '
}

function getYear(argDate) {
	var dateSep = getDateSeparator(argDate)
	
	if (dateSep == ' ')
		return 0

	if(argDate.split(dateSep).length == 3)
		return argDate.split(dateSep)[2]
	else
		return 0
}

function getMonth(argDate) {
	var dateSep = getDateSeparator(argDate)
	
	if (dateSep == ' ')
		return 0

	if(argDate.split(dateSep).length == 3)
		return argDate.split(dateSep)[0]
	else
		return 0
}

function getDay(argDate) {
	var dateSep = getDateSeparator(argDate)
	
	if (dateSep == ' ')
		return 0

	if(argDate.split(dateSep).length == 3)
		return argDate.split(dateSep)[1]
	else
		return 0
}

function isProperDay(argDay, argMonth, argYear) {
	if ((isWhiteSpace(argDay)) || (argDay == 0))
		return false

	if ((argDay > 0) && (argDay < daysInMonth(argMonth, argYear) + 1))
		return true
	else 
		return false
}

function isProperMonth(argMonth) {
	if ((isWhiteSpace(argMonth)) || (argMonth == 0))
		return false
	
	if ((argMonth > 0) && (argMonth < 13))
		return true
	else
		return false
}

function isProperYear(argYear) {
	if ((isWhiteSpace(argYear)) || (argYear.toString().length > 4) || (argYear.toString().length == 3))
		return false
	
	switch (argYear.toString().length) {
		case 1:
			if (argYear >=0 && argYear < 10)
				return true
			else
				return false
			
		case 2:
			if (argYear >=0 && argYear < 100)
				return true
			else
				return false
			
		case 4:
			if (((argYear >=1900) || (argYear >=2000)) && ((argYear < 3000) || (argYear < 2000)))
				return true
			else
				return false
		
		default:
			return false
	}
}

function isProperDate(argDate) {
	var tmpDay = getDay(argDate)
	var tmpMon = getMonth(argDate)
	var tmpYear = getYear(argDate)

	return isProperDay(tmpDay, tmpMon, tmpYear) && isProperMonth(tmpMon) && isProperYear(tmpYear)
}

function charOccurences(argString, argChar) {
	var intCt = 0

	for(var intI=0; intI < argString.length; intI++)
		if (argString.charAt(intI) == argChar)
			intCt++
	
	return intCt
}

function isProperEmail(argEmail) {
	if (charOccurences(argEmail, '@') + charOccurences(argEmail, '.') < 2)
		return false

	var atPos = argEmail.indexOf('@')
	var dotPos = argEmail.indexOf('.')

	if((atPos == 0) || (atPos == (argEmail.length - 1)))
		return false

	if((dotPos == 0) || (dotPos == (argEmail.length - 1)))
		return false
	
	var checkTLD=1;
 
	var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
 
	var emailPat=/^(.+)@(.+)$/;
 
	var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
 
 
	var validChars="\[^\\s" + specialChars + "\]";
 
 
	var quotedUser="(\"[^\"]*\")";
 
 
	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
 
 
	var atom=validChars + '+';
 
	var word="(" + atom + "|" + quotedUser + ")";
 
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
 
 
	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
 
 
 
	var matchArray=argEmail.match(emailPat);
 
	if (matchArray==null)
		{
		return false;
		}
	var user=matchArray[1];
	var domain=matchArray[2];
 
	for (i=0; i<user.length; i++)
		{
		if (user.charCodeAt(i)>127)
			{
			return false;
			}
		}
	for (i=0; i<domain.length; i++)
		{
		if (domain.charCodeAt(i)>127)
			{
			return false;
			}
		}
 
	if (user.match(userPat)==null)
		{
		return false;
	}
 
	var IPArray=domain.match(ipDomainPat);
	if (IPArray!=null)
		{
		for (var i=1;i<=4;i++)
			{
			if (IPArray[i]>255)
				{
				return false;
				}
			}
		return true;
		}
 
 
	var atomPat=new RegExp("^" + atom + "$");
	var domArr=domain.split(".");
	var len=domArr.length;
	for (i=0;i<len;i++)
		{
		if (domArr[i].search(atomPat)==-1)
			{
			return false;
			}
		}
 
	if (checkTLD && domArr[domArr.length-1].length!=2 && domArr[domArr.length-1].search(knownDomsPat)==-1)
		{
		return false;
		}
 
	if (len<2)
		{
		return false;
		}
 
	return true;
}

function isProperNumber(argNumber) {
	var numberValue = Number(argNumber)
	
	if (isNaN(numberValue)) 
		return false
	else
		return !isWhiteSpace(argNumber)
}

function isProperAlphabetic(argString) {
	var alphabets = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	for(var intI=0; intI<argString.length; intI++)
		if (alphabets.indexOf(argString.charAt(intI)) == -1)
			return false
	
	return true
}

function objectValue(argFrm, argElem) {
	var intI
	var objElem = null

	for (intI=0; intI<argFrm.length; intI++)
		if (argFrm[intI].name == argElem) 
			objElem = argFrm[intI]

	switch (objElem.type) {
		case 'text':
		case 'hidden':
		case 'password':
			return objElem.value
			break;
		
		case 'select-one':
			if (objElem.length == 0)
				return ''
			else 
				return objElem.options[objElem.selectedIndex].value
			break;
		
		case 'radio':
			for (intI=0; intI<argFrm.length; intI++)
				if (argFrm[intI].name == argElem) 
					if (argFrm[intI].checked)
						return argFrm[intI].value

			return ''
			break;
	}
}

function objectFocus(argFrm, argElem) {
	var intI
	var objElem = null
	for (intI=0; intI<argFrm.length; intI++)
		if (argFrm[intI].name == argElem) 
			objElem = argFrm[intI]
	objElem.focus();
}

function isProperZip(argZip) {
	if ((argZip.length == 5) || (argZip.length == 9))
		return isProperNumber(argZip)
	
	if (argZip.length == 10)
		return (isProperNumber(argZip.substr(0, 5)) && isProperNumber(argZip.substr(6, 4)) & (argZip.charAt(5) == '-'))
}

function isProperUSPhone (argPhone)
{
	var argPhone2 = stripCharsNotInBag(argPhone,"0123456789")
    return (isOkBag(argPhone,"01234567890 -().") && isInteger(argPhone2) && argPhone2.length==digitsInUSPhoneNumber)
}

function isProperUSSSN(argSSN) {
	var argSSN2 = stripCharsNotInBag(argSSN,"0123456789")
    return (isOkBag(argSSN,"01234567890-") && isInteger(argSSN2) && argSSN2.length==11)
}

function actionFields(argActions) {
	this.email			= (argActions.indexOf('[email]') > -1)
	this.required		= (argActions.indexOf('[req]') > -1)
	this.checkDate		= (argActions.indexOf('[date]') > -1)
	this.checkZip		= (argActions.indexOf('[zip]') > -1)
	this.checkNumber	= (argActions.indexOf('[number]') > -1)
	this.checkAlphabetic= (argActions.indexOf('[alpha]') > -1)
	this.checkUSPhone	= (argActions.indexOf('[usphone]') > -1)
	this.checkUSSSN		= (argActions.indexOf('[usssn]') > -1)

	if (argActions.indexOf('[len=') > -1) {
		this.checkLength = true

		var lenToCheck = ''
		var bolCont = true

		for (var intI=(argActions.indexOf('[len=') +  5);((intI < argActions.length) && bolCont); intI++)
			if (argActions.charAt(intI) != ']')
				lenToCheck += argActions.charAt(intI)
			else
				bolCont = false
		this.lengthToCheck = lenToCheck
	}
	else
		this.checkLength = false

	if (argActions.indexOf('[blankalert=') > -1) {
		this.blankAlert = true

		var alertString = ''
		var bolCont = true

		for (var intI=(argActions.indexOf('[blankalert=') +  12);((intI < argActions.length) && bolCont); intI++)
			if (argActions.charAt(intI) != ']')
				alertString += argActions.charAt(intI)
			else
				bolCont = false
		this.blankAlertMessage = alertString
	}
	else
		this.blankAlert = false
	
	if (argActions.indexOf('[invalidalert=') > -1) {
		this.invalidAlert = true

		var alertString = ''
		var bolCont = true

		for (var intI=(argActions.indexOf('[invalidalert=') +  14);((intI < argActions.length) && bolCont); intI++)
			if (argActions.charAt(intI) != ']')
				alertString += argActions.charAt(intI)
			else
				bolCont = false
		this.invalidAlertMessage = alertString
	}
	else
		this.invalidAlert = false

	if (argActions.indexOf('[equals=') > -1) {
		this.shouldEqual = true

		var equalsString = ''
		var bolCont = true

		for (var intI=(argActions.indexOf('[equals=') +  8);((intI < argActions.length) && bolCont); intI++)
			if (argActions.charAt(intI) != ']')
				equalsString += argActions.charAt(intI)
			else
				bolCont = false
		this.shouldEqualString = equalsString
	}
	else
		this.shouldEqual = false

}


function validateForm(argForm)
	{
	var frmElements = argForm.elements
	var elemName
	var elemObj

	submitonce(argForm);

	for (var intI=0; intI < frmElements.length; intI++) {// *
		elemObj = frmElements[intI]
		elemName = elemObj.name

		if ((elemObj.type == 'hidden') && (elemName.length > 5))
			if (elemName.substr(elemName.length - 5).toLowerCase() == '_vldt') {// **
				var objAction = new actionFields(objectValue(frmElements, elemName))
				var actElem = elemName.substr(0, elemName.length - 5)
				
				if (objAction.required) {
					if (isWhiteSpace(objectValue(frmElements, actElem))) {// ***
						alert (objAction.blankAlert?objAction.blankAlertMessage:actElem + ' cannot be left blank')
						objectFocus(frmElements, actElem);
						submitenabled(argForm);
						return false
					} // ***
				}
				
				if ((objectValue(frmElements, actElem) > '') && (!isWhiteSpace(objectValue(frmElements, actElem)))){// ***
					if (objAction.checkDate)
						if (!isProperDate(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have an invalid date')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.checkNumber)
						if (!isProperNumber(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have an invalid number')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.checkZip)
						if (!isProperZip(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have an invalid zipcode')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.checkAlphabetic)
						if (!isProperAlphabetic(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have invalid characters')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.checkUSPhone)
						if (!isProperUSPhone(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have invalid characters')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.checkUSSSN)
						if (!isProperUSSSN(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have invalid characters')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.email)
						if (!isProperEmail(objectValue(frmElements, actElem))) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' cannot have invalid characters')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****

					if (objAction.checkLength)
						if (objectValue(frmElements, actElem).length < objAction.lengthToCheck) {// ****
							alert (objAction.invalidAlert?objAction.invalidAlertMessage:actElem + ' must be at least ' + objAction.lengthToCheck + ' characters long')
							objectFocus(frmElements, actElem);
							submitenabled(argForm);
							return false
						} // ****
				} // ***
			} // **
	} // *
		
	return true
}


function submitenabled(theform)
	{
	if (document.all||document.getElementById)
		{
		for (i=0;i<theform.length;i++)
			{
			var tempobj=theform.elements[i];
			if(tempobj.type.toLowerCase()=="submit" || tempobj.type.toLowerCase()=="reset")
				tempobj.disabled=false;
			}
		}
	}


function submitonce(theform)
	{
	if (document.all||document.getElementById)
		{
		for (i=0;i<theform.length;i++)
			{
			var tempobj=theform.elements[i];
			if(tempobj.type.toLowerCase()=="submit" || tempobj.type.toLowerCase()=="reset")
				tempobj.disabled=true;
			}
		}
	}



function observeWindowLoad(handler) {
    if (window.addEventListener) { 
        window.addEventListener('load',handler,false);
    }
    else if (document.addEventListener) {
        document.addEventListener('load',handler,false);
    }
    else if (window.attachEvent) { 
        window.attachEvent('onload',handler);
    }
    else {
        if (typeof window.onload=='function') {
            var oldload=window.onload;
            window.onload = function(){
                oldload();
                handler();
            }
        } 
        else { window.onload=init; }
    }
}
