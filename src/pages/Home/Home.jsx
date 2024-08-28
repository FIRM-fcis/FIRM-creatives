import React, { useContext, useEffect } from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import ProjectManger from "../../components/ProjectManger/ProjectManger";
import { AppContext } from "../../Providers/AppProvider";
import handelApi from "../../Shares/handelApiCalls";

const Home = () => {
  const {setProjects} = useContext(AppContext)
   useEffect(() => {
    console.log("home"); 
     const fetchData = async () => {
       const data = await handelApi.getData("projects?page=4&limit=4");
       setProjects(data);
     };
     fetchData();
   }, []);
  return (
    <>
      <div className="hv-100">
        <ProjectManger />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
