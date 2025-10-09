//Advantages of express:
// in node we need to handle all methods differently, using switch case or if else,
// we have to use create server method to create a server
// for different works and different operations we have to use different modules, this is hectic.
//like for handling query or json we have to use different modules.

const express = require("express")

const app = express();

app.get('/',(req,res)=>{
    res.send("this is Home Page");
})

app.get('/about',(req,res)=>{
    res.send("this is about page"+" hey! "+ req.query.name);
})

app.listen(8000, ()=>{
    console.log("server is started running");
    
})


//restful APi - representational state transfer api

//works on server - client architecture. server and client different machines hai, dono ek dusre par dependent nahi honge.

//client request the data to Server, and server will give response as a raw Format(Json format), now client will show it in the format it needed.

//always respect all http methods- get/post/put/patch/delete

