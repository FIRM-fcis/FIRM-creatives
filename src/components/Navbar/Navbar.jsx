import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchList from '../SearchList/SearchList'
const Navbar = ({setShowSign,handleSign,nav, profilePicture,information  }) => {
  const [input,setinput]=useState("");
  const [results,setresults]=useState([]);
  const [showSearchList,setshowSearchList]=useState(false);
  const fetchData=(value)=>{
    axios("https://jsonplaceholder.typicode.com/albums")
    .then((response)=>{
     setresults(response.data.filter((category)=>{
      return(
       value && category.title.toLowerCase().includes(value)
      )
      }));
    
    })
  }
  const handlechange=(value)=>{
    setinput(value);
    fetchData(value);
  }
  const handleFocus=()=>{
    setshowSearchList(true);
  }
  const handleBlur=()=>{
    setshowSearchList(false);
  }
  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <Link to={nav?'/home':'/'}><img src={assets.logo} alt='Logo' draggable='false' className='logo'/></Link>
        <div className='search-box' onFocus={handleFocus} onBlur={handleBlur} >
              <button className={nav?'btn-search2':'btn-search'}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
              <input type="text" className={nav?'input-search2':'input-search'} placeholder="Search" value={input}  onChange={(e)=>handlechange(e.target.value) }/>
              {
                showSearchList?<SearchList results={results} />
                :<></>
              }
            </div>
        <div className='navbar-right'>
          {nav?<>
            <button className='share-btn'>Share Your Work</button>
            <div className="profile-img-container">
            <Link to='/profile'><img src={profilePicture} alt='Profile Photo' draggable='false' className='profile-img'/></Link>
              <div className="tooltip">
                <div className="tooltip-img-frame">
                <img src={profilePicture} alt='Profile Photo' draggable='false' className='tooltip-img'/>
                </div>
                <p>{information.username}</p>
                <p>{information.email}</p>
                <button onClick={()=>{navigate('/profile')}}>Your Profile</button>
              </div>
            </div>
          
           </>:
           <>
             <button onClick={()=>{setShowSign(true);handleSign("LOGIN")}} className='login'>Log In</button>
             <button onClick={()=>{setShowSign(true);handleSign("SIGN UP")}} className='signup'>Sign Up</button>
           </>
           }   
        </div>
      </div>
  )
}

export default Navbar