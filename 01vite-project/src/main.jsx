import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custom React app</h1>
    </div>
  )
}

// above functional component is converted to the following object like this
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };


// according to react
// const ReactElement = React.createElement(
//   'a',
//   {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   "Click me to visit Google"
// );


createRoot(document.getElementById('root')).
  render(
  <App />
    
  // so we can render this object to the DOM
  // <ReactElement />
  // anotherReactElement

  // <ReactElement />
    
)
