import React from "react";
import "./Project.css";
const Project = ({project}) => {
  return <>
    <div className="project">
        <div>
            <p>{project.username}</p>
        </div>

    </div>
  
  </>
};

export default Project;
