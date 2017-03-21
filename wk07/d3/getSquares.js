

var getSquares = function(numbers) {
  numbers.sort(lowToHigh);
  numbersUnique = numbers.filter(checkUnique);
  squareNumbers = numbersUnique.filter(isSquare);
  return squareNumbers;
};

function lowToHigh(a, b) {
  return a - b;
};

function checkUnique(value, index, self) {
  return self.indexOf(value) === index;
};

function isSquare(x) {
  return x > 0 && Math.sqrt(x) % 1 === 0;
};
