var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";


var longest = function(aString, bString) {
  var combinedArray = (aString.toLowerCase() + bString.toLowerCase()).split('').sort();

  var uniqueCharacters = combinedArray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

  var longestString = uniqueCharacters.join('');
  return longestString;
}
