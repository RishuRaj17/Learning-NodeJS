const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from home page!" + "your Love name: " + req.query.love)
});

app.get("/about",(req,res)=>{
    res.send("Hello from about page!")
});

app.listen(8000,()=>{
    console.log("server created!")
});