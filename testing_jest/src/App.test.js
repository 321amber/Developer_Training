import {fireEvent, render, screen} from "@testing-library/react"
import App from "./App"

// beforeAll(()=>{                            //saare testcases ke pehle ek baar run hoga, koi bhi test case bhi daal sakte hai isme or koi bhi operation bhi kar sakte hai
//   console.log("*** before-All-Hook ***");  
// })

// beforeEach(()=>{                            //saare testcases ke baad run hoga, koi bhi test case bhi daal sakte hai isme or koi bhi operation bhi kar sakte hai
//   console.log("*** before-each-Hook ***");  
// })




// test('Test first react app test case',()=>{
//   render(<App/>)
//   let text  = screen.getByText(/First React app/i);
//   expect(text).toBeInTheDocument()
// });

// //testcase for input box
// test("test case for the input",()=>{
//   render(<App/>);
//   let checkInput = screen.getByRole("textbox");
//   let checkPlaceHolder = screen.getByPlaceholderText("Enter userName...");
//   expect(checkInput).toBeInTheDocument();
//   expect(checkPlaceHolder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute('name','userName')
//   expect(checkInput).toHaveAttribute('id','userId')
// })

// //watch usage/ watch mode - it contineously watches what the changes are happening in your file.

// //Describe function:- whenever there are several type of testcases and we dont want to do test all the test one by one we can do grouping them like ui testcases and apitestcases etc.

// describe.skip('UI testing group',()=>{
//   test("first test case for the ui 1",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })

//    test("first test case for the ui 2",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })

//    test("first test case for the ui 3",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })
// })

// describe('API testing group',()=>{
//   test("first test case for the ui 1",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })

//    test("first test case for the ui 2",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })

//    test("first test case for the ui 3",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })

//   describe("inner describe test group",()=>{
//     test("first test case for the ui 3",()=>{
//     render(<App/>)
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute('name','userName')
//   })
//   })
// })


// //if we use .only, only that testcase group will run 
// //if we use .skip, that testcase will get skip


// //event testing- onchange
// test("onchage event handling",()=>{
//   render(<App/>);
//   const input = screen.getByRole('textbox');
//   fireEvent.change(input, {target:{value:'a'}});
//   expect(input.value).toBe("a");
// })

// //click event- button
// test("onclick event by button",()=>{
//   render(<App/>)

//   const btn = screen.getByRole("button")   //these are all called RTL query
//   fireEvent.click(btn);                     //this is called action
//   expect(screen.getByText("updated Data")).toBeInTheDocument();
// })


// //File name and folder name convention:
// //file_name.test.js
// //file_name.spec.js
// //file_name.spec.js
// // __tests__                  // for folders convention - all files inside it will consider as test files, no need to write upper convention to files.

// // beforeAll and afterAll hooks:

// //beforeEach and afterEach hooks:

// // afterAll(()=>{    //saare tests ke baad ek baar run hoga
// //   console.log("*** After_all_hook ***"); 
  
// // })

// afterEach(()=>{        //saare hooks ke baad ek baar run hoga
//   console.log("*** after each hook ***");
  
//   })




//   //Snapshot testing: after completing all the coding, we use it, jest autometically make copy of the test code or real code and before running it, it do snapshot testing.
//   test("snapshot for app component",()=>{
//     const container = render(<App/>);
//     expect(container).toMatchSnapshot()
//   })


  //what things we should test:
  // component test for render
  // ui element we Make - like button or link
  // function we write
  // api testing
  // event testing
  // props and states
  // ui condition testing 


  //what we should not test:
//External ui library code
// no need to test default js function codes and react
// sometimes we should mock functions rather than testing in details

//Functional component methods testing:

// if there are functions with no event handling work, we cannot test them, if they are doing some event handling like click or change , only those functions can be tested.


//queries to find single element:
//getBy
//queryBy
//findBy

// queries for multiple elements:
// getAllBy - value ek array ke andar aayegi
// findAllBy
// queryAllBy

//getByRole Query:

//Role:The role in getByRole refers to the ARIA role of an HTML element. ARIA (Accessible Rich Internet Applications) roles define the purpose or type of an element for assistive technologies like screen readers.
//getbyrole is bydefault in sementic tags, 


test("button Tests", ()=>{
  render(<App/>);
  const btn1 = screen.getByRole("button", {name: "update data"})
  const btn2 = screen.getByRole("button", {name: "click2"})

  const input1 = screen.getByRole("textbox", {name: "idData"})
  const input2 = screen.getByRole("textbox", {name: "second input"})

  const div1 = screen.getByRole("dummy")

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();

  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();

  expect(div1).toBeInTheDocument();

  const btns = screen.getAllByRole("button");
  for(let i=0;i<btns.length;i++){
    expect(btns[i]).toBeInTheDocument();   //options role pe bhi same array milega aur ese hi testing hogi.
  }
})
//getByLabelText: agar kisi label ka htmlfor kisi element ke id se match hogi to wo element aa jayega
//checkbox ko test karna esy hota ese me
//getAllByLabelText bhi hota hai getAllBy jesa hi work karega.

//getByPlaceholderText: inputfields or textarea par lage placeholder ka use karke inka use kar sakte hai, getAllByPlaceholderText - same as getAllBy


//h1,p tag testing
//getByText and getAllByText

///getByTestId
test("testing with testId", ()=>{
  render(<App/>);
  const testIdDiv = screen.getByTestId("divId");
  expect(testIdDiv).toBeInTheDocument();
})

//getAllByTestId: same as getAllBy


//Overriding data-testid:




