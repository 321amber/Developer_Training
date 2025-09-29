
//sum of n numbers:
function sumToN(n){
    if(n==0){
        return 0;
    }
    return n + sumToN(n-1);
}

console.log(sumToN(3));

//fibonacci number
function fibonacci(n){
    if(n===0) return 0;
    if(n===1) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10));


//factorial number
function factorial(n){
    if(n===0){
        return 1;
    }

    return n*factorial(n-1);
}
console.log(factorial(5));


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let head  = list;
while(head != null){
    console.log(head.value);
    head  = head.next;   
}

