import React from "react";
import "./BuildingProject.css";
const BuildingProject = ({ project }) => {
  return (
    <>
      <div className="image-list">
        {project.images.map((image, index) => (
          <div key={index} className="image-container mb-3">
            <img
              src={image}
              alt={`Project Image ${index}`}
              className="image-item"
            />
          </div>
        ))}
        <div className="py-5"></div>

        {project.videos.map((video, index) => (
          <div key={index} className="image-container mb-3">
            <video src={video} className="image-item"></video>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuildingProject;
