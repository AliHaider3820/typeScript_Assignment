"use strict";
/*
They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.
*/
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    phoneNumbers: [
        {
            type: "home",
            number: "555-555-1234"
        },
        {
            type: "work",
            number: "555-555-5678"
        }
    ]
};
console.log("Person information:");
console.log(person);
