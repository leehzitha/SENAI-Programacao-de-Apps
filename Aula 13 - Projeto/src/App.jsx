import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Agent from './Pages/Agent'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/agents' element={<Home/>}/>
        <Route path="/agent" element={<Agent/>}/>
      </Routes>
    </>
  )
}

export default App
