// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

 function substitution(input, alphabet, encode = true) {
   // Ensure alphabet parameter is valid
   if (!alphabet || typeof alphabet !== "string" || alphabet.length !== 26) {
     return false;
   }
  
   // Ensure all characters are unique in the alphabet using new Set() 
   const seenChars = new Set();
   for (let i = 0; i < alphabet.length; i++) {
     const char = alphabet[i];
     if (seenChars.has(char)) {
       return false;
     }
     seenChars.add(char);
   }
  

   // Convert input text to lowercase for case insensitivity
   const lowerCase = input.toLowerCase();

   // Define the standard alphabet
   const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split('');

   //assign empty array to push result
   let final = [];

    //add spaces
   for (let i = 0; i < lowerCase.length; i++) {
     if (lowerCase[i] === ' ') {
        final.push(' ');
      };
     // encoding 
     for (let j = 0; j < standardAlphabet.length; j++) { 
       if (encode && standardAlphabet[j] === lowerCase[i]) {
         final.push(alphabet[j]);
        };
      }; 
      //decode
      for (let j = 0; j < alphabet.length; j++) { 
        if (encode === false && alphabet[j] === lowerCase[i]) {
          final.push(standardAlphabet[j]);
         };
       };  
    };
   // join the final array into a string
   return final.join('');
  };

 return {
   substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };