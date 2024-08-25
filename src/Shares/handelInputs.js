import Swal from "sweetalert2";

export const handelFunctions = {
  ImageUpload: (event, setProject, project) => {
    const file = event.target.files[0];
    if (!file) return;

    const newImagesArray = [
      ...(project.images || []),
      URL.createObjectURL(file),
    ];
    setProject((prevProject) => ({ ...prevProject, images: newImagesArray }));
  },

  VideoUpload: (event, func, project) => {
    const file = event.target.files[0];
    const newVideoArray = [...project.videos, URL.createObjectURL(file)];
    func({ ...project, videos: newVideoArray });
    // Additional processing can be done here
  },

  TitleChange: async (func, project) => {
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
  },

  DescriptionChange: async (func, project) => {
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
  },

  ToolsChange: async (func, project) => {
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
      const newToolsArray = [...(project.tools || []), text];
      func((prevProject) => ({ ...prevProject, tools: newToolsArray }));
    }
  },

  TagsChange: async (func, project) => {
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
  },
  handleImageChange: (event, setImage,info,setinfo,flag) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      if (file instanceof File) {
        const reader = new FileReader();

        reader.onload = () => {
          setImage(reader.result);
          if(flag===true){
            setinfo({...info,bannerPicture:reader.result})
          }
          else{
            setinfo({...info,profilePicture:reader.result})
          }
          
        };

        reader.readAsDataURL(file);
      } else {
        console.error("Invalid file object");
      }
    } else {
      console.error("No file selected");
    }
  }
};
