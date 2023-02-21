/*function check(){
    let age = parseInt(document.getElementById("age").value)

    console.log(age)
    
    if(age >= 18){
        document.getElementById("result").innerHTML = "you can vote"
    }
    else{
        document.getElementById("result").innerHTML = "you cann't vote."
    }
    document.getElementById("age").value = ""//to make dissapier the value.
//}*/
//doing it better
/*function check(){
    const ageElement = document.getElementById("age");
    const resultElement = document.getElementById("result");
    let age = parseInt(document.getElementById("age").value)

    console.log(age)
    
    if(age >= 18){
        resultElement.innerHTML = "you can vote"
    }
    else{
        resultElement.innerHTML = "you cann't vote."
    }
    document.getElementById("age").value = ""//to make dissapier the value.
}*/

function getDay(){
    const dayElement = document.getElementById("day");
    const resultElement  = document.getElementById("result");

    switch (dayElement.value.toLowerCase()){

    
    case "friday":
    case "saturday":
    case "sunday":
        resultElement.innerHTML = "Weekend.";
        break;
     
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thrusday":     
        resultElement.innerHTML = "Weekday."    
        break;  
   
    default:
        resultElement.innerHTML = "Invalid Day";       
    }   
}
