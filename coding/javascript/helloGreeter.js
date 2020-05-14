// create a default set of 24 hours clock, and based on time it greets the user
// i am not using actual time, it will be random

let currentTime = Math.floor(Math.random() * 24) + 1;
console.log(`Time is ${ currentTime }`);

if (currentTime >= 4 && currentTime <= 12) {
  console.log('Good Morning!');
} else if (currentTime >= 12 && currentTime <= 15) {
  console.log('Good Afternoon!');
} else if (currentTime >= 15 && currentTime <= 20) {
  console.log('Good Evening!');
} else {
  console.log('Good Night!');
}
