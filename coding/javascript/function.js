// create a function and console a value of variable
// invoke the function 3 times, increasing the variable value on each call
// create a function to output the result of adding 10 to a number that is passed into the function

let myNum = 5;

function myFunction(myNum) {
  console.log(myNum);
}

myFunction(myNum);
myNum++;
myFunction(myNum);
myNum++;
myFunction(myNum);

let myNewNum = 3;
function myFun(myNewNum) {
  console.log(myNewNum + 10);
}

myFun(myNewNum);
