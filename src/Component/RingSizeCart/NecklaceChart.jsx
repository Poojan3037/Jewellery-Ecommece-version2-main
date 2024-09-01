import React from 'react'
import './SizeChart.css'
import NecklaceSize from '../Assets/Stone-Gallery/Charts/NecklaceSize.png'

import Footer from '../Footer/Footer'
import MegaMenu from '../MegaMenuNavbar/MegaMenu'
const NecklaceChart = () => {
  return (
    <>
      <MegaMenu/>
        <h1 className='Size-Header'>Necklace Size Chart</h1>
        <div className='Size-Image'>
          <img  loading='lazy' src={NecklaceSize} />
        </div>
      <Footer/>
    </>
  )
}

export default NecklaceChart