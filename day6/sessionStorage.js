//sessionStorage only stores data for one time, and for one session, if browser closed, stored data will be removed.
sessionStorage.setItem("name","Amber");
console.log(sessionStorage.getItem("name"));

//remove item
//sessionStorage.removeItem("name");

//Storing array on the session storage
let arr = [1,2,3,4];
sessionStorage.setItem(useDetails,JSON.stringify(arr));
console.log(JSON.parse(sessionStorage.getItem(userDetails)));

//adding object on the session storage

let obj = {
    name: "Amber",
    age: 24,
    greet: ()=>{
        console.log(`my name is ${this.name} and my age is ${this.age}`); 
    }
}

sessionStorage.setItem("userDetailsObj",JSON.stringify(obj));

//getting the object items from the session storage
console.log(JSON.parse(sessionStorage.getItem("userDetailsObj")));
