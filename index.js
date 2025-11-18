//write basic express boilerplate code 
const express = require("express");
const {createTodo,updateTodo}= require("./types");
const {todo} = require("./db")
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//body{
    //title:string;
    //description:string
//}

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find(); //its a promise

    //condition based fetching the data
    // todo.find({
    //     title:"go to gym"
    // })

    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    const todoupdated = await todo.update({
        _id:req.body.id
    },{
        completed:true
    }) 
    res.json({
        msg:"todo mark as completed"
    })

})


app.listen(3000,function(){
    console.log("listening on 3000");
})

