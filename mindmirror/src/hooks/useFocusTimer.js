import { useState, useEffect } from "react"
function useFocusTimer(initialTime = 1500) {
    const [time, setTime] = useState(initialTime)
    const [running, setRunning] = useState(false)
    useEffect(() => {
        let timer
        if (running) {
            timer = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [running])
    return {
        time,
        running,
        start: () => setRunning(true),
        pause: () => setRunning(false),
        reset: () => setTime(initialTime)
    }
}
export default useFocusTimer