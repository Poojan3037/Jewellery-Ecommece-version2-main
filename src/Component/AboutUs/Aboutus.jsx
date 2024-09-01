import React from 'react'
import './About.css'
import creative from "../Assets/creativity.png"
import support from "../Assets/support.png"
import money from "../Assets/money-back.png"
import aboutimg from "../Assets/About.jpg"
const Aboutus = () => {
  return (
    <>
      <h1 className='Bigger-Title'>About Us</h1>
      <div className='container tw-About-Image'>
        <img loading='lazy' src={aboutimg} />
      </div>
      <div className='container tw-About-Us'>
        <div className='col-lg-12 as-we-use'>
          <h2>Who we are?</h2>
          <p>Today A&M Gems & Jewels is Jaipur based leading Gemstone and Jewellery manufacturer and exporter and is a family run enterprise handed down over two generations.</p>
          <p>
            At A&M Gems & Jewels, our motive is not to just complete a sale, we want you to experience and enjoy our natural handcrafted Gemstones and Jewellery as much as we enjoy making it. We work with the objective to make beautiful handcrafted and natural gemstones and high quality Jewellery accessible and affordable. Our business is driven by ethics. We ensure that all our operations right from sourcing to selling are done responsibly.
          </p>

          <p>

            Today A&M Gems & Jewels is Jaipur based leading Gemstone and Jewellery manufacturer and exporter and is a family run enterprise handed down over two generations. Our passion for Jewellery making goes hand in hand with our dedication to bring the most efficient and high quality service.
          </p>
          <p>
            We specialize in making custom Jewellery designs with the guarantee of best quality, best prices and keeping the designs and details of customer confidential.</p>
        </div>
        <div className='col-lg-3 col-md-7 col-sm-7 col-xs-9 '>
          <h2>Our Mission</h2>
          <p>Our mission is to make beautiful Gemstone and Jewellery accessible and affordable.</p>
        </div>
        <div className='col-lg-3 col-md-7 col-sm-7 col-xs-9 '>
          <h2>Our Promises</h2>
          <p>Our style is relentlessly modern, unique and stylish.We always look for better and newer ways to do things; from the designs that we make to the experiences that we deliver.We are open in our interactions with our customers. Our prices and policies are always transparent.</p>
        </div>
        <div className='col-lg-3 col-md-7 col-sm-7 col-xs-9 '>
          <h2>History Of Us </h2>
          <p>Today A&M Gems & Jewels is Jaipur based leading Gemstone and Jewellery manufacturer and exporter and is a family run enterprise handed down over two generations.</p>
        </div>
      </div>


      <div className='Our-Features-Box'>

        <div className='row container Features-Box'>

          <div className='col-xs-9 col-sm-7 col-md-3 col-lg-3  Features'>
            <img loading='lazy' src={creative} />
            <h5>Creative Design</h5>
            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
          </div>
          <div className='col-xs-9  col-sm-7 col-md-3 col-lg-3  Features'>
            <img loading='lazy' src={money} />
            <h5>100% Money Back Guarantee</h5>
            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
          </div>
          <div className='col-xs-9 col-sm-7  col-md-3 col-lg-3   Features'>
            <img loading='lazy' src={support} />
            <h5>Online Support 24/7</h5>
            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Aboutus