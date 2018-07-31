// Description
console.log(`------------------------------------
This program is about Sleep Debt. If you don't sleep enough, you will accumulate sleep debt.
You may tell us how many hours do you sleep per night and we will tell you how far you are from your weekly sleep goal.
------------------------------------
`);

// Startint the program
function getSleepHours(day){ // Here you will put how many hours do you sleep per day
  day = day.toLowerCase();
  switch(day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}


function getActualSleepHours(){ // this function  just determine how many hours do you sleep per week.
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function idealHours(){ // function to calculate the ideal Hours
  let idealHours = 8*7; // 8 hours per day
  return idealHours;
}

function sleepDebt(){ // the ideal sleep hour is eight per night and this function return the sleep debt
  const debt = idealHours() - getActualSleepHours();
  return debt;
}

function resultSleepDebt(){
  if(getActualSleepHours()<idealHours()){
    return `you aren't sleeping enough per week. Your Sleep Debt is ${sleepDebt()} hours`;
  } else if(getActualSleepHours()>idealHours()){
    return `you're a sleepy.`
  } else{
    return `your total sleeping time per week is ideal! Congratulations.`;
  }
}

// Printing in console the result
console.log(`In a week, you sleep ${getActualSleepHours()} hours.
The ideal is sleep ${idealHours()} hours per week. 
So, ${resultSleepDebt()}`);
