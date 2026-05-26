import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  // visual click effect state for the copy button
  const [clicked, setClicked] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    // Implementation for generating password
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) {
      str += "0123456789";
    }

    if (characters) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    // copy the password to clipboard\
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // it takes two things callback function and dependency array, it will run the callback function whenever any of the dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-4 py-2 text-gray-700 bg-gray-200  focus:outline-none"
            placeholder="password will be generated here"
          />
          <button
            onClick={() => {
              copyPasswordToClipBoard();
              setClicked(true);
              setTimeout(() => setClicked(false), 150);
            }}
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-150 " +
              (clicked ? "transform scale-95" : "")
            }>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="include-numbers"
              onChange={() => setNumbers((prev) => !prev)}
            />
            <label htmlFor="include-numbers">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="include-characters"
              onChange={() => setCharacters((prev) => !prev)}
            />
            <label htmlFor="include-characters">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
