// this for var declarations
var num1, num2, num3; // multiple declarations in one statement
var num4 = 10; // declaration with initialization
var num5 = 20, num6 = 30; // multiple declarations with initialization

// now lets use them 

num1 = 5;
num2 = 15;
num3 = num1 + num2;
console.log("num1: " + num1);
console.log("num2: " + num2);
console.log("num3: " + num3);
console.log("num4: " + num4);
console.log("num5: " + num5);   
console.log("num6: " + num6);

var nums = [num1, num2, num3, num4, num5, num6];
let allNumber = "";
for (let number of nums) {
    allNumber += number + "<br>";
}

document.getElementById("nums").innerHTML = allNumber;
var result = num1 + num2 + num3 + num4 + num5 + num6;
console.log("Result: " + result);
document.getElementById("output").innerHTML = "Result: " + result;