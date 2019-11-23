// jshint esversion: 6
// Exercise on CodeWars
// Completed 11/21/19
function getSum(a, b) {
	"use strict";
	// Good luck!
	let start = Math.min(a, b); // get lowest number between the given arguments
	let end = Math.max(a, b); // get highest number between the given arguments

	let nums = getNumbers(start, end);

	/* Use Arithmetic progression formula to get answer 
      n(a1 + aN)/2
      n = length of array; a1 = first number in array; aN = last number in array;
    */
	let total = (nums.length * (nums[0] + nums[nums.length - 1])) / 2;

	return total;
}

// get array of numbers between lowest number and highest number
function getNumbers(start, end) {
	let s = start;
	let e = end;
	let nums = [];

	for (let i = s; i <= e; i++) {
		nums.push(i);
	}

	return nums;
}

console.log(getSum(-1, -1));