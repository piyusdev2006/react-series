// project: 04backgroundChanger 
/*
  - Create a React app that allows users to change the background color of the page by clicking on different color buttons. \
  Extras: The selected color should be saved in local storage so that it persists even after the page is refreshed.
*/

import { useEffect, useState } from "react";

const STORAGE_KEY = "background-color";

function App() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) ?? "black";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, color);
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded -3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}>
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}>
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}>
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}>
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}>
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}>
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "lightblue" }}
            onClick={() => setColor("lightblue")}>
            Light Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "crimson" }}
            onClick={() => setColor("crimson")}>
            Crimson
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "beige" }}
            onClick={() => setColor("beige")}>
            Beige
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
