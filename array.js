let names = ["Sachit","Rochak","Shrey","Utsav","Srijan","Bibhor","Manish","Pratik","Roshan","Ram"];
console.log(names.length);
/**for(let i = 0; i< names.length; i++)
{
    
    console.log(names[i]+" is his name");
}
//easy way.
for(let i in names){ //for in loop.


    console.log(names[i]);
}
//another way.*/
/*let i = 0;
for(let item of names)
{
    i++;
    console.log(i+". "+item);
}

for(let i in names){
    console.log(`${parseInt(i)+1}. ${names[i]}`);
}*/
/*let i = 0;
let fruits = ["apple","mango",1,"grapes","banana"];
while(fruits[i]!= 1){
    console.log(fruits[i]);
    i++
}*/

let a ="New to programming";
console.log(a);
console.log(a.length);
console.log(a.slice(2,7));
console.log(a.substring(2,7));
console.log(a.substr(2,17));
console.log(a.concat(" I am" ));
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim());
console.log(a.split(" "));

function counting(){
    const textElement = document.getElementById("text");
    const resultElement = document.getElementById("result");
    let text = document.getElementById("text").value
    

            text = text.trim();
            let result = text.split(" ");
            console.log(result);
            let count = 0;
                for(let item of result){
                    if(item !="")
                    count++;
                }
             
                    document.getElementById("result").innerHTML = `total Words: ${count}`;
        

    
}   