import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CouneterProvider from './CouneterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CouneterProvider>
  <StrictMode>
    <App />
  </StrictMode></CouneterProvider>
)
