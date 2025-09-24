function removeDuplicate(arr){
   
    //sorting the array:
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }
        }
    }
    //removing duplicates:
    let uniqueArr = [arr[0]];
    let pointer = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]!=uniqueArr[pointer]){
            uniqueArr.push(arr[i]);
            pointer++;
        }
    }
    return uniqueArr;
}
let arr = [11,3,2,2,34,5,5,5,6];
console.log("given array:");
console.log(arr);
let UniqueEleArray = removeDuplicate(arr);
console.log("Without Duplicate element and Sorted Array:");
console.log(UniqueEleArray);



