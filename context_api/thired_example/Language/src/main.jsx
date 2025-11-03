import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LangApp from './App.jsx'
import LangProvider from './LangProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>  <LangApp /></LangProvider>
  
  </StrictMode>,
)
