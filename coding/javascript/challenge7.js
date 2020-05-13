// to check if a number exists, and also check if it is greater than 50

let myNum = prompt("Enter the number: ");

if (myNum == "0") {
  myNum = 0;
}

if (myNum == "undefined") {
  myNum = undefined;
}

if (myNum == "null") {
  myNum = null;
}

if (myNum == "false") {
  myNum = false;
}

if (myNum) {
  console.log("Number exists!");
}

console.log(myNum);

if (myNum > 50) {
  console.log("Number is greater than 50");
}
