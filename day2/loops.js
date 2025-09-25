let arr = [2,3,1,4,5,3];

// for loop

for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

//while loop
let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

//do while loop
let k=0;
do{
    console.log(arr[k]);
    k++;
}while(i<arr.length);

//giving tag to loop

outer:for(let i = 0;i<6;i++){
    for(let j=0;j<=i;j++){
        console.log("1");
        
        if(j===6){
            break outer;
        }
    }
}

//for in loop
for(i in arr){
    console.log(i);
    
}

//for of loop

for(i of arr){
    console.log(i);
}
