let num=1;
let height = 6;
let output = "";
for(let i=0;i<height;i++){
    for(let j=0;j<=i;j++){
        output+=String(num)+" ";  
        num++; 
    }
    output+="\n";
}

console.log(output);
