const ftoc = function(fahrenheit) {
  var celsius = Math.round((fahrenheit - 32) * (5/9));
  return celsius;
}

const ctof = function(celsius) {
    var fahrenheit = Math.round((celsius * (9/5)) + 32);
    return fahrenheit;
}


console.log(ftoc(32));
console.log(ctof(0));

module.exports = {
  ftoc,
  ctof
}
