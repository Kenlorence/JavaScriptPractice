// user input in java scrpt
let user;

document.getElementById("Submit").onclick = function() {

user = document.getElementById("username").value;


alert("Welcome " + user + " to my website");
document.getElementById("myH1").textContent = "Welcome " + user + " to my website";
}

