//callback: A function inside another function that returns some value is called a callback function.

setTimeout(()=>{
    console.log("hello brother");  
},2000);

//Callback hell or pyramid of doom- when various asynchronous tasks happen as a callback functions one after another, then calling inner functions one after another is called callback hell.
// if this happens, error handling complexity increases. 
function first(name,callback){
    setTimeout(()=>{
        console.log(`this is my name: ${name}`); 
    },2000)
};
function second(age,callback){
    setTimeout(()=>{
        console.log(`This is my age: ${age}`);
    },1000)
};

function third(gender,callback){
    setTimeout(()=>{
        console.log(`this is my gender: ${gender}`);
        
    },1500);
}

first("Amber",(error)=>{
    
    if(error){
        return;
    }
    second(24,(error)=>{
        if(error){
            return;
        }
    
    third(male,(error)=>{
        if(error){
            return;
        }
    })
}
)
});
