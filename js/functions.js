/**
 * 
 */

function Validate(field) {
	if (!field) {
		return false;
	} else {
    	return true;
	}
}

function error(bool, element, elementError) {
	if (bool == true) {
		$(element).css('border', '');
    	$(elementError).text('');
	} else {
		$(element).css('border-color', 'red');
		$(elementError).text('Required');
	}
} 

function ValidateNumeric(field) {
	if (!field) {
		return 0;//false
	} else {
		if (!$.isNumeric(field)) {
			return -1;//false
		} else {
			return 1;//true	
		}
	}
}

function errorNumeric(bool, element, elementError) {
	if (bool == 1) {
		$(element).css('border', '');
    	$(elementError).text('');
	} else if (bool == -1){
		$(element).css('border-color', 'red');
		$(elementError).text('Numeric field');
	} else {
		$(element).css('border-color', 'red');
		$(elementError).text('Required');
	}
}