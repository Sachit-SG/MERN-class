class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.country= "Nepal"
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}
//const ram = new User("ram",12);
const u1 = new User("ram", 12)
//console.log(ram.getName());
//ram.setName("hari");
u1.age = 50
console.log(u1);
//console.log(ram);
