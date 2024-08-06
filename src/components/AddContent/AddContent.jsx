import React, { useState } from "react";
import "./AddContent.css";
import {handleImageUpload, handleDescriptionChange, handleTagsChange, handleTitleChange, handleToolsChange, handleVideoUpload } from "../../Shares/handelInputs";

const AddContent = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tools, setTools] = useState("");
  const [tags, setTags] = useState("");
  return (
    <div className="sidebar my-5 ">
      <div className="section-title">Add Content</div>
      <div className="content-options">
        <div className="option hover-color-change">
          <label className="cursor-pointer">
            <i className="fa-solid fa-image"></i>
            <span>Image</span>
            <input
              type="file"
              accept="image/*"
              className="d-none"
              onChange={(event) => handleImageUpload(event, setImage)}
            />
          </label>
        </div>

        <div className="option hover-color-change">
          <label className="cursor-pointer">
            <i className="fa-solid fa-video"></i>
            <span>Video</span>
            <input
              type="file"
              accept="video/*"
              className="d-none"
              onChange={(event) => handleVideoUpload(event, setVideo)}
            />
          </label>
        </div>

        <div className="option hover-color-change">
          <label className="cursor-pointer">
            <i className="fa-solid fa-heading"></i>
            <span>Title</span>
            <input
              type="text"
              placeholder="Enter Title"
              className="d-none"
              onChange={(event) => handleTitleChange(event, setTitle)}
            />
          </label>
        </div>

        <div className="option hover-color-change">
          <label className="cursor-pointer">
            <i className="fa-solid fa-note-sticky"></i>
            <span>Description</span>
            <textarea
              placeholder="Enter Description"
              className="d-none"
              onChange={(event) =>
                handleDescriptionChange(event, setDescription)
              }
            />
          </label>
        </div>

        <div className="option hover-color-change">
          <label className="cursor-pointer">
            <i className="fa-solid fa-gear"></i>
            <span>Tools</span>
            <input
              type="text"
              placeholder="Enter Tools"
              className="d-none"
              onChange={(event) => handleToolsChange(event, setTools)}
            />
          </label>
        </div>

        <div className="option hover-color-change">
          <label className="cursor-pointer">
            <i className="fa-solid fa-tags"></i>
            <span>Tags</span>
            <input
              type="text"
              placeholder="Enter Tags"
              className="d-none"
              onChange={(event) => handleTagsChange(event, setVideo)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
