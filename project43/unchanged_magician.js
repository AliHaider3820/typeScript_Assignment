"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Magicians = ["Hassan", "Anwar", "Faryad", "Sarwar", "Shabaz"];
let make_great = (arry) => {
    for (let index = 0; index < arry.length; index++) {
        arry[index] = "The Great " + arry[index];
    }
};
function show_magicians(arry) {
    for (let index = 0; index < arry.length; index++) {
        console.log(arry[index] + " Magician.");
    }
}
console.log("The original Magician array.");
show_magicians(Magicians);
make_great(Magicians);
console.log("\nThe modify Magician array.");
show_magicians(Magicians);
