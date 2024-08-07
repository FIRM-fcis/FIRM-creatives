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
import AddProject from './pages/AddProject/AddProject'
import AddOrEdditProject from './pages/AddProject/AddProject'

const App = () => {
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      tools: [],
      tages: [],
      openToBeSaved: false,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
      ],
      videos: [],
      ownerId: "",
    },
    {
      title: "",
      description: "",
      tools: [],
      tages: [],
      openToBeSaved: false,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
      ],
      videos: [],
      ownerId: "",
    },
    {
      title: "",
      description: "",
      tools: [],
      tages: [],
      openToBeSaved: false,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
      ],
      videos: [],
      ownerId: "",
    },
    {
      title: "",
      description: "",
      tools: [],
      tages: [],
      openToBeSaved: false,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
      ],
      videos: [],
      ownerId: "",
    },
    {
      title: "",
      description: "",
      tools: [],
      tages: [],
      openToBeSaved: false,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
      ],
      videos: [],
      ownerId: "",
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
      {/* <AddOrEdditProject project={[]} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App