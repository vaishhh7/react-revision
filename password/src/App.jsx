import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); // this will basically be the passwrod length
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        {" "}
        {/*has the input box as well as the button */}
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div 
      className="flex text-sm gap-x-2">
        <div
        className="flex items-center gap-x-1">
          <input
          type="range"
          min={6}
          max={30}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>setLength(e.target.value)} //e is basically the event //
          name=""
          id=""
          />
          <label  htmlFor="length">Length: {length}</label>
        </div>
         <div
        className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          
          className="cursor-pointer"
          onChange={()=>setNumberAllowed((prev)=>!prev )} //e is basically the event //
          name=""
          id=""
          />
          <label  htmlFor="number">Numbers</label>
        </div>
        <div
        className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          
          className="cursor-pointer"
          onChange={()=>setCharAllowed((prev)=>!prev )} //e is basically the event //
          name=""
          id=""
          />
          <label  htmlFor="charInput">Charecters</label>
        </div>

      </div>
    </div>
  );
}

export default App;
