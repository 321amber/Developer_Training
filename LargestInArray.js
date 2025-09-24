let arr = [4,33,21,45,1,0,9,66,65,8];

let largest = arr[0];

for(let i = 1; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log(`Largest array element: ${largest}`);
