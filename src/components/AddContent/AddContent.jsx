import React, { useContext, useEffect, useState } from "react";
import "./AddContent.css";
import { handelFunctions } from "../../Shares/handelInputs";
import handelApi from "../../Shares/handelApiCalls";
import { AppContext } from "../../Providers/AppProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddContent = ({ project, setProject, projectid,setLoading }) => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();
  const handelSave = () => {
    if (project.title && project.ownerID) {
      handelApi.postData("projects/add", project, token, navigate);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !project.title
          ? "Project must has title!"
          : "You are not the owner of this project",
      });
    }
  };
  const handelUpdata = () => {
    if (project.title && project.ownerID) {
      handelApi.patchData(
        "projects/update",
        project,
        projectid,
        token,
        navigate
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !project.title
          ? "Project must has title!"
          : "You are not the owner of this project",
      });
    }
  };
  const handelDelete = async () => {
    handelApi.deleteProject("projects", projectid, token, navigate);
  };
  return (
    <div className="sidebar">
      <div className="section-title">Add Content</div>
      <div className="content-options">
        <label className="option hover-color-change cursor-pointer">
          <i className="fa-solid fa-image"></i>
          <span>Image</span>
          <input
            type="file"
            accept="image/*"
            className="d-none"
            onChange={(event) =>
              handelFunctions.ImageUpload(
                event,
                setProject,
                project,
                token,
                setLoading
              )
            }
          />
        </label>

        <label className="option hover-color-change cursor-pointer">
          <i className="fa-solid fa-video"></i>
          <span>Video</span>
          <input
            type="file"
            accept="video/*"
            className="d-none"
            onChange={(event) =>
              handelFunctions.VideoUpload(event, setProject, project, token,setLoading)
            }
          />
        </label>

        <label
          className="hover-color-change option cursor-pointer"
          onClick={() => handelFunctions.TitleChange(setProject, project)}
        >
          <i className="fa-solid fa-heading"></i>
          <span>Title</span>
        </label>

        <label
          className="option hover-color-change cursor-pointer"
          onClick={() => handelFunctions.DescriptionChange(setProject, project)}
        >
          <i className="fa-solid fa-note-sticky"></i>
          <span>Description</span>
        </label>

        <label
          className="option hover-color-change cursor-pointer"
          onClick={() => handelFunctions.ToolsChange(setProject, project)}
        >
          <i className="fa-solid fa-gear"></i>
          <span>Tools</span>
        </label>

        <label
          className="option hover-color-change cursor-pointer"
          onClick={() => handelFunctions.TagsChange(setProject, project)}
        >
          <i className="fa-solid fa-tags"></i>
          <span>Tags</span>
        </label>
        {projectid === "newProject" ? (
          <button className="btn custom-btn" onClick={handelSave}>
            Save
          </button>
        ) : (
          <>
            <button className="btn custom-btn" onClick={handelUpdata}>
              Updata
            </button>
            <button className="btn custom-btn" onClick={handelDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddContent;
