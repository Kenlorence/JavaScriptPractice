/*user input in java scrpt
let user;

document.getElementById("Submit").onclick = function() {

user = document.getElementById("username").value;


alert("Welcome " + user + " to my website");
document.getElementById("myH1").textContent = "Welcome " + user + " to my website";
}
*/
// type conversion 
/*
let age = window.prompt("What is your age?");
age = Number(age);
// age = parseInt(age);
// age = parseFloat(age);
age += 10;

console.log( age, typeof age);

let x ;
let y ;
let z ;

x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
 
//constant variable
const PI = 3.14159; // always use const for unchanged data
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log("The circumference is: " + circumference);


let rad;
document.getElementById("Submit").onclick = function() {

    rad = document.getElementById("rad").value;
    //rad = Number(rad);
    const PI = 3.14159;
    let circum;
    circum = 2 * PI * rad;
    document.getElementById("result").textContent = "The circumference is: " + circum;
} */