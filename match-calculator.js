/*
Google Sheets formula to determine how much a legislative donation will become with
New York State Public Campaign Finance Board's matching funds program
see: https://pcfb.ny.gov/candidate-committee-services
*/

function upTo50(x){
	return x*12;
}

function upTo150(x){
	return x*9;
}

function upTo250(x){
	return x*8;
}

function calculateMatch(num){
	var amt = 0;
	
	if(num >= 5 && num <= 50){
		amt = upTo50(num);
	}

	else if(num > 50 && num <= 150){
		num -= 50;
		amt += upTo50(50);
		amt += upTo150(num);
	}

	else if(num > 150 && num <= 250){
		num -= 150;
		amt += upTo50(50);
		amt += upTo150(100);
		amt += upTo250(num);
	}
	
	else{
		var remainder = num-250;
		num -= 150;
		amt += upTo50(50);
		amt += upTo150(100);
		amt += upTo250(250);
		amt += remainder;
	}
	  
	return amt;
}
