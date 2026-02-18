import { useState } from "react"; // stores and update data in a component
// whenever therei s a change in data stored ui automatically re-renders

function App() {
  const [password, setPassword] = useState("");  // setPassword is basicallay the function that changes my password

  const [showPassword, setShowPassword] = useState(false); //show password stores whetehr pass shoulkd be vissible or not inital value no it shouldnt be visible

  // showPassword initially is false, setShowPassword updates the state
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  // this function works when the button is clicked
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1> Password Toggle Form</h1>
      <input
        type={showPassword ? "text" : "password"}    // if condition ? trueValue " falseValue"
        // so if showPassword is true password visible else  password hidden
        placeholder="Enter Password"
        value={password} // this is a controlled component as now its connected to react state
        onChange={(e) => setPassword(e.target.value)}
        // if any change then setPassword event.target.value
      />
      <br></br>
      <br></br>
      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} Password
        {/* if the showPassword is true then hide password else show password */}
      </button>
    </div>
  );
}
export default App 