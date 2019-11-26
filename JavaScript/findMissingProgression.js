/* DIRECTIONS
	An Arithmetic Progression is defined as one in which there is a
	constant difference between the consecutive terms of a given series of numbers.
	You are provided with consecutive elements of an Arithmetic Progression.
	There is however one hitch: exactly one term from the original series is missing
	from the set of numbers which have been given to you. The rest of the given
	series is the same as the original AP. Find the missing term.

	You have to write a function that receives a list,
	list size will always be at least 3 numbers.
	The missing term will never be the first or last one.

	Example
	findMissing([1, 3, 5, 9, 11]) == 7
	PS: This is a sample question of the facebook engineer challenge on interviewstreet.
	I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/


/**
 * 
 * @param {Array} list 	array of an algorithimic progression with one missing number
 * @return {Number} 		return the missing number
 */
var findMissing = function (list) {
	/*
	* [1, 3, 5, 7] (2); [10, 20, 30, 40] (10); [7, 12, 17, 22, 27, 32] (5);
	* Original formula: n(a1 + an) / 2
	* Reverse formula: d = (an - a1) / n - 1
	6 / 3 = 2; 30 / 3 = 10; 25 / 5 = 5;
	*/
	
	// find the differece
	let diff = (list[list.length - 1] - list[0]) / list.length; // don't subtract one (one will be missing)
	for (let i=1;i<list.length;i++) {
		if(list[i - 1] + diff != list[i]) {
			return list[i] - diff;
		}
	}
}

console.log(`The missing number is: ${findMissing([2, 5, 8, 14])}`); // should return 3
// diff = 12/4 = 3