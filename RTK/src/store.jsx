import {configureStore, createSlice} from "@reduxjs/toolkit"

const initialState = {
    tasks:[],
}

//createSlice is a utlity function in react redux Toolkit, it simplifies the creating of redux slice of state.It combines action and reducers in a single object, making the setup of redux state management more streamlined and organized.

//using create slice we can define these functionalities:
//The initial state of the slice
//Reducers that defines how the state changes in response to action
// action cerators: automatically generate based on reducer name.

const taskReducer = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask(state,action){
            state.tasks.push(action.payload);
        },
        deleteTask(state,action){
            state.tasks = state.tasks.filter((currTask, index)=> index !== action.payload)
        }
    }
})

console.log(taskReducer);


export const {addTask, deleteTask} = taskReducer.actions;



export const store = configureStore({
    reducer:{
        taskReducer: taskReducer.reducer,
    },
})


console.log(store.dispatch(addTask("hello there")));

