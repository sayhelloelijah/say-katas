/* DIRECTIONS:
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
 * foo -> foo1
 * foobar23 -> foobar24
 * foo0042 -> foo0043
 * foo9 -> foo10
 * foo099 -> foo100
 
Attention: If the number has leading zeros the amount of digits should be considered.
*/

/**
 * String Incrementer
 * @param {String} strng 	string with optional number place on end
 * @return {String}				return incremented string
 */
function incrementString (strng) {
	let regex = /[0-9]([0-9]+)?$/g;
//	console.log(strng.match(regex)[0]);
	return !strng.match(regex) ?
		strng + '1' :
		(+strng.match(regex)+1)+"";
}
// (+s+1)+""
console.log(
//incrementString('foobar'), // returns foobar1
incrementString('foobar001'),
	incrementString('foobar1000'));
//incrementString('foobar23')); // returns foobar24