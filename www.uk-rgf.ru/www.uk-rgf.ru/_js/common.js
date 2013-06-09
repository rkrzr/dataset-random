	function DoCalculate() {
		$("CalcLoader").removeClass('Hidden');
		$('CalcResults').setHTML('');
		$("CalcForm").send({
			method: 'post', 
			update: $('CalcResults'), 
			onComplete: function() {
				$("CalcLoader").addClass('Hidden');
			}
		});
	}
	
	
	function AccumCalcSwitchType(iType) {
		//alert();
		$("InvestmentTypeRadio").getElement("INPUT").value = (iType == "P") ? "P" : "S";
		$("InvestmentTypeRadio").getElement("LABEL").setHTML( (iType == "P") ? "Первоначальная сумма инвестиций" : "Cтартовая сумма инвестиций" );
		
		$("InvestmentTypeInput").getElement("H5").setHTML( (iType == "P") ? "Сумма исходного вложения" : "Сумма взносов при периодическом вложении" );
		$("InvestmentTypeInput").getElement("INPUT").name = (iType == "P") ? "CALC[P]" : "CALC[S]";
		
	}
	
	function AccumCalcSwitchCalculating(sCalc) {
		$$("INPUT").each(function(el) {
			if(el.name == 'CALC['+sCalc+']') el.disabled=true; else el.disabled=false;
		});
	}

	

