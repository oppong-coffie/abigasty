import React from 'react'
import './css/Body1.css'
import v from './img/v1.jpg'

const Body1 = () => {
  return (
    <div className='topcontainer'>
        <img className='topimg1' src={v} alt="" />
        <p className='toptext'>The beginning was very nice but some how though. <br></br>The best momment i enjoyed was when i was <br></br>doing market shopping in the Mall during week ends.<br></br>
        On the week days i will go back to the school and <br></br>continue my learning skills<br></br></p>
        <img className='topimg2' src={v} alt="" />
    </div>
  )
}

export default Body1