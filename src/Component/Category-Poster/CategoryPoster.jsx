import React from 'react'
import '../Category-Poster/Cposter.css'
import Poster1 from '../Assets/banner2-1.jpg'
import Poster2 from '../Assets/banner2-2.jpg'
import Poster3 from '../Assets/banner2-3.jpg'
import Poster4 from '../Assets/banner2-4.jpg'
const CategoryPoster = () => {
  return (
    <div className='Poster-Container'>
        <div className='Poster-BoxArea'>
            <img  loading='lazy' src={Poster1}/>
            <div className='Poster-Details'>
              <h2>Earings</h2>
              <p>15 Items</p>
            </div>
        </div>
        <div className='Poster-BoxArea'>
            <img  loading='lazy'src={Poster2}/>
            <div className='Poster-Details'>
              <h2>Bracelates</h2>
              <p>15 Items</p>
            </div>
        </div>
        <div className='Poster-BoxArea'>
            <img loading='lazy' src={Poster3}/>
            <div className='Poster-Details'>
              <h2>Necklace</h2>
              <p>15 Items</p>
            </div>
        </div>
        <div className='Poster-BoxArea'>
            <img  loading='lazy'src={Poster4}/>
            <div className='Poster-Details'>
              <h2>Bangles</h2>
              <p>15 Items</p>
            </div>
        </div>
       
        
    </div>
  )
}

export default CategoryPoster