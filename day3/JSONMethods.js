let object = {
    name: "Amber",
    age:23,
    gender:"male",
    connected:"yes"
};

//JSON.stringify() = used to convert objects in to Json
let jsonObj = JSON.stringify(object);
console.log(jsonObj);


//JSON.parse() = used to convert json into object

let obj2 = JSON.parse(jsonObj);
console.log(obj2);

console.log(JSON.stringify(200));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify("hello"));
console.log((JSON.stringify(null)));


//Json always ignores functions, undefined values and symbols

console.log(JSON.stringify(
    {
        name: "Amber",
        age:24,
       function:  function new1(){
            console.log("new");
             
        },
        userdata : undefined
    }
));

