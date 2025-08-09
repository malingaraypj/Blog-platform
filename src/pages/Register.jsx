import { useEffect, useState } from "react";
import SiteIcon from "../components/others/SiteIcon";
import Input from "../utils/Input";
import { useRegister } from "../Hooks/useRegister";
import { Link, useNavigate } from "react-router";

function Register() {
  const [password, setPassword] = useState({ value: "", isEdited: false });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isEdited: false,
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const navigate = useNavigate();

  const {
    backendErrors,
    setBackendErrors,
    setValidationErrors,
    validationErrors,
    registerSuccess,
    registerUser,
  } = useRegister();

  useEffect(() => {
    if (registerSuccess) {
      navigate("/login");
    }
  }, [registerSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    if (data.password !== data.confirmpassword) {
      setPasswordMatchError(true);
      return;
    }

    await registerUser(data);
    e.target.reset();
    setConfirmPassword({ isEdited: false, value: "" });
  };

  const handleOnFocus = (event) => {
    if (event.target.id === "confirmpassword") {
      setPasswordMatchError(false);
    }
    setBackendErrors(null);
    setValidationErrors({ name: "", password: "", dob: "" });
  };

  const handleOnBlur = () => {
    if (!password.isEdited || password.value === "") {
      setConfirmPassword((prev) => ({ ...prev, value: "" }));
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
    setConfirmPassword({ isEdited: true, value: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setPassword({ isEdited: true, value: event.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8">
      <div className="bg-gray-800 w-full max-w-3xl rounded-xl shadow-lg p-8 sm:p-12 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <SiteIcon />
        </div>

        {/* Backend errors */}
        {backendErrors && (
          <p className="text-red-500 font-semibold text-center">
            {backendErrors}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Create Your Account
          </h1>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              type="text"
              id="name"
              error={validationErrors.name}
              onFocus={handleOnFocus}
              placeholder="Enter user name"
            />
            <Input
              type="email"
              id="email"
              onFocus={handleOnFocus}
              placeholder="Enter email"
            />
          </div>

          {/* Password + Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              id="password"
              onChange={handlePasswordChange}
              type="password"
              error={validationErrors.password}
              placeholder="Enter password"
            />
            <Input
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              id="confirmpassword"
              value={confirmPassword.value}
              onChange={handleConfirmPasswordChange}
              error={passwordMatchError ? "Password doesn't match" : ""}
              type="password"
              placeholder="Confirm password"
            />
          </div>

          {/* DOB + Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="flex flex-col w-full sm:w-auto">
              <label
                htmlFor="dob"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Date of Birth
              </label>
              <Input
                type="date"
                id="dob"
                error={validationErrors.dob}
                className="w-full sm:w-56"
              />
            </div>

            <div className="flex gap-4 w-full sm:w-auto">
              <button
                type="submit"
                className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
              >
                Submit
              </button>
              <button
                type="reset"
                className="flex-1 sm:flex-none bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform duration-200"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link className="text-blue-400 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
