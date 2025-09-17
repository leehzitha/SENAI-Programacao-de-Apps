import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Product from './pages/Product';
import User from './pages/User';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Link to="/users/1">User 1</Link>
        <Link to="/users/2">User 2</Link>
        <Link to="/users/3">User 3</Link>
        <Link to="/users/4">User 4</Link>
      </header>
      
      <div className="div1">
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
      </div>

   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/products/:category/:id" element={<Product/>}/>
        <Route path="/users/:id" element={<User/>}/>
      </Routes>
  </>
  )
}

export default App
