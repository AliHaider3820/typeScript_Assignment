/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

let alien_color2: string = 'red';

if (alien_color2 === 'green') {
  console.log('Congratulations! You just earned 5 points!');
} else {
  console.log('Congratulations! You just earned 10 points!');
}
// In this version of the program, the alien's color is red,
//  so the else block is executed and a message is printed to 
// the console indicating that the player earned 10 points!
export{};