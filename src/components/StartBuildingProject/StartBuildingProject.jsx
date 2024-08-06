import React from "react";
import "./StartBuildingProject.css";
import { handelFunctions } from "../../Shares/handelInputs";
const StartBuildingProject = ({ project, setProject }) => {
  return (
    <div className="d-flex-center flex-column window-height">
      <p className="display-6 py-2">Start building your project:</p>
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
                handelFunctions.handleImageUpload(event, setProject, project)
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
                handelFunctions.handleVideoUpload(event, setProject, project)
              }
            />
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <i class="fa-solid fa-heading p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Title</p>
            <input
              type="text"
              placeholder="Enter Title"
              className="d-none"
              onChange={(event) =>
                handelFunctions.handleTitleChange(event, setProject, project)
              }
            />
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <i class="fa-solid fa-note-sticky p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Description</p>
            <textarea
              placeholder="Enter Description"
              className="d-none"
              onChange={(event) =>
                handelFunctions.handleDescriptionChange(
                  event,
                  setProject,
                  project
                )
              }
            />
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <i class="fa-solid fa-gear p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Tools</p>
            <input
              type="text"
              placeholder="Enter Tools"
              className="d-none"
              onChange={(event) =>
                handelFunctions.handleToolsChange(event, setProject, project)
              }
            />
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <i class="fa-solid fa-tags p-4 rounded-circle hover-input cursor-pointer"></i>
            <p className="m-0">Tags</p>
            <input
              type="text"
              placeholder="Enter Tags"
              className="d-none"
              onChange={(event) =>
                handelFunctions.handleTagsChange(event, setProject, project)
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StartBuildingProject;
