import React from "react";
import "./AddProject.css";
import AddContent from "../../components/AddContent/AddContent";
import StartBuildingProject from "../../components/StartBuildingProject/StartBuildingProject";
const AddProject = () => {
  return (
    <div className="container t-center">
      <div className="row">
        <div className="col-9">
          <StartBuildingProject/>
        </div>
        <div className="col-3 justify-content-center align-items-center d-flex">
          <AddContent/>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
