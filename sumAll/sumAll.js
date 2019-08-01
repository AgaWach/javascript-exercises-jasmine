const sumAll = function(a, b) {
let sum = 0;
for (i = a; i <=b; i++ ) {
sum = sum + i;
}
return sum;
}

console.log(sumAll(1,4))

module.exports = sumAll
