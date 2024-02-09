const reverseString = function (string) {
	return string.split('').reverse().join('');
};

reverseString('hello there');
// Do not edit below this line
module.exports = reverseString;

/* A solution i came up with before learning that array methods can be chained!

const reverseString = function (string) {
	let word = string.split('');
	word.reverse();
	let concatString = word.join('');
	console.log(word, concatString);
	return concatString;
}; */
