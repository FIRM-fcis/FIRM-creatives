import React, { useState } from "react";
import "./ProjectDetails.css";

function ProjectDetails({ project, trigger, setTrigger }) {
   const [isFullscreen, setIsFullscreen] = useState(false);
   const [currentImage, setCurrentImage] = useState(null);

   const openFullscreen = (image) => {
     setCurrentImage(image);
     setIsFullscreen(true);
   };

   const closeFullscreen = () => {
     setIsFullscreen(false);
     setCurrentImage(null);
   };
    return trigger ? (
    <div className="project-details-popup" >
      <div
        className="close-details-btn hover-color-change"
        onClick={() => {
          setTrigger(false);
        }}
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="project-content">
        <div className="user-details-info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/88e55b141620731.62c2f433692c8.jpg"
            alt="User"
            className="user-details-img"
          />
          <div>
            <p className="username-details m-0">{project.title}</p>
            <div className="d-flex align-items-center">
              <p className="m-0">mohamed essam</p>
              <button className="btn">Follow</button>
            </div>
          </div>
        </div>

        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <div className="project-media">
          {project.images?.map((image, index) => (
            <img
              src={image}
              alt={`project-${index}`}
              key={index}
              className="project-image"
              onClick={() => openFullscreen(image)}
            />
          ))}
          {isFullscreen && (
            <div className="fullscreen-overlay" onClick={closeFullscreen}>
              <img
                src={currentImage}
                alt="Fullscreen"
                className="fullscreen-image"
              />
            </div>
          )}
          {project.videos?.map((video, index) => (
            <video src={video} controls key={index} className="project-video" />
          ))}
        </div>

        {project.openToBeSaved && (
          <button className="btn btn-success save-btn">Save Project</button>
        )}

        <div className="project-tools">
          <p>Tools Used:</p>
          <ul>
            {project.tools?.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="project-tags">
          <p>Tags:</p>
          <ul>
            {project.tags?.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ProjectDetails;
