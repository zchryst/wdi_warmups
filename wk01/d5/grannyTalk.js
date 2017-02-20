console.log('back in my day...');

//userQuestion = prompt('What can granny tell you?')

// create array of numbers 1930 - 1950
datesArray = [];
for (var i = 1930; i<=1950; i++) {
  datesArray.push(i);
};

// check if string is entirely capital letters
var isUpperCase = function(str) {
  return str === str.toUpperCase();
}

var grannyTalk = function(question) {
  if (isUpperCase(question)) {
    if (question === 'BYE') {
      return "What's that honey? I didn't here you . . .";
    } else {
      var date = datesArray[Math.floor(Math.random() * datesArray.length)];
      return ("NO, NOT SINCE " + date);
    }
  } else {
    return ("SPEAK UP SONNY JIM");
  }
}

//grannyTalk(userQuestion)
// questionCount = 0;
// while (questionCount<=10) {
//   userQuestion = prompt('Do you have a question for little old grandma??');
//   console.log(grannyTalk(userQuestion));
//   questionCount++;
// }

vowels = ['a','e','i','o','u'];
capsVowels = ['A','E','I','O','U'];

var grandpaTalk = function() {
  var userQuestion = prompt('What can granny tell you?');
  var grandmaSaid = grannyTalk(userQuestion);
  var grandmaSaidArray = grandmaSaid.split(' ');
  for (var i = 0; i < grandmaSaidArray.length; i++) {
    if (isUpperCase(grandmaSaid)) {
      grandmaSaidArray[i] = swapVowels(grandmaSaidArray[i], capsVowels);
    } else {
      grandmaSaidArray[i] = swapVowels(grandmaSaidArray[i], vowels);
    }
  }
  console.log(grandmaSaidArray.join(' '));
}

// one string as an input and upper or lower case array of vowels
// swaps vowels in string for random ones in vowel array
// returns string
var swapVowels = function(str, vArray) {
  stringArray = str.split('')
  for (var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < vArray.length; j++) {
      if (stringArray[i] === vArray[j]) {
        stringArray[i] = vArray[Math.floor(Math.random()* vArray.length)];
      }
    }
  }
  return stringArray.join('');
}
