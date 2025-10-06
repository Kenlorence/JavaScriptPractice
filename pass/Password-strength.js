function CheckStrength(){
    let strong = 0;
    const regex = /[!@#$%^&*()]/g;
    const UpperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const password = document.getElementById('pass').value;
    const Status = document.getElementById('#status');

    
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


if (strong >= 3){
    Status.textContent = "Strong";
    Status.style.color = "green";
    
}else if(strong ==2){
    Status.textContent = "Mid";
    Status.style.color = "yellow";
    
}else{
   Status.textContent = "Weak";
    Status.style.color = "red";
    
}

}