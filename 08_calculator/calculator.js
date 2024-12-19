const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	let total = 0;
	arr.forEach((value) => (total += value));
	return total;
};

const multiply = function (arr) {
	return arr.reduce((total, value) => total * value);
};

const power = function (num1, num2) {
	return num1 ** num2;
};

const factorial = function (num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
