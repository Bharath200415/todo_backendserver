//write basic express boilerplate code 
const express = require("express");
const {createTodo}= require("./types");
const {updateTodo} = require("./types");


const app = express();

app.use(express.json());
//body{
    //title:string;
    //description:string
//}

app.post("/todo",function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }


})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json(
            msg:"You sent the wrong inputs",

        )
        return;
    }

})


app.listen(3000,function(){
    console.log(`Listening on ${port}`);
})

