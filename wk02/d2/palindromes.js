console.log('do geese see god?');

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var palindromes = function(word) {
  var lowerCaseWord = word.toLowerCase();
  var charactersArray = lowerCaseWord.split('');
  var lettersOnly = charactersArray.filter(alphabetCheck);
  var reverseArray = lettersOnly.slice(0);
  reverseArray.reverse();
  var forward = lettersOnly.join('');
  var backwards = reverseArray.join('');
  if (forward===backwards) {
    return true;
  } else {
    return false;
  }
}

var alphabetCheck = function(letter) {
  if (alphabet.indexOf(letter) !== -1) {
    return true;
  } else {
    return false;
  }
}
