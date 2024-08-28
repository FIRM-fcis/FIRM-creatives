import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import handelApi from "../../Shares/handelApiCalls";
import { handelFunctions } from "../../Shares/handelInputs";
import { AppContext } from "../../Providers/AppProvider";

function TitleInput({project,setProject}) {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);
  useEffect(() => {
    const handelSave = async(project) => {
        console.log(project);
        
      if (project.title && project.ownerID) {
        const {projectID} = await handelApi.postData(
          "projects/add",
          project,
          token
        );
        navigate(`/projectEdit/${projectID}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: !project.title
            ? "Project must has title!"
            : "You are not the owner of this project",
        });
        navigate("/home")
      }
    };
    handelFunctions.TitleChange(setProject, project, handelSave,navigate);
  }, []);
  return <div className="hv-100 bg-main-color rounded-3"></div>;
}

export default TitleInput;
