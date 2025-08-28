function appendNumber(num){

    document.getElementById("display").value += num;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    let expression = document.getElementById("display").value;

    expression = expression.replace(/[^0-9+\-*/.]/g, "");

    try {
        let result = new Function('return ' + expression)();
        document.getElementById("display").value = result;
    }catch (error) {
        document.getElementById("display").value = "Error";
    }
}