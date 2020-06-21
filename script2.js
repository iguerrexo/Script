let band="Metallica"
song="Enter Sandman"

let name;

name= band + ":" + song;
console.log(name);

console.log(name.length);

name = name.concat(" ", "and it's cool...");
console.log(name);

name=name.toUpperCase();

name=name.toLowerCase();
console.log(name);

let activity= "I'm Learning JS with the FSDI";

name=activity.split(''); //divide a string
console.log(name);

let hobbies= "read, walk, drink coffee, play volleyball, netfli";
name = hobbies.split(',');

name=activity.replace('JS','JavaScript'); //Replace a value
name = activity.includes('JS');

console.log(name);

let email = "sjimenez@sdgku.edu";

name= email.includes('@')

console.log(name);