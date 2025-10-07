import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { addTask, deleteTask } from './store';

function App() {
const [task, setTask] = useState("");
//useSelector : it is a function, that takes the entire redux store state as an argument and returns the specific piece of data we need.

const tasks = useSelector(state => state.taskReducer.tasks);

const dispatch = useDispatch();

const handleFormSubmit = (e)=>{
  e.preventDefault();

  dispatch(addTask(task));
  setTask("");
}

const handleDelete = (index)=>{
  dispatch(deleteTask(index))
}
  return (
    <>
      <div>
      <div>
        <h1>
            Todo List items:
        </h1>

        <form onSubmit={handleFormSubmit}>
            <input type="text" 
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button
            >Add new Task</button>
        </form>
      </div>

      <ul>
        {
          tasks.map((currTask,index)=>{
             return <li key={index}>
                <p>
                  {index} : {currTask}
                </p>

                <button
                  onClick={()=>handleDelete(index)}
                >Delete Task</button>
              </li>
          })
        }
      </ul>
    </div>
    </>
  )
}

export default App