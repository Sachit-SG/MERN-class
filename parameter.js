function sayhi(name)
{
    return `hi ${name}`;
}
function sayhello(name)
{
    return `hello ${name}`;
}
function display(name, getMsg)//to connect all function and to display message.
{
    console.log(getMsg(name));
}
function takeAction(action)
{
    const username = document.getElementById('name').value 
    switch(action)
    {
        case "hi":
            display(username, sayhi);//display le print garne kam garxa
            break;
        case "hello":
            display(username, sayhello);
            break;
        default:
            console.log("Invalid input");       
    }
}