const mongoose = require("mongoose");
const express =  require("express");

const app = express();

// plugin to let the express read form data
app.use(express.urlencoded({extended: false}));

// Connection Building:
mongoose
.connect("mongodb://127.0.0.1:27017/rishu")
.then(()=>console.log("MongoDb Connected!"))
.catch((err)=>console.log("Error Occured!: ", err));

// Schema Creation:
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String
    }
},{timestamps:true})


// Model Creation:
const user = mongoose.model("user",userSchema);


app.post("/api/users", async (req,res)=>{

    const body = req.body;
    // console.log(body.firstName);

    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg:"All fields required!"});
    }
    const result = await user.create({
        firstName:body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    console.log(result);

    return res.status(201).json({msg:"Success!"});

});


app.get("/users",async (req,res)=>{
    const allUsers = await user.find();
    const html = `
    <ul>
    ${allUsers.map((user)=>`<li>${user.firstName}</li>`).join("")}
    </ul>
    `;
    res.send(html);

    // return res.json(allUsers);
});

app.get("/api/users", async (req,res)=>{
    const allUsers = await user.find();

    const html =`
    <ul>
        ${allUsers.map((user)=>`<li>${user.firstName}</li>`).join("")}
    </ul>
    `;

    res.send(html);
})


app.get("/api/users/:id", async (req, res) => {

        const users = await user.findById(req.params.id);

        if (!users) {
            return res.status(404).send("User not found");
        }
        
        const html = `
        <ul>
            <li>${users.firstName}</li>
        </ul>
        `;

        res.send(html);
   
});

app.patch("/api/users/:id",async (req,res)=>{
    await user.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    res.json({msg:"Success!"});

})

app.delete("/api/users/:id",async(req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.json({msg:"Success"});
})

app.listen(8000,()=> console.log("Server Created!"));