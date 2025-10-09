//middlewares are the functions that have access to request and response objects, and the next middleware function in the request response cycle.
//the next middle ware function is commonly denoted by the name next.

const express = require('express')
const app = express();

app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("hello from middleware 1");
    next();
})

app.get("/",(req,res)=>{
    res.send("hello there")
})

app.listen(8000, ()=>{
    console.log("server statted at port 8000");
    
})