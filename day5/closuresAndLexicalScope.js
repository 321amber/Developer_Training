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

//1) Default Binding:-
//in function this binding is different for differnent functional declaation:
// for usual functional declaration, this refers to global or window object
function first(){
    console.log(this); //this is refering to the window object
    
}

//for the functions inside the objects, this refers to the that particular object itself, inside which the function is.
//2) implicit Binding:
let obj = {
    name: "Amber",
    greet: function(name){
        console.log(`Hello my name is ${this.name}`);//this is referring to the obj itself.
        
    }
}
obj.greet();


//Explicit Binding:
//when we use this binding explicitly, we use call(), apply(), and bind() methods
// we can explicitly set the value of the this using call, apply and bind
function hello(age){
    console.log(`Hello, my name is ${this.name}, my age is ${age}`);
    
}
hello.call(obj,24); //call method directly calls the function.

hello.apply(obj,[24]); //apply method is same as call but it take arguments as array

const bindMethod = hello.bind(obj,24); //bind makes new method and dont directly calls it
bindMethod();