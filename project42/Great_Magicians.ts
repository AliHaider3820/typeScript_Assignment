/*Great Magicians: Start with a copy of your program from previous project.
Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
 */
let Magicians: string[]=["Hassan","Anwar","Faryad","Sarwar","Shabaz"];

let make_great=(arry:string[])=>{
for (let index = 0; index < arry.length; index++) {
    arry[index]="The Great "+arry[index];
    
}
}
function show_magicians(arry:string[]){
    for (let index = 0; index < arry.length; index++) {
     console.log ( arry[index]);
        
    }
}
make_great(Magicians);
show_magicians(Magicians);

export{};