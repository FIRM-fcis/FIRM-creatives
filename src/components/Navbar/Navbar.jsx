import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchList from '../SearchList/SearchList'
const Navbar = ({setShowSign,handleSign,nav}) => {
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
            <button className='hire-btn'>Hire Freelancers</button>
            <button className='share-btn'>Share Your Work</button>
            <div className="profile-img-container">
              <Link to='/' ><img src={assets.profile} alt='Profile Photo' draggable='false' className='profile-img'/></Link>
              <div className="tooltip">
                <div className="tooltip-img-frame">
                <img src={assets.profile} alt='Profile Photo' draggable='false' className='tooltip-img'/>
                </div>
                <p>Dareen Housam</p>
                <p>dareenhousam6@gmail.com</p>
                <button>Your Profile</button>
              </div>
            </div>
          
           </>:
           <>
             <button onClick={()=>{setShowSign(true);handleSign("LOGIN")}} className='login'>Log In</button>
             <button onClick={()=>{setShowSign(true);handleSign("SIGN UP")}} className='signup'>Sign Up</button>
             {console.log("hi nav")}
             {console.log(nav)}
           </>
           }   
        </div>
      </div>
  )
}

export default Navbar