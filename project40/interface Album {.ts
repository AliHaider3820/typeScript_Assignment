/*
Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries 
representing different albums. Print each return value to show that Objects are storing the 
album information correctly. Add an optional parameter to make_album() that allows you to 
store the number of tracks on an album. If the calling line includes a value for the number 
of tracks, add that value to the album’s Object. Make at least one new function call that 
includes the number of tracks on an album.
*/

//using interface in this program.

interface Album {
  artist: string;
  title: string;
  tracks?: number; // make the tracks property optional with "?"
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist: artist,
    title: title
  };
  
  if (tracks) { // add tracks if it is defined
    album['tracks'] = tracks;
  }
  
  return album;
}

// create three album Objects
let album1 = makeAlbum('The Beatles', 'Abbey Road');
let album3 = makeAlbum('Pink Floyd', 'The Wall', 26);
let album2 = makeAlbum('Radiohead', 'OK Computer', 12);

// print each album Object
console.log(album1);
console.log(album2);
console.log(album3);
