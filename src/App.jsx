import React, { useRef } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Adventures from './pages/Adventures'
import Login from './pages/Login'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
