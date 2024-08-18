import React, { useEffect, useState } from 'react'
import './EditProfileInfo.css'
import { assets } from '../../assets/assets'
const EditProfileInfo = () => {
  const [profileData, setProfileData] = useState({
    username: "bishoy",
    email: "bishosedra0@gmail.com",
    profilePicture: null,
    bannerPicture: null,
    address: "Cairo",
    availability: null,
    following: 0,
    followers: 0,
    joiningDate: "2024-08-05T11:10:50.106Z",
    resumeLink:null,
    links:[{title:'',url:''}],
    aboutMe:"Passionate frontend developer crafting intuitive and visually appealing user experiences. Proficient in HTML, CSS, JavaScript, and React. Committed to creating responsive and accessible designs."
  });

  const handleProfileUpdate = () => {
  //  console.log(profileData)
  }
  const handleResumeChange = (event) => {
    setProfileData({...profileData,resumeLink:event.target.files[0]});
  };
  const handleAvailabilityChange = (option) => {
    setProfileData({...profileData,availability:option});
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setProfileData({
        ...profileData, [name]: value
    })
}
const handleRemoveLink = (index) => {
  const updatedLinks = [...profileData.links];
  updatedLinks.splice(index, 1);
  setProfileData({ ...profileData, links: updatedLinks });
};
const handleListClick = (section) => {
  const targetDiv = document.getElementById(section);

  if (targetDiv) {
    // Smooth scroll to the target div with animation (optional)
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Div with ID "${section}" not found.`); // Handle potential errors
  }
};

  return (
    <div className='edit-profile-info'>
        <div class="edit-profile-info-list">
            <ul>
              <li onClick={() => handleListClick('profile-basic-information')}>Basic Information</li>
              <li onClick={() => handleListClick('profile-about-me')}>About Me</li>
              <li onClick={() => handleListClick('profile-links')}>Links</li>
              <li onClick={() => handleListClick('profile-availability')}>Availability</li>
          </ul>
            <div className="list-photos">
              <img src={assets.list} alt="list design" draggable='false' />
              <img src={assets.list} alt="list design" draggable='false' />
              <img src={assets.list} alt="list design" draggable='false' />
              <img src={assets.list} alt="list design" draggable='false' />
              <img src={assets.list} alt="list design" draggable='false' />
            </div>
        </div>
        <div className="edit-profile-info-content">
            <div id="profile-basic-information">
              <label>UserName:</label>
                <input type="text" defaultValue={profileData.username} name='username' onChange={handlechange} />
                <label>Email:</label>
                <input type="text" defaultValue={profileData.email} name='email' onChange={handlechange} />
                <label>Address:</label>
                <input type="text" defaultValue={profileData.address} name='address' onChange={handlechange} />
                <p>Following:  {profileData.following}</p>
                <p>Followers:  {profileData.followers}</p>
                <p>Member since:  {profileData.joiningDate}</p>
                <label>Resume:</label>
                <input className='profile-resume' type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} defaultValue={profileData.resumeLink}  />
            </div>
            <div id="profile-about-me">
              <label>About me:</label>
              <textarea defaultValue={profileData.aboutMe} name='aboutMe' onChange={handlechange}  />
            </div>
            <div id="profile-links">
                <label>Links:</label>
                <div>
                  {profileData.links.map((link, index) => (
                    <div className='profile-link' key={index}>
                      <input
                        type="text"
                        placeholder={`Title for Link ${index + 1}`}
                        defaultValue={link.title}
                        value={profileData.links[index].title}
                        onChange={(e) => {
                          const updatedLinks = [...profileData.links];
                          updatedLinks[index].title = e.target.value;
                          setProfileData({ ...profileData, links: updatedLinks });
                        }}
                      />
                      <input
                        type="text"
                        placeholder={`URL for Link ${index + 1}`}
                        defaultValue={link.url}
                        value={profileData.links[index].url}
                        onChange={(e) => {
                          const updatedLinks = [...profileData.links];
                          updatedLinks[index].url = e.target.value;
                          setProfileData({ ...profileData, links: updatedLinks });
                        }}
                      />
                     <button onClick={() => handleRemoveLink(index)}>Remove</button>
                    </div>
                  ))}
                  <button className='profile-add-link'
                    onClick={() => {
                      const updatedLinks = [...profileData.links];
                      updatedLinks.push({ title: "", url: "" });
                      setProfileData({ ...profileData, links: updatedLinks });
                    }}
                  >
                    Add Link
                  </button>
                </div>
          </div>
          <div id="profile-availability">
            <label>Availability:</label>
            <div className='availability-choices'>
              <div className="availability-choice">
                  <label>
                    <input
                      type="radio"
                      value="Full-time Job"
                      onChange={() => handleAvailabilityChange('Full-time Job')}
                      name='availability'
                    />
                    Full-time Job
                  </label>
              </div>
              <div className="availability-choice">
                  <label>
                    <input
                      type="radio"
                      value="Freelance"
                      onChange={() => handleAvailabilityChange('Freelance')}
                      name='availability'
                    />
                    Freelance
                  </label>
              </div>
              <div className="availability-choice">
                  <label>
                    <input
                      type="radio"
                      value="Both"
                      onChange={() => handleAvailabilityChange('Both')}
                      name='availability'
                    />
                    Both
                  </label>
              </div>
      </div>
    </div>
            <button className='profile-save' onClick={handleProfileUpdate}>Save Profile</button>
        </div>
    </div>
  )
}

export default EditProfileInfo