// Challenge to check if a variable is assigned a value

let message = "I am outside if block";

if (message) {
  message = "I am changed inside if block";
  console.log(message);
}

console.log("Outside if block");
console.log(message);
