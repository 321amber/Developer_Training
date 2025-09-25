//total three kind of scopes in JavaScript 
///Global Scope = all declarations can be accessed from anywhere 
let name = "abhishek";

//Block scope = all code we write inside {} and we cannot access declarations outside it.
{
    let newVar = 123;
    function add(a,b){
        return a+b;
    }
} 

//Closures:
//nested functions: function inside a function
function outer(){
    let count = 0;
   return function inner(){
        count++;
        console.log(count);
        
    }
}

let counter = outer();
console.log(counter);

//inner function makes closure with outer function , and it can use the valriable and all declaration of outside function even after execution of outer function.

//Lexical environment:- The inner and outer environment of any function is called the lexi al env of the finction

