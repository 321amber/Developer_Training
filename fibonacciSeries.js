function fibonacci(range){
    let output = [0,1];
    while(range>2){
        output.push(output[output.length-1]+output[output.length-2]);
        range--;
    }

    console.log(output);
    
}


let range = 20;
fibonacci(range);
