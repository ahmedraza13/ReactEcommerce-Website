import React from 'react'
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import './Components/Header/Header.css'
import './Components/Slider/Slider.css'
import Cards from './Components/Cards/Cards'
import './Components/Cards/Cards.css'
import './Components/Footer/Footer'
import Footer from './Components/Footer/Footer'

const App =() => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
