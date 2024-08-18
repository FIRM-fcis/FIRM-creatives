import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InformationPage.css'; 
const InformationPage = ({handleInfoPage}) => {
    const [address, setAddress] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [links, setLinks] = useState([]);
    const [resume, setResume] = useState(null);
    const[infoBtn,setinfoBtn]=useState(false);
    const navigate = useNavigate();
  
    const handleLinkAdd = () => {
      setLinks([...links, '']);
    };
  
    const handleLinkChange = (index, value) => {
      const newLinks = [...links];
      newLinks[index] = value;
      setLinks(newLinks);
    };
  
    const handleResumeChange = (event) => {
      setResume(event.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (infoBtn===true) {
        try {
          const response = await fetch('/api/user/information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              address,
              aboutMe,
              links,
              resume,
            }),
          });
  
          if (!response.ok) {
            throw new Error(`Failed to save user information: ${response.statusText}`);
          }
          console.log('User information saved successfully!');
        } catch (error) {
          console.error('Error saving user information:', error);
        }
      }
    };
  
    return (
      <div className='information-page'> 
          <form className='information-page-container' onSubmit={handleSubmit}>
          <p className='info-title'>Information Page</p>
          <div className='input-container'>
              <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)} />
              <label>Address</label>
          </div>
          <div className='input-container'>
              <textarea type="text" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
              <label>About me</label>
          </div>
          <div className='input-container'>
        {links.map((link, index) => (
          <div key={index} className='input-container'>
          <input
            type="text"
            value={link}
            onChange={(e) => handleLinkChange(index, e.target.value)}
          />
          <label>Link  {index+1}</label>
          </div>
        ))}
        </div>
        <button className='add-link' onClick={handleLinkAdd}>Add Link</button>
        <p className='info-file-title'>Resume :</p>
        <input className='info-resume' type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
        <div className='info-button-container'>
          <button className='info-done-btn' type="submit" onClick={()=>{navigate('./home');setinfoBtn(true);handleInfoPage(false)}}>Done</button>
          <button className='info-skip-btn' onClick={() => {navigate('/home');setinfoBtn(true);handleInfoPage(false)}}>Skip</button>
        </div>
        </form>
      </div>
    );
  };

export default InformationPage