function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (x,y) {
	return x+y;
}

function multiply (x,y) {
	return x*y;
}

function power(x) {
	return x*x;
}

function factorial(x) {
	if ((x == 0) || (x == 1))
	return 1
 else {
	var result = (x * factorial(x-1) );
	return result
 }
}

add(5,4)
subtract(6,1)
sum(6,6)
multiply(6,8)
power(7)
factorial(8)

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}


