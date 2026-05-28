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

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;  // used in the component to dispatch the actions, and it will be used in the reducer to handle the actions, and it will be used in the provider to provide the store to the app.
export default todoSlice.reducer; // needed to export the reducer to be used in the store, and it will be used in the store to create the root reducer, and it will be used in the provider to provide the store to the app.