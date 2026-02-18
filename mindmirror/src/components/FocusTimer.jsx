import useFocusTimer from "../hooks/useFocusTimer"
function FocusTimer(){
    const {time, start, pause, reset}= useFocusTimer()
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={start}>start</button>
            <button onClick={pause}>pause</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default FocusTimer