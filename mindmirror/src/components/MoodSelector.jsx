import useLocalStorage from "../hooks/useLocalStorage"
function MoodSelector(){
    const [, setMood]= useLocalStorage("mood","")
    // only focus on the updater function

    return (
        <div>
            <h1>Select Mood</h1>
            

            <button onClick={()=> setMood("happy")}>hehe</button>
            <button onClick={()=> setMood("sad")}>waa </button>
            <button onClick={()=> setMood("calm")}>phew </button>


        </div>
    )

}
export default MoodSelector