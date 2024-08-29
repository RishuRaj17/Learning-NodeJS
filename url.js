const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true); // making parseQueryString true so that we can seperate value from query.
    console.log(myUrl);
    switch(myUrl.pathname){
        case "/":
            console.log(req.method)
            res.end("Home Page");
            break;
        case "/about":
            const user = myUrl.query.myname;
            res.end(`Hello ${user}`);
            console.log(req.method) // check http method type.
            break;
        case "/signup":
            if(req.method === "GET"){
                res.end("Success!");
            }
            break;
        default:
            res.end("404 Not found!");
            break;
    }

}); 

server.listen(8000,()=>{console.log("Server Created!")});