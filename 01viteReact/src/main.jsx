
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import React from 'react'
// function MyApp() {
//   return (
//     <>
//       <h1>Phantom - Right Hand Man Of Azmodeus-Nim</h1>
//     </>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click to visit google '
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Click Here</a>
// )

// const reactElement = React.createElement(
//     'a',
//     {href:'https://google.com', target: '_blank'},
//     'Click me to go to Google'
// )



createRoot(document.getElementById('root')).render(
  <App/>
)
