import React, { useState } from "react";
import "./AddProject.css";
import AddContent from "../../components/AddContent/AddContent";
import StartBuildingProject from "../../components/StartBuildingProject/StartBuildingProject";
import BuildingProject from "../../components/BuildingProject/BuildingProject";

const AddProject = () => {
  const [project, setProject] = useState({
    images: [],
    videos: [],
    title: "",
    description: "",
    tools: [],
    tags: [],
  });
  return (
    <div className="container t-center hv-100">
      <div className="row hv-100 d-flex py-5 align-items-start ">
        <div className="col-10 hv-100">
          <div className="overflow-custom hv-90">
            {project.images.length > 0 ||
            project.videos.length > 0 ||
            project.title ||
            project.description ? (
              <BuildingProject project={project} setProject={setProject} />
            ) : (
              <StartBuildingProject project={project} setProject={setProject} />
            )}
          </div>
        </div>
        <div className="col-2 justify-content-center align-items-center d-flex">
          <AddContent project={project} setProject={setProject} />
        </div>
      </div>
    </div>
  );
};

export default AddProject;
