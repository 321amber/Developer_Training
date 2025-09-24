let arr = [4,33,21,45,1,0,9,66,65,8];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
    }
    if(arr[i] != largest && arr[i]>secondLargest){
        secondLargest = arr[i];
    }
}

console.log(`SecondLargest element: ${secondLargest}`);
