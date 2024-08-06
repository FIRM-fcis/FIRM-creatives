export const handleImageUpload = (event, setProject, project) => {
  const file = event.target.files[0];
  if (!file) return;

  const newImagesArray = [...(project.images || []), URL.createObjectURL(file)];
  setProject((prevProject) => ({ ...prevProject, images: newImagesArray }));

  console.log("New Images Array: ", newImagesArray);
  console.log("Updated Project: ", project);
};

export const handleVideoUpload = (event, func, project) => {
  const file = event.target.files[0];
  const newVideoArray = [...project.videos, URL.createObjectURL(file)];
  func({ ...project, videos: newVideoArray });
  // Additional processing can be done here
};

export const handleTitleChange = (event, func, project) => {
  const title = event.target.value;
  func({ ...project, title: title });
  console.log("Title:", event.target.value);
};

export const handleDescriptionChange = (event, func, project) => {
  func(event.target.value);
  console.log("Description:", event.target.value);
};

export const handleToolsChange = (event, func, project) => {
  func(event.target.value);
  console.log("Tools:", event.target.value);
};

export const handleTagsChange = (event, func, project) => {
  func(event.target.value);
  console.log("Tags:", event.target.value);
};
