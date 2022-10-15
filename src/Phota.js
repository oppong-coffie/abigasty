import React from 'react';
import './css/Phota.css';
import { FaPhone, FaTwitter, FaWhatsapp, FaInstagram, FaTelegram } from 'react-icons/fa'

const Phota = () => {
  return (
    <div className='photabody'>
        <>ABIGAIL COFFIE</>
        <div className='photaicons'>
            
            <div>{< FaPhone/>}</div>
            <div>{< FaTwitter/>}</div>
            <div>{< FaWhatsapp/>}</div>
            <div>{< FaInstagram/>}</div>
            <div>{< FaTelegram/>}</div>
        </div>
        +233  599316856 <br></br>
        <small>coffieabigail@gmail.com</small>
    </div>
  )
}

export default Phota
