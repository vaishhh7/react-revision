import FocusTimer from "./components/FocusTimer";
import MoodSelector from "./components/MoodSelector";
import useLocalStorage from "./hooks/useLocalStorage";
import useMoodTheme from "./hooks/useMoodTheme"

function App(){
  const [mood]= useLocalStorage("mood","")
  useMoodTheme(mood)
  return (
    <div>
      <h1>MindMirror Dashboard</h1>
      <MoodSelector/>
      <FocusTimer/>
    </div>
  )
}
export default App