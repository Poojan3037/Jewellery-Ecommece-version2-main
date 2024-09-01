// import { useState } from 'react'
import React from 'react'
import './App.css'
import Slider from './Component/Slider/Slider'
import ProductDisplay from './Component/Product-Display/ProductDisplay'
import Arrival from './Component/Arrival/Arrival'
import CategoryPoster from './Component/Category-Poster/CategoryPoster'
import OurProduct from './Component/OurProduct/OurProduct'
import Brands from './Component/Brands/Brands'
import Footer from './Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Testimonial from './Component/Testimonials/Testimonial'
import About from './Pages/About'
import Aboutus from './Component/AboutUs/Aboutus'
import Pagenotfound from './Component/PageNotFound/Pagenotfound'
import ImageGallery from './Pages/ImageGallery'
import ProductInfo from './Component/ProductInfo/ProductInfo'
import Categories from './Component/Category/Categories'
import Gemstone from './Component/GemStone/Gemstone'
import NecklaceChart from './Component/RingSizeCart/NecklaceChart'
import RingChart from './Component/RingSizeCart/RingChart'
import StoneGallery from './Pages/StoneGallery'
import AllProduct from './Pages/AllProduct'
import MegaMenu from './Component/MegaMenuNavbar/MegaMenu'
import ContactUs from './Component/Contact-Us/ContactUs'
import Login from './Component/Login/Login'
import Term from './Component/Terms-Condition/Term'
import Policy from './Component/Terms-Condition/Policy'
import Cart from './Component/Cart/Cart'


function App() {
  return (
    <>
     
      <div className="App">
      
         <Routes>
          {/* Pages */}
        <Route path='/' element={<Home />} />
          <Route path='contact-us' element={<ContactUs/>}/> 
          <Route path='about-us' element={<About />} />
          <Route path='image-gallery' element={<ImageGallery/>}/>
          <Route path='product-info' element={<ProductInfo/>}/>
          <Route path='gemstone-gallery' element={<StoneGallery/>}/>
          <Route path='products' element={<AllProduct/>}/>
          <Route path='ringchart' element={<RingChart/>}/>
          <Route path='necklacechart' element={<NecklaceChart/>}/> 
          <Route path='login-form' element={<Login/>}/>
          <Route path='terms&condition' element={<Term/>}/>
          <Route path='privacy-policy' element={<Policy/>}/>
          <Route path='cart' element={<Cart/>}/>
          {/* Component */}


          <Route path='Aboutus' element={<Aboutus />} />
          <Route path='ourproduct' element={<OurProduct />} />
          <Route path='slider' element={<Slider />} />
          <Route path='arrival' element={<Arrival />} />
          <Route path='brands' element={<Brands />} />
          <Route path='categoryposter' element={<CategoryPoster />} />
          <Route path='footer' element={<Footer />} />
          <Route path='productdisplay' element={<ProductDisplay />} />
          <Route path='testimonial' element={<Testimonial />} />
          <Route path='megaMenu' element={<MegaMenu/>}/>
          <Route path='*' element={<Pagenotfound />} />
        </Routes> 
        </div>
    </>
  )
}

export default App
