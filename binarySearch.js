function binarySearch(arr,ele){
    let start=0,end=arr.length-1;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2); 

        if(arr[mid] === ele){
            return true;
        }
        else if(arr[mid] < ele){
            start = mid + 1;
        }
        else{
            end = mid -1;
        }
    }

    return false;
}

let arr = [1,2,4,5,6,21,22];   //sorted array 
let element = 21;    // we want to find this element

binarySearch(arr,element)?console.log("Yes! element is present"):console.log("No, element is not present");

