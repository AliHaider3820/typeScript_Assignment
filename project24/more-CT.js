"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and
one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
let string1 = "hello";
let string2 = "HELLO";
let num1 = 10;
let num2 = 20;
let num3 = 30;
let fruits = ["apple", "banana", "orange"];
let animal = "lion";
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == "hello");
console.log("Is string2 not equal to 'hello'? I predict True.");
console.log(string2 != "hello");
// Tests using the lower case function
console.log("Is string2 equal to 'hello' when converted to lower case? I predict True.");
console.log(string2.toLowerCase() == "hello");
console.log("Is string1 not equal to 'HELLO' when converted to lower case? I predict True.");
console.log(string1.toLowerCase() != "HELLO");
// Numerical tests
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num3 greater than or equal to num2? I predict True.");
console.log(num3 >= num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);
// Tests using "and" and "or" operators
console.log("Is num1 less than 5 OR num2 greater than 15? I predict False.");
console.log(num1 < 5 || num2 > 15);
console.log("Is num1 less than 5 AND num2 greater than 15? I predict False.");
console.log(num1 < 5 && num2 > 15);
// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));
// Test whether an item is not in an array
console.log("Is 'lion' not in the fruits array? I predict True.");
console.log(!fruits.includes(animal));
