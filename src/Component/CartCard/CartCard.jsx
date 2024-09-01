import React, { useEffect } from 'react'

import p1 from '../Assets/p1.jpg'
import p1u from '../Assets/p1u.jpg'
import Ring4 from '../Assets/Stone-Gallery/Rings/5.jpg'
import Ring5 from '../Assets/Stone-Gallery/Rings/4.jpg'
import Ring7 from '../Assets/Stone-Gallery/Rings/7.jpg'
import Ring8 from '../Assets/Stone-Gallery/Rings/8.jpg'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import { useDispatch } from 'react-redux'
import { cartSliceAction } from '../../slice/cartSlice'







const CartCard = React.memo(({item}) => {

    const dispatch=useDispatch();

    const handleRemoveCart=(id)=>{
        
        dispatch(cartSliceAction.removeCart(id))
    }


    return (

        <>
           

        <div className='container-card' key={item.id}>
            <div className='Product-Preview'>
                <img loading='lazy' src={item.ProductImage} />
                <div className='Upper-Image'>
                    <img loading='lazy' src={item.UpperImage} />
                    <div className='User-Features'>
                        <div className='icon-box'>
                            <i class="fi fi-rr-eye" onClick={() => Navigate('/product-info')}></i>
                        </div>

                        <div className='icon-box'>
                            <i class="fi fi-rr-heart"></i>
                        </div>

                        <div className='icon-box' onClick={()=>handleRemoveCart(item.id)}>
                        <i class="fi fi-rr-cross"></i>
                        </div>

                        <div className='icon-box'>
                            <i class="fi fi-rr-exchange"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Product-Detail'>
                <h6>{item.Price}</h6>
                <h2 onClick={() => Navigate('/product-info')}>{item.Product_Name}</h2>
                <div className='Rating-Manf'>
                    <h6>{item.Product_Manf}</h6>
                </div>
            </div>
        </div>

        </>
    )





})





export default CartCard;