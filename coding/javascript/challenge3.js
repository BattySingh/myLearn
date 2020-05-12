// Challenge to create a variable, and if it assigned a value then display a secret message, and then make it false to show different value

let myMessage = "This is my Message";

if (myMessage) {
  let secretMessage = "This is a secret message";
  console.log(secretMessage);

  myMessage = false;
}

if (myMessage) {
  // nothing here
} else {
  console.log("Oops! Variable is not assigned a truthy value");
}
