// Codewars completed 11/22
/* DIRECTIONS
	Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

	For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

	As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

	If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(str) {
	// Add your code here
	let splitStr = str.split("");
	let string = str.toLowerCase();
	/* auto fail cases */
	if(str.length == 1) return str; // check for one letter words
	if(splitStr.every(letter => letter.charCodeAt(0) === str.charCodeAt(0))) {
		return ""; // return nothing if all repeating characters
	};

	for (let i = 0; i < string.length; i++) {
		// loop through each character
		let char = string[i];
		/* if the character that is present is not found elsewhere in the string
		return the character and end the loop */
		if(string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
			return str[i];
		}
	}
	return "";
}