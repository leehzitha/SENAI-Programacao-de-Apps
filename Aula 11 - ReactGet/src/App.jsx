import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imageButton from './Components/imageButton'
import './App.css'

function App() {
  const [dog, setDog] = useState({});

  useEffect(()=> {
    getDog();
  }, [])

  const getDog = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    setDog(response.data);
  }


  return (
    <>
      <img src={dog.message} />
      <button onClick={getDog}>Trocar imagem</button>
    </>
  )
}

export default App
