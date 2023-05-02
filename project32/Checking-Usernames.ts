/*
Checking Usernames: Do the following to create a program that 
simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. 
  Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users = ['Ali', 'usama', 'Ishaq', 'haider', 'Talha'];
let new_users = ['HAIDER', 'Faiez', 'kashan', 'Talha', 'Usama'];

for (let i = 0; i < new_users.length; i++) {
  let new_user = new_users[i];
  let usernameTaken = false;
  
  for (let j = 0; j < current_users.length; j++) {
    if (new_user.toLowerCase() === current_users[j].toLowerCase()) {
      usernameTaken = true;
      break;
    }
  }

  if (usernameTaken) {
    console.log(`Sorry, username '${new_user}' is already taken.`);
  } else {
    console.log(`Great! Username '${new_user}' is available.`);
  }
}
