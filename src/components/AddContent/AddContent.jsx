import React, { useState } from "react";
import "./AddContent.css";
import {
  handleImageUpload,
  handleDescriptionChange,
  handleTagsChange,
  handleTitleChange,
  handleToolsChange,
  handleVideoUpload,
} from "../../Shares/handelInputs";

const AddContent = ({ project, setProject }) => {
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
            onChange={(event) => handleImageUpload(event, setProject, project)}
          />
        </label>

        <label className="option hover-color-change cursor-pointer">
          <i className="fa-solid fa-video"></i>
          <span>Video</span>
          <input
            type="file"
            accept="video/*"
            className="d-none"
            onChange={(event) => handleVideoUpload(event, setProject, project)}
          />
        </label>

        <label className="hover-color-change option cursor-pointer">
          <i className="fa-solid fa-heading"></i>
          <span>Title</span>
          <input
            type="text"
            placeholder="Enter Title"
            className="d-none"
            onChange={(event) => handleTitleChange(event, setProject, project)}
          />
        </label>

        <label className="option hover-color-change cursor-pointer">
          <i className="fa-solid fa-note-sticky"></i>
          <span>Description</span>
          <textarea
            placeholder="Enter Description"
            className="d-none"
            onChange={(event) => handleDescriptionChange(event, setProject, project)}
          />
        </label>

        <label className="option hover-color-change cursor-pointer">
          <i className="fa-solid fa-gear"></i>
          <span>Tools</span>
          <input
            type="text"
            placeholder="Enter Tools"
            className="d-none"
            onChange={(event) => handleToolsChange(event, setProject, project)}
          />
        </label>

        <label className="option hover-color-change cursor-pointer">
          <i className="fa-solid fa-tags"></i>
          <span>Tags</span>
          <input
            type="text"
            placeholder="Enter Tags"
            className="d-none"
            onChange={(event) => handleTagsChange(event, setProject, project)}
          />
        </label>
      </div>
    </div>
  );
};

export default AddContent;
