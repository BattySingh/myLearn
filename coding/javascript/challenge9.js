// Ask age from user via prompt
// check if they are over 18+ using ternary operator
// set a membership boolean value, and add second check to ensure user is member

let age = prompt("Enter your age:");

if (!(isNaN(age))) {
  let isOverAge = (age >= 18) ? true : false;
  let hasMembership = Math.round(Math.random());

  if (hasMembership && isOverAge) {
    console.log("You are allowed inside the club");
  } else {
    console.log("Entry denied");
  }
}
