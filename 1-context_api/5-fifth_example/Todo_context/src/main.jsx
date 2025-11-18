import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo_context from './Todo_context.jsx'

createRoot(document.getElementById('root')).render(
  <Todo_context>
  <StrictMode>
    <App />
  </StrictMode>
  </Todo_context>
)
