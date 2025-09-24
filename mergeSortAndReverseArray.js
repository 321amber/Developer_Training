function mergeSortAndReverse(arr1,arr2){
    //merge
    for(let i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    console.log("merged array:");   
    console.log(arr1);

    //bubble sort
    for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}   
    console.log("sorted array:");   
    console.log(arr1);

    //reverse
    let i=0,j=arr1.length-1;
    while(i<j){
        let temp2 = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp2;
        i++,j--;
    }


    return arr1;

}

let arr1 = [3,12,4,52,6,7];
let arr2 = [5,0,28,2];

console.log("given arrays:");
console.log(arr1);
console.log(arr2);

let ans = mergeSortAndReverse(arr1,arr2);

console.log("reversed array:");
console.log(ans);




