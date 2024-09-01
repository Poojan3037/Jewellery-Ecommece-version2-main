import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css'
export default class Navbar extends Component {
     componentDidMount() {
      let menuOpenBtn = document.querySelector('.navbar .fa-bars');
      let menuCloseBtn = document.querySelector('.nav-links .fa-xmark')
      
      var navLinks = document.querySelector(".nav-links");
      
     menuOpenBtn.addEventListener('click', () => {
          navLinks.style.left = "0"
     });
     menuCloseBtn.addEventListener('click', () => {
          navLinks.style.left = "-100%"
     });
     
     }
    
  render() {
      return (
        <nav>
          <div className='navbar'>
          <i class="fa-solid fa-bars"></i>
           <div className='logo'><NavLink to='/'>A&M Jewellery</NavLink></div>
           <div className='nav-links'>
           <div className='sidebar-logo'>
             <span className='logo_name'>A&M Jewellery</span>
             <i class="fa-solid fa-xmark"></i>
           </div>
              <ul className='links'>
                <li><NavLink to="/">Home</NavLink></li>
                <li>
                  <NavLink to="/products">Jewellery</NavLink>
                  <i class="fa-solid fa-angle-down arrow jewellery-arrow"></i>
                  <ul className='Jewellery-sub-menu sub-menu'>
                    <li><NavLink to="/products">Necklace</NavLink></li>
                    <li><NavLink to="/products">Earings</NavLink></li>
                    <li><NavLink to="/products">Bangales</NavLink></li>
                    <li><NavLink to="/products">Rings</NavLink></li>
                    <li className='More'>
                      <a href='#'>More</a>
                      <i class="fa-solid fa-angle-right arrow more-arrow"></i>
                      <ul className='More-sub-menu sub-menu'>
                        <li><a href='#'>Platinum</a></li>
                        <li><a href='#'>Silver</a></li>
                        <li><a href='#'>Titanium</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>Gems</a>
                  <i class="fa-solid fa-angle-down arrow gems-arrow"></i>
                  <ul className='Gems-sub-menu sub-menu'>
                    <li><a href='#'>Diamonds</a></li>
                    <li><a href='#'>Precious</a></li>
                    <li><a href='#'>Semi Precious</a></li>
                  </ul>
                </li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
                
              </ul>
            </div>
            
          </div>
        </nav>
    )
  }
}
