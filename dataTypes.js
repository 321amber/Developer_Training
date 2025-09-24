//There are total 8 datatypes in javascript.

//String 
let name = "Amber";
//both "" and '' are valid to write string.
// `` -> these are used to add variables and functionalities inside the string.
 alert(`hello my name is ${name}`);

//Number:-
// number can include both integers and floating point numbers
let n = 123; // this will represent an integer.
let k = 1.23  // this will represent float numbers.


//Special kind of numbers.
alert(Infinity); // this shows infinity value which is grater than anyone number value.
alert(1/0);//same us upper value

alert(-Infinity); //this shows -ve infinity value which is smaller thn any number value.

//NaN - not a number, it represent that when we are performing some operation and result is not a number.
alert($/5);


//BigInt-> when we want a larger number that the usual number, we use bigInt.
let a = 100000000000000000000000n;


//Boolean:- these represents the boolean values.
let binaryValue = false; //these are only two types true and false.

//Null:- if we want to add no value to any data variable then we use null.
let c = null;

//Undefined:- If we don't initialize any value to variable then the value will be undefined.
let d;
alert(d);

//Object:- these are the only non-primitive data types, ket-value pairs.
let e = {
    "name":"Amber",
    age:24,
}

//symbols:- these are used to create unique identifier for objects.

let sym = Symbol("id");
let symObj = Object(sym);

//typeof operator:-
//we use it to find the type of any data variable.
typeof(name); //string will be output
typeof(e); // object.
