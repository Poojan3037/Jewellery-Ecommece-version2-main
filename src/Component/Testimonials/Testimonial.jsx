import React from 'react'
import Face from '../Assets/Client/Face.jpg'
import Face2 from '../Assets/Client/Face2.jpg'
import Face3 from '../Assets/Client/Face3.webp'
import '../Testimonials/Testimonial.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";


const Testimonial = () => {
  var testimonialReview =
    [
      {
      ReviewId : 1,
      ClientImage : Face,
      ClientReviw : "All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you!",
      ClientName : "Kevin Vasoya",
      Reviewer : "Customer"
      },
      {
        ReviewId : 2,
      ClientImage : Face2,
      ClientReviw : "All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you!",
      ClientName : "Tager Smith",
      Reviewer : "International Client"
      },
      {
        ReviewId : 3,
      ClientImage : Face3,
      ClientReviw : "All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you!",
      ClientName : "Rahul Agrawal",
      Reviewer : "Owner"
      }

    ]
  return (

    <>
      <div className='Testimonial-Fluid'>
        <h1>Client Testimonials</h1>
        <p>What They Say</p>        
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          testimonialReview.map((Review)=>
          <SwiperSlide>
            <div className='Testimonial-Card' key={Review.ReviewId}>
              <div className='Testimonial-Profile'>
                <img className='Client-Image' loading="lazy" src={Review.ClientImage} />
              </div>
              <p>{Review.ClientReviw}</p>
              <h4>{Review.ClientName} / {Review.Reviewer}</h4>
            </div>
          </SwiperSlide>
          )
        }
        </Swiper>
      </div>
    </>


  )
}

export default Testimonial