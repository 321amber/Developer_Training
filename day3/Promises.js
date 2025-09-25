//promises are the javascript objects that represents the eventula completion of asynchronous javascript.
//these are mostly dependent on the future values and commits.

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return resolve("done");
    },1000);
});

console.log(promise1);
setTimeout(()=>{
    console.log(promise1);
    
},1000);

//Promise chaining:- promise chaining is the concept of concurrently resolving the promises one after another. in this time promise always are dependent to each other.
function name(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(console.log(`my name is: ${name}`));
            
        },1000)
    })
};

function age(age){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log(`my age is: ${age}`));
            
        },2000)
    })
};

function gender(gender){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve( console.log(`my gender is: ${gender}`));
            
        },3000)
    })
};

name("Amber")
.then(()=> age(24)
.then(()=>gender("male")
.catch((error)=> console.log("error message appear here")
)
)
)

fetch("https://ipinfo.io/161.185.160.93/geo")
.then((response)=>{
    if(!response.ok){
        console.error("api didnot feched");
        return;
     }

     return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> "error Fetching data")


