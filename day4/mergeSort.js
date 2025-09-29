function merge(left, right){
    let newArr = [];

    for(let i=0;i<left.length; i++){
        if(left[0] < right[0]){
            newArr.push(left[0]);
            left.shift();
        }
        else{
            newArr.push(right[0]);
            right.shift();
        }

        while(left.length){
            newArr.push(left[0])
            left.shift();
        }

        
        while(right.length){
            newArr.push(right[0])
            left.shift();
        }
    }
    return newArr;
}

function mergeSort(arr){
    if(arr.length <=1){
        return;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid+1));
    let right = mergeSort(arr.slice(mid,arr.length));

    return merge(left,right);
}

const arr = [64, 25, 12, 22, 11];

mergeSort(arr,0,arr.length-1);

console.log(arr);
