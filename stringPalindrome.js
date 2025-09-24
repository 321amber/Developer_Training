function isPalindrome(str){
    let i=0,j=str.length-1;

    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i++,j--;
    }
    return true;
}

let str = "abakeeweekaba";
console.log("given string:");
console.log(str);

isPalindrome(str)?console.log("true"):console.log("false");



