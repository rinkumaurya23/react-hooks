import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hocc from './Hocc.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hocc/>
  </StrictMode>
)

