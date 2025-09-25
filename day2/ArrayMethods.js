//add, remove items from array
let arr = [1,2,3,4];

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

//splice method //makes copy of removed array

//  let newarr = arr.splice(0,2);
//  console.log(newarr);
//  console.log(arr);
 

//adding the elements with slice and deleting concurrently

let newarr1 = arr.splice(0,1,7,9);
console.log(newarr1);
console.log(arr);


//slice method

let newarr2 = arr.slice(2,4);
console.log(newarr2);

//concate - creates new array with added items from another array.

let newarr3 = arr.concat([10,11]);
console.log(newarr3);

//Foreach - makes changes on original array and returns it.

arr.forEach((e,index)=> arr[index] = e*2);
console.log(arr);

//indexof and includes

let index = arr.indexOf(6,2);
console.log(index);

console.log(arr.includes(8));

//find method:-
let users = [
    {name:"Amber",age:23},
    {name:"Abhi",age:29},
    {name:"akhil", age:24}
]

let user = users.find((e)=> e.name == "Abhi");
console.log(user.age);


//filter method: filter the array and creats new array 

let newUsers = users.filter((item)=>item.age<29);
console.log(newUsers);

//map method: creates new copy of an array.

let newarr5 = arr.map((e)=>{
    return e*2;
})

console.log(newarr5);

//sort method:
arr.sort((a,b)=>{
    return a<b;
})
console.log(arr);

 
//reverse array metod: reverse original array

arr.reverse();
console.log(arr);

//split and join methods:

let str = "hello there";
let newarr6 = str.split(' ');
console.log(newarr6);
newarr6.reverse();
let str2 = newarr6.join(' ');
console.log(str2);

//reduce method:

let ans = arr.reduce((sum,current)=>sum+current,0);

console.log(ans);

let isArray = Array.isArray(arr);
console.log(isArray);

