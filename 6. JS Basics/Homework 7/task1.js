function solve(args) {
	var text = args[0];
	var final = '';
	for (var i = text.length - 1; i >= 0; i -= 1) {
		final += text[i];
	}

	console.log(final);
}

solve(['sample']);



