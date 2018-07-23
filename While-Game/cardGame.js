// Description
console.log(`-----------------------------------------------
This game will advice when you flip a specific card you want.
-----------------------------------------------`);

// Pick your card
let chosenCard = 'Spade';

// Don't change anything bellow this line
// --------------------------------------------------
console.log(`You want a ${chosenCard} card.
The current card is:
`);

let currentCard = ''; // Calling a variable to compute the current card
let cards = ['Diamond', 'Spade', 'Heart', 'Club']; // Possibles cards
let i = 0;

while(currentCard !== chosenCard){ // While current card isn't = what I want, this code will run
  if(i>0){
  console.log(i + '- ' + currentCard); // Printing the current card 
  }
  currentCard = cards[Math.floor(Math.random()*4)]; // the card is random
  i++;
}

console.log(`
You found a ${chosenCard} card in a ${i} flip!`) // Advice when you find your chosen card