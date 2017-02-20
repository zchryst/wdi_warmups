console.log('. . . - - - . . .');



var decoder = function(codedString) {

  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var shift3 = 'DEFGHIJKLMNOPQRSTUVWXYZABC'.split('');
  var codedArray = codedString.split('');
  var decodedArray = []

  for (var i = 0; i < codedArray.length; i++) {
    if (isInAlphabet(codedArray[i], alphabet)) {
      var indexInShift = shift3.indexOf(codedArray[i]);
      decodedArray.push(alphabet[indexInShift]);
    } else {
      decodedArray.push(codedArray[i]);
    }
  }

  var decodedString = decodedArray.join('');
  return decodedString;

}


var decodeBtn = document.querySelector('button');
var messageOutput = document.querySelector('.decoded-content')

decodeBtn.addEventListener('click', function() {
  var messageInput = document.querySelector('input');
  var message = decoder(messageInput.value);
  messageOutput.innerHTML = message;
})

var isInAlphabet = function(letter, alphabet) {
  if (alphabet.indexOf(letter) !== -1) {
    return true;
  } else {
    return false;
  }
}
