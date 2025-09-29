function quickSort(arr){

    if(arr.length <=1) return arr;
    let pivot = arr[0];

    let leftArr = [];
    let rightArr = [];

    for(let i=0; i<arr.length; i++){
        if(pivot < arr[i]){
            rightArr.push(arr[i]);
        }
        else{
            leftArr.push(arr[i]);
        }
    }

    let left = quickSort(leftArr);
    let right = quickSort(rightArr);

    return [...left, pivot, ...right];
}

let arr = [5,4,1,8,0,32,54];
let sortedArr = quickSort(arr);

console.log(sortedArr);
