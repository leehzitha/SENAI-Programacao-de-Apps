import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import SumNumbers from './Components/FuncAnonima'

const App = () =>{
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld></HelloWorld>
      <SumNumbers a={1} b={2}></SumNumbers>
      <div className='tela'>
        <div className='quadrado vermelho'></div>
        <div className='quadrado azul'></div>
        <div className='quadrado amarelo'></div>
      </div>
      
    </>
  )
}

export default App
