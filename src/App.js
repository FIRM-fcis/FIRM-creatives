import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

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
         </Routes>
       </div>
    </>
 
  )
}

export default App