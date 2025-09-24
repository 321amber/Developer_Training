function factorial(n){
    if(n===0 || n===1)
        return 1;

    return n*factorial(n-1);
}
function isStrong(num){
    let temp = num;
    let ans = 0;
    while(temp){
        let k = temp % 10;
        ans += factorial(k);
        temp = Math.floor(temp/10);
    }

    if(ans === num)
        return true;

    return false;
}

let num  = 145;
console.log(`given number: ${num}`);

isStrong(num)?console.log("yes"):console.log("no");


