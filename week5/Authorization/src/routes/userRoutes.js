const express = requre('express');
const router = express.Router();
const verifyToken = require("../middlewares/authMiddlewares")

const authorizeRoles = require("../middlewares/roleMiddlewares")

router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"Welcome admin"})
})

router.get("/user",verifyToken, authorizeRoles("admin","user"),(req,res)=>{
    res.json({message:"Welcome user"})
})

module.exports = router;