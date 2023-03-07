//const A = ["Ram",14,"Kathmandu"];
//const B = ["Ram",14,"Kathmandu"];
//if (A==B){
//    console.log("they are equal");
//}else{
//    console.log("not equal")
//}

//setTimeout(()=>{
  //  console.log("hi");
//},5000)

//setInterval(()=>{
 //   console.log("hello");
//},3000);
   // function sayHi(){
    //    setTimeout(()=>{
     //       console.log("hi");
      //  },3000);
    //}
    // console.log("Start");
    // sayHi();
    // console.log("End");

    // function add(a,b){
    //     setTimeout(()=>{
    //         console.log(a+b);
    //     },3000);
    //     return a+b;
    // }
    // console.log("Start");
    // add(1, 2);
    // console.log("End");

    // function add(a,b, cb){ //cb is call back function it is calling end function 
    //     setTimeout(()=>{
    //         console.log(a+b);
    //         cb();
    //     },3000);
    // }
    // console.log("Start");
    // add(3,3, end);

    // function end(){
    //     console.log("end");
    // }
//-------------------------------------
    // function add(a,b,dd){
    //     setTimeout(()=>{   
    //         dd(a+b);
    //     },3000);
    // }

    // function mul(a,b,dd){
    //     setTimeout(()=>{
    //         dd(a*b);
    //     },3000);
    // }

    // function sub(a,b,dd){
    //     setTimeout(()=>{
    //         dd(a-b);
    //     },3000)
    // }
    // console.log("Start");

    // add(3,5, (s) => {
    //     mul(s, 2, (result) => {
    //         sub(result,3, (ss) =>{
    //             console.log(ss);
    //         })
           
    //     })
    // })
    //-----------------------
    function add(a,b)
    {
        return new Promise((result, reject)=>{
            setTimeout(()=>{
                resolve(a+b);
            },3000);
        });

    }
    console.log("start")
    console.log(add(3,5));
    console.log("end");