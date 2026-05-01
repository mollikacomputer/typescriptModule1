"use strict";
const course = "Next Level Web development";
console.log("Corse name", course);

// const fruits = ["banana", "Apple", "Orange", "Tomato"];

// delete fruits[2];

// console.log(fruits);
const fruits = ["banana", "Apple", "Orange", "Tomato"];

fruits.splice(2, 1, "Lichi"); // index 2 থেকে 1টা remove করে "Lichi" বসায়

console.log(fruits);
