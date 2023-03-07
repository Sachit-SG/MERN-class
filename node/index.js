const http = require('http');
// const sayHi = require("./functions");

const server = http.createServer((req, res)=>{
    if (req.url =="/")
        res.write("Hello World");
    else if(req.url == "/home")
        res.write("Welcome to the home page")
    else
        res.write("404 not found")

    res.end()
});

server.listen(3000, ()=>{
    console.log("listening on port 3000")
}
);