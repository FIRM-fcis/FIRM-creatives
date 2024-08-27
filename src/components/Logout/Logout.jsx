import React from 'react'
import { assets } from '../../assets/assets'
import './Logout.css'
import { useNavigate } from 'react-router-dom'
const Logout = ({handleNav}) => {
    const navigate=useNavigate();
  return (
    <div className='logout-container'>
        <div className="logout-photo">
            <img src={assets.logout} alt="logout" draggable='false' />
        </div>
        <div className="logout-content">
            <p>Oh no! You're leaving...</p>
            <p>Are you sure?</p>
            <button onClick={()=>{navigate('/profile')}} className='logout-no'>NO, Cancel</button>
            <button onClick={()=>{navigate('/');handleNav(false);localStorage.removeItem('authToken');
            localStorage.removeItem('userId');}} className='logout-yes'>Yes, Log Me Out</button>
        </div>
    </div>
  )
}

export default Logout