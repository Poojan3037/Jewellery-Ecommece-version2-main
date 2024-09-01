import React from 'react'
import '../Brands/Brand.css'
import Graff from '../Assets/Graff.svg'
import Tanishq from '../Assets/Tanishq.png'
import Titan from '../Assets/titan.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Brandlogo = () => {
    const brandlogo = [
        {
            id: 1,
            brandlogo: Graff
        },
        {
            id: 2,
            brandlogo:Tanishq
        },
        {
            id: 3,
            brandlogo: Titan
        },
        {
            id: 4,
            brandlogo:Graff
        },

    ]


    return (brandlogo.map((logoItem) => (

        <div className='tw-brand-logo-img' key={logoItem.id}>
            <img src={logoItem.brandlogo} />
        </div>

    ))
    )
}

export default Brandlogo