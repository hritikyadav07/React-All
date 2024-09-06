import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("#213547");

  const changeColor = (color) =>{
    setBgColor(color)
  }
  //onClick wants a function
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:bgColor}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 ">
          <div className='flex flex-wrap gap-3 shadow-xl bg-white rounded-xl px-3 py-2'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>setBgColor("Crimson")} style={{backgroundColor:"Crimson"}}>Crimson</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>setBgColor("Royalblue")} style={{backgroundColor:"Royalblue"}}>Royalblue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>setBgColor("LightGreen")} style={{backgroundColor:"LightGreen"}}>LightGreen</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>setBgColor("Purple")} style={{backgroundColor:"Purple"}}>Purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>changeColor("Lavender")} style={{backgroundColor:"Lavender"}}>Lavender</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>changeColor("Gray")} style={{backgroundColor:"Gray"}}>Gray</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>changeColor("DarkBlue")} style={{backgroundColor:"DarkBlue"}}>DarkBlue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' onClick={()=>changeColor("Orange")} style={{backgroundColor:"Orange"}}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
