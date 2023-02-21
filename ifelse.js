function ageGroup(){
    const ageElement = document.getElementById("age");
    const resultElement = document.getElementById("result");
    let age = parseInt(document.getElementById("age").value)

   
    
    if(age <= 18 && age>0){
        resultElement.innerHTML = "Group A."
    }
    else if (age>18 && age<=35){
        resultElement.innerHTML = "Group B."
    }
    else if (age>35 && age<=60){
        resultElement.innerHTML = "Group C."
    }
    else if(age>60){
        resultElement.innerHTML = "Group D."
    }
    else {
        resultElement.innerHTML = "Invalid Input"
    }    
    document.getElementById("age").value = ""//to make dissapier the value.
}
function checkAge(){
    const ageElement = document.getElementById("age");
    const calculateElement = document.getElementById("calculate");
    let age = parseInt(document.getElementById("age").value)

   
    
    if(age <= 18 && age>0){
        calculateElement.innerHTML = "Child"
    }
    else if (age>18 && age<=60){
        calculateElement.innerHTML = "Young"
    }
    else{
        calculateElement.innerHTML = "Old"
    }
    document.getElementById("age").value = ""//to make dissapier the value.
}