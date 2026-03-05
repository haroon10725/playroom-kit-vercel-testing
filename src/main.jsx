import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { insertCoin } from 'playroomkit'

const root = createRoot(document.getElementById('root'))

async function start() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

start()