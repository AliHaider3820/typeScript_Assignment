/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
around the name is displayed. Then print the name after striping the white spaces
*/

export{};
const Name="\thaider\t";
console.log("Name with white spaces :\n ",Name);
console.log("Name after removing white spaces :\n",Name.trim());  // trim method remove the whitespaces begning and ending.
