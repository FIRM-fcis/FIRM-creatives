import React, { useContext } from "react";
import "./ProjectManger.css";
import Project from "../Project/Project";
import { AppContext } from "../../Providers/AppProvider";
import { useParams } from "react-router-dom";
const ProjectManger = () => {
  const {projects}= useContext(AppContext)
  // after login 
  return (
    <>
      {projects ? (
        <div className="container py-5">
          <div className="row ">
            {/* need to filter projects based on recommended posts or the creatives users ar fllow comes from API */}
            {projects.map((project, index) => (
              <Project project={project} key={index}/>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProjectManger;
