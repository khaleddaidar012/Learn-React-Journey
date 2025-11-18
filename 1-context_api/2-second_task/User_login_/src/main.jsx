import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserApp from './App.jsx'
import UserProvider from './UserProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>  <UserApp /></UserProvider>
  
  </StrictMode>,
)
