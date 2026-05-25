import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that state.
 const [counter, setCounter] = useState(15);


  // let counter = 15;

  const addValue = () => { 
    console.log(`counter is incrased by every time clicked ${counter}`);
    // counter = counter + 1;

    // ṭhis will not work as expected because the state update is asynchronous and it will not immediately reflect the updated value of counter. So, when you call setCounter multiple times in a row, it will use the same value of counter for each update, resulting in only one increment instead of multiple increments.
    // why because when you call setCounter(counter + 1), it schedules an update to the state, but it does not immediately change the value of counter. So, when you call setCounter(counter + 1) multiple times in a row, it will use the same value of counter for each update, which is the initial value before any updates have been applied. As a result, only the last call to setCounter will take effect, and the counter will only be incremented by 1 instead of multiple increments.

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // To ensure that each update is based on the most recent state, you can use the functional form of setState, which takes a function as an argument. This function receives the previous state as its parameter and returns the new state. By using this approach, you can ensure that each update is based on the most recent state value, even when multiple updates are scheduled in a row.
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1); 

  };

  const removeValue = () => {
    console.log(`counter is decreased by every time clicked ${counter}`);
    // counter = counter - 1;
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>chai aur React!</h1>
      <h2>Counter value : { counter }</h2>
      <button
        onClick={addValue}
      >Add value { counter }</button>
      <br/>
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: { counter }</p>
    </>
  )
}

export default App

// hooks: useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect, useDebugValue , 
