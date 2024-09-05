import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(7)


  // let counter = 7;
  const addValue = ()=>{
    // console.log("Value added", counter);
    // counter = counter + 1
    setCounter(counter+1);
  };
  const removeValue = ()=>{
    // console.log("Value removed", counter);
    if(counter != 0)
    setCounter(counter-1);
  };

  return (
    <>
     <h1> Let's Go, We are Ready</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addValue}>Add</button>
     <br />
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
