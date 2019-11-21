document.addEventListener('DOMContentLoaded', () => {
	function getSum(a,b) {
		//Good luck!
		let start = Math.min(a, b);
		let end = Math.max(a, b);
		let total = 0;
		if (start === end) end;

		console.log(getNumbers(start, end));

		//	for (let j = 0; j < nums.length; j++) {
		//		total = total + nums[j];
		//	}

		return total;
	}

	function getNumbers(start, end) {
		let s = start;
		let e = end;
		let nums = [];

		for (let i = s; s < e; i++) {
			nums.push(i);
		}

		console.log(nums);

		return nums;
	}

	getSum(-1, 5);
});