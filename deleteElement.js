let arr = [3,2,5,22,41,1];
let pos = 3;
console.log("initial array: ");
console.log(arr);

for(let i=pos+1; i<arr.length; i++){
    arr[i-1] = arr[i];
}

arr.pop();

console.log("Updated array: ");
console.log(arr);
