import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InformationPage.css'; 
const InformationPage = ({handleInfoPage,information,setInformation}) => {
    const[infoBtn,setinfoBtn]=useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInformation({
          ...information, [name]: value
      })
  }
  const handleLinkAdd = () => {
    setInformation({
      ...information,
      links: [...information.links, { title: '', url: '' }],
    });
  }

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...information.links];
    newLinks[index][field] = value;
    setInformation({
      ...information,
      links: newLinks,
    });
  };
  
    const handleResumeChange = (event) => {
      const selectedFile = event.target.files[0];
      setInformation({...information,resumeLink:selectedFile});
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (infoBtn===true) {
        try {
          const response = await fetch('/api/user/information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
             ...information
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
    const handleReset = () => {
      setInformation({...information,address:'',resumeLink:null,links:[{title:'',url:''}],aboutMe:''})
    };
  
    return (
      <div className="information-page">
        <form className="information-page-container" onSubmit={handleSubmit}>
          <p className="info-title">Information Page</p>
          <div className="input-container">
            <input
              type="text"
              name="address"
              value={information.address}
              onChange={handleChange}
            />
            <label>Address :</label>
          </div>
          <div className="input-container">
            <textarea
              type="text"
              name="aboutMe"
              value={information.aboutMe}
              onChange={handleChange}
            />
            <label>About me :</label>
          </div>
          {(
            <div className="input-container input-container-links">
              <label>Links :</label>
              {information.links.map((link, index) => (
                <div key={index} className="input-container">
                  <input
                    type="text"
                    name={`link-${index}-title`}
                    placeholder="Link Title"
                    value={link.title}
                    onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                  />
                  <input
                    type="text"
                    name={`link-${index}-url`}
                    placeholder="Link URL"
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}
          <button className="add-link" onClick={handleLinkAdd}>
            Add Link
          </button>
          <p className="info-file-title">Resume :</p>
          <input className="info-resume" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
          <div className="info-button-container">
            <button
              className="info-done-btn"
              type="submit"
              onClick={() => {
                navigate('./home');
                setinfoBtn(true);
                handleInfoPage(false);
              
              }}
            >
              Done
            </button>
            <button
              className="info-skip-btn"
              onClick={() => {
                navigate('./home');
                setinfoBtn(true);
                handleInfoPage(false);   
                handleReset();
              }}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    );
  };
  
export default InformationPage;