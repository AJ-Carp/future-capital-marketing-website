import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Global tokens/reset must load before component styles so components can override.
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
