function CheckStrength(){
    let strong = 0;
    const regex = /[!@#$%^&*()]/g;
    const UpperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const password = document.getElementById('pass').value;

    
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
    console.log("Strong");
    
}else if(strong ==2){
    console.log("mid");
    
}else{
    console.log("Weak");
    
}

}