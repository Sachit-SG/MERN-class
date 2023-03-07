class Info{
    #email
    #pin
    constructor(email,pin){
        this.#email = email;
        this.#pin = pin-4;
    }
    set email(email)
    {
        this.#email=email;
    }
    get email(){
        return this.#email
    }
   // set pin(pin)
    //{
     //   this.#pin=pin+4;
   // }
   get pin(){
    return this.#pin+4;
}
   set pin(pin){
    let oldPin = parseInt(prompt("Enter old Pin"))
    if(oldPin == this.#pin+4)
    {
        this.#pin = pin-4
    }else{
        alert("Incorret pin")
    }
   }
 
}
const u1 = new Info("ram@g.com", 1111)
 console.log(u1.email)
 console.log(u1.pin)
 console.log(u1);

u1.pin=5555;

console.log(u1.pin)
console.log(u1);
