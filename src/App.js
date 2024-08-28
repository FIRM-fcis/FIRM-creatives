import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import HomeAfterLogin from "./pages/HomeAfterLogin/HomeAfterLogin";
import InformationPage from "./components/InformationPage/InformationPage";
import "./Shares/main.css";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";
import EditProfileInfo from "./components/EditProfileInfo/EditProfileInfo";
import Logout from "./components/Logout/Logout";
import { assets } from "./assets/assets";
import Footer from "./components/Footer/Footer";
import ProjectManger from "./components/ProjectManger/ProjectManger";
import AddProject from "./pages/AddProject/AddProject";
import AddOrEdditProject from "./pages/AddProject/AddProject";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import handelApiCalls from "./Shares/handelApiCalls";
import { AppContext } from "./Providers/AppProvider";
import CheckLogin from "./Providers/CheckLogin";

const App = () => {
  const [showSign, setShowSign] = useState(false);
  const [sign, setsign] = useState("");
  const [infoPage, setinfoPage] = useState(false);
  const [nav, setnav] = useState(false);
  const [profilePicture, setProfilePicture] = useState(assets.profile);

  const {
    projects,
    setProjects,
    projectEndPoint,
    setProjectEndPoint,
    information,
    setInformation,
  } = useContext(AppContext);

  // const [projects, setProjects] = useState([
  //   {
  //     title: "test",
  //     description:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  //     tools: [],
  //     tags: [],
  //     openToBeSaved: true,
  //     images: [
  //       "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
  //       "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
  //     ],
  //     videos: [
  //       "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
  //     ],
  //     ownerId: "",
  //   },
  // ]);
  // const [projectEndPoint,setProjectEndPoint]=useState("")

  const handleSign = (x) => {
    setsign(x);
  };
  const handleInfoPage = (y) => {
    setinfoPage(y);
  };
  const handleNav = (z) => {
    setnav(z);
  };

  return (
    <>
      {showSign ? (
        <Login
          handleNav={handleNav}
          setShowSign={setShowSign}
          sign={sign}
          handleSign={handleSign}
          setinfoPage={setinfoPage}
          information={information}
          setInformation={setInformation}
        />
      ) : (
        <></>
      )}
      {infoPage ? (
        <InformationPage
          handleInfoPage={handleInfoPage}
          information={information}
          setInformation={setInformation}
        />
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar
          nav={nav}
          handleNav={handleNav}
          setShowSign={setShowSign}
          handleSign={handleSign}
          profilePicture={profilePicture}
          information={information}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<HomeAfterLogin />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route
            path="/profile"
            element={
              <Profile
                profilePicture={profilePicture}
                setProfilePicture={setProfilePicture}
                information={information}
                setInformation={setInformation}
              />
            }
          >
            <Route index element={<Navigate replace to="projects" />} />
            <Route path="projects" element={<ProjectManger />} />
            <Route
              path="editProile"
              element={
                <EditProfileInfo
                  information={information}
                  setInformation={setInformation}
                />
              }
            />
            <Route path="logout" element={<Logout handleNav={handleNav} />} />
          </Route>
          <Route
            path="/projectEdit/:projectId"
            element={<AddOrEdditProject />}
          />
          <Route path="*" element={<PageNotFound nav={nav} />} />
        </Routes>
      </div>
      {/* <ProjectManger projects={projects} />  */}
      {/* <AddOrEdditProject project={[]} /> */}
      <Footer />
    </>
  );
};

export default App;
