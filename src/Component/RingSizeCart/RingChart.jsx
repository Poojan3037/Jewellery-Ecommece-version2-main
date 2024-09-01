import React from 'react'
import './SizeChart.css'
import RingSize from '../Assets/Stone-Gallery/Charts/RingSize.webp'

import Footer from '../Footer/Footer'
import MegaMenu from '../MegaMenuNavbar/MegaMenu'
const RingChart = () => {
  return (
    <>
      <MegaMenu/>
      <h1 className='Size-Header'>Rings Size Chart</h1>
      <div className='Size-Image'>
        <img loading='lazy' src={RingSize} />
      </div>
      <Footer/>
    </>
  )
}

export default RingChart