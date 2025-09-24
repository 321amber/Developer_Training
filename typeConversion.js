//String Conversion:- 
let age = 30;
let ageString = String(age);
alert(typeof(ageString));

//numeric Conversion:-
let boolean = true;
let num = Number(boolean);
alert(num);
alert(typeof(num));

//string can be converted to number by +operator - here + will be used as unary operator.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12

//if string is not a number then the result will be NaN.

let anyString = Number("string anything beside a numeric value");
alert(typeof(anyString));    //NaN


//Boolean Conversion:- 
//if values which we convert are 0, undefined, null, NaN , empty string= false in boolean, otherwise true.

alert(Boolean(0)); //false
alert(Boolean(NaN)); //false
alert(Boolean(1));   //true
alert(Boolean("hi")); //true







