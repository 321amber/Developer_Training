export function greet(a){
    return `Hello ${a}!`
}
function paymentProcess(amount){
    console.log("I am original...");
    
    return {id:"123", amount};
}

export function processOrder(data, dependencies){
    console.log("I am mocked...");
    
    const paymentInfo = dependencies.paymentProcess(data.amount);
    return paymentInfo;
}

