import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import HomeAfterLogin from './components/HomeAfterLogin/HomeAfterLogin'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'

const App = () => {
  const [showSign,setShowSign]=useState(false)
  const [sign,setsign]=useState("")
  const handleSign=(x)=>{
    setsign(x);
  }
  
  return (
    <>
    {showSign?<Login setShowSign={setShowSign} sign={sign} handleSign={handleSign}/>:<></>}
       <div className='app'>
         <Navbar setShowSign={setShowSign} handleSign={handleSign}/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<HomeAfterLogin/>}/>
          <Route path='/forgetPassword' element={<ForgetPassword/>}/>
         </Routes>
       </div>
    </>
 
  )
}

export default App