function reverseStr(str){
    let str2 = '';
    for(let i=str.length-1;i>=0;i--){
        str2 += str[i];
    }
    return str2;
}
let str = "AbhishekAndAnuj";
console.log(`Given string: ${str}`);

let reversed = reverseStr(str);
console.log(`Reversed string: ${reversed}`);
