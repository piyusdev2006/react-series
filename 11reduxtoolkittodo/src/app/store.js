// step 1 configure store from code redux toolkit not from react

import { configureStore } from "@reduxjs/toolkit"; 
import todoReducer from "../features/todo/todoSlice"; // import the reducer from the slice, and it will be used in the store to create the root reducer, and it will be used in the provider to provide the store to the app.

export const store = configureStore({
    reducer: todoReducer, // the reducer is a function that takes the current state and an action, and returns the new state, and it will be used in the provider to provide the store to the app.
})



