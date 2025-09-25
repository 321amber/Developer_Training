//various kind of functions declaration methods.
let a = 4,b=6;
function add(a,b){
    console.log(a+b);
    
}
add(a,b);

const adding = (a,b)=>{
    return a+b;

}
console.log(adding(4,6));
 

//callback functions

setTimeout(()=>{
    console.log("hello there");
    
},2000);
