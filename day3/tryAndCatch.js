//try{..}catch(){} = these are the code blocks that handles errors in js, usually when error occures script stops running but using this if error occurs, script will not stop and skip the error part.
let var1 = 123;
console.log(var1);

try{
    console.log('amything');
    console.log("anything2");
    var2;
}
catch(error){
    console.error(error.message);
    
}
finally{
    console.log("try catch execution successfull");
    
}

console.log("hello world");
