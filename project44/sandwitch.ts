/* 
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time
*/

function Order_Sandwich(...items: string[]): void {
    console.log("You have ordered a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
      console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
  }
  
  Order_Sandwich('Chicken', 'Lettuce', 'Tomato', 'Mayonnaise',);
  Order_Sandwich('Eggs', 'Cheese', 'Olives','Chicken Patty');
  Order_Sandwich('Peanut Butter', 'jelly','Chocolate');
  