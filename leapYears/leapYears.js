const leapYears = function(num) {
if (num % 4 === 0) {
    console.log(`It is a leap year`);
    return true;
} else if (num % 4 === 0 && num % 100 === 0) {
    console.log(`It is not a leap year`);
    return false;
} else if (num % 4 === 0 && num % 100 === 0 && num % 400 === 0) {
    console.log(`It is a leap year`);
    return true;
} else {
    console.log(`It is not a leap year`);
    return false;
}
}


console.log(leapYears(2000))
console.log(leapYears(1985))
module.exports = leapYears
