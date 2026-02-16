import {configureStore} from "@reduxjs/toolkit" // we use this to create redux store where all app data (State ) is kept
import uiReducer from "../feautures/ui/uiSlice"
export const store = configureStore({ // our redux store is store which we making and export so that we can use it elsewhere
    reducer: {
        ui: uiReducer // earlier there was ui isDarkMode: FALSE is going to be stored now in the store
    }
})


/*

store = { make a store which is named store and we are storing 
  ui: {
    isDarkMode: false
  }
}

*/