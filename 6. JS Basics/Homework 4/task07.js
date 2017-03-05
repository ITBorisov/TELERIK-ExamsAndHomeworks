function solve(args) {
	var array = args.map(Number),
		arrayLength = array.shift(),
		number = array.pop(),
		firstSearchIndex = 0,
		lastSearchIndex = array.length,
		middle = -1;

	while (middle !== 0) {
		middle = Math.round((lastSearchIndex - firstSearchIndex) / 2);
		if (array[middle + firstSearchIndex] == number) {
			console.log(middle + firstSearchIndex);
			return;
		} else if (number < array[middle + firstSearchIndex]) {
			lastSearchIndex -= middle;
		} else {
			firstSearchIndex += middle;
		}
	}
	console.log(-1);
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);