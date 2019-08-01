const removeFromArray = function(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
      return array;
    }
}
    
    
console.log(removeFromArray([1,2,3,4], 3))

module.exports = removeFromArray
