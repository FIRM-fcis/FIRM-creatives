import React, { useEffect, useRef, useState } from 'react'
import './EditProfileInfo.css'
import { assets } from '../../assets/assets'
const EditProfileInfo = ({information,setInformation}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const resumeFileInputRef = useRef(null);
  const handleProfileUpdate = () => {
  console.log(information);
  }
  const handleResumeClick = () => {
    resumeFileInputRef.current.click();
  };
  const handleResumeChange = (event) => {
    const newSelectedFile = event.target.files[0];
    if (newSelectedFile) {
      setSelectedFile(newSelectedFile);
      setInformation({ ...information, resumeLink: newSelectedFile });
    } else {
      console.warn('No file selected.');
    }
  };
  useEffect(() => {
    console.log(information.resumeLink)
    setSelectedFile(information.resumeLink);
}, []);

  const handleAvailabilityChange = (option) => {
    setInformation({...information,availability:option});
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInformation({
        ...information, [name]: value
    })
}
const handleRemoveLink = (index) => {
  const updatedLinks = [...information.links];
  updatedLinks.splice(index, 1);
  setInformation({ ...information, links: updatedLinks });
};
const handleListClick = (section) => {
  const targetDiv = document.getElementById(section);

  if (targetDiv) {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Div with ID "${section}" not found.`);
  }
};

  return (
    <div className='edit-profile-info'>
        <div className="edit-profile-info-list">
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
                <input type="text" defaultValue={information.username} name='username' onChange={handlechange} />
                <label>Email:</label>
                <input type="text" defaultValue={information.email} name='email' onChange={handlechange} />
                <label>Address:</label>
                <input type="text" defaultValue={information.address} name='address' onChange={handlechange} />
                <p>Following:  {information.following}</p>
                <p>Followers:  {information.followers}</p>
                <p>Member since:  {information.joiningDate}</p>
                <label>Resume:</label>
                <div className="resume-file-container">
                  <button onClick={handleResumeClick}>Choose file</button>
                  {selectedFile ? (
                    <span>{selectedFile.name}</span>
                  ) : (
                    <span>No file chosen</span>
                  )}
                  <input className='profile-resume' type="file" accept=".pdf,.doc,.docx" ref={resumeFileInputRef} onChange={handleResumeChange} style={{ display: 'none' }}/>
                </div>
               
            </div>
            <div id="profile-about-me">
              <label>About me:</label>
              <textarea defaultValue={information.aboutMe} name='aboutMe' onChange={handlechange}  />
            </div>
            <div id="profile-links">
                <label>Links:</label>
                <div>
                  {information.links.map((link, index) => (
                    <div className='profile-link' key={index}>
                      <input
                        type="text"
                        placeholder={`Title for Link ${index + 1}`}
                        value={information.links[index].title}
                        onChange={(e) => {
                          const updatedLinks = [...information.links];
                          updatedLinks[index].title = e.target.value;
                          setInformation({ ...information, links: updatedLinks });
                        }}
                      />
                      <input
                        type="text"
                        placeholder={`URL for Link ${index + 1}`}
                        value={information.links[index].url}
                        onChange={(e) => {
                          const updatedLinks = [...information.links];
                          updatedLinks[index].url = e.target.value;
                          setInformation({ ...information, links: updatedLinks });
                        }}
                      />
                      <button onClick={() => handleRemoveLink(index)}>Remove</button>
                    </div>
                  ))}
                  <button className='profile-add-link'
                    onClick={() => {
                      const updatedLinks = [...information.links];
                      updatedLinks.push({ title: "", url: "" });
                      setInformation({ ...information, links: updatedLinks });
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