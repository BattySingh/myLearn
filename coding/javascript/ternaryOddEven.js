// Program to check if a number is odd or even using ternary operator

let myNum = prompt("Enter the number:");

if (!(isNaN(myNum))) {
  let res = (myNum % 2 == 0) ? "Is Even" : "Is Odd";
  console.log(myNum + " " + res);
}
