import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor]= useState('olive')
  
  return (
    <div className="w-full h-screen duration-200 bg-pink-500" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button style={{backgroundColor: '#dfebeb'}} onClick={()=>setColor('#A47864')} className="outline-none px-4 py-1 rounded-full shadow-lg text-blue-500">mocha mousse</button> {"   "}
          <button style={{backgroundColor: '#dfebeb'}} onClick={()=>setColor('#98B4D4')} className="outline-none px-4 py-1 rounded-full shadow-lg text-blue-500">cerulean blue</button>
          <button style={{backgroundColor: '#dfebeb'}} onClick={()=>setColor('#D65076')} className="outline-none px-4 py-1 rounded-full shadow-lg text-blue-500">honeysuckle</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
