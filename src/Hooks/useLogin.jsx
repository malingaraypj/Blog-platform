import axios from "axios";
import { useState } from "react";

export const useLogin = () => {
  const [backendError, setbackendError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setloginSuccess] = useState(false);

  async function loginUser(data) {
    setIsSubmitting(true);
    const userData = {
      email: data.email,
      password: data.password,
    };
    const url = import.meta.env.VITE_BACKEND_URL;

    try {
      const response = await axios.post(`${url}/auth/login`, userData);

      const token = response.data.token;
      const userId = response.data.user._id;
      localStorage.setItem("token", token);
      localStorage.setItem("loggedUser", userId);

      setloginSuccess(true);
      console.log(token);
    } catch (error) {
      console.log(error.response.data.message);
      setbackendError(error.response.data.message);
    }
    setIsSubmitting(false);
  }

  return {
    loginUser,
    backendError,
    setbackendError,
    isSubmitting,
    loginSuccess,
  };
};
