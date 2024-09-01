import react from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../CartCard/CartCard'
import MegaMenu from '../MegaMenuNavbar/MegaMenu'

import './Cart.css'

const Cart =()=>{

    const cart=useSelector((state)=>state.cart.cart);

    return(
        <>
              <MegaMenu/>
        <header className='check-out'>Checkout</header>
            <div className='tw-Cart-Division container'>
                <div className='Product-Division col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                {
                    cart.length>0 && cart.map((item)=>{
                        return (<CartCard key={item.id} item={item}/>)
               
                    })
                }
                {
                    cart.length===0 && <h1 className='No-product'>No Item In Cart</h1>
                }
                </div>
              
            </div>
        </>
    )

}
export default Cart