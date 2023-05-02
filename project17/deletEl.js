"use strict";
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from previous project. Add a new line that prints a message saying that you
can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let gustName = ["Talha", "Ishaq", "Usama", "Faiez"];
console.log("List before adding friends names:\n", gustName);
console.log("I have found a bigger dinner table.So I invite 3 more friends:\nThe new list of friends:");
gustName.unshift("Hassan"); // this method used to add element at first index.
gustName.push("Kashan"); // this method used to add element at last index.
gustName.splice(2, 1, "Sagheer"); // this method used to add element at specific index.
console.log(gustName);
console.log("Sorry, I can invite only two people for dinner.");
let i = gustName.length - 1;
while (i != 1) {
    gustName.splice(i, 1);
    i--;
    console.log(`Sorry ${gustName[i]} you are not invited`);
    //  i=i-1; => it make the elements of array undefine.
}
console.log(gustName);
console.log(`${gustName[0]}, you are invited.`);
console.log(`${gustName[1]}, you are invited.`);
gustName.splice(0, 2);
console.log(gustName, "\n Now I have an empty array.");
