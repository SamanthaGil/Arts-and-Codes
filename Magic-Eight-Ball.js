// Calling variables
let userName ='Samantha';
let userQuestion = 'Will I graduate at the end of this year?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

// Note for this exercise
console.log(`-------------------------------------------
Below is a simple exercise, where I used a random number to generate random answer to any question. The random number is ${randomNumber}
------------------------------------------
`);

// Here the output is the welcome message
userName ? console.log(`- Hello ${userName}! You can ask me anything and my Magic Eight Ball will answer!`) : console.log('Hello!');

// printing the user question
console.log(`
${userName} asked:
- ${userQuestion}
`);

// generating the random answer
console.log('My Magic Eight Ball answered:')
switch(randomNumber){
  case 0:
    console.log('- Oh, of course, sure!');
    break;
  case 1:
    console.log('- It is decidedly so!');
    break;
  case 2:
    console.log('- Uh...Reply hazy... try again!');
    break;
  case 3:
    console.log('- Sorry, I cannot predict now');
    break;
  case 4:
    console.log('- Do not count on it');
    break;
  case 5:
    console.log('- My sources say absolutely no');
    break;
  case 6:
    console.log('- Ehm...Outlook not so good');
    break;
  case 7:
    console.log('- Signs point to yes');
    break;
  default:
    console.log('- Better asking to your cat');
    break;
}