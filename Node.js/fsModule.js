const { error } = require("console")
const fs = require("fs")

//sync
// fs.writeFileSync("./test.txt","hello there")

//Async
// fs.writeFile("./test.txt","hello there , writefile se bana",(err)=>console.error(error));

// results = fs.readFileSync("./test.txt","utf-8")
// console.log(results);

// fs.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err){
//         console.error(err);
        
//     }
//     else{
//         console.log(result);
        
//     }
// })

//fs.appendFileSync("./test.txt",`hello there how are you \n`);

fs.cpSync("./test.txt","./copy.txt")