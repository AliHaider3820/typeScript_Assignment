"use strict";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Size: ${size.toUpperCase()}, Message: ${message}`);
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("medium");
// Custom shirt
make_shirt("small", "JavaScript is also cool");
