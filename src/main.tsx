import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import 'pattern.css'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
