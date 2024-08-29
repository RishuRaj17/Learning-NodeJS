const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    // console.log(req.headers);

    const log = `${Date.now()}: New Date\n`;

    fs.appendFile("./File System/log.txt",log,(err)=>{});

    switch(req.url){
        case '/':
            res.end("Root");
            break;
        case'/home':
            res.end("Home Page!");
            break;
        case '/about':
            res.end("About-Us");
            break;
        default:
            res.statusCode = 404;
            res.end("404 page not found!");
    }


    // res.end("Hello World!..");
});

server.listen(8000,()=> console.log("Server Started!"));