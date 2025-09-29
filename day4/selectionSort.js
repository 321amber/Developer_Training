function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
            let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {

                min_idx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

const arr = [64, 25, 12, 22, 11];

selectionSort(arr);

console.log(arr);


