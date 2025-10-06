function CheckStrength(){
    let strong = 0;
    const regex = /[!@#$%^&*()]/g;
    const UpperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const password = document.getElementById('pass').value;
    const Status = document.getElementById('bar');
    const Indication = document.getElementById('indicate');

    
    if (password.length >= 12){
        strong++;
       // console.log('Weak')
    }
    if(lowerCase.test(password)){
        strong++;
       // console.log('Mid')

    }
     if(UpperCase.test(password)){
        strong++;
       // console.log('Mid')

    }
    if(regex.test(password)){
        strong++;
       // console.log("strong")
    }


if(strong === 1){
    Status.style.width = "33%";
    Status.style.backgroundColor = "red";
    Indication.textContent = "Weak";
    
}else if(strong === 2){
   Status.style.width = "66%";
    Status.style.backgroundColor = "yellow";
    Indication.textContent = "mid";
    
}else if(strong === 3){
   Status.style.width = "100%";
    Status.style.backgroundColor = "green";
    Indication.textContent = "Strong";
    
}

}