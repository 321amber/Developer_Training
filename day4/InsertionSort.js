function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
           if(arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp; 
           }
        }
}
}

const arr = [64, 25, 12, 22, 11];

insertionSort(arr);

console.log(arr);
