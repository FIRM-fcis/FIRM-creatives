import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import HomeAfterLogin from './pages/HomeAfterLogin/HomeAfterLogin'
import InformationPage from './components/InformationPage/InformationPage'
import './Shares/main.css'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Profile from './pages/Profile/Profile'
import EditProfileInfo from './components/EditProfileInfo/EditProfileInfo'
import Logout from './components/Logout/Logout'
import { assets } from './assets/assets'

const App = () => {
  const [showSign,setShowSign]=useState(false)
  const [sign,setsign]=useState("")
  const[infoPage,setinfoPage]=useState(false);
  const [nav,setnav]=useState(false);
  const [profilePicture, setProfilePicture] = useState(assets.profile);
  const [information,setInformation]=useState({
    username: '',
    email: '',
    profilePicture: null,
    bannerPicture: null,
    address: '',
    availability: null,
    following: 0,
    followers: 0,
    joiningDate: '',
    resumeLink:null,
    links:[{title:'',url:''}],
    aboutMe:''
  })

  const handleSign=(x)=>{
    setsign(x);
  }
  const handleInfoPage=(y)=>{
    setinfoPage(y);
  }
  const handleNav=(z)=>{
    setnav(z);
  }
  return (
    <>
    {showSign?<Login handleNav={handleNav} setShowSign={setShowSign} sign={sign} handleSign={handleSign} setinfoPage={setinfoPage} information={information} setInformation={setInformation}/>:<></>}
    {infoPage?<InformationPage handleInfoPage={handleInfoPage} information={information} setInformation={setInformation}/>:<></>}
       <div className='app'>
      <Navbar nav={nav} handleNav={handleNav} setShowSign={setShowSign} handleSign={handleSign} profilePicture={profilePicture} />  
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<HomeAfterLogin/>}/>
          <Route path='/forgetPassword' element={<ForgetPassword/>}/>
          <Route path='/profile' element={<Profile profilePicture={profilePicture} setProfilePicture={setProfilePicture} />}>
            <Route index element={<Navigate replace to="projects"/>}/>
            <Route path='projects' element={<Home/>}/>
            <Route path='editProile' element={<EditProfileInfo information={information} setInformation={setInformation}/>}/>
            <Route path='logout' element={<Logout handleNav={handleNav}/>}/>
          </Route>
          <Route path='*' element={<PageNotFound nav={nav}/>}/>
         </Routes>
       </div>
    </>
 
  )
}

export default App