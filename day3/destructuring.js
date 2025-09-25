// we can destructure arrays and objects into variables 

let arr = [1,"Hello", "anil"];

let [num,greet,name] = arr;

console.log(`${num}, ${greet}, ${name}`);

//destructuring of strings
let [h,e,l,p,o] = "hello";
console.log(`${h}, ${e}, ${l}, ${p}, ${o}`);

//object destructuring:
let obj = {
    name1: "akhil",
    age:25
}

let {name1,age } = obj;
console.log(`${name1}, ${age}`);
