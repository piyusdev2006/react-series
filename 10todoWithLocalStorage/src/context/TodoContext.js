import { createContext, useContext } from "react";



export const TodoContextLocal = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false,
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
});


export const useTodoContext = () => {
    return useContext(TodoContextLocal);
};


export const TodoProvider = TodoContextLocal.Provider;
