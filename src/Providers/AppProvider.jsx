import React, { createContext, useEffect, useState } from "react";
import handelApi from "../Shares/handelApiCalls";
// Create the context
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [projectEndPoint, setProjectEndPoint] = useState("");
  const [projects, setProjects] = useState([
    {
      title: "test",
      ownerId: "",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      tools: [],
      tags: [],
      openToBeSaved: true,
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7ff01113805317.602ee5a77bed8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d32ed147443521.62c2f40c6d81b.png",
      ],
      videos: [
        "https://www-ccv.adobe.io/v1/player/ccv/VgHkrJk43Vy/embed?api_key=behance1&bgcolor=%23191919",
      ],
    },
  ]);
  const [information, setInformation] = useState({
    username: "",
    email: "",
    profilePicture: null,
    bannerPicture: null,
    address: "",
    availability: null,
    following: 0,
    followers: 0,
    joiningDate: "",
    resumeLink: null,
    links: [{ title: "", url: "" }],
    aboutMe: "",
    _id: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await handelApi.getData("projects?page=1&limit=4");
      setProjects(data);
    };
    fetchData();
  }, [projectEndPoint]);
  return (
    <AppContext.Provider
      value={{
        projectEndPoint,
        setProjectEndPoint,
        projects,
        setProjects,
        token,
        setToken,
        information,
        setInformation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
