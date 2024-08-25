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
    if (true) {
      console.log(storedToken);

      const fetchData = async () => {
        try {
          const response = await axios.post(`${baseUrl}${endpoint}`, data, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          if (response.status === 200 || response.status === 201) {
            Swal.fire({
              title: "project created !",
              text: "Please check your email for verification",
              icon: "success",
              timer: 10000,
            });
          } else {
            throw new Error(
              response.statusText || "Network response was not ok"
            );
          }
        } catch (error) {
          console.error("Authentication error:", error);
          localStorage.removeItem("authToken");
        }
      };

      fetchData();
    }
  },
  getProjectById: async (endpoint, id, token) => {
    console.log(`${baseUrl}${endpoint}/${id}`);
    console.log(token);

    const res = await axios.get(`${baseUrl}${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.body;
  },
  patchData: async (endpoint, data, id, token) => {
    const res = await axios.patch(`${baseUrl}${endpoint}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.body;
  },
};

export default handelApi;
