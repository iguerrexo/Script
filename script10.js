const points = 10.00;

if(points === 10){
    console.log(`You Lost`);
}

const logged = true;


if(logged){
    console.log("Welcome to the system");
}else{
    console.log("Please enter the correct password");
}

let cash = 500;
let totalCart = 600;
let creditcard=false;

if(cash > totalCart){
    console.log('You paid with a credit card');
}else if(creditCard){
    console.log('You paid with a credit card');
}else{
    console.log('Incorrect transaction');
}

const payMethod = 'cash';

switch(payMethod){
    case 'cash':
            Hello();
            break;
    case:'credit card':
        console.log('Master or Visa');
        break;
    default:
        console.log('Add a vaule method');
        break;
}

function Hello(){
    console.log("Hello");
}