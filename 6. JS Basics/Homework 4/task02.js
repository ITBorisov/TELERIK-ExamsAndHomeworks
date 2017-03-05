function solve(args){
	var input = args;
	var str1 = input[0];
	var str2 = input[1];
	var output = '';
	for (var i = 0; i < str1.length; i++) {
		if(str1[i] > str2[i]){
			output+= '<';
			break;
		}
		else if(str1[i] < str2[i]){
			output+= '>';
			break;
		}
	}
	if(output === ''){
		console.log('=')
	}
	else {
		console.log(output)
	}

}


solve(['hal', 'hol']);
