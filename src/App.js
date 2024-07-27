import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'

const App = () => {
  const [showSign,setShowSign]=useState(false)
  const [sign,setsign]=useState("")
  const handlesign=(x)=>{
    setsign(x);
  }
  return (
    <>
    {showSign?<Login setShowSign={setShowSign} sign={sign} handlesign={handlesign}/>:<></>}
       <div className='app'>
         <Navbar setShowSign={setShowSign} handlesign={handlesign}/>
       </div>
    </>
 
  )
}

export default App