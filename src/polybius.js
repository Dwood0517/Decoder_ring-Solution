// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
   //assign an object to represent the Polybius square, mapping each letter to its corresponding pair of numbers
   const alphabet = [
    { letter: "a", value: "11"},
    { letter: "b", value: "21"},
    { letter: "c", value: "31"},
    { letter: "d", value: "41"},
    { letter: "e", value: "51"},
    { letter: "f", value: "12"},
    { letter: "g", value: "22"},
    { letter: "h", value: "32"},
    { letter: "i", value: "42"},
    { letter: "j", value: "42"},
    { letter: "k", value: "52"},
    { letter: "l", value: "13"},
    { letter: "m", value: "23"},
    { letter: "n", value: "33"},
    { letter: "o", value: "43"},
    { letter: "p", value: "53"},
    { letter: "q", value: "14"},
    { letter: "r", value: "24"},
    { letter: "s", value: "34"},
    { letter: "t", value: "44"},
    { letter: "u", value: "54"},
    { letter: "v", value: "15"},
    { letter: "w", value: "25"},
    { letter: "x", value: "35"},
    { letter: "y", value: "45"},    
    { letter: "z", value: "55"},
    { letter: " ", value: " "}
   ];
    //remove spaces
    if (encode === false && input.replace(" ",'').length % 2 !== 0) {
      return false;
    }
   //ignore capital letters
   const lowerCase = input.toLowerCase();
   //assign array to push message into 
   let encodedMessage = [];
   // if encoding 
   if (encode === true) {
    //loop through input and alphabet obj array, if object key matches input, push object value into empty array
    for (let i = 0; i < lowerCase.length; i++) {
     for (let j = 0; j < alphabet.length; j ++) {
      if (lowerCase[i] === alphabet[j].letter) {
        encodedMessage.push(alphabet[j].value)
      };
     };
    };
   };

   //if decoding
   if (encode === false) {
    for (let i = 0; i < input.length; i +=2) {
      for (let j = 0; j < alphabet.length; j++) {
        if (input[i] == " ") {
          encodedMessage.push(" ")
          i -= 1
        };
       if (alphabet[j].value === input[i] + input[i+1] && input[i] !== " " ) {
        encodedMessage.push(alphabet[j].letter)
       };
      };
    };
   };
   return encodedMessage.join('').toString()
  };
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
