import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Components/Clock/Clock'
import Timer from './Components/Timer/Timer'
import Counter from './Components/Counter/Counter'
import AlterTitle from './Components/AlterTitle/AlterTitle'
import DivColor from './Components/DivColor/DivColor'
import TrafficLights from './Components/TrafficLights/TrafficLights'
import ParOuImpar from './Components/ParOuImpar/ParOuImpar'

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
      {/* exercicio 4 */}
      <TrafficLights></TrafficLights>
      {/* exercicio 5 */}
      <ParOuImpar></ParOuImpar>
    </>
  )
}

export default App
