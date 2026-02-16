import {createSlice} from "@reduxjs/toolkit"
// create slice helps us create state, reducers and actoions all in one place rather than seperately

const initialState= {
    isDarkMode: false // basically light mode is on initally
}
export const uiSlice= createSlice({ // we are creating a createslice function whos value is stored in uislice, export so that we can use it in diff places
    name:"ui", // name of the slice
    initialState, // statrt the state iwth the inital state made above so now redux knows isdarmkode is false 

    reducers:{ // this is the all functions that changes the state- to update state use reduccer
        toggleTheme: (state)=> { // this function basically uses state as parameter and swticjes it, if false true, if true then false
            state.isDarkMode=!state.isDarkMode
        }
    }

})
export const {toggleTheme} =uiSlice.actions // contains all the reducer functions as actions and now we  are extracting toggle theme from it and it can be used outside 
export default uiSlice.reducer 