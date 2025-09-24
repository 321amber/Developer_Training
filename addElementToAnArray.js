let arr = [21,3,4,51,2,6];
console.log(arr);

let position = 3;
let element = 9;
for(let i = arr.length-1;i>=0;i--){
    if(i>=position){
        arr[i+1] = arr[i];
    }
}
arr[position] = element;

console.log(arr);