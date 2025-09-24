function isArmstrong(num){
    let temp = num;
    let ans = 0;
    while(temp){
        let k = temp%10;
        ans += k**3;
        temp /= 10;
        temp = Math.floor(temp);
    }
    
    if(ans === num){
        return true;
    }
    return false;
}

let num = 153;
console.log(`given Number: ${num}`);
isArmstrong(num)?console.log("yes"):console.log("no");


