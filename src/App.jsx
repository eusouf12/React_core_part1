import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './counter'
import Users from './counter'



function App() {
  
  function handleClick(){
    alert('button Clicked');
  }

  return (
    <>
      
      <h1>Vite + React</h1>

      <Users></Users>
      {/* <User></User> */}
      {/* <Counter></Counter> */}
      <Rana name="tk890"></Rana>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}
function Rana(props){
  console.log(props);
  return <h2>Hi i wana go to this palace {props.name}</h2>
}

export default App
