console.log('four!!!!');

var player1 = {
  playerName: 'Bob',
  scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
}
var player2 = {
  playerName: 'Jimbo',
  scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
}
var player3 = {
  playerName: 'Fish',
  scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
}
var par = {
  playerName: 'Par',
  scores: [3, 4, 5, 5, 3, 3, 4, 3, 5]
}

coursePar = par.scores.reduce((a, b) => a + b, 0);
players = [player1, player2, player3];

var totalScores = function(scoreCard) {
  for (var i = 0; i < scoreCard.length; i++) {
    scoreCard[i].totalScore = scoreCard[i].scores.reduce((a, b) => a + b, 0);
    scoreCard[i].parCompare = scoreCard[i].totalScore-coursePar;
    if (scoreCard[i].parCompare > 0) {
      console.log(scoreCard[i].playerName + "'s score is: " + scoreCard[i].totalScore + '\n- ' + (scoreCard[i].parCompare) + ' over par.');
    } else {
      console.log(scoreCard[i].playerName + "'s score is: " + scoreCard[i].totalScore + '\n- ' + Math.abs(scoreCard[i].parCompare) + ' under par!');
    }
  }
}

totalScores(players);

console.log('Fish wins $' + (players[0].parCompare+players[1].parCompare));
