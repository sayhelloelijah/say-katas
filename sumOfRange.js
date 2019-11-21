function sum(a) {
    return function(b) {
        return a + b;
    };
}

sum(12)(2);
