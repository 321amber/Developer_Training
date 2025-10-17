const authorizeRoles = (...allowedRoles)=>{
    return (req,res,next)=>{
       if(!allowedRoles.includes(req,userModel.role)){
        return req.status(403).json({message:"Access denied"});
       } 
    }
}

module.exports = authorizeRoles;