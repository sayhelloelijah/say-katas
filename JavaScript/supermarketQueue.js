// Codewars: not completed forfeitted
/* DIRECTIONS
	There is a queue for the self-checkout tills at the supermarket.
	Your task is write a function to calculate the total time required
	for all the customers to check out!

	*INPUT*
	customers: an array of positive integers representing the queue.
	Each integer represents a customer, and its value is the amount
	of time they require to check out.

	n: a positive integer, the number of checkout tills.

	*OUTPUT*
	The function should return an integer, the total time required.
*/

/**
 * 
 * @param {Array} customers 	array of customers times
 * @param {Number} n 	        number of lanes open
 * @return {Number}           amount time it takes to checkout the queue
 */
function queueTime(customers, n) {
	let tills = Array(n).fill(0);

	customers.forEach((customer) => {
		let nextTill = tills.indexOf(Math.min(...tills));
		tills[nextTill] += customer;
	});

	return Math.max(...tills);
}

queueTime([2, 3, 7, 1], 2); // returns 9

/* EXAMPLES 
	queueTime([5,3,4], 1)
	// should return 12
	// because when there is 1 till, the total time is just the sum of the times

	queueTime([10,2,3,3], 2)
	// should return 10
	// because here n=2 and the 2nd, 3rd, and 4th people in the 
	// queue finish before the 1st person has finished.

	queueTime([2,3,10], 2)
	// should return 12
*/