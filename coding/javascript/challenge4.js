// Take user's name and it's favorite anime and using template literal display data to the user

// getting the name of the user
let myName = prompt("What is your name?", "Guest");

// getting the favorite anime the user likes to watch
let myAnime = prompt("Which is your favorite anime?", "No anime");

// displaying the data to the user using template strings
console.log(`Hello ${ myName }, so your favorite anime is ${ myAnime }`);
