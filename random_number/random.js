/*
const min = 50;
const max = 100;

let randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber); */
const loading = document.getElementById('loading');
const button = document.getElementById('btn');
button.addEventListener('click', () => {
 loading.style.display = "block";
    setTimeout(() => {
        loading.style.display = "none";
        const min = 0;
        const max = 75;
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        const display = document.getElementById('lbl');
        display.textContent = randomNumber;

        // display all numbers rolled so far
        const allNumbers = document.getElementById('result');
        // Store rolled numbers in an array
        if (!window.rolledNumbers) window.rolledNumbers = [];
        window.rolledNumbers.push(randomNumber); // to add the new number to the array to the last after using push method
        allNumbers.textContent = window.rolledNumbers.join(', ');

       
    }, 1000);



});
