import React, { Component } from "react";
import Slider from "react-slick";
import '../Slider/slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg1 from '../Assets/slider1.webp'
import Bg2 from '../Assets/slider2.webp'


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div className="Slider">
        <Slider {...settings}>
          <div className=" Image-Slider" >
            <img loading="lazy" src={Bg1} />
            <div className="Slider-Detail">
              <h1>Diamonds Jewellery <br /> Collection</h1>
              <p>Sukra Yogam & Silver Power Silver Saving Schemes.</p>
              <button className="Slider-ShopNow-btn">Shop Now</button>
            </div>
          </div>
          <div className=" Image-Slider" >
            <img loading="lazy" src={Bg2} />
            <div className="Slider-Detail">
              <h1>Diamonds Jewellery <br /> Collection</h1>
              <p>Sukra Yogam & Silver Power Silver Saving Schemes.</p>
              <button className="Slider-ShopNow-btn">Shop Now</button>
            </div>
          </div>


        </Slider>
      </div>
    );
  }
}