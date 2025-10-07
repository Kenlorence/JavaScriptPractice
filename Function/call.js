// create a object
let person = {
    name: "ken",
    Introduce(greetings){
        console.log(`${greetings}, ${this.name}`)
    }
};
// call 
person.Introduce("Hello");
