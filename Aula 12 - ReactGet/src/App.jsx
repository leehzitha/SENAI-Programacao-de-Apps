import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import List from './Pages/List'
import Profile from './Pages/Profile'

function App() {  

  return (
    <>
      <Routes>
        <Route path='/' element={<List></List>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
    </>
  )
}

export default App
