import axios from "axios";
import { useState } from "react";

export const usePostData = (url) => {
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  const base_url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const postData = async () => {
    setloading(true);
    seterror(null);
    try {
      const response = await axios.post(`${base_url}/${url}`, {
        headers: {
          authentication: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    loading,
    error,
    postData,
  };
};
