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
    setCounter(counter + 1);
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
