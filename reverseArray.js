let arr = [21,3,4,51,2,6];
console.log(arr);


let i =0,j=arr.length-1;

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++,j--;
}

console.log(arr);


