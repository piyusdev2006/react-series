installation

npm install @reduxjs/toolkit   -> redux
npm install react-redux  -> with react binding

Redux Toolkit includes these APIs:

configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

createAction(): generates an action creator function for the given action type string.

createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.

createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store

The createSelector utility from the Reselect library, re-exported for ease of use.


// store is the global state of our application, we can access it from any component in our application. We can also update the state from any component in our application.

// reducer is a function that takes the current state and an action as arguments and returns a new state. It is a pure function that does not mutate the state. It is used to update the state in response to an action.also known as slices

// action is an object that describes a change in the state. It has a type property that indicates the type of action being performed and a payload property that contains any additional data needed to perform the action. It is used to trigger a change in the state.


store creation example:



reducers ex: 

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            text: "Learn Redux Toolkit",
        }
    ]
}



// slice is a collection of reducer logic and actions for a single feature in your app, typically defined in a single file. The name of the slice is used to generate action type strings.
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // reducers take properties and function as value, the function is called a case reducer, it will be called when the action is dispatched, the function takes state and action as arguments, and it can mutate the state directly because it uses Immer library under the hood.
    reducers: {
       addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload     
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;   
// used in the component to dispatch the actions, and it will be used in the reducer to handle the actions, and it will be used in the provider to provide the store to the app.
 
export default todoSlice.reducer;   
// needed to export the reducer to be used in the store, and it will be used in the store to create the root reducer, and it will be used in the provider to provide the store to the app.