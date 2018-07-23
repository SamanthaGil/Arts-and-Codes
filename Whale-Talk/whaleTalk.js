// Description
console.log(`-------------------------------------------
This present program is a "whale talk", it means it can translate phrases to whale language.
For example, "turpentine and turtles" is equivalent a "UUEEIEEAUUEE" in whale language.
-------------------------------------------
`);

// What phrase do you want to translate?
let input = `Eu amo chocolate e odeio beterraba`;

// Don't chance anything bellow this line
// -------------------------------------------
console.log(`Your phrase is:
"${input}"

In whale language is:`) // Printing your phrase

// Datas
input = input.toLowerCase(); // Converting your phrase to Lower Case
let vowels = ['a', 'e', 'i', 'o', 'u']; // Vowels
let resultArray = [];

// Loops to convert to whale language
// First Loop ___________________________________________
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){ // First Loop to see input letter by letter 

  
  // Second Loop -----------------------------------
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){ // Second Loop to compare each input letter to vowels
    

      if(input[inputIndex] === vowels[vowelsIndex]){
        resultArray.push(input[inputIndex]);
      } // If input letter === vowell, it will put on resultArray variable
  }
  // End of Second Loop ----------------------------
  
  
    if(input[inputIndex] === 'e'){ // If input has an 'e' vowel, it will be duplicate 
      resultArray.push(input[inputIndex]);
    } else if(input[inputIndex] === 'u'){ // If input has an 'u' vowel, it will be duplicate
      resultArray.push(input[inputIndex]);
    }
  };
// End of first Loop _____________________________________

resultArray = resultArray.join('').toUpperCase(); // Turning the result into Upper Case
console.log(`${resultArray}

Say that three times fast!
Enjoy.`); // Printing the result