//function usually can access the values of its local variables  and the reference of its outer or environmental declaration , this is called closures and this environment is called lexical environment.

function outer(){
    let count = 0;
    return function inner(){
        return count+1;
    }
}
console.log(outer()());

//function can access the variables of the outer functions even after the execution of inner functions.

//This binding:
//in function this binding is different for differnent functional declaation:
// for usual functional declaration, this refers to global or window object
function first(){
    console.log(this); //this is refering to the window object
    
}

//for the functions inside the objects, this refers to the that particular object itself, inside which the function is.

let obj = {
    name: "Amber",
    
}
