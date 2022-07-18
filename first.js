//console.log('Hllo 123');

/*
let name = 'enris';
console.log(name);
*/

/*
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);
*/

/* variables
let name = "e"; //string or 'e'
let age = 30; // number
let isApproved = true; //boolean
let firstName = undefined; //undefined
let lastName = null; 
*/

/* objects
let person = {
    name: 'e',
    age: 30
};

person.name = 'k';
console.log(person);
console.log(person.name);

person['name'] = 'A';
console.log(person.name);
*/

/*arrays
let sc = [];//arrays

sc = ['red','blue'];
sc[2]='green';
sc[3]= 1;
console.log(sc);
console.log(sc[0]);
*/


function greet(){
    console.log('hello world');
}

greet();

function greet(name){
    console.log('hello ' + name);
}

greet('john');

function square(number){
    return number * number;
}

let nr = square(2);
console.log(nr);
