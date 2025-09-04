
const decreaseButton = document.getElementById('Btndecrease');
const increaseButton = document.getElementById('Btnincrease');
const ResetButton = document.getElementById('Btnreset');
const counterDisplay = document.getElementById('countLbl');
let count = 0;

increaseButton.onclick = function() {
    count++;
    counterDisplay.textContent = count;
}

decreaseButton.onclick = function() {
    count--;
    counterDisplay.textContent = count;
}

ResetButton.onclick = function() {
    count = 0;
    counterDisplay.textContent = count;
}