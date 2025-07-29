import { useState } from "react";
import SiteIcon from "../components/others/SiteIcon";
import Input from "../utils/Input";
import axios from "axios";

function Register() {
  const [password, setPassword] = useState({
    value: "",
    isEdited: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isEdited: false,
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [backendErrors, setBackendErrors] = useState(null);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    password: "",
    dob: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    if (data.password !== data.confirmpassword) {
      setPasswordMatchError(true);
      return;
    }

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

      console.log(response);
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

    e.target.reset();

    setConfirmPassword(() => ({
      isEdited: false,
      value: "",
    }));
  };

  const handleOnFocus = (event) => {
    if (event.target.id === "confirmpassword") {
      setPasswordMatchError(false);
    }
    setBackendErrors(null);
  };

  const handleOnBlur = () => {
    if (!password.isEdited || password.value === "") {
      setConfirmPassword((prev) => ({
        ...prev,
        value: "",
      }));
      return;
    }
    if (
      password.isEdited &&
      confirmPassword.isEdited &&
      password.value !== confirmPassword.value
    ) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(() => ({
      isEdited: true,
      value: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    setPassword(() => ({
      isEdited: true,
      value: event.target.value,
    }));
  };

  return (
    <div className="w-svw h-svh bg-gray-800 py-20">
      <div className="bg-black w-[60%]  mx-auto p-10 rounded-lg shadow-gray-800 shadow-2xl">
        <SiteIcon />
        {backendErrors && (
          <p className="text-red-800 font-bold text-center m-3">
            {backendErrors}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="font-bold text-3xl">Create Your Account</h1>
            <div className="flex flex-col gap-5 my-10">
              <div className="flex justify-between items-center">
                <Input
                  type="text"
                  id="name"
                  error={validationErrors.name && validationErrors.name}
                  onFocus={handleOnFocus}
                  placeholder="Enter user name"
                  className="w-[45%]"
                />

                <Input
                  type="email"
                  id="email"
                  onFocus={handleOnFocus}
                  placeholder="Enter email"
                  className="w-[45%]"
                />
              </div>
              <div className="flex justify-between items-center">
                <Input
                  onBlur={handleOnBlur}
                  onFocus={handleOnFocus}
                  id="password"
                  onChange={handlePasswordChange}
                  type="password"
                  error={validationErrors.password}
                  placeholder="Enter password"
                  className="w-[45%]"
                />
                <Input
                  onBlur={handleOnBlur}
                  onFocus={handleOnFocus}
                  id="confirmpassword"
                  value={confirmPassword.value}
                  onChange={handleConfirmPasswordChange}
                  error={passwordMatchError ? "password doesn't match" : ""}
                  type="password"
                  placeholder="Enter confirm password"
                  className="w-[45%]"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <label htmlFor="dob" className="text-lg font-bold">
                    DOB
                  </label>
                  <Input type="date" id="dob" error={validationErrors.dob} />
                </div>
                <div className="flex gap-5">
                  <button className="bg-blue-800 px-5 py-3 rounded-lg hover:bg-blue-900 hover:scale-110 hover:cursor-pointer">
                    submit
                  </button>
                  <button
                    type="reset"
                    className="bg-blue-800 px-5 py-3 rounded-lg hover:bg-blue-900 hover:scale-110 hover:cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
