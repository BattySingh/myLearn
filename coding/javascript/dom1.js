const btns = document.querySelectorAll('button');
console.log(btns);

let num1 = 3, num2 = 2, num3 = 5;

function message1() {
  num1++;
  console.log(num1);
}

function message2() {
  num2++;
  console.log(num2);
}

function message3() {
  num3++;
  console.log(num3);
}

btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;
