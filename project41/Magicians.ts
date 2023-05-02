/* 
Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array.
*/

let Magicians: string[]=["ali","usama","talha","Ishaq","faiez"];
function show_magicians(arry:string[]){
    for (let index = 0; index < arry.length; index++) {
     console.log ( arry[index]);
        
    }
}

show_magicians(Magicians);