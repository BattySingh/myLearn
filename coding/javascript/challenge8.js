// check if a number is greater than 10, also check if it is equal t 10

let myNum = Number(prompt("Enter the number:"));

if (!(isNaN(myNum))) {
  if (myNum > 10) {
    console.log(myNum + " is greater than 10.");
  } else if (myNum < 10) {
    console.log(myNum + " is smaller than 10.");
  } else {
    console.log("It is equal to 10");
  }
}
