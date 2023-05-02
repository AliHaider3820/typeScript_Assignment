"use strict";
/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test
and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let x = 5;
let y = 10;
let z = "5";
let colors = ["red", "green", "blue"];
let car = { make: "Toyota", model: "Corolla" };
// Test 1: Is x greater than y?
console.log("Is x > y? I predict False.");
console.log(x > y);
// Test 2: Is x less than or equal to y?
console.log("Is x <= y? I predict True.");
console.log(x <= y);
// Test 3: Is the color "pink" in the colors array?
console.log("Is 'pink' in colors? I predict false.");
console.log(colors.includes("pink"));
// Test 4: Is x not equal to y?
console.log("Is x != y? I predict True.");
console.log(x != y);
// Test 5: Is the length of the colors array greater than 2?
console.log("Is the length of colors > 2? I predict True.");
console.log(colors.length > 2);
// Test 6: Is the color "red" in the colors array?
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes("red"));
// Test 7: Is the car make "Toyota"?
console.log("Is the car a Toyota? I predict True.");
console.log(car.make === "Toyota");
// Test 8: Is the car model "Camry"?
console.log("Is the car a Camry? I predict False.");
console.log(car.model === "Camry");
// Test 9: Is x less than 10 AND y greater than 5?
console.log("Is x < 10 AND y > 5? I predict True.");
console.log(x < 10 && y > 5);
// Test 10: Is x less than 4 OR y greater than 15?
console.log("Is x < 4 OR y > 15? I predict False.");
console.log(x < 4 || y > 15);
