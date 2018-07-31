// Description
console.log(`--------------------------------------------------
This document will tell how many sentence, words and the number of each over used words appears in a paragraph.
--------------------------------------------------`);

// Give us your parahraph
let paragraph = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Overused words
let overusedWords = ['really', 'very', 'basically'];
console.log(`The overused words are:
${overusedWords}
`);

// Unnecessary Words
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
console.log(`We removed unnecessaries words like:
${unnecessaryWords}
`);

// Do not change anything below this line
// --------------------------------------------------
function MiniLinter(story){
  // Step 1 - Breaking the paragraph into words
  let storyWords = story.split(' ');

  // Step 2 - Deleting unnecessaries words
  let betterWords = storyWords.filter(function(word){
    return !unnecessaryWords.includes(word); 
  });


  // Step 4 - Number of each overused words appears
  let cont = 0; // count number
  for (let i = 0; i < storyWords.length; i++){

    for (let j = 0; j < overusedWords.length; j++){

      if (storyWords[i] === overusedWords[j] ){
        cont++; // each over used word, increase cont by 1
      }
    }

  };
  // Step 5 - How many sentence we have?
  let sentences = 0; // count number
  storyWords.forEach(word => {
    if (word[word.length-1] === '.' || word[word.length-1] === '!') {
      sentences++; // the count number will be increase by 1 if we have '.' or '!'
    };
  });
  
	return ['Your paragraph has ' + storyWords.length + ' words', 'Your corrected paragraph is: ' + betterWords.join(' '), 'The overused words appeared ' + cont + ' times.', 'You parahraph has ' + sentences + ' sentences.'];
}; // End of the function

console.log(MiniLinter(paragraph));
