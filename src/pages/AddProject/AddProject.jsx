import React, { useContext, useEffect, useState } from "react";
import "./AddProject.css";
import AddContent from "../../components/AddContent/AddContent";
import StartBuildingProject from "../../components/StartBuildingProject/StartBuildingProject";
import BuildingProject from "../../components/BuildingProject/BuildingProject";
import { AppContext } from "../../Providers/AppProvider";
import { useParams } from "react-router-dom";
import handelApi from "../../Shares/handelApiCalls";
import TitleInput from "../../components/AddContent/TitleInput";
import Loading from "../../components/Loading";
const AddOrEdditProject = () => {
  const { token, information } = useContext(AppContext);
  const projectId = useParams();
  const [loading, setLoading] = useState(false);

  const [project, setProject] = useState({
    title: "",
    ownerID: information._id,
    description: "",
    tools: [],
    tags: [],
    openToBeSaved: true,
    images: [],
    videos: [],
    id: "",
  });
  useEffect(() => {
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
    <>
      {loading ? <Loading /> : <></>}
      {projectId.projectId === "newProject" ? (
        <TitleInput project={project} setProject={setProject} />
      ) : (
        <div className="container t-center hv-100">
          <div className="row hv-100 d-flex py-5 align-items-start ">
            <div className="col-10 hv-100">
              <div className="overflow-custom hv-90">
                {(project.images && project.images.length > 0) ||
                (project.videos && project.videos.length > 0) ||
                (project.tags && project.tags.length > 0) ||
                (project.tools && project.tools.length > 0) ||
                project.description ? (
                  <BuildingProject project={project} setProject={setProject} />
                ) : (
                  <StartBuildingProject
                    project={project}
                    setProject={setProject}
                    setLoading={setLoading}
                  />
                )}
              </div>
            </div>
            <div className="col-2 justify-content-center align-items-center d-flex">
              <AddContent
                project={project}
                setProject={setProject}
                projectid={projectId.projectId}
                setLoading={setLoading}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddOrEdditProject;
