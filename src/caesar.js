// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
   // Check if shift value is entered & within the valid range of -25 to 25
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    // If decoding, invert the shift value
    if (!encode) {
    shift = -shift;
    };

   // assign alphabet variable and letters as value
   const alphabet = "abcdefghijklmnopqrstuvwxyz";
   // Convert input to lowercase
   const lowerCase = input.toLowerCase();

   // assign empty array to push encoded message into
   let encodedMessage = [];
   //loop through input and alphabet array 
   for(let i = 0; i < lowerCase.length; i++) {
    for(let j = 0; j < alphabet.length; j++) {
      //if input strictly equals alphabet, push current letter into empty array including shift
      if(lowerCase[i] === alphabet[j]) {
       encodedMessage.push(alphabet[j + shift]);
       if (j+ shift > 25) {
        encodedMessage.push(alphabet[j + shift - 26]);
       };
       if (j + shift < 0) {
        encodedMessage.push(alphabet[j + shift + 26]);
       };
      };
    };
   if(!alphabet.includes(lowerCase[i])) {
     encodedMessage.push(lowerCase[i]);
     };
   };
   // Join the array of characters into a string and return it
   return encodedMessage.join("");
  };

 return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };