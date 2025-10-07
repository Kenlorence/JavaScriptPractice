// create a object
let person1 = {
    name: "ken",
    lastName: "Gara",
    Introduce(greetings){
        return  console.log(`${greetings}, ${this.name}, ${this.lastName}`);
        
    }
};
// call 

let person2 = {
    name: "Jheril",
    lastName: "Melgarejo",
    
};

const person = {
    fullName: function(){
    return  console.log(`${this.name}, ${this.lastName}`);
        
    }
}
person.fullName.call(person2);
person.fullName.call(person1);
person.fullName.call(person3);