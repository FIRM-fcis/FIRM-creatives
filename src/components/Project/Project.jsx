import React from "react";
import "./Project.css";

const handelProjectDetails = (id)=>{
  console.log(id);
}
const Project = ({ project }) => {
  return (
    <div
      className="p-0 bg-second-color project col-12 col-sm-6 col-md-4 col-lg-2 cursor-pointer"
      onClick={() => {
        handelProjectDetails(project.id);
      }}
    >
      <div className="project-container position-relative">
        <div
          className="project-bg-image position-absolute w-100 h-100"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="overlay position-absolute w-100 h-100 bg-second-color"></div>
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
  );
};

export default Project;
