import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import HomeAfterLogin from './pages/HomeAfterLogin/HomeAfterLogin'
import InformationPage from './components/InformationPage/InformationPage'
import Footer from './components/Footer/Footer'
import ProjectManger from './components/ProjectManger/ProjectManger'

const App = () => {
  const [projects, setProjects] = useState([
    {
      userName: "meefr",
      userImage:
        "https://mir-s3-cdn-cf.behance.net/projects/202_webp/f8d315204054109.Y3JvcCwxNDQ0LDExMjksMCw0ODY.jpg",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/202_webp/f8d315204054109.Y3JvcCwxNDQ0LDExMjksMCw0ODY.jpg",
      likes: 123,
      id:1,
    },
    {
      userName: "meefr",
      userImage:
        "https://mir-s3-cdn-cf.behance.net/projects/202_webp/f8d315204054109.Y3JvcCwxNDQ0LDExMjksMCw0ODY.jpg",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/202_webp/f8d315204054109.Y3JvcCwxNDQ0LDExMjksMCw0ODY.jpg",
      likes: 123,
      id:2,
    },
  ]);
  const [showSign,setShowSign]=useState(false)
  const [sign,setsign]=useState("")
  const[infoPage,setinfoPage]=useState(false);

  const handleSign=(x)=>{
    setsign(x);
  }
  const handleInfoPage=(y)=>{
    setinfoPage(y);
  }

  return (
    <>
      {showSign ? (
        <Login
          setShowSign={setShowSign}
          sign={sign}
          handleSign={handleSign}
          setinfoPage={setinfoPage}
        />
      ) : (
        <></>
      )}
      {infoPage ? <InformationPage handleInfoPage={handleInfoPage} /> : <></>}
      <div className="app">
        <Navbar setShowSign={setShowSign} handleSign={handleSign} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeAfterLogin />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>

      <ProjectManger projects={projects}/>
      <Footer />
    </>
  );
}

export default App