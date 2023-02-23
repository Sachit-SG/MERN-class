/*for(let i=1; i<=100;i++){
    if(i%2!=0){
        console.log("Odd numbers is :"+i);
    } 
}    

for(let i=1; i<=100;i++){
    if(i%2==0){
        console.log(`Even numbers is : ${i}`);
    }
}    
console.log('hello\'World!');

let num=1;
while(num<=10){
    console.log(num)
    num++;
}
let n = 1
do{
    console.log(n);
    n ++;
}while(n<=20)
*/
/*let i=2001;
for (;i<2030;i++)
{
    if(i%4 == 0){
        console.log(i+" is a Leap Year.");
    }
    
}
*/
/*let i = 0;
let sum = 0;
for(;i<=10;i++)
{
    sum = sum+ i;
   
    console.log(sum);
    
}
*/
/*let a
do{
     a = prompt("Enter a number")
    console.log(a);
}while(a != "1" );
*/
let sum = 0;
function add(){
    let num1 =parseInt(document.getElementById("num1").value);
     let num2 = parseInt(document.getElementById("num2").value);
     console.log(num1);
     console.log(num2);
    for(let i = num1; i<=num2; i++) 
    {
         sum = sum+i;     
     }
     document.getElementById("result").innerHTML =  sum;
}

