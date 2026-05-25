import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    // Implementation for generating password
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 

    if(numbers) {
      str += '0123456789';
    }
    
    if(characters) {
      str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }

    for (let i = 1; i <= array.lenght; i++){
      let char = Math.floor(Math.random() * str.length + 1)
    }

  }, [length, numbers, characters]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-12 text-white">Password Generator</h1>
    </>
  )
}

export default App
