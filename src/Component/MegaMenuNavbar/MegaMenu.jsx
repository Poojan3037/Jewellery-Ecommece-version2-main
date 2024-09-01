import React, { Component } from "react";
import "./MegaMenu.css";
import NavImg from "../Assets/NavImg.jpg";
import { NavLink } from "react-router-dom";
import Logo from '../Assets/logo.png'
import { useSelector } from "react-redux";

const MegaMenu = () => {


  const cart = useSelector((state) => state.cart.cart);


  return (
    <>
      <nav className="Main-Nav">
        <div className="Nav-Wrapper">
          <div className="logo">
            <img src={Logo} />
          </div>
          <input type="checkbox" name="nav-slide" id="button-menu"></input>
          <input type="checkbox" name="nav-slide" id="button-menu"></input>
          <ul className="Nav-Links">
            <label
              htmlFor="button-menu"
              className="toggle-button-nav button-cancel "
            >
              <i class="fi fi-rr-cross"></i>
            </label>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="for-desktop">
                Categories
              </NavLink>
              <input type="checkbox" id="showMenu"></input>
              <label htmlFor="showMenu" className="for-mobile" >
                Categories
              </label>
              <div className="Mega-Box">
                <div className="Mega-Box-Content">
                  <div className="Content-Row">
                    <img src={NavImg} />
                  </div>
                  <div className="Content-Row">
                    <header>Collection</header>

                    <ul className="Mega-Links">
                      <li>
                        <NavLink to="/products" >
                          Gold Jewellery
                        </NavLink>
                      </li>
                      <li>
                        <a href="#">Diamond Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Stone Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Silver Jewellery</a>
                      </li>
                    </ul>
                  </div>
                  <div className="Content-Row">
                    <header>Jewellery</header>
                    <ul className="Mega-Links">
                      <li>
                        <a href="#">Earrings & Studs</a>
                      </li>
                      <li>
                        <a href="#">Necklace & Chains</a>
                      </li>
                      <li>
                        <a href="#">Rings</a>
                      </li>
                      <li>
                        <a href="#">Bracelets & Cuffs</a>
                      </li>
                    </ul>
                  </div>
                  <div className="Content-Row">
                    <header>Other Categories</header>
                    <ul className="Mega-Links">
                      <li>
                        <a href="#">Bangle</a>
                      </li>
                      <li>
                        <a href="#">Stones</a>
                      </li>
                      <li>
                        <a href="#">Jhumkas</a>
                      </li>
                      <li>
                        <a href="#">Nose Pin</a>
                      </li>
                      <li>
                        <a href="#">MangalSutra</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NavLink to='/contact-us'>Contact Us</NavLink>
            </li>
            <li>
              <a href="#" className="for-desktop">
                More
              </a>
              <input type="checkbox" id="showDrop"></input>
              <label htmlFor="showDrop" className="for-mobile">
                More
              </label>
              <ul className="Drop-Down">
                <li>
                  <NavLink to='/about-us'>About Us</NavLink>
                </li>
                <li>
                  <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to='/terms&condition'>Term & Condition</NavLink>
                </li>
                <li>
                  <a href="#">FAQ'S</a>
                </li>
                <li>
                  <NavLink to='*'>Page 404</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/login-form">Login</NavLink>
            </li>
          </ul>
          <div className="Addition-Icon">
            <NavLink to="/cart"><i class="fi fi-rr-shopping-cart-add">{cart.length}</i></NavLink>

            <i class="fi fi-rs-heart"></i>
          </div>
          <label htmlFor="button-menu" className="toggle-button-nav button-menu " >
            <i class="fi fi-rr-align-justify"></i>
          </label>
        </div>
      </nav>
    </>
  );


}

export default MegaMenu;
