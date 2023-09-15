import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let [count,setCount]= useState(15);
  const addvalue = () => {
    
    setCount(count=count+1);
   
  }
  const removeValue=()=>{
    if (count>0){
      setCount(count=count-1);
    }
    
  }

  return (
    <>
      <h1 className="bg-blue-800 p-4 text-cyan-200 rounded-xl">Counter Example in React</h1>
      <h4>Counter value = {count}</h4>
      <br></br>
      <button id="addbtn" onClick={addvalue}> Add Value {count+1}</button>
      <button id="removebtn" onClick={removeValue}> Remove Value</button>
      <Card empname="Muhammad Shafiq" msg="Developer, Solution Designer" btntext='More ..'/>
      <Card empname="Muhammad Irtza" msg="Junior Devloper"/>

    </>
  )
}

export default App
