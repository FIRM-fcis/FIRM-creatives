import Swal from "sweetalert2";

export const handelFunctions = {
  handleImageUpload: (event, setProject, project) => {
    const file = event.target.files[0];
    if (!file) return;

    const newImagesArray = [
      ...(project.images || []),
      URL.createObjectURL(file),
    ];
    setProject((prevProject) => ({ ...prevProject, images: newImagesArray }));

    console.log("New Images Array: ", newImagesArray);
    console.log("Updated Project: ", project);
  },
  handleVideoUpload: (event, func, project) => {
    const file = event.target.files[0];
    const newVideoArray = [...project.videos, URL.createObjectURL(file)];
    func({ ...project, videos: newVideoArray });
    // Additional processing can be done here
  },
  handleTitleChange: (event, func, project) => {
    const title = event.target.value;
    func({ ...project, title: title });
    console.log("Title:", event.target.value);
  },
  handleDescriptionChange: (event, func, project) => {
    func(event.target.value);
    console.log("Description:", event.target.value);
  },
  handleToolsChange: (event, func, project) => {
    func(event.target.value);
    console.log("Tools:", event.target.value);
  },
  handleTagsChange: (event, func, project) => {
    func(event.target.value);
    console.log("Tags:", event.target.value);
  },
   handleImageChange : (event, setImage) => {
    const files = event.target.files;

    if (files && files.length > 0) {
        const file = files[0];

        if (file instanceof File) {
            const reader = new FileReader();

            reader.onload = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            console.error('Invalid file object');
        }
        } else {
            console.error('No file selected');
        }
    },
};

export const handleImageUpload = (event, setProject, project) => {
  const file = event.target.files[0];
  if (!file) return;

  const newImagesArray = [...(project.images || []), URL.createObjectURL(file)];
  setProject((prevProject) => ({ ...prevProject, images: newImagesArray }));
};

export const handleVideoUpload = (event, func, project) => {
  const file = event.target.files[0];
  const newVideoArray = [...project.videos, URL.createObjectURL(file)];
  func({ ...project, videos: newVideoArray });
  // Additional processing can be done here
};

export const handleTitleChange = async (func, project) => {
  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Title",
    inputPlaceholder: "Type your project title here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
  if (text) {
    func({ ...project, title: text });
  }
};

export const handleDescriptionChange = async (func, project) => {
  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Description",
    inputPlaceholder: "Type your project description here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
  if (text) {
    func({ ...project, description: text });
  }
};

export const handleToolsChange = async (func, project) => {
  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Tools",
    inputPlaceholder: "Type your project tools here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
  if (text) {
    const newToolsArray = [
      ...(project.tools || []),
      text,
    ];
    func((prevProject) => ({ ...prevProject, tools: newToolsArray }));
  }
};

export const handleTagsChange = async (func, project) => {
  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Tags",
    inputPlaceholder: "Type your project tags here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
  if (text) {
    const newTagsArray = [...(project.tags || []), text];
    func((prevProject) => ({ ...prevProject, tags: newTagsArray }));
  }
};
export const handleImageChange = (event, setImage) => {
    const files = event.target.files;

    if (files && files.length > 0) {
        const file = files[0];

        if (file instanceof File) {
            const reader = new FileReader();

            reader.onload = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            console.error('Invalid file object');
        }
    } else {
        console.error('No file selected');
    }
};