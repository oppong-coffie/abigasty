import React from 'react'
import './css/Navbar.css'
import { FaHome, FaBook, FaUsersCog, FaPhone, FaUserFriends } from 'react-icons/fa';
import f from './img/f.jpg'

const Narbar = () => {
  return (
    <nav>
        <li> { <FaHome/> } Home</li>
        <li> { <FaUserFriends/> } About</li>
        <li> { <FaBook/> } Documents</li>
        <li> { <FaPhone/> } Contact</li>
        <li> { <FaUsersCog/> } References</li>
        <li><img className='profile' src={f} alt="" /></li>

    </nav>
  )
}

export default Narbar