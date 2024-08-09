import React from 'react'
import './PageNotFound.css'
import '../../Shares/main.css'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate=useNavigate();
  return (
    <div className='page-not-found'>
        <div className="notfound-content">
            <p className='oops'>Ooops...</p>
            <p className='not-found-title'>Page not found</p> 
            <p className='not-found-description'>The page you are looking for doesn't exit or an other error occurred, go back to home page</p>
            <button onClick={()=>navigate("/")}>Go Back</button>
        </div>
        <div className="notfound-img">
            
        </div>
    </div>
  )
}

export default PageNotFound