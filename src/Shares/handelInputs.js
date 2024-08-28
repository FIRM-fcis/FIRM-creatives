import Swal from "sweetalert2";
import handelApi from "./handelApiCalls";
import { useContext } from "react";
import { AppContext } from "../Providers/AppProvider";

const uploadFile = async (event, token, setLoading) => {
  setLoading(true);
  const file = event.target.files[0];
  if (!file) {
    setLoading(false);
    return;
  }

  const formData = new FormData();
  formData.append("file", file); // "file" is the key the server will use to access the file

  const data = await handelApi.postData("files/upload", formData, token);
  setLoading(false);
  return data ? data.url : null;
};
export const handelFunctions = {
  ImageUpload: async (event, setProject, project, token, setLoading) => {
    const url = await uploadFile(event, token, setLoading);
    if (url) {
      const newImagesArray = [...(project.images || []), url];
      setProject((prevProject) => ({ ...prevProject, images: newImagesArray }));
    }
  },

  VideoUpload: async (event, func, project, token, setLoading) => {
    const url = await uploadFile(event, token, setLoading);
    if (url) {
      const newVideoArray = [...(project.videos || []), url];
      func({ ...project, videos: newVideoArray });
    }
    // Additional processing can be done here
  },

  TitleChange: async (setProject, project, handleSave, navigate) => {
    const { value: text, isDismissed } = await Swal.fire({
      input: "textarea",
      inputLabel: "Project Title",
      inputPlaceholder: "Type your project title here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    if (isDismissed) {
      navigate("/home");
    } else if (text) {
      const tmpProject = { ...project, title: text };
      await setProject(tmpProject);
      handleSave(tmpProject);
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
  handleImageChange: async (
    event,
    setImage,
    info,
    setinfo,
    flag,
    token,
    setLoading
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      if (!file) return;

      const url = await uploadFile(event, token, setLoading);

      // Now you can use the returned `url`
      if (file instanceof File) {
        const reader = new FileReader();

        reader.onload = () => {
          if (url) setImage(url);
          if (flag === true) {
            setinfo({ ...info, bannerPicture: reader.result });
          } else {
            setinfo({ ...info, profilePicture: reader.result });
          }
        };

        reader.readAsDataURL(file);
      } else {
        console.error("Invalid file object");
      }
    } else {
      console.error("No file selected");
    }
  },
};
