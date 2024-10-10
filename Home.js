import React from 'react'
import Navbar from './componenets/Navbar.js'
import  Slider from './componenets/Slider.js'
import  Product from './componenets/Products.js'
import Newsletter from './componenets/Newsletter.js'
function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Product />
    </div>
  )
}

export default Home