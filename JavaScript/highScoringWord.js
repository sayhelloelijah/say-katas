// Codewars completed 11/25
/**
 * 
 * @param {String} str 	String of words
 * @return {String}		highest scoring word
 */
function high(str){
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let totals = [];
	let strArr = str.split(/\W/); // array of words
	
	// search through each word
	strArr.forEach(word => {
		let lettersArr = word.split(""); // array of letters of each word
		let total = 0;
		
		// search through each letter of each word
		lettersArr.forEach(letter => {
			for(let i = 0; i < alphabet.length; i++) {
				// match each letter to the alphabet and calculate it's score
				// based on the letter's position in the alphabet
				if (letter == alphabet[i]) {
					total += (alphabet.indexOf(alphabet[i]) + 1);
				}
			}
		});
		// push the score of each word into an array
		totals.push(total);
	});
	// get the word that matches the highest score's index
	// (both word & score will have the same index)
	return strArr[totals.indexOf(Math.max(...totals))];
}

console.log(high('man i need a taxi up to ubud'));