function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

function submitPoll(form, pollID) {
	answer = getCheckedValue(form.answer);	
	if(answer)
		loadFragmentInToElement('/otf.php?action=pollVote&pollID='+pollID+'&answer='+answer, 'pollID_'+pollID);
	
	return false;
}

function viewPollResults(pollID) {
	loadFragmentInToElement('/otf.php?action=pollVote&pollID='+pollID, 'pollID_'+pollID);
	
	return false;
}

function gotourl(){
	location.href = document.selection.theselector.value
}