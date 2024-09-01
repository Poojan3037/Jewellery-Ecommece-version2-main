import React,{useState} from 'react'

import '../Arrival/Arrival.css'
import Card from '../OurProduct/Card'
const Arrival = () => {

  const [count,setCount]=useState({
    start:0,
    end:3
  });

  return (
    <>

      <div className='tw-Arrival'>
        <h1>New Arrivals</h1>
        <p>Add new arrivals to weekly lineup</p>
        <div className='tw-Arrival-Category-btn'>
          <button className='Arr-click' onClick={()=>setCount({
            start:0,
            end:3
          })} >Bracelates</button>
          <button className='Arr-click' onClick={()=>setCount({
            start:3,
            end:6
          })}>Necklace</button>
          <button className='Arr-click' onClick={()=>setCount({
            start:1,
            end:5
          })}>Earings</button>
        </div>
        <div className='tw-Arrival-Product-Card-Area'>
          <Card count={count}/>
          
         
        </div>
      </div>
    </>

  )
}

export default Arrival