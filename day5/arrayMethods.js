let arr = [2,3,1,4,5,10];

//map
let newArr = arr.map((ele)=>{
    return ele*2;
})
console.log(newArr);

//Filter
let newArr2 = arr.filter((ele)=>{
   return ele >4;
})

console.log(newArr2);

//reduce
let result = arr.reduce((accu,ele)=>{
    return accu+ele;
},0);
console.log(result);

//find -- returns the first element which satisfy the condition
let result2 = arr.find((ele)=>{
    return ele<2;
})

console.log(result2);

//some -- returns the true or false if any of the element element satisfy condition or not.
let answer = arr.some((ele)=>{
    return ele%2 ===0;
})
console.log(answer);

//every - returns the true if all the array elements satisfy the condition.

let answer2 = arr.every((ele)=>{
    return ele%2===0;
})
console.log(answer2);
