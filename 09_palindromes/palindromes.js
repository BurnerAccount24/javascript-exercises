const palindromes = function (str) {
	let modifiedString = str.toLowerCase().replace(/[\W_]/g, '');
	let reversedString = modifiedString.split('').reverse().join('');
	return modifiedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
