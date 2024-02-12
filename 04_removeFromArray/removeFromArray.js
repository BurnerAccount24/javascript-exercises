const removeFromArray = function (arr, ...args) {
	return arr.filter((removedVal) => !args.includes(removedVal));
};
removeFromArray([1, 2, 3, 4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
