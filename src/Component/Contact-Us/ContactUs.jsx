import React from 'react'
import Footer from '../Footer/Footer'
import MegaMenu from '../MegaMenuNavbar/MegaMenu'
import './Contactus.css'

const ContactUs = () => {
    return (
        <>
        <MegaMenu/>
            <header className='Contact-Heading'>Contact Us</header>
            <div className='Contact-Content container'>
                <div className='Contact-Form  col-lg-4 col-md-4 col-sm-12'>
                    <header className='Write-to-us'>
                        Write To Us
                    </header>
                    <div className='Form-Detail'>
                        <form>

                            <label>Your Name:</label>
                            <input type='text' placeholder='Enter Your Name' name='Name' />
                            <label>Email:</label>
                            <input type='email' placeholder='Enter Your Email' name='Email' />
                            <label>Phone Number:</label>
                            <input type='email' placeholder='Enter Your Email' name='phone-Number' />
                            <label>Message:</label>
                            <textarea id="Message" name="Message" placeholder="Write something.." ></textarea>
                            <input type='submit' id='submit' name='submit' />

                        </form>
                    </div>
                </div>
                <div className='Contact-Map col-lg-8 col-md-8 col-sm-12'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840014.350288026!2d75.82125014870462!3d25.74485316845401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7e27587c17d%3A0x17b90298e7224d0!2sA%26M%20GEMS%20AND%20JEWELS!5e0!3m2!1sen!2sin!4v1651031934719!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className='Location-Guidence'>
                        <div className='Location'>
                        <i class="fi fi-rs-marker"></i>
                        <p>261-A, near raja park, Frontier Colony, Adarsh Nagar, Jaipur, Rajasthan 302004</p>
                        </div>
                        <div className='Location'>
                        <i class="fi fi-rr-call-history"></i>
                        <p>+123-456-7890</p>
                        <p>+123-456-7890</p>
                        </div>
                        <div className='Location'>
                        <i class="fi fi-rs-envelope"></i>
                        <p>aemjems&jewels@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default ContactUs