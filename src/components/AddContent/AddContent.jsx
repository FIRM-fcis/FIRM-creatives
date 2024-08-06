import React from "react";
import "./AddContent.css";
const AddContent = () => {
  return (
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
  );
};

export default AddContent;
