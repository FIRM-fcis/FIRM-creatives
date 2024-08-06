import React from "react";
import "./StartBuildingProject.css";
const StartBuildingProject = () => {
  return (
    <div className="d-flex-center flex-column window-height">
      <p className="display-6 py-2">Start building your project:</p>
      <div className="d-flex justify-content-around align-items-center py-5 gap-4">
        <div>
          <i class="fa-solid fa-image p-4 rounded-circle hover-input cursor-pointer"></i>
          <p className="m-0">Image</p>
        </div>
        <div>
          <i class="fa-solid fa-video p-4 rounded-circle hover-input cursor-pointer"></i>
          <p className="m-0">Video</p>
        </div>
        <div>
          <i class="fa-solid fa-heading p-4 rounded-circle hover-input cursor-pointer"></i>
          <p className="m-0">Title</p>
        </div>
        <div>
          <i class="fa-solid fa-note-sticky p-4 rounded-circle hover-input cursor-pointer"></i>
          <p className="m-0">Description</p>
        </div>
        <div>
          <i class="fa-solid fa-gear p-4 rounded-circle hover-input cursor-pointer"></i>
          <p className="m-0">Tools</p>
        </div>
        <div>
          <i class="fa-solid fa-tags p-4 rounded-circle hover-input cursor-pointer"></i>
          <p className="m-0">Tags</p>
        </div>
      </div>
    </div>
  );
};

export default StartBuildingProject;
