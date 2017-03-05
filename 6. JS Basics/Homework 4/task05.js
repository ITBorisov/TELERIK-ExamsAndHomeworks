function solve(args) {
	var array = args.map(Number);
	array.shift();

	function Swap(array, aIndex, bIndex) {
		var tempNumber = array[aIndex];

		array[aIndex] = array[bIndex];
		array[bIndex] = tempNumber;
	}

	function FindMinIndex(array, startIndex) {
		var minElement = array[startIndex],
			minIndex = startIndex;
		for (var i = startIndex; i < array.length; i += 1) {
			if (array[i] < minElement) {
				minElement = array[i];
				minIndex = i;
			}
		}
		return minIndex;
	}

	for (var i = 0; i < array.length - 1; i += 1) {
		var minIndex = FindMinIndex(array, i);
		if (array[minIndex] < array[i]) {
			Swap(array, minIndex, i);
		}
	}

	console.log(array.join('\n'));
}