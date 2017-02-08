console.log('js is going goooooood');

var boardSize = Number(prompt('How big should the board be?', 8));
var symbol = prompt('What symbol would you like?', '#')
var firstLine = [];
var secondLine = [];
var board = [];

for (var i = 0; i < boardSize; i++) {
  if (i%2 === 0) {
    firstLine.push(' ');
    secondLine.push(symbol);
  } else {
    firstLine.push(symbol);
    secondLine.push(' ');
  }
}

firstLineString = firstLine.join('');
secondLineString = secondLine.join('');

for (var i = 0; i < boardSize; i++) {
  if (i%2 === 0) {
    board.push(firstLineString);
  } else {
    board.push(secondLineString);
  }
}

boardString = board.join('\n');
console.log(boardString);
