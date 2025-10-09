const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json')
const PORT = 8000;


app.get('/users',(req,res)=>{
    const html = `
     <ul>
        ${users.map((user)=>
           `<li>${user.first_name}</li>`
        ).join("")}
     </ul>
    `

    res.send(html);
})


app.get('/api/users',(req,res)=>{
    res.json(users)
})

// app.get('/api/users/:id',(req,res)=>{
//         const id = Number(req.params.id);

//         const user = users.find((user)=>{
//                 return user.id === id;
//         })
// })

app.post('/api/users',(req,res)=>{
    res.json({status:pending});
})

// app.patch('/api/users/:id',(req,res)=>{
//     res.json({status:pending});
// })

// app.delete('/api/users/:id',(req,res)=>{
//     res.json({status:pending});
// })

app.route('/api/users/:id').get((req,res)=>{
     res.json({status:pending});
 }).patch((req,res)=>{
    res.json({status:pending});
}).delete((req,res)=>{
    res.json({status:pending});
});

app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`);
    
})