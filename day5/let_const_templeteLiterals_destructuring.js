//let 
let firstName = "Amber";
let lastName = "Soni";

lastName = "ahuja";//runs perfectly

//const
const myname  = "Amber"
//myname = 'Soni' ; //giving error

//templete Literals
let mystring = "hello my name is  amber soni" //old way
let newstring = `Hello my name is ${firstName} ${lastName}`;
console.log(newstring);


//object destructuring
let obj = {
    name: "Amber",
    age: 24,
    height: "5'6"
}

let {name,age,height} = obj;

console.log(`hello, my name is ${name}, my age is ${age}, and height ${height}`);


//array destructuring

let arr = [21,"karan", "deol"];

const [age1,firstName1, lastName1] = arr;

console.log(`hello, my name is ${firstName1} ${lastName1} and my age is ${age1}`);
