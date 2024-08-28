import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Logout.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Providers/AppProvider'
const Logout = ({handleNav}) => {
    const navigate=useNavigate();
    const { setInformation, setToken } = useContext(AppContext);
    const handleClick = ()=>{
      navigate("/");
      handleNav(false);
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId");
      setToken("");
      setInformation({
        username: "",
        email: "",
        profilePicture: null,
        bannerPicture: null,
        address: "",
        availability: null,
        following: 0,
        followers: 0,
        joiningDate: "",
        resumeLink: null,
        links: [{ title: "", url: "" }],
        aboutMe: "",
        _id: "",
      });
    }
  return (
    <div className="logout-container">
      <div className="logout-photo">
        <img src={assets.logout} alt="logout" draggable="false" />
      </div>
      <div className="logout-content">
        <p>Oh no! You're leaving...</p>
        <p>Are you sure?</p>
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="logout-no"
        >
          NO, Cancel
        </button>
        <button onClick={handleClick} className="logout-yes">
          Yes, Log Me Out
        </button>
      </div>
    </div>
  );
}

export default Logout