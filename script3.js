//convert string into numbers
let results;

result=Math.round(2.5);
result=Math.floor(2.99);
result=Math.ceil(2.01);

result=Math.sqrt(144);
result=Math.min(10,2,3,7,8);
result=Math.max(10,2,3,7,8);

console.log(result);

let number1 = 50,
    number2 = "10",
    number3 = "three",
    number4 = "20.20";

console.log(number1+number2);

console.log(Number(number2)+number1);

console.log(parseFloat(number4)+number1)

console.log(Number(number3));

let data= false;

console.log(Number(data));

//conver a number into a string

let info = 4512368978598978;

data= String(info);
console.log(data);
console.log(data.length);