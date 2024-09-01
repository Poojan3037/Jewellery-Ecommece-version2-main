import React from 'react'
import '../App.css'
import Slider from "../Component/Slider/Slider"
import ProductDisplay from  "../Component/Product-Display/ProductDisplay"
import Arrival from "../Component/Arrival/Arrival"
import CategoryPoster from "../Component/Category-Poster/CategoryPoster"
import OurProduct from "../Component/OurProduct/OurProduct"
import Footer from '../Component/Footer/Footer'
import Testimonial from '../Component/Testimonials/Testimonial'
import MegaMenu from '../Component/MegaMenuNavbar/MegaMenu'

const Home = () => {
    return (
        <>
          <MegaMenu/>
          <Slider/>
          <ProductDisplay/>
          <Arrival/>
          <CategoryPoster/>
          <OurProduct/>
          <Testimonial/>
          <Footer/>
        </>
    )
}

export default Home