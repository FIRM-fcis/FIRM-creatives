import React, { useContext } from "react";
import "./ProjectManger.css";
import Project from "../Project/Project";
import { AppContext } from "../../Providers/AppProvider";
const ProjectManger = () => {
  const {projects}= useContext(AppContext)
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {/* need to filter projects based on recommended posts or the creatives users ar fllow comes from API */}
          {projects.map((project, index) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectManger;
