import React,{ useCallback, useState } from "react"
import Note from "./components/Note"

function App(){
  const [notes, setNote]= useState([])
  const [input, setInput]= useState("")

  // this function runs whenver add button is clicked
  const addNote=()=>{
    setNote([...notes, input]) // copies the old notes into it and add new notes from input

    // say old notes= ["buy milk"]
    // new input ="study break"
    // new notes= [buy milk, study break]
    setInput("") // clear the input box after adding note
  }
  const deleteNote= useCallback((index)=>{
    /// use callback saves this function in mermory so that react doesnt recreat it again and again
    setNote((prev)=> prev.filter((_,i)=>i!==index))
  }, []) // this means the empty array so the function will only be created once
  // previous note list mei se sab rakho except the index one 
  // when we use filter on array it gives us two things for each item = the item and its index
  // but in this case we only want to delete index position pe jo bhi text hai 

  return (
    <div>
      <h1>Notes App</h1>
      <input
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder="Enter note"
      />
      <button onClick={addNote}>Add Note</button>
      {
        notes.map((note, index)=>(
          <Note // for each note it creates a Note component 
          // eg <Note/>
          // <Note/>  each item has its unique key value which is its index
          key={index}
          note={note} // so note is note and its key is its index
          // onDelete we deleteNote(index)
          onDelete={()=>deleteNote(index)}
          />
        ))
      }
    </div>
  )
}
export default App