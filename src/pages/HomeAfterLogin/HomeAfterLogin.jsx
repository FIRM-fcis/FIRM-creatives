import React, { useContext, useEffect } from "react";
import "./HomeAfterLogin.css";
import ProjectManger from "../../components/ProjectManger/ProjectManger";
import CheckLogin from "../../Providers/CheckLogin";
import { AppContext } from "../../Providers/AppProvider";
import handelApi from "../../Shares/handelApiCalls";



const HomeAfterLogin = () => {
  const { setProjects } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await handelApi.getData("projects?page=1&limit=12");
      setProjects(data);
    };
    fetchData();
  }, []);
  return (
    <div className="hv-100">
      <ProjectManger />
    </div>
  );
};

export default HomeAfterLogin;
