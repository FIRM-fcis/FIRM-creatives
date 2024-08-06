import React from "react";
import "./AddProject.css";
const AddProject = () => {
  return (
    <div className="container t-center">
      <div className="row">
        <div className="col-9">
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
        </div>
        <div className="col-3 justify-content-center align-items-center d-flex">
          <div className="sidebar my-5 ">
            <div className="section-title">Add Content</div>
            <div className="content-options">
              <div className="option hover-color-change">
                <i class="fa-solid fa-image"></i>
                <span>Image</span>
              </div>
              <div className="option hover-color-change">
                <i class="fa-solid fa-video"></i>
                <span>Video</span>
              </div>
              <div className="option hover-color-change">
                <i class="fa-solid fa-heading"></i> <span>Title</span>
              </div>
              <div className="option hover-color-change">
                <i class="fa-solid fa-note-sticky"></i>
                <span>Description</span>
              </div>
              <div className="option hover-color-change">
                <i class="fa-solid fa-gear"></i> <span>Tools</span>
              </div>
              <div className="option hover-color-change">
                <i class="fa-solid fa-tags"></i> <span>Tags</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
