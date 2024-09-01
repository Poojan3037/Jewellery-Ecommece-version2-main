import React from 'react'
import '../Product-Display/product.css'
import displaycard1 from '../Assets/banner1-1.jpg'
import displaycard2 from '../Assets/banner1-2.jpg'
import displaycard3 from '../Assets/banner1-3.jpg'
import displaycard4 from '../Assets/banner1-4.jpg'




const ProductDisplay = () => {
  return (
    <>
      {/* Trust */}
      <div id='Product-Display'>
        <div id='tw-Trustness'>
          {/* Card s for Trusty Box */}

          <div className='tw-Trustness-Box'>
            <div className='tw-Iconbox'>
              <i className="fi fi-rs-plane"></i>
            </div>
            <div className='tw-Iconbox-Detail'>
              <h4>Free Shipping</h4>
              <p>Free Shipping On All US Order Or Order Above $200</p>
            </div>
          </div>

          <div className='tw-Trustness-Box'>
            <div className='tw-Iconbox'>
              <i className="fi fi-rr-life-ring"></i>
            </div>
            <div className='tw-Iconbox-Detail'>
              <h4>Free Shipping</h4>
              <p>Free Shipping On All US Order Or Order Above $200</p>
            </div>
          </div>

          <div className='tw-Trustness-Box'>
            <div className='tw-Iconbox'>
              <i className="fi fi-rr-undo"></i>
            </div>
            <div className='tw-Iconbox-Detail'>
              <h4>Free Shipping</h4>
              <p>Free Shipping On All US Order Or Order Above $200</p>
            </div>
          </div>

          <div className='tw-Trustness-Box'>
            <div className='tw-Iconbox'>
              <i className="fi fi-rr-credit-card"></i>
            </div>
            <div className='tw-Iconbox-Detail'>
              <h4>Free Shipping</h4>
              <p>Free Shipping On All US Order Or Order Above $200</p>
            </div>
          </div>

        </div>
        {/* Trust End */}
        <div id='tw-ProductDisplay'>

          <div className='tw-DisplayCard'>
            <img loading='lazy' src={displaycard1} />
            <div className='tw-DisplayCard-Info'>
              <p>Beautiful</p>
              <h1>Wedding <br/>Rings</h1>
              <button id='Rings-Shop-Now'>Shop Now</button>
            </div>
          </div>

          <div className='tw-DisplayCard'>
            <img loading='lazy' src={displaycard2} />
            <div className='tw-DisplayCard-Info'>
              <p>Beautiful</p>
              <h1>Wedding <br/>Rings</h1>
              <button id='Rings-Shop-Now'>Shop Now</button>
            </div>
          </div>
          
          <div className='tw-DisplayCard'>
            <img loading='lazy' src={displaycard3} />
            <div className='tw-DisplayCard-Info'>
              <p>Earings</p>
              <h1>Tangerine Floral Earring</h1>
              <button id='Rings-Shop-Now'>Shop Now</button>
            </div>
          </div>

          <div className='tw-DisplayCard'>
            <img loading='lazy' src={displaycard4} />
            <div className='tw-DisplayCard-Info'>
              <p>Beautiful</p>
              <h1>Wedding <br/>Rings</h1>
              <button id='Rings-Shop-Now'>Shop Now</button>
            </div>
          </div>

        


        </div>
      </div>
    </>
  )
}

export default ProductDisplay