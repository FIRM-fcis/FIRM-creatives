import React, { useState } from "react";
import "./Project.css";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Project = ({ project }) => {
  const [projectPopup, setProjectPopup] = useState(false);
  return (
    <>
      <ProjectDetails
        project={project}
        trigger={projectPopup}
        setTrigger={setProjectPopup}
      />
      <div
        className="py-2 project col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer"
        onClick={() => setProjectPopup(true)}
      >
        <div className="project-container">
          <div
            className="project-bg-image position-absolute"
            style={{ backgroundImage: `url(${project.images[0]})` }}
          />
          <div className="overlay position-absolute bg-second-color"></div>
          <div className="user-info d-flex justify-content-between align-items-center position-absolute w-100">
            <div className="d-flex-center">
              <img src={project.userImage} alt="User" className="user-img" />
              <p className="m-0">{project.userName}</p>
            </div>
            <div className="d-flex-center gap-1">
              <i class="fa-solid fa-heart text-white"></i>
              <p className="m-0">{project.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
