const {Client} = require("pg");
const express = require("express");
const app = express();
app.use(express.json());

const con = new Client({
    host:"localhost",
    user: "postgres",
    port: 5432,
    password:"Amber786",
    database: "test_pg_node"
})

con.connect().then(()=> console.log("connected"));

app.post('/postData',(req,res)=>{

    const {name,id} = req.body;

    const insertQuery = "INSERT INTO demoTable (name,id) VALUES ($1,$2)"

    con.query(insertQuery,[name,id],(err,result)=>{
            if(err){
                console.error("error posting data", err);
                
                res.send(err)
            }
            else{
                console.log(result);
                
                res.send("posted successfully")
            }
    })
})

app.get('/fetchData',(req,res)=>{
    const fetchQuery = "SELECT * FROM demoTable";

    con.query(fetchQuery,(err, result)=>{
        if(err){
            console.error(err);
            
        }
        else{
            console.log("data found successfully");
            
            res.send(result.rows);
        }
    })
})

app.get('/fetchById/:id',(req,res)=>{
    const id= req.params.id;

    const fetchById = "SELECT * FROM demoTable WHERE id=$1";
    
    con.query(fetchById,[id],(err,result)=>{
        if(err){
            console.error(err);
            
        }
        else{
            res.send(result.rows);
        }
    })
})

app.listen(3001, ()=>{
  console.log("server is running");
    
})