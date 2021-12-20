import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import Products from './components/products/Products'
import Promoted from './components/promoted/Promoted'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <Products />
      <Promoted />
      <Footer />
    </>
  )
}

export default App;
