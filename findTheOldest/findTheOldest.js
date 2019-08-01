let people = [
    {
      name: "ola",
      age: 50,
    },
    {
      name: "ala",
      age: 20,
    },
    {
      name: "sofia",
      age: 10,
    }
  ];



let findTheOldest = function(arr) {
    var output = [];
    var maxAge = Number.MIN_VALUE;
     
    // loop through the array
    for(var i=0; i<arr.length; i++) {
        var obj = arr[i];
        if(obj["age"] > maxAge) {
            // Discard the output we have so far because we found a larger age
            output = [];
            output.push(obj);
            maxAge = obj["age"];
        }
        else if(obj["age"] === maxAge) {
            // Simply add it to the output array
            output.push(obj);
        }
    }
     

}

console.log(findTheOldest(people))

module.exports = findTheOldest
