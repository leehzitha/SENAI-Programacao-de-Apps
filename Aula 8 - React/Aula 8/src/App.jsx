import { useState } from 'react'
import { useEffect } from 'react'
import BrowserRouter from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Sobre from './Components/Sobre'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("O conteúdo da página foi alterado")
    console.log(`O novo estado da variável é ${num}`)
  }, [num])

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Incrementar o valor de num</button>
      <h1>{num}</h1>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
    </>
  )
}

export default App