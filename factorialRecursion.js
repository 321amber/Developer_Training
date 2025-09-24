function fact(n){
    if(n==0 || n==1){
        return 1;
    }

    return n*fact(n-1);
}

let n = 7;
let factorial = fact(n);

console.log(factorial);
