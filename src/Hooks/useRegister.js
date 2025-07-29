import { useState } from "react";
import axios from "axios";

export const useRegister = () => {
  const [backendErrors, setBackendErrors] = useState(null);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    password: "",
    dob: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const registerUser = async (data) => {
    setIsSubmitting(true);

    try {
      const userData = {
        username: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmpassword,
        DOB: data.dob,
      };

      const url = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${url}/auth/register`, userData);

      if (response.status === 201) {
        console.log("created");
        setRegisterSuccess(true);
      }
    } catch (error) {
      console.log(error);

      if (error.response.data?.validationError) {
        setValidationErrors({
          name: error.response.data?.errors?.username,
          password: error.response.data?.errors?.password,
          dob: error.response.data?.errors?.DOB,
        });
        return;
      }
      if (error.response.data?.message) {
        setBackendErrors(error.response.data?.message);
      }
    }
    setIsSubmitting(false);
  };

  return {
    backendErrors,
    validationErrors,
    isSubmitting,
    registerSuccess,
    setBackendErrors,
    setValidationErrors,
    registerUser,
  };
};
