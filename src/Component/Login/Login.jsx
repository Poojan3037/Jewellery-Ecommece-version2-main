import React from 'react'
import './Login.css'
import ima1 from '../Assets/Login.jpg'
import ima2 from '../Assets/Sign.webp'
import MegaMenu from '../MegaMenuNavbar/MegaMenu'
import Footer from '../Footer/Footer'
const Login = () => {
    return (
        <>
            <MegaMenu />
            <div className='container Login-Box'>
                <div className='Login-Division'>
                <img src={ima1} className="Login-Img"/>
                    <header className='LoginHeader'>Sign In</header>
                    <label>Email:</label>
                    <input type='email' placeholder='Enter Your Email' />
                    <label>Password:</label>
                    <input type='password' placeholder='Enter Your Password' />
                    <div className='Login-Option'>
                        <i class="fi fi-brands-facebook"></i>
                        <i class="fi fi-brands-google"></i>
                        <i class="fi fi-brands-twitter"></i>
                    </div>
                    <button>Sign In</button>
                </div>
                <div className='SignUp-Division'>
                    <img src={ima2} className="Login-Img"/>
                    <header className='LoginHeader'>Sign Up</header>
                    <label>Email:</label>
                    <input type='email' placeholder='Enter Your Email' />
                    <label>Password:</label>
                    <input type='password' placeholder='Enter Your Password' />
                    <label>Verified Password:</label>
                    <input type='password' placeholder='Re-Enter Your Password' />
                    <div className='Login-Option'>
                        <i class="fi fi-brands-facebook"></i>
                        <i class="fi fi-brands-google"></i>
                        <i class="fi fi-brands-twitter"></i>
                    </div>
                    <button>Sign Up</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login