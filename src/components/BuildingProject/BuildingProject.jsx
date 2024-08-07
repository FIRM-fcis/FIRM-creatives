import React from "react";
import "./BuildingProject.css";

const BuildingProject = ({ project, setProject }) => {
  const handleDeleteImage = (index) => {
    const updatedImages = project.images.filter((_, i) => i !== index);

    setProject({ ...project, images: updatedImages });
  };
  const handleDeleteVideo = (index) => {
    const updatedImages = project.videos.filter((_, i) => i !== index);

    setProject({ ...project, videos: updatedImages });
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex-center pb-4">
          <div className="col-12 col-md-4">
            <h1 className="display-1">{project.title}</h1>
          </div>
          <div className="col-12 col-md-8 text-start px-1">
            <h1 className="fs-6 text-container">{project.description}</h1>
          </div>
        </div>
      </div>
      <div className=" pb-4 d-flex align-items-center justify-content-center px-5 gap-5">
        {project.tools.length ? (
          <div className="p-3">
            <h2 className="fs-3">Tools:</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              {project.tools.map((t, i) => {
                return (
                  <div key={i}>
                    {i + 1} - {t}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
        {project.tags.length ? (
          <div className="p-3">
            <h2 className="fs-3">Tags:</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              {project.tags.map((t, i) => {
                return (
                  <div key={i}>
                    {i + 1} - {t}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

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
