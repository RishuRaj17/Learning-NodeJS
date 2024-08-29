const http =  require("http");
const url = require("url");

function app(req,res){
    switch(req.url){
        case "/":
           res.end("Hello World!");
           break;
        case "/about":
            res.end("Hello aBOUT PAGE!");
            break;

    }
}

const server = http.createServer(app);
server.listen(8000,()=> console.log("Server Created!"));