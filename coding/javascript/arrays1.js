let arr = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

arr.push('hii');
arr.push('hlo');
arr.pop();
console.log(arr);

console.log('**********************************************');

let myNums = [25, 80, 55, 2, 100, 99];
myNums = myNums.filter(function(num) {
  return num > 75;
});

console.log(myNums);
