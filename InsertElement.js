let arr = [3,2,5,22,41,1];
let pos = 3;
console.log("initial array: ");
console.log(arr);


let desiredEle = 40;

for(let i=arr.length-1; i>=pos; i--){
    arr[i+1] = arr[i];
}

arr[pos] = desiredEle;

console.log("Updated array: ");
console.log(arr);



