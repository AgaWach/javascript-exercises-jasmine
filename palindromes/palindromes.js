const palindromes = function(str) {
    var reverseStr =  str.split("").reverse().join("");
if (str === reverseStr) {
    console.log(`hey, looks like I am a palindrome`);
    return true;
} else {
    return false;
}
}


console.log(palindromes('racecar'));
console.log(palindromes('tacos'));

module.exports = palindromes
