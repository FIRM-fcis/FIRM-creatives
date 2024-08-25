import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import ProjectManger from "../../components/ProjectManger/ProjectManger";

const Home = () => {
  return (
    <>
      <div className="home">
        <ProjectManger />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
