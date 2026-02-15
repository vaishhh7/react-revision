
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter]= useState(0)
  // the first value here is the variable and the second value is the function

  // let counter =15
  const addValue=()=>{
    // setCounter(counter +1)  this is if you just want to add one

    // setCounter((prevCounter)=> prevCounter+1)
    // setCounter((prevCounter)=> prevCounter+1)
    // setCounter((prevCounter)=> prevCounter+1) if you do this method then we can add all three in one gooo
    setCounter(counter+1)
    console.log(counter)
  }
  const removeValue=()=>{
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
    <h1>this is my react web page {counter} </h1>
    <h2> Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button> {" "}
    <button onClick={removeValue}>Remove Value</button>
    <p>footer: {counter}</p>
      
    </>

  );
}

export default App;
