import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './coponents/Card'

function App() {
  const [count, setCount] = useState(0);

  // let myObj = {
  //   username,
  //   age,
  // };

  // let arr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl bg-indigo-500 text-white font-bold p-4 rounded-xl">
        Testing Tailwind working!
      </h1>
      <Card channel="React" username = "Naveen" age= "21" btnText="click Me!" />
      <Card channel="React" username = "piyush" age= "20" btnText="visit Me!" />
    </>
  )
}

export default App;