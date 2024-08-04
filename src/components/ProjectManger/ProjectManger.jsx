import React from "react";
import "./ProjectManger.css";
import Project from "../Project/Project";
const ProjectManger = ({ projects }) => {
  return (
    <>
      <div className="container hv-100 py-5">
        <div className="row gap-2">
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
