import React, { useContext, useEffect, useState } from "react";
import "./AddProject.css";
import AddContent from "../../components/AddContent/AddContent";
import StartBuildingProject from "../../components/StartBuildingProject/StartBuildingProject";
import BuildingProject from "../../components/BuildingProject/BuildingProject";
import { AppContext } from "../../Providers/AppProvider";
import { useParams } from "react-router-dom";
import handelApi from "../../Shares/handelApiCalls";
const AddOrEdditProject = () => {
  const { token, information } = useContext(AppContext);
  const projectId = useParams();
  const [project, setProject] = useState([
    {
      title: "",
      ownerId: information._id,
      description: "",
      tools: [],
      tags: [],
      openToBeSaved: true,
      images: [],
      videos: [],
    },
  ]);
  useEffect(() => {
    console.log(projectId);

    const fetchData = async () => {
      console.log(token);

      const data = await handelApi.getProjectById(
        `projects`,
        projectId.projectId,
        token
      );
      setProject(data);
    };
    if (projectId.projectId !== "newProject") fetchData();
  }, []);
  return (
    <div className="container t-center hv-100">
      <div className="row hv-100 d-flex py-5 align-items-start ">
        <div className="col-10 hv-100">
          <div className="overflow-custom hv-90">
            {project.images ||
            project.videos ||
            project.title ||
            project.tags ||
            project.tools ||
            project.description ? (
              <BuildingProject project={project} setProject={setProject} />
            ) : (
              <StartBuildingProject project={project} setProject={setProject} />
            )}
          </div>
        </div>
        <div className="col-2 justify-content-center align-items-center d-flex">
          <AddContent
            project={project}
            setProject={setProject}
            projectid={projectId.projectId}
          />
        </div>
      </div>
    </div>
  );
};

export default AddOrEdditProject;
