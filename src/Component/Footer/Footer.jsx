import React from 'react'
import '../Footer/footer.css'

{/*Import Images*/}
import card1 from '../Assets/banners/card-1.png'
import card2 from '../Assets/banners/card-2.png'
import card3 from '../Assets/banners/card-3.png'
import card4 from '../Assets/banners/card-4.png'
import card5 from '../Assets/banners/card-5.png'
import card6 from '../Assets/banners/card-6.png'
import Logo from '../Assets/logo.png'
import { useNavigate} from 'react-router'
import { NavLink } from 'react-router-dom'



const Footer = () => {
    const Navigate = useNavigate()
  return (
    <>
       <footer id="tw-main-footer">
        <div className="footer-container">
          
            <div className="footer-box-main">
                <div className="footer-content-big">
                    <img loading='lazy' src={Logo} alt=""/>
                    <h3>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans tobest</h3>
                </div>
                <div className="footer-content-small">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a onClick={()=>{Navigate('/about-us')}}>About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                        <li><NavLink to='/terms&conditions'>Terms & Condition</NavLink></li>
                        <li><a href='#'>Contact Us</a></li>
                        
                    </ul>
                </div>
                <div className="footer-content-small">
                    <h3>Information</h3>
                    <ul>
                        <li><a onClick={()=>{Navigate('/image-gallery')}}>Image Gallery</a></li>
                        <li><NavLink to="/necklacechart">Necklace Size Chart</NavLink></li>
                        <li><NavLink to="/gemstone-gallery">Stone Types </NavLink></li>
                        <li><NavLink to="/ringchart">Ring Size Chart</NavLink></li>
                        <li><NavLink to="/">Bangles Size Chart</NavLink></li>
                    </ul>
                </div>
                <div className="footer-content-big">
                    <div className="follow">
                        <h1>Follow Us</h1>
                    </div>
                    <div className="social-handle">
                        <span><a href=""><i className="fa-brands fa-instagram"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-facebook"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-twitter"></i></a></span>
                        <span><a href=""><i className="fa-brands fa-linkedin"></i></a></span>
                        
                    </div>
                </div>
            </div>
            <div className="footer-box-contact">
                <div className="contact-us">
                    <span><i className="fa-solid fa-house-chimney"></i></span>
                    <h4> Address: 121 Park Drive, Varick, Usa</h4>
                </div>
                <div className="contact-us">
                    <span><i className="fa-solid fa-phone"></i></span>
                    <h4>Phone : 123-456-7890</h4>
                </div>
                <div className="contact-us">
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <h4>Email : info@example.com</h4>
                </div>
            </div> 

            <div className="Pay-Acc">
                <div className="paycompany">
                    <img  loading='lazy'  src={card1} alt=""/>
                </div>
                <div className="paycompany">
                    <img  loading='lazy' src={card2} alt=""/>
                </div>
                <div className="paycompany">
                    <img  loading='lazy' src={card3} alt=""/>
                </div>
                <div className="paycompany">
                    <img  loading='lazy' src={card4} alt=""/>
                </div>
                <div className="paycompany">
                    <img  loading='lazy' src={card5} alt=""/>
                </div>
                <div className="paycompany">
                    <img  loading='lazy' src={card6} alt=""/>
                </div>
               
            </div>

            <div className="copyright">
                <div className="Right-Reserved">
                    <h6>@All Right Reserved by AEM Jeweller</h6>
                </div>
                
                <div className="Powered-By">
                    <h6>@Powered & Managed By TrueWeb Logic</h6>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer