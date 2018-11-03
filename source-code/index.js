
const HelloWorld = (message) => {
  console.log(message);
};

HelloWorld("Welcome to ES6");
/*
let a = 12; //Full scope
function myFunction() {
  console.log(a);
  let b = 13; //Function scope
  if(true) {
    let c = 14; // If scope
    console.log(b);
  }
  //console.log(c);// Error C is not defined
}
myFunction();*/

let numUno = 5;
let numDos = 10;
//ES6 functions
const sumar = (a, b) => {
    return a + b;
}

const restar = (a, b) => {
    return a - b;
}

const multiplicar = (a, b) => {
    return a * b;
}

const dividir = (a, b) => {
    return a / b;
}
console.log('ES6 Functions:');
console.log(sumar(numUno,numDos));
console.log(restar(numUno,numDos));
console.log(multiplicar(numUno,numDos));
console.log(dividir(numUno,numDos));

// Currying Functions
console.log('Currying Functions:');
const add = (a) => (b) => a + b;
const substract = (a) => (b) => a - b;
const multiply = (a) => (b) => a * b;
const divide = (a) => (b) => a / b;

console.log(add(numUno)(numDos));
console.log(substract(numUno)(numDos));
console.log(multiply(numUno)(numDos));
console.log(divide(numUno)(numDos));