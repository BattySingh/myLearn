// Program to mulitply two numbers and returning the value

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if ((!(isNaN(num1))) && (!(isNaN(num2)))) {
  function multiply(num1, num2) {
    return num1 * num2;
  }

  console.log(multiply(num1, num2));
}
