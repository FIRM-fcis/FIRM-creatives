import React, { useRef, useState } from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'
import { NavLink, Outlet } from 'react-router-dom'
const Profile = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPicture,setSelectedPicture]=useState(assets.profile_img);
  const activeStyle=({isActive})=>{
    return{
      color:isActive?"#e74c3c":"#191919",
      fontWeight:isActive?"bold":"400"
    }
  }
  const handleBannerImageClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);   
      };

      reader.readAsDataURL(file); 

    } else {
      console.error('No file selected');
    }
  };
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedPicture(reader.result);
      };

      reader.readAsDataURL(file); 

    } else {
      console.error('No file selected');
    }
  };


  return (
    <div className='profile'>
      <div className='banner-image' onClick={handleBannerImageClick}>
          {selectedImage ? (
            <img src={selectedImage} alt="Bannerimage" className="banner-image" draggable='false' />
          ) : (
            <>
              <div className='banner-content'>
                <FontAwesomeIcon className='banner-icon' icon={faCircleArrowDown}/>
                <p>Add a Banner Image</p>
              </div>
            
            </>
          )}
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
          <div className="profile-image">
            <div className="profile-image-border">
              <img src={selectedPicture} alt="Profile picture" draggable='false' />
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePhotoChange} style={{ display: 'none' }} />
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