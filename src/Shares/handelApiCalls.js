import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AppContext } from "../Providers/AppProvider";

const baseUrl = "http://localhost:3000/api/v1/";

const handelApi = {
  getData: async (endpoint, parameters = "") => {
    const res = await fetch(`${baseUrl}${endpoint}${parameters}`);
    const data = await res.json();
    console.log(data);

    return data.body ? data.body : data.message;
  },
  postData: async (endpoint, data, storedToken) => {
    try {
      const response = await axios.post(`${baseUrl}${endpoint}`, data, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      
      if (response.status === 200 || response.status === 201) {
        if (endpoint.includes("add"))
          Swal.fire({
        title: "project created !",
        icon: "success",
        timer: 10000,
      });
      return response.data.body;
    } else {
      throw new Error(response.data.message || "Network response was not ok");
    }
  } catch (error) {
    
    // console.info(error);
    //   console.error("Authentication error:", error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 10000,
      });
      return null;
    }
    
  },
  getProjectById: async (endpoint, id, token) => {
    console.log(`${baseUrl}${endpoint}/${id}`);
    console.log(token);
    //  const res = await axios({
    //    url: `${baseUrl}${endpoint}/${id}`,
    //    method: "get",
    //    responseType: "blob",
    //    headers: {
    //      Authorization: `Bearer ${token}`,
    //    },
    //  });
    const res = await axios.get(`${baseUrl}${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.body;
  },
  patchData: async (endpoint, data, id, token, navigate) => {
    try {
      const response = await axios.patch(`${baseUrl}${endpoint}/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "project updated!",
          icon: "success",
          timer: 10000,
        });
        navigate("/home");

        return response.data.body;
      } else {
        throw new Error(response.statusText || "Network response was not ok");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  },
  getUserByID: async (endpoint, id, token) => {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      return response.data.body[0];
    } catch (error) {
      console.error("Authentication error:", error);
      // localStorage.removeItem('authToken');
      // localStorage.removeItem('userId');
    }
  },
  deleteProject: async (endpoint, id, token, navigate) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            const response = await axios.delete(`${baseUrl}${endpoint}/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            if (response) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/home");
            } else {
              swalWithBootstrapButtons.fire({
                title: "Can't deleted!",
                icon: "info",
              });
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    } catch (error) {
      console.error("Authentication error:", error);
      // localStorage.removeItem('authToken');
      // localStorage.removeItem('userId');
    }
  },
};

export default handelApi;
