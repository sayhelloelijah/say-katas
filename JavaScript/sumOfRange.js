function sum(a) {
	"use strict";
	return function (b) {
		return a + b;
	};
}

sum(12)(2);