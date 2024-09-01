import React, { useEffect } from 'react'
import './card.css'
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







const Card = React.memo((props) => {

      

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);

    const dispatch=useDispatch();


    const { count } = props;

    const Navigate = useNavigate()
    var cardInformation = [{
        id: 1,
        ProductImage: p1,
        UpperImage: p1u,
        Price: '₹ 7900.00',
        Product_Name: 'Golden Earings',
        Product_Manf: 'Titan Co'
    }, {
        id: 2,
        ProductImage: Ring4,
        UpperImage: Ring5,
        Price: '$450.00',
        Product_Name: 'Golden Earings',
        Product_Manf: 'Titan Co'
    }
        , {
        id: 3,
        ProductImage: Ring7,
        UpperImage: Ring8,
        Price: '$450.00',
        Product_Name: 'Golden Earings',
        Product_Manf: 'Titan Co'
    }
        , {
        id: 4,
        ProductImage: p1u,
        UpperImage: p1,
        Price: '$450.00',
        Product_Name: 'Golden Earings',
        Product_Manf: 'Titan Co'
    },
    {
        id: 5,
        ProductImage: Ring8,
        UpperImage: p1,
        Price: '$450.00',
        Product_Name: 'Golden Earings',
        Product_Manf: 'Titan Co'
    }
        , {
        id: 6,
        ProductImage: Ring5,
        UpperImage: Ring4,
        Price: '$450.00',
        Product_Name: 'Golden Earings',
        Product_Manf: 'Titan Co'
    }
    ]

    const handleAddToCart=(item)=>{
        
        dispatch(cartSliceAction.addToCart(item));
    }

    useEffect(() => {
        if (count) {

            setStart(count.start);
            setEnd(count.end);
        }
    }, [count])
    return (

        cardInformation.slice(start, end).map((item) => (
            <div className='container-card' key={item.id} data-aos="fade-up">
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

                            <div className='icon-box' onClick={()=>handleAddToCart(item)}>
                                <i class="fi fi-rr-shopping-cart"></i>
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

        ))

    )



})

export default Card