// call a function over and over until the guess is correct

let num = Number(prompt("Enter the number: "));

function guessMe(num) {
  if (num == 3) return "Number Guessed correctly";
  console.log('Wrong Guess!');
  num = Number(prompt("Enter the number: "));
  guessMe(num);
}

guessMe(num);
