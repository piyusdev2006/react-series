import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'

function TodoForm() {
    const [todoMsg, setTodoMsg] = React.useState("")
    const { addTodo } = useTodoContext();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(!todoMsg) return;
        if (todoMsg.trim() === "") return;
        addTodo({ msg: todoMsg, completed: false });
        setTodoMsg("");
    }

  return (
    <form onSubmit={addTodoHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;


