
const myarr = [];

const number = document.getElementById("num");
const marks = document.getElementById("marklist");


function calculate(){
    const num = parseInt(number.value)
    if(!isNaN(num) && num>=0 && num<=100){
        number.value='';
        myarr.push(num);
    }else{
        alert('please enter a valid mark')
    }
        marks.innerHTML = myarr.map(item => `<b>${item}<b>`);
        document.getElementById("num").value = ""
    }  
    


function Getresult(){
    if(myarr.every(item=> item>=40))
    {
        result = 'pass'
    }else{
        result = 'Fail'
    }
    
    const total = myarr.reduce((total, item)=> total + item);
    percentage = total/myarr.length;

    document.getElementById('result').innerHTML= result;
    document.getElementById('percentage').innerHTML= percentage;
}     


        
       