import { useEffect } from "react"; // basically run something automatically when something changes
import { useState } from "react";  // stores data 

function App() {
  const [text, setText] = useState("");
  // store the text setText updates the texts
  const [time, setTime] = useState(0);
  // initial time and setTime updates time 
  const [isTyping, setIsTyping] = useState(false);
  // initally person isnt typing setIsTyping updates the isTyping 
  const [wpm, setWpm] = useState(0);
  // initalkly words per mintue is 0


  // use Effect runs automatically when something changes
  useEffect(() => {
    let timer;
    if (isTyping) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer); // stop the timer when typing stops
  }, [isTyping]); // this effect runs when isTyping changes

  useEffect(() => { // this useEffect changes whenever time or text changes
    if (time > 0) {
      const words = text.trim().split(" ").length;

      // if i have " i   love pizzzaa "=> trim will give "i love pizza" split(" ") will give ['i','love','pizza'] and length will give 3
      const minutes = time / 60
      setWpm(Math.round(words / minutes));
    }
  }, [text, time]); //this useeffect changes whenever text and time change
  const handleChange = (e) => {
    setText(e.target.value); // wehenver event e that is typing occurs the setText stores e.target.value into text 
    // and then setIsTyping becomes true
    setIsTyping(true);
  };
  // this one runs when the reset button clicked 
  const resetTest = () => {
    setText("");
    setTime(0);
    setWpm(0);
    setIsTyping(false);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Words Per Minute</h1>
      <textarea
        rows="10s"
        cols="40"
        placeholder="start typing..."
        value={text}
        onChange={handleChange}
      />
      <h2>Time: {time}secs</h2>
      <h3>WPM: {wpm}</h3>
      <button onClick={resetTest}>Reset</button>
    </div>
  );
}
export default App;
