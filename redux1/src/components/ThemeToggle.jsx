import { toggleTheme } from "../feautures/ui/uiSlice"
import {useSelector, useDispatch} from "react-redux"

function ThemeToggle (){
    const isDarkMode= useSelector((state)=> state.ui.isDarkMode)
    const dispatch =useDispatch()

    return (
        <div
        style={{
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode? "white" :"black",
            height:"100vh"
        }}>
            <h1>Dark Mode: {isDarkMode? "ON" :"OFF"}</h1>
            <button onClick={()=> dispatch(toggleTheme())}>
                Toggle Button
            </button>
        </div>
    )
}
export default ThemeToggle