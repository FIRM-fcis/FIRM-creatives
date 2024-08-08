import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import HomeAfterLogin from "./pages/HomeAfterLogin/HomeAfterLogin";
import InformationPage from "./components/InformationPage/InformationPage";
import Footer from "./components/Footer/Footer";
import ProjectManger from "./components/ProjectManger/ProjectManger";
import AddProject from "./pages/AddProject/AddProject";
import AddOrEdditProject from "./pages/AddProject/AddProject";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

const App = () => {
  const [projects, setProjects] = useState([
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
    {
      title: "test",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tages: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
      ownerId: "",
    },
  ]);
  const [showSign, setShowSign] = useState(false);
  const [sign, setsign] = useState("");
  const [infoPage, setinfoPage] = useState(false);

  const handleSign = (x) => {
    setsign(x);
  };
  const handleInfoPage = (y) => {
    setinfoPage(y);
  };

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
      {/* <ProjectDetails project = {projects[0]}/> */}

      <ProjectManger projects={projects} />
      {/* <AddOrEdditProject project={[]} /> */}
      <Footer />
    </>
  );
};

export default App;
