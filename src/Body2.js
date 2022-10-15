import React from 'react'
import './css/Body2.css'
import presantation1 from './img/presantation1.jpg'
import presantation2 from './img/presantation2.jpg'
import photo from './img/photo.jpg'
import {FaHeart } from 'react-icons/fa'

const Body2 = () => {
  return (
    <div className='Body2'>
        <p className='Body2text'>
            The ending was full of exitment. All friends were happy to depart  and presant the final project tothe entire school authorities. <br></br> Old friend too were anciously waiting  for us for a warm welcome celebration at home<br></br>
            Now im at home and i feel big and awesome. 
            The only problem is that money from parents does not flow as expected. <br></br>
            But all the sane life is soo good and sweet. <br></br>
         </p>
         <div className="pictures">
              <img className='pimg1' src={ presantation1 } alt="" />
              <p className='loveicons'>
                <span className='icontest'>See how Beautiful i look!  </span>
                <div className="icons">
               <p className='icon1'> {< FaHeart />} </p>  <p className='icon2'> {< FaHeart />} </p>
               </div>
              </p>
              <img className='pimg2' src={ photo } alt="" />
              <p className='loveicon2'>{< FaHeart />}</p>
              <img className='pimg3' src={ presantation2 } alt="" />
         </div>

    </div>
  )
}

export default Body2