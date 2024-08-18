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

const App = () => {
  const [showSign,setShowSign]=useState(false)
  const [sign,setsign]=useState("")
  const[infoPage,setinfoPage]=useState(false);
  const [nav,setnav]=useState(false);

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
    {showSign?<Login handleNav={handleNav} setShowSign={setShowSign} sign={sign} handleSign={handleSign} setinfoPage={setinfoPage}/>:<></>}
    {infoPage?<InformationPage handleInfoPage={handleInfoPage}/>:<></>}
       <div className='app'>
      <Navbar nav={nav} handleNav={handleNav} setShowSign={setShowSign} handleSign={handleSign}/>  
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<HomeAfterLogin/>}/>
          <Route path='/forgetPassword' element={<ForgetPassword/>}/>
          <Route path='/profile' element={<Profile/>}>
            <Route index element={<Navigate replace to="projects"/>}/>
            <Route path='projects' element={<Home/>}/>
            <Route path='editProile' element={<EditProfileInfo/>}/>
            <Route path='logout' element={<Logout/>}/>
          </Route>
          <Route path='*' element={<PageNotFound nav={nav}/>}/>
         </Routes>
       </div>
    </>
 
  )
}

export default App