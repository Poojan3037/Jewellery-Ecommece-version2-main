import React, { Component } from 'react'

import Card from '../OurProduct/Card'
import '../Category/Categories.css'

export default class Categories extends Component {


    constructor(){
        super();

        this.state=({
            count:{
                start:0,
                end:6
            }
        })
    }

    componentDidMount() {


        let openFilterbtn = document.querySelectorAll(' .fa-plus')
        let closeFilterbtn = document.querySelectorAll(' .fa-minus')
        let BtnActiv = document.querySelectorAll('.Btn-Activation')



        openFilterbtn.forEach((filter, index) => filter.addEventListener("click", () => {
            let filterRange = filter.parentElement.nextElementSibling
            //    alert(filterRange.children.length)
            filterRange.style.height = "auto";
            closeFilterbtn[index].classList.add('BtnClose')
            openFilterbtn[index].classList.add('BtnPlus')
        }))
        closeFilterbtn.forEach((filter1, index) => filter1.addEventListener("click", () => {
            let filterRange = filter1.parentElement.nextElementSibling
            //    alert(filterRange.children.length)
            filterRange.style.height = "0";
            closeFilterbtn[index].classList.remove('BtnClose')
            openFilterbtn[index].classList.remove('BtnPlus')
        }))
        // openFilterbtn.addEventListener("click", () => {
        //     filterRange.style.height = "auto";
        //     closeFilterbtn.classList.add('BtnClose')=
        //     openFilterbtn.classList.add('BtnPlus')


        // })
        // closeFilterbtn.addEventListener("click", () => {
        //     filterRange.style.height = "0";
        //     openFilterbtn.classList.remove('BtnPlus')
        //     closeFilterbtn.classList.remove('BtnClose')
        // })


    }
    render() {
        return (
            <>
                <div className='tw-shopping-head'>
                    <h1>Shop</h1>
                </div>
                <div className='tw-shopping-area container'>

                    <div className='row'>

                        <div className='col-lg-2 col-sm-12 col-md-12 col-xs-12'>

                            <div className='Filter-Head'>
                                <h5>Filter By</h5>
                                <button className='clr-All'>Clear All</button>
                            </div>

                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Price</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox'/>Less Than 20000Rs.</li>
                                    <li><input type='checkbox' />10000-25000Rs.</li>
                                    <li><input type='checkbox' />25000-50000Rs.</li>
                                    <li><input type='checkbox' />50000-100000Rs.</li>
                                    <li><input type='checkbox' />10000-200000Rs.</li>
                                    <li><input type='checkbox' />More than 200000Rs.</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Jewellery Type</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox' />Gold Jewellery</li>
                                    <li><input type='checkbox' />Diamond Jewellery</li>
                                    <li><input type='checkbox' />Plain Gold Jewellery</li>
                                    <li><input type='checkbox' />Plain Jewellery with Stone</li>
                                    <li><input type='checkbox' />Silver Jewelllery</li>
                                    <li><input type='checkbox' />Platinuim Jewellery</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Product</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox' />Anklet</li>
                                    <li><input type='checkbox' />Bracelet</li>
                                    <li><input type='checkbox' />Bangles</li>
                                    <li><input type='checkbox' />Chain</li>
                                    <li><input type='checkbox' />Charm</li>
                                    <li><input type='checkbox' />Earrings</li>
                                    <li><input type='checkbox' />Pendant Sets</li>
                                    <li><input type='checkbox' />Gold Coin</li>
                                    <li><input type='checkbox' />Jewellery Sets</li>
                                    <li><input type='checkbox' />Finger Rings</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Gender</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox' />Male</li>
                                    <li><input type='checkbox' />Female</li>
                                    <li><input type='checkbox' />Kids</li>
                                    <li><input type='checkbox' />Unisex</li>
                                    <li><input type='checkbox' />NA</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Purity</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox' />14</li>
                                    <li><input type='checkbox' />18</li>
                                    <li><input type='checkbox' />18.00</li>
                                    <li><input type='checkbox' />22.00</li>
                                    <li><input type='checkbox' />24.00</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Ocassion</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox' />Anniversary</li>
                                    <li><input type='checkbox' />Bridal Wear</li>
                                    <li><input type='checkbox' />Casual Wear</li>
                                    <li><input type='checkbox' />Daily Wear</li>
                                    <li><input type='checkbox' />Engagement</li>
                                    <li><input type='checkbox' />Romantic</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className=' Btn-Activation'>
                                    <label>Community</label>
                                    <i class="fa-solid fa-plus"></i>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <ul className='Range'>
                                    <li><input type='checkbox' />Bengali</li>
                                    <li><input type='checkbox' />Gujarati</li>
                                    <li><input type='checkbox' />Marathi</li>
                                    <li><input type='checkbox' />Indian Bridal</li>
                                    <li><input type='checkbox' />Kannada</li>
                                    <li><input type='checkbox' />Bihari</li>
                                    <li><input type='checkbox' />Punjabi</li>
                                    <li><input type='checkbox' />Rajasthani</li>
                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-10 col-sm-12 col-md-12 col-xs-12'>
                            <div className='row Change-Layout'>

                            </div>
                            <div className='row Product-Showcast'>
                                <Card count={this.state.count}/>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



