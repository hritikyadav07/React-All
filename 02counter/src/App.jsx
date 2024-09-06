import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(7)


  // let counter = 7;
  const addValue = ()=>{
    // console.log("Value added", counter);
    // counter = counter + 1
    setCounter(counter+1);//8
    setCounter(counter+1);//9
    setCounter(counter+1);//10
    setCounter(counter+1);//11
    //not 11 but 8 as counter for all will remain same so they all will be batched together as batching is done here acc. to diffing algo in fibre
    setCounter( prevCounter => prevCounter+1)// to use previous value
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
