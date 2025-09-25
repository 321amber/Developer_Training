//setTimeout - this is a asynchronous javascript which can be used to make delay in generating results.
let id = setTimeout((count)=>{
    console.log("hello world");      
},1000);

//cancelling the Timeout:
//setTimeOut returns timeId , so wecan use it to clear timeout:
clearTimeout(id);

//Nested setTimeOut: same as setInterval 

let timerId = setTimeout(function greet() {
  console.log("hello");
  
  timerId = setTimeout(greet, 2000);
}, 2000);

//setInterval: this is used to do some functionality after some particular interval.

setInterval(()=>{
  console.log("hello");
  
},2000);
