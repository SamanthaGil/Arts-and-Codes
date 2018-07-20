// Description
console.log(`-------------------------------------
As a seasoned athlete, you can see how many days left until the marathon. This exercise show you can build a function and use it so many times with a different input.
-------------------------------------
`);

// Starting the program
const getRandEvent = () => {
	const random = Math.floor(Math.random() * 3); // Using a random number to choose the Marathon Event
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
 
const getTrainingDays = event => { // Function with day datas;
let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

/* -----------------------------
Atlhete Number 1
------------------------------ */
let name = 'Nala';

const logEvent = (name) => {
  let event = getRandEvent();
  console.log(`${name}'s event is: ${event}`);
  console.log(`${name}'s time to train is: ${getTrainingDays(event)} days
`);
};

// printing the result
logEvent(name);

/* -----------------------------
Atlhete Number 2
------------------------------ */
name = 'Warren';
logEvent(name);

/* -----------------------------
Atlhete Number 3
------------------------------ */
name = 'Sam';
logEvent(name);

/* -----------------------------
Atlhete Number 4
------------------------------ */
name = 'Bob';
logEvent(name);