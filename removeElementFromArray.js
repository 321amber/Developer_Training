let arr = [21,3,4,51,2,6];
console.log(arr);

let position = 3;
let element = 9;
for(let i = position;i<arr.length;i++){
    arr[i] = arr[i+1];
}
arr.pop();

console.log(arr);
