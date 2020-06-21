const person={
    name: 'Shay',
    lastName: 'Cerny',
    age: 21,
    music:['Coldplay', 'Oasis', 'Rolling Stones', 'Beatles'],
    address:{
        city: 'Vegas',
        country: 'USA' 
    }
}

console.log(person.music[2]);
console.log(person.address.country);
console.log(person['address']['country']);

const name = "Briun", job="web developer";

//console.log("Name: " + name + ", Job:" + job);
//template string

console.log(` Name: ${name}, job: ${job}`);

const divHTML = document.getElementById('msg');

let html= '<ul>' +
           "<li> Name: " + name + "</li>" +
           "<li> Job: "  + job  + "</li>" +    
           "</ul>";

//template string

let html2 =` <ul>
                <li> Name: ${name} </li>
                <li> Job: ${job} </li>
             </ul>
             ` ;

divHTML.innerHTML+html2;             
