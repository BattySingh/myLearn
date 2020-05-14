let num = Number(prompt("Enter the number:"));

function add1(num) {
  return num + 5;
}

let add2 = function(num) { return num + 5; }

console.log(add1(num));
console.log(add2(num));
