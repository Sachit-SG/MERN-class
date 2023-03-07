function card(user){
    return `
    <div>
        <h1>${user.name}</h1>
        <ul>
            <li>Email: ${user.email}</li>
            <li>Phone: ${user.Phone}</li>
            <li>Address: ${user.address.street},${user.address.city}</li>
         </ul>
    </div>     
       `        
}
const userListElement = document.getElementById("user-list");

async function main()
{
    try{
        console.log("here")
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await result.json();
    
    userListElement.innerHTML = res.map(user=>card(user)).join("<br>");
    
    }catch(err){
        console.log(err);
    }

}
main();
console.log("Hello");