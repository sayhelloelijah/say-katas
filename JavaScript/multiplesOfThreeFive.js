// jshint esversion: 6
// Codewars: Completed 11/21
/* DIRECTION:
	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
	The sum of these multiples is 23.√

	Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

	Note: If the number is a multiple of both 3 and 5, only count it once.√
*/
const isMultipleOf = (multiple, value) => value % multiple === 0;
const addAll = (arr) => arr.reduce((a, b) => a + b);

function solution(number){
	let nums = [];

	for (let i = number - 1; i > 0; i--) {
		if(isMultipleOf(3, i) && isMultipleOf(5, i)) {
			nums.push(i);
		} else if (isMultipleOf(3, i) || isMultipleOf(5, i)) {
			nums.push(i);
		}
	}

	if (!nums.length) {
		return 0;
	}

	return addAll(nums);
}

console.log(solution(10));