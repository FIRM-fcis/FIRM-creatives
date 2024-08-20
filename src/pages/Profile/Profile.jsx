import React, { useRef, useState } from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'
import { NavLink, Outlet } from 'react-router-dom'
import {handleImageChange} from '../../Shares/handelInputs'
const Profile = ({ profilePicture, setProfilePicture, forceUpdate  }) => {

  const [selectedBannerImage, setSelectedBannerImage] = useState(null);
  const bannerFileInputRef = useRef(null);
  const profileFileInputRef = useRef(null);
  const activeStyle=({isActive})=>{
    return{
      color:isActive?"#e74c3c":"#191919",
      fontWeight:isActive?"bold":"400"
    }
  }

  const handleBannerImageClick = () => {
    bannerFileInputRef.current.click();
  };

  const handleProfileImageClick = () => {
    profileFileInputRef.current.click();
  };
  const handleBannerImageChange = (event) => {
  handleImageChange(event, setSelectedBannerImage);
  };

  const handleProfileImageChange = (event) => {
    handleImageChange(event, setProfilePicture);
  };

  return (
    <div className='profile'>
      <div className='profile-top'>
        <div className='banner-image'  onClick={handleBannerImageClick}>
          {selectedBannerImage ? (
            <img src={selectedBannerImage} alt="Bannerimage" className="banner-image" draggable='false' />
          ) : (
            <>
              <div className='banner-content'>
                <FontAwesomeIcon className='banner-icon' icon={faCircleArrowDown}/>
                <p>Add a Banner Image</p>
              </div>
            
            </>
          )}
          <input type="file" accept="image/*" ref={bannerFileInputRef} onChange={handleBannerImageChange} style={{ display: 'none' }} />
          </div>
          <div className="profile-image"  onClick={handleProfileImageClick}>
            <div className="profile-image-border">
              <img src={profilePicture} alt="Profile picture" draggable='false' />
              <input type="file" accept="image/*" ref={profileFileInputRef} onChange={handleProfileImageChange} style={{ display: 'none' }} />
            </div>
          </div>   
      </div>
      <div className="profile-content">
        <NavLink to="projects" style={activeStyle}>Your Work</NavLink>
        <NavLink to="editProile" style={activeStyle}>Edit profile info</NavLink>
        <NavLink to="logout" style={activeStyle}>Log Out</NavLink>
      </div>
      <hr/>
      <Outlet/>
    </div>
  )
}

export default Profile