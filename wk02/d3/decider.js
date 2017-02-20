console.log('heads or tails?');


var results = [];
var headCountHTML = document.getElementById('head-count');
var tailCountHTML = document.getElementById('tail-count');
var announceHTML = document.getElementById('announce');
var headCount = 0;
var tailCount = 0;


var coinFlip = function() {
  announceHTML.innerHTML = '';
  var coin = ['HEADS', 'TAILS'];
  var result = coin[Math.floor(Math.random() * coin.length)];
  if (result === 'HEADS') {
    coinBtn.src = 'https://coins.nzpost.co.nz/sites/default/files/Obverse-BU.png';
    headCount += 1;
  } else {
    coinBtn.src = "https://coins.nzpost.co.nz/sites/default/files/$1-BU-Coin_0.png";
    tailCount += 1;
  }
  // console.log(result);
  results.push(result);

  if (headCount === 5) {
    // console.log('Heads is the WINNER');
    announceHTML.innerHTML = 'HEADS WINS!';
    results = [];
    headCount = 0;
    tailCount = 0;
  } else if (tailCount === 5) {
    // console.log('Tails is the WINNER');
    announceHTML.innerHTML = 'TAILS WINS!';
    results = [];
    headCount = 0;
    tailCount = 0;
  }
  headCountHTML.innerHTML = headCount;
  tailCountHTML.innerHTML = tailCount;
}



var coinBtn = document.getElementById('coin-btn');
coinBtn.addEventListener('click', coinFlip);
