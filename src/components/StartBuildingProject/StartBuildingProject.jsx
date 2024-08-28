import React, { useContext } from "react";
import "./StartBuildingProject.css";
import { handelFunctions } from "../../Shares/handelInputs";
import { AppContext } from "../../Providers/AppProvider";
const StartBuildingProject = ({ project, setProject }) => {
  const {token} = useContext(AppContext)
  return (
    <div className="d-flex-center flex-column window-height">
      <p className="display-6 py-2">Start building {project.title}:</p>
      <div className="d-flex justify-content-around align-items-center py-5 gap-4">
        <div>
          <label className="cursor-pointer">
            <i class="fa-solid fa-image p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Image</p>
            <input
              type="file"
              accept="image/*"
              className="d-none"
              onChange={(event) =>
                handelFunctions.ImageUpload(event, setProject, project, token)
              }
            />
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <i class="fa-solid fa-video p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Video</p>
            <input
              type="file"
              accept="video/*"
              className="d-none"
              onChange={(event) =>
                handelFunctions.VideoUpload(event, setProject, project, token)
              }
            />
          </label>
        </div>
        <div>
          <label
            className="cursor-pointer"
            onClick={() => handelFunctions.TitleChange(setProject, project)}
          >
            <i class="fa-solid fa-heading p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Title</p>
          </label>
        </div>
        <div>
          <label
            className="cursor-pointer"
            onClick={() =>
              handelFunctions.DescriptionChange(setProject, project)
            }
          >
            <i class="fa-solid fa-note-sticky p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Description</p>
          </label>
        </div>
        <div>
          <label
            className="cursor-pointer"
            onClick={() => handelFunctions.ToolsChange(setProject, project)}
          >
            <i class="fa-solid fa-gear p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Tools</p>
          </label>
        </div>
        <div>
          <label
            className="cursor-pointer"
            onClick={() => handelFunctions.TagsChange(setProject, project)}
          >
            <i class="fa-solid fa-tags p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Tags</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default StartBuildingProject;
