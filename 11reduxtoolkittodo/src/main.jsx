import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';

// step 2 wrap the app with the provider and pass the store as a prop, and it will be used in the component to access the state and dispatch the actions, and it will be used in the reducer to handle the actions, and it will be used in the provider to provide the store to the app.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
