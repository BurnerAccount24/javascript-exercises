const removeFromArray = function (arr, removeVal) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === removeVal) {
			arr.splice([i], 1);
			return arr;
		}
	}
};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
