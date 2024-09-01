import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Citrine from '../Assets/Stone-Gallery/StoneList/Citrine.png'
import Ring4 from '../Assets/Stone-Gallery/Rings/5.jpg'
import Ring5 from '../Assets/Stone-Gallery/Rings/4.jpg'
import Ring7 from '../Assets/Stone-Gallery/Rings/7.jpg'
import Ring8 from '../Assets/Stone-Gallery/Rings/8.jpg'
// import required modules
import { Pagination } from "swiper";
import './ProductInfo.css'
import Card from "../OurProduct/Card";

import Footer from "../Footer/Footer";
import MegaMenu from "../MegaMenuNavbar/MegaMenu";





export default function ProductInfo() {

    const [activeClass, setActiveClass] = useState("one");

    // let TabToggle = document.querySelectorAll('.Tab-Head span');
    // let TabContent = document.querySelectorAll('.Tab-Content')

    // TabToggle.forEach((tab, index) => {
    //     console.log(tab.innerText)
    //     tab.addEventListener('click', () => {
    //         alert(tab.innerText)
    //         TabContent.forEach((content) => {
    //             content.classList.remove('is-active')
    //         });
    //         TabToggle.forEach((tab) => {
    //             tab.classList.remove('is-active')
    //         });

    //         TabContent[index].classList.add('is-active')
    //         TabToggle[index].classList.add('is-active')
    //     })
    // })
    // TabToggle.forEach((tab,i) => {
    //     tab.addEventListener('click', () => {
    //         alert("clicked")
    //         TabContent.forEach((content)=>{
    //             content.classList.remove('is-active')
    //         });
    //         TabToggle.forEach((tab)=>{
    //             tab.classList.remove('is-active')
    //         });

    //         TabContent[i].classList.add('is-active')
    //         TabToggle[i].classList.add('is-active')
    //     });

    // });
    return (
        <>
            <MegaMenu />
            <div className="Product-Full-Detail">
                <div className="Product-Image col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide><img loading="lazy" src={Citrine} /></SwiperSlide>
                        <SwiperSlide><img loading="lazy" src={Ring4} /></SwiperSlide>
                        <SwiperSlide><img loading="lazy" src={Ring7} /></SwiperSlide>
                        <SwiperSlide><img loading="lazy" src={Ring8} /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="container Product-Detail col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <h1>Amilia Thumb Ring</h1>
                    <div className="Product-Price-Ratings">
                        <h2 className="Product-Price">
                            Price ₹ 7 900.00
                        </h2>
                        <div className="Product-Rating">
                            <i class="fi fi-rr-star"></i>
                            <i class="fi fi-rr-star"></i>
                            <i class="fi fi-rr-star"></i>
                            <i class="fi fi-rr-star"></i>
                            <i class="fi fi-rr-star"></i>
                        </div>
                    </div>
                    <p className="brief">24K Gold Plated Collection 100% brass slim design unclosed. this gold plated piece will age beautifully over time we recommend you to avoid contact with water, perfumes or perfumed lotions and cosmetics, in order to prolong the gold plating.</p>
                    <div className="product-size">
                        <label>Size</label>

                        <label className="Size-Label">S</label>
                        <label className="Size-Label">M<input type="radio" name="Size" /></label>
                        <label className="Size-Label">L<input type="radio" name="Size" /></label>
                        <label className="Size-Label">XL<input type="radio" name="Size" /></label>
                        <label className="Size-Label">XXL<input type="radio" name="Size" /></label>
                    </div>
                    <div className="User-Buy-Button">
                        <div className="howmany-product"></div>
                        <button className="Buttons-cb">ADD TO CART</button>
                        <button className="Buttons-cb">BUY NOW</button>
                    </div>
                    <div className="User-Like-Buttons-Size-Guide">
                        <i class="fi fi-rr-heart"></i>
                        <h6>Add To Wishlist</h6>

                        <i class="fi fi-rr-book"></i>
                        <h6>SizeGuide</h6>
                    </div>
                </div>
            </div>

            <div className="Info-Tabs">
                <div className="Tab-Head">
                    <span className={`Tab-Toggle ${activeClass==="one" && 'is-active'}`} onClick={() => setActiveClass("one")}>Description</span>
                    <span className={`Tab-Toggle ${activeClass==="two" && 'is-active'}`} onClick={() => setActiveClass("two")}>Additional Information</span>
                    <span className={`Tab-Toggle ${activeClass==="three" && 'is-active'}`} onClick={() => setActiveClass("three")}>Review</span>

                </div>
                <div className="Tab-Body">
                    {
                        activeClass === "one" &&
                        <div className="Tab-Content is-active">
                            <div className="Description">
                                <div className="col-lg-6 col-md-12 Description-Content">
                                    <img loading="lazy" src={Ring4} />
                                </div>
                                <div className="col-lg-6 col-md-12 Description-Content">
                                    <li>Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li>It lengthens, with an extreme extension formulation</li>
                                    <li>The creamy emulsion perfectly balances synthetic, plant-derived</li>
                                    <li>It lifts, taking lashes to new heights with a gentle-on-eyes agent.</li>
                                </div>
                                <div className="col-lg-6 col-md-12 Description-Content">
                                    <li>Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li>It lengthens, with an extreme extension formulation</li>
                                    <li>The creamy emulsion perfectly balances synthetic, plant-derived</li>
                                    <li>It lifts, taking lashes to new heights with a gentle-on-eyes agent.</li>
                                </div>
                                <div className="col-lg-6 col-md-12 Description-Content">
                                    <img loading="lazy" src={Ring5} />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        activeClass === "two" &&
                        <div className="Tab-Content Additional-Info">
                            <h6>Vendor : Titan Company</h6>
                            <h6>Type : Gem-Stone</h6>
                            <h6>Size : S,M,L,XL,XXL</h6>
                            <h6>Color : Yelloish</h6>
                        </div>
                    }
                    {
                        activeClass === "three" &&
                        <div className="Tab-Content Review-Box">
                            <h6>No Review</h6>
                            <button className="Add-Your-Review">Add Your Review</button>
                        </div>

                    }
                </div>
            </div>
            <h1 className="Title-Related-Product">
                Related Product
            </h1>
            <div className="Related-Product">
                <Card />
            </div>
            <Footer />
        </>
    );
}
