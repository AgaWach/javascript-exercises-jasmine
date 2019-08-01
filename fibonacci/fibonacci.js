const fibonacci = function(n) {
    var x = 0;
    var y = 1;
    var arr1 = [0, 1];

    for (i = y; i < n; i++) {
        y += x;
        x = y - x;
        arr1.push(y);
    }
    return arr1;
};

console.log(fibonacci(4))


module.exports = fibonacci