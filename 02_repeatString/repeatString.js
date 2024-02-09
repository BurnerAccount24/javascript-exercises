const repeatString = function (phrase, num) {
	if (num < 0) {
		return 'ERROR';
	}
	let string = '';
	for (let i = 0; i < num; i++) {
		string += phrase;
	}
	console.log(string);
	return string;
};

repeatString();
// Do not edit below this line
module.exports = repeatString;
