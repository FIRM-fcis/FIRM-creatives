
export const handleImageUpload = (event, func) => {
  const file = event.target.files[0];
  func(URL.createObjectURL(file));
  console.log("Image:", file);
  // Additional processing can be done here
};

export const handleVideoUpload = (event, func) => {
  const file = event.target.files[0];
  func(URL.createObjectURL(file));
  console.log("Video:", file);
  // Additional processing can be done here
};

export const handleTitleChange = (event, func) => {
  func(event.target.value);
  console.log("Title:", event.target.value);
};

export const handleDescriptionChange = (event, func) => {
  func(event.target.value);
  console.log("Description:", event.target.value);
};

export const handleToolsChange = (event, func) => {
  func(event.target.value);
  console.log("Tools:", event.target.value);
};

export const handleTagsChange = (event, func) => {
  func(event.target.value);
  console.log("Tags:", event.target.value);
};
