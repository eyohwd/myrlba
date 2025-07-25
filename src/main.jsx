import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeContextProvider } from "./context/lightModeContext";
import { Provider } from "react-redux";
import store from './redux/store.jsx'


createRoot(document.getElementById('root')).render(
  <DarkModeContextProvider>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </DarkModeContextProvider>
,
)
