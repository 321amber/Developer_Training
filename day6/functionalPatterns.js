//To write functions more readable and maintainable - there are several functional patterns

//pure functions:-
function add(a,b){
    return a+b;
}

const added = (a,b)=>{
    return a+b;
}

console.log(add(2,4));
console.log(added(2,4));

//Higher order functions:
//functions that takes functions as arguments or returns a function, called higher order functions
let arr = [1,2,3,4];
let newArr = arr.map((ele)=>ele*2);
console.log(newArr);

//Immutability:
//functions cannot directly change the data structures, they can only make copies with changes
let newArr2 = (arr)=>{
    for(let i of arr){
        i*=3;
    }
    return arr;
}
console.log(newArr2(arr));

//functional composition:
//we can combine multiple functions in which the result of the first function will be the input of second function.
let add2= (a)=> a+5;
let multiply = (x)=> x*5;

let compose = (...func)=>x=>func.reduceRight((acc,func)=>func(acc),x);
let composedFunc = compose(add2,multiply);
console.log(composedFunc(2));

//currying:
//when we make a function that take arguments as sequence of functions, and each function takes a single argument.
let first = (a)=>(b)=>a+b;
console.log(first(2)(4));

//Factory functions, functions that returns an object without using new keyward
let newObj = ()=>{
    return {
        name:"Amber",
        age:23,
        greet: ()=>{
            console.log(`my name is ${this.name} and my age is ${this.age}`);
            
        }
    }
}

console.log(newObj.name);





