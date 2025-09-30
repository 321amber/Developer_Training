//saving the item inside localStorage:
localStorage.setItem(name, "amber");

//getting item inside localStorage:
console.log(localStorage.getItem(name));

//remove item of localStorage:
localStorage.removeItem(name);

//stiring array inside localstorage
let arr = ["Amber",24,"5'6"]
localStorage.setItem("userDetails", JSON.stringify(arr));

console.log(localStorage.getItem("userDetails"));

//storing objects inside localstorage

let obj = {
    name:"Amber",
    age:24,
    height: "5'6"
}
localStorage.setItem("userDetailsObj",JSON.stringify(obj));

console.log(localStorage.getItem("userDetailsObj"));

//clear everthing from localstorage
localStorage.clear();

console.log(localStorage.getItem("userDetailsObj"));
