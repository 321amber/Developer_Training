import {describe, mock, test} from "node:test";
import assert from "node:assert";
import { greet, processOrder } from "../app.js";

test("greet function that gives the correct answer",()=>{
    //AAA remember that rule
    /*Arrange
    act
    assert */

    const expected = "Hello world!";
    const actual = greet("world");

    assert.strictEqual(actual, expected);
})


//suite - group of multiple single test functions, that we can make using suit functions from the node:test
// suite("greet fuunctions suit",()=>{
//     test1
//     test2
// }) 

//Mocking: in unit testing, we always need to do the testing in isolation, if there is a function which is doing the side effects(data query/ fetching/ payment gateway) etc., so we make a fake copy of that feature inside of that funcion and do testing of that fake feature, it is called mocking.

describe("Order Feature",()=>{
    test("the order features and getting the payments or not",()=>{
       const mockPaymentProcess = mock.fn((amount)=>{
        //dont call any api, just return the value we needed, or do something because we are mocking the function
            return {id:"123", amount};
       })

      const expected = {id:"123", amount:100};

      assert.strictEqual(mockPaymentProcess.mock.callCount(),0);

      const result = processOrder({amount:100},{paymentProcess: mockPaymentProcess});

      assert.deepStrictEqual(expected,result);
       assert.strictEqual(mockPaymentProcess.mock.callCount(),1);//spying

       const call = mockPaymentProcess.mock.calls[0];
       assert.deepStrictEqual(call.arguments, [100]);
    })
})



//dependency injection: if we are using another function or feature inside a finction as a dependency, we should write it as a dependency, to the parameters , otherwise we willl not be able to do unit testing.


//Stub: stub same as mocking bu no features like mocking just we return the preplanned or result data.