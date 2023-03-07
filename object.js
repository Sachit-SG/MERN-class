const obj ={
    name: "Ram",
    age: 12,
    intro:  ()=> { // in arrow function it always takes global variable. so in this it wont print name.
        console.log("My name is "+ this.name)
    }
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.intro())

function user(name,age){
    return{
        name: name, //key: value if key and value are same then we can write name,
                                                                           //age
        age: age,
        intro: function(){
            console.log("My name is "+ this.name + "Age= "+this.age);
        }
    }
}

const user1 = user("Ram",12);
const user2  = user("Hari",22);

user1.intro();
user2.intro();

