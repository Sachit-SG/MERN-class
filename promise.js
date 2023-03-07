function sub(a,b)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        {
            let sum = a-b;
            if(sum<=0){
                resolve(sum + " Result is negative");
            }else{
                resolve(sum + " Result is positive");
            }
           // resolve(sum);
        },3000);
    });
}
    console.log("Goooo");
    //console.log(sub(10,5));
        // sub(1,5).then((result)=>
        // {      
        //     console.log(result)
        //     console.log("end");
        // }).catch((err)=>
        // console.log(err));
        //<-----we can use either .then() or async function to get the value from promise object------>
    
async function main(){
    try{
        console.log("start")
    let result = await sub(1,5);
    console.log(result);
    console.log("end")
    }catch(err){
        console.log(err);
    }
    
}
main();
console.log("hello");