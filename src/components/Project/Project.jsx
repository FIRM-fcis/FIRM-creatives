import React, { useContext, useState } from "react";
import "./Project.css";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../Providers/AppProvider";

const Project = ({ project }) => {
  const navigate = useNavigate(); 
  const [projectPopup, setProjectPopup] = useState(false);
  const handelEdit = () => {
    const id = project.projectID;
    navigate(`/projectEdit/${id}`);
  };
  const {information} = useContext(AppContext)
  return (
    <>
      <ProjectDetails
        project={project}
        trigger={projectPopup}
        setTrigger={setProjectPopup}
      />
      <div className="py-2 project col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer">
        <div className="project-container">
          {project.ownerId === information._id ? <div className="position-absolute z-3" onClick={handelEdit}>
            <i className="fa-solid fa-pen-to-square mx-2 my-2"></i>
          </div>:<></>}
          <div
            className="project-bg-image position-absolute z-1"
            style={{ backgroundImage: `url(${project.images[0]})` }}
          />
          <div
            className="overlay position-absolute bg-second-color z-2"
            onClick={() => setProjectPopup(true)}
          ></div>
          <div className="user-info d-flex justify-content-between align-items-center position-absolute w-100">
            <div className="d-flex-center">
              <img src={project.userImage} alt="User" className="user-img" />
              <p className="m-0">{project.userName}</p>
            </div>
            <div className="d-flex-center gap-1">
              {project.ownerId !== information._id ?<i class="fa-solid fa-heart text-white"></i>:<></>}
              <p className="m-0">{project.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
