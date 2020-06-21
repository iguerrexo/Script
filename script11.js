// Declartion
function Hello(){
    console.log("Hello Friends");
}

//Use it
Hello();
//function declartion
function Traveling(country){
    return 'Traveling to' + country;
}

console.log(Traveling('Italy'));

//function expression 
//let Traveling2 = function(city){
//        return 'Traveling to' + city;
//}

//let travel;

//travel = Traveling2('Naples');
//console.log(travel);

//autocalling function

(function(topic)){
    console.log('I am learning' + topic);
})('JaveScript');

// arrow function

let Traveling2 = city => 'Traveling to'+city;

let travel;

travel+Traveling2('Naples')
console.log(travel);

const sum = (a,b) => a+b;

let total;

total + sum (5,5);
console.log(total);
