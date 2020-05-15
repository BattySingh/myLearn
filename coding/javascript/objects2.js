function myObj(name, color, wheels, manufacturer) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
  this.manufacturer = manufacturer;
}

let Car1 = new myObj('car1', 'red', 4, 'hundai');
let Car2 = new myObj('car2', 'green', 4, 'bmw');

console.log(Car1.name);
console.log(Car2.manufacturer);
