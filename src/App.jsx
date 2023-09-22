import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HelloWorlds from "./components/HelloWorlds"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>ok</p>
      <HelloWorlds /> 
    </div>
  )
}

export default App
