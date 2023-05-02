/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

export{};
let Name: string = "Ali haider";

console.log(Name.toLowerCase()); // prints "ali haider"
console.log(Name.toUpperCase()); // prints "ALI HAIDER"
console.log(toTitleCase(Name)); // prints "Ali Haider"
/*
\w matches any word character (i.e. a-z, A-Z, 0-9, and underscore).
\S matches any non-whitespace character.
* means match zero or more occurrences of the preceding pattern, which in this case is \S.
/g is a flag that makes the regular expression match all occurrences in the string, rather than just the first.
So \w\S* matches a word character followed by zero or more non-whitespace characters. This effectively matches each word in the string.
*/
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  /*
  n TypeScript, the substr() method is used to extract a portion of a string starting 
  from a specified index and continuing for a specified number of characters.
  */
}
