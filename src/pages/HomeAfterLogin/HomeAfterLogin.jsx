import React from "react";
import "./HomeAfterLogin.css";
import ProjectManger from "../../components/ProjectManger/ProjectManger";
import CheckLogin from "../../Providers/CheckLogin";
const HomeAfterLogin = () => {
  return (
      <div className="home-after-login">
        <ProjectManger />
      </div>
  );
};

export default HomeAfterLogin;
