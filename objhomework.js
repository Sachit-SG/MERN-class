const users = [];

function User(name,age){
    return{
    name,
    age,
    intro: function(){
        alert(`HI my name is ${this.name}. I am ${this.age} years old`);
        },
    };
}

function formatuser(index, user){
    return`
    <li>
        ${index+1}.${user.name}
        <ul>
            <li>Age: ${user.age}</li>
            <li><button onclick="intro($user.intro})">Say Hi</button></li>
        </ul>
    </li>`;

}

function intro(fn){
    fn()
}

function createuser(){
    const nameElement = document.getElementById("name");
    const ageElement = document.getElementById("age");

    const user = User(nameElement.value, ageElement.value);
    users.push(user);

    nameElement.value = "";
    ageElement.value ="";

    document.getElementById('user-list').innerHTML= users.map((user,index)=> formatuser(index,user))
}

function validate(user){
    if(nameElement.value =='null' && ageElement.value  =='null'){
        return `Invalid Input`
    }
}