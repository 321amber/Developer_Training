import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('')
  const [bData, setBData]= useState("");
  return (
    <div className="App">
      <p>First React App</p>

      <label htmlFor='userId'>idData</label>
      <input type='text' placeholder='Enter userName...' name='userName' id='userId'
      value={data}
      onChange={(e)=>setData(e.target.value)}/>

      <label htmlFor='second_input'>second input</label>
      <input type='text' id='second_input'/>

      <button onClick={()=>setBData("updated Data")}>update data</button>
      <button>click2</button>
      <h1>{bData}</h1>

      <div role='dummy'>
        dummy text
      </div>

      <div data-testid="divId"></div>
    </div>
  );
}

export default App;
