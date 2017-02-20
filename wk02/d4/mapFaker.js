console.log('you gold digger you');



var getMapWidth = function() {
  var width = prompt('How wide should the map be?');
  return width;
}

var getMapHeight = function() {
  var height = prompt('How tall should the map be?');
  return height;
}


var createMapRow = function(width) {
  var row = [];
  for (var i = 0; i < width; i++) {
    row.push("A");
  }
  return row;
}

var createMapColumns = function(row, height) {
  var map = [];
  for (var i = 0; i < height; i++) {
    map.push(row.slice());
  }
  return map;
}

var getTreasureCoordinates = function(width, height) {
  var xCoordinate = Math.floor(Math.random() * width);
  var yCoordinate = Math.floor(Math.random() * width);
  var treasureCoordinates = [yCoordinate, xCoordinate];
  return treasureCoordinates;
}

var placeTreasure = function(treasureCoordinates, map) {
  map[treasureCoordinates[0]][treasureCoordinates[1]] = "X";
  return map;
}

var printMap = function(map) {
  rowsAsStrings = [];
  for (var i = 0; i < map.length; i++) {
    rowsAsStrings.push(map[i].join('","'));
    // debugger
    if (i === (map.length-1)) {
      var mapString = rowsAsStrings.join('],\n[');
    }
  }
  console.log('[\n[' + mapString + '],\n];');
}

var run = function() {
  var userWidth = getMapWidth();
  var userHeight = getMapHeight();
  var myRow = createMapRow(userWidth);
  var myMap = createMapColumns(myRow, userHeight);
  var coords = getTreasureCoordinates(userWidth, userHeight);
  var finiMap = placeTreasure(coords, myMap);
  printMap(finiMap);
}
