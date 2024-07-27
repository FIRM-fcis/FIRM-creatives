import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({setShowSign,handlesign }) => {
  const x="LOGIN"
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='Logo' draggable='false' className='logo'/>
        <div className='navbar-right'>
            <div className='search-box'>
              <button className='btn-search'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              <input type="text" className='input-search' placeholder="Search"/>
            </div>
            <button onClick={()=>{setShowSign(true);handlesign("LOGIN")}} className='login'>Log In</button>
            <button onClick={()=>{setShowSign(true);handlesign("SIGN UP")}} className='signup'>Sign Up</button>
        </div>
      </div>
  )
}

export default Navbar