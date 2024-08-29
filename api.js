const express = require("express");
const user = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

// Middleware - plugin:
app.use(express.urlencoded({extended: false}));

app.use((req,res,next)=>{
    req.myname = "Rishu Raj"
    console.log("Hello from middleware 1");
    // res.end("hello!");
    next();
});

app.use((req,res,next)=>{
    fs.appendFile("./log.txt",`\n${Date.now()}: ${req.method}: ${req.path}: ${req.url} `,(err,data)=>{
        next();
    });
});

app.use((req,res,next)=>{
    console.log(req.headers);
    res.setHeader("X-MyName","Rishu Raj"); // always append X in front for custom headers.
    console.log("Hello from middleware 2: "+req.myname);
    next();
})


app.get("/api/users",(req,res)=>{
    return res.json(JSON);
});

app.get("/users",(req,res)=>{
    const html = `
    <ul>
        ${user.map((users)=>`<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const use = user.find((users) => users.id === id);
    return res.json(use);
});

// group routing:

app.route("/api/users/:id")
.post((req,res)=>{
    const body  = req.body;
     
    user.push({ id: user.length + 1 , ...body})
    // console.log(body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), ( err, data)=>{
        return res.status(201).json("Success!");
    });
})
.patch((req,res)=>{
    return res.json({status: "pending"});
})
.delete((req,res)=>{
    return res.json({status: "pending"});
});


app.listen(8000,()=>{
    console.log("Server Started!")
});