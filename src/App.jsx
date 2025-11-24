import React, { useRef } from 'react'
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  return (
    <div>
      <Navbar />
      <ImageOne />
      <ImageTwo />
      <ImageThree />
      <Footer/>
    </div>
  )
}

export default App
