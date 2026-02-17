import {createSlice} from "@reduxjs/toolkit" // helps us create state, create functions to change that state all in one place
const initialState ={
    todos: [] // the todo is an empty array, and inital state is the starting value-so wehn my app starts the list is empty
}
export const todoSlice= createSlice({ // we are creating a slice know as todoSloice
    name: "todo",
    initialState, // the inital state of the slice is the inital state mentioned above

    reducers: { // this is where fucntions that change the data -- these functions update the data
        addTodo: (state, action)=> { // addtodo is the function name where state is current data
            // action is the new data .. action.payload sends the 
            state.todos.push(action.payload)    // we go to the current data of the todos and push the next data in it towards the end 
            // we are basically adding new todo into the todos array
        },
        deleteTodo: (state, action)=>{ // state is the current todo list
            state.todos= state.todos.filter(  //state.todos.filter goes through every todo one by one
                (_, index) => index !== action.payload                 // action.payload is th eindex of the todo i want to delete

                // basically from the todos remove the index that youve sent 
            )
        }
    }

})

export const {addTodo, deleteTodo}= todoSlice.actions

export default todoSlice.reducer