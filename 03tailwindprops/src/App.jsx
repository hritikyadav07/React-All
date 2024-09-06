import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let obj = {
    name: "Debby",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card name="Debby " btnText="Click Me" />
      <Card name="Delba "  />
    </>
  )
}

export default App
