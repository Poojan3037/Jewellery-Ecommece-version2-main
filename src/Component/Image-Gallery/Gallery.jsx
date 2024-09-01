import React from 'react'
import './Gallery.css'

// Image Gallery Photos Importation
import imagallery1 from '../Assets/image-Gallery/1.jpg'
import imagallery2 from '../Assets/image-Gallery/2.jpg'
import imagallery3 from '../Assets/image-Gallery/3.jpg'
import imagallery4 from '../Assets/image-Gallery/4.jpg'
import imagallery5 from '../Assets/image-Gallery/5.jpg'
import imagallery6 from '../Assets/image-Gallery/6.jpg'
import imagallery7 from '../Assets/image-Gallery/7.jpg'
import imagallery8 from '../Assets/image-Gallery/8.jpg'
import imagallery9 from '../Assets/image-Gallery/9.jpg'
import imagallery10 from '../Assets/image-Gallery/10.jpg'
import imagallery11 from '../Assets/image-Gallery/11.jpg'
import imagallery12 from '../Assets/image-Gallery/12.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Gallery() {
    var imageGallery = [
        {
            id: 1,
            imageGallery: imagallery1
        },
        {
            id: 2,
            imageGallery: imagallery2
        },
        {
            id: 3,
            imageGallery: imagallery3
        },
        {
            id: 4,
            imageGallery: imagallery4
        },
        {
            id: 5,
            imageGallery: imagallery5
        },
        {
            id: 6,
            imageGallery: imagallery6
        },
        {
            id: 7,
            imageGallery: imagallery7
        },
        {
            id: 8,
            imageGallery: imagallery8
        },
        {
            id: 9,
            imageGallery: imagallery9
        },
        {
            id: 10,
            imageGallery: imagallery10
        },
        {
            id: 11,
            imageGallery: imagallery11
        },
        {
            id: 12,
            imageGallery: imagallery12
        },
    ]

    return (

        <>
       
        <div className=' Gallery-Divison' >
            <div className='row row-1'>

                {(imageGallery.map((galleryItem) =>
                    <div className=' col-xl-3 col-md-4 col-xs-12 column-1'>
                        <img loading='lazy' src={galleryItem.imageGallery} />
                    </div>
                ))}
            </div>
        </div>
        
        </>
    )
}

export default Gallery