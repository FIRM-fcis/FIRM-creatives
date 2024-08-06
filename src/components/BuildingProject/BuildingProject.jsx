import React from "react";
import "./BuildingProject.css";



const BuildingProject = ({ project , setProject}) => {
    const handleDeleteImage = (index) => {
      // Create a new array with the image at the specified index removed
      const updatedImages = project.images.filter((_, i) => i !== index);
    
      // Update the project state with the new images array
      setProject({ ...project, images: updatedImages });
    };
    const handleDeleteVideo = (index) => {
      // Create a new array with the image at the specified index removed
      const updatedImages = project.videos.filter((_, i) => i !== index);

      // Update the project state with the new images array
      setProject({ ...project, videos: updatedImages });
    };

    return (
      <>
        <div className="image-list">
          {project.images.map((image, index) => (
            <div key={index} className="image-container mb-3">
              <button
                className="delete-button"
                onClick={() => handleDeleteImage(index)}
              >
                &times;
              </button>
              <img
                src={image}
                alt={`Project Image ${index}`}
                className="image-item"
              />
            </div>
          ))}
          {project.videos.map((video, index) => (
            <div key={index} className="video-container mb-3">
              <button
                className="delete-button"
                onClick={() => handleDeleteVideo(index)}
              >
                &times;
              </button>
              <div className="video-wrapper">
                <video src={video} className="video-item" controls></video>
              </div>
            </div>
          ))}
        </div>
      </>
    );
};

export default BuildingProject;
