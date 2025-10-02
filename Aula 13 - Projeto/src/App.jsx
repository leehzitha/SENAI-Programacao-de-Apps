import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cartoon2D from './Pages/cartoon2D'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/cartoons2D' element={<Cartoon2D></Cartoon2D>}></Route>
        <Route path='/' element={<Cartoon2D></Cartoon2D>}></Route>
      </Routes>
    </>
  )
}

export default App
