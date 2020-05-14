let car = {
  name: 'Ferari',
  color: 'white',
  turnOn: function() { console.log('Car is tunred on!'); },
  drive: function() { console.log('The car is being drive'); }
};

console.log(car.name);
car.turnOn();
car.drive();
