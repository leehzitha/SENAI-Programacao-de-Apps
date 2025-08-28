import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import SumNumbers from './Components/FuncAnonima'
import RedSquare from './Components/RedSquare/RedSquare'
import YellowSquare from './Components/YellowSquare/YellowSquare'
import BlueSquare from './Components/BlueSquare/BlueSquare'
import { Square } from './Components/Square/Square'
import ClickButton from './Components/Buttons/ClickButton'

const App = () =>{
 
  const [text, setText] = useState("")
  const [name, setName] = useState("")


  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
      <ClickButton></ClickButton>
      {/* atividade 4 */}
      <input type="text" placeholder='Digite seu nome aqui:' onChange={(n) => setName(n.target.value)}/>
      <h1>Bem-vinda {name}</h1>
      <HelloWorld></HelloWorld>
      <SumNumbers a={1} b={2}></SumNumbers>
      <BlueSquare></BlueSquare>
      <RedSquare></RedSquare>
      <YellowSquare></YellowSquare>  
      <Square cor="blue"></Square>    
    </>
  )
}

export default App
