function looping(num) {
  if (num > 10) return "Reached 10";
  console.log(num);
  num++;
  looping(num);
}

let num = 1;
looping(num);
