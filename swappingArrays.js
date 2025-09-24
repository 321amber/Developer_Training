let arr1 = [3,4,2,1];
let arr2 = [45,30,28,44];

console.log("initial arrays:");
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);

[arr1, arr2] = [arr2, arr1];

console.log("Arrays after swapping:");
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
