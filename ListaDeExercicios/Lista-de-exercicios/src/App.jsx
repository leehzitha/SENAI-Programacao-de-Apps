import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Components/Clock/Clock'
import Timer from './Components/Timer/Timer'
import Counter from './Components/Counter/Counter'
import AlterTitle from './Components/AlterTitle/AlterTitle'
import DivColor from './Components/DivColor/DivColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* exercicio 1 */}
      <Clock></Clock>
      {/* exercicio 2 */}
      <Timer></Timer>
      {/* exercicio 3 */}
      <Counter></Counter>
      {/* exercicio 4 */}
      <AlterTitle></AlterTitle>
      {/* exercicio 5 */}
      <DivColor></DivColor>
    </>
  )
}

export default App
