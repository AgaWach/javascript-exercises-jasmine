function repeatString(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }

console.log(repeatString("hey", 3));
module.exports = repeatString
