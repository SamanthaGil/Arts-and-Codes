// Description
console.log(`This program is about a Race day.

Everyone can join and this program will say the race time based on age and time of arrival.
Everyone has a race number. If you arrive early, you will receive a race number above 1000. Otherwise or if you're young, your race number will be below 1000
`)

// Variables
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; //Arrived early?
const age = 20; // Age

// A variable to registered Early or not
if(registeredEarly){
  Early = "Yes";
} else{
  Early = "No";
}

// Printing your choices
console.log(`Your age: ${age}
Did you arrive early? ${Early}
`)

// Control flow
if(age>18){
  if(registeredEarly){
  	raceNumber+= 1000;
  	console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
  } else{
    console.log(`You will race at 11:00 am and your race number is ${raceNumber}`);
  }
} else if(age ===18){
  console.log(`You should see the registration desk`);
} else{
  console.log(`You will race at 12:30 pm and your race number is ${raceNumber}`);
}
