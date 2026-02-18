import React from "react"
function Note({note, onDelete}){
    console.log("Rendering: ",note)

    return (
        <div
        style={{border:"1px solid black", margin:"10px",padding:"10px"}}>
            <p>{note}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default React.memo(Note)