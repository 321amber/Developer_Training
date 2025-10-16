const express = require('express');
const router = express();

router.post('/userInfo',()=>{
       const body = req.body;
        console.log(body);

    try{
        res.status(200).json({
            message:"user info got successfully",
            body
        })
    }
    catch(error){
        res.status(500).json({
            message: "user info did not received"
        })
    }
})

router.get('/user',(req,res)=>{
    res.status(200).json({
        message:"nothing special"
    })
})

module.exports = router;