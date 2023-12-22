import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Bienvenidos</h1>
      <NavBar />
    </div>
  )
}

export default App
